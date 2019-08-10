const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({

    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String
    },
    age: {
        type: Number,
        required: true,
        min: 14,
        max:100
    },

    phone: {
        type: Number,
        reqired: true
    },
    bonus: {
        type: Number
    }
});

module.exports = mongoose.model('User', userSchema);