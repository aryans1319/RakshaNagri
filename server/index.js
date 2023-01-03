const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const apiRoutes = require('./routes/index');
const connectDB = require('./Config/db');
dotenv.config();
const app = express()

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


connectDB();

app.use('/api', apiRoutes);
app.get('/', (req, res) => {
    res.send('Working Fine Bro!')
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server Running Successfully on ${PORT}`));