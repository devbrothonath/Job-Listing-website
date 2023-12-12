const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name : {
        type: String,
        required: [true, "Please enter your name"],
        lowercase: true
    },
    email: {
        type: String,
        required: [true, "Please enter your email"],
        unique: true,
        lowercase: true
    },
    mobile: {
        type: Number,
        required: [true, "Please enter your mobile"],
        lowercase: true
    },
    password: {
        type: String,
        required: [true, "Please enter a password"]
    }
});

const User = mongoose.model("user", userSchema);

module.exports = User;