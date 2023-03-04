const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
const rateLimit = require('express-rate-limit')
const cookieParser = require('cookie-parser')
const apiRoutes = require('./routes/index');
const connectDB = require('./config/db');
dotenv.config();
const app = express()
const limiter = rateLimit({
        windowMs: 2 * 60 * 1000,
        max: 5,
    })
    //*

// snehomoy.maitra2019 @uem.edu.in
// Uem @2023


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(limiter);

connectDB();

app.use('/api', apiRoutes);
app.get('/', (req, res) => {
    res.send('Fuck me!')
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server Running Successfully on ${PORT}`));