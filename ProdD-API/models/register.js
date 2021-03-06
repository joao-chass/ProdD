const mongoose = require('mongoose')

const registerSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        lowercase: true,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    birthDate: {
        type: String,
        required: true
    },
    intoInCompany: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    manager: {
        type: Boolean,
        required: true
    },
    registerDate: {
        type: Date,
        required: true,
        default: Date.now
    },
    passwwod: {
        type: String,
        required: true,
        default: Math.floor(Math.random() * 1000)
    }
})

module.exports = mongoose.model('Register', registerSchema)