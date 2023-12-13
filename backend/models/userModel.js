const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator"); 

const userSchema = new mongoose.Schema({
    name: {
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

// static register method
userSchema.statics.register = async function(name, email, mobile, password) {

    // validation
    if (!name || !email || !mobile || !password) {
        throw Error("All fields must be filled")
    }
    if (!validator.isAlpha(name)) {
        throw Error("Name should only contain letters")
    }
    if (!validator.isEmail(email)) {
        throw Error("Email is not valid")
    }
    if (!validator.isMobilePhone(mobile, 'any')) {
        throw Error("Mobile No. is not valid")
    }
    if (!validator.isStrongPassword(password)) {
        throw Error("Password not strong enough")
    }

    const exists = await this.findOne({ email })

    if (exists) {
        throw Error("Email already exists")
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await this.create({ name, email, mobile, password: hash })

    return user
}

// static login method
userSchema.statics.login = async function(email, password) {
    if (!email || !password) {
        throw Error("All fields must be filled")
    }

    const user = await this.findOne({ email })

    if (!user) {
        throw Error("Incorrect email")
    }

    const match = await bcrypt.compare(password, user.password)

    if (!match) {
        throw Error("Incorrect password")
    }

    return user
}

const User = mongoose.model("user", userSchema);

module.exports = User;