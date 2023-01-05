const mongoose = require("mongoose");

const userSchema = mongoose.Schema({

    username : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true
    },
    password : {
        type: String,
        required: true
    },
    confirmPassword : {
        type: String,
        required: true
    },
    userID : {
        type : String,
        required: true,
        unique: true,
    },
    refreshToken: {
        type : [String],
    },
})

const User = mongoose.model("User", userSchema);
module.exports = User;