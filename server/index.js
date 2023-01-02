import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
dotenv.config()

export const app = express()

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser : true,
    useUnifiedTopology : true
})
.then(() => {
        console.log(`Connected to MongoDB`);
})
.catch((error) => {
    console.log(error);
})
app.get('/', (req, res) => {
    res.send('Working Fine Bro!')
})
app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
})
