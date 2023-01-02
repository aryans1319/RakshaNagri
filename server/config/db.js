const { default: mongoose } = require('mongoose');

const connectDB = async() => {
    try {
        mongoose.set('strictQuery', true);
        // console.log(process.env.PORT);
        const conn = await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit();
    }
}

module.exports = connectDB;