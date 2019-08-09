const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {
        type: String,
        riquired: true
    },
    lastName: {
        type: String,
        riquired: true
    },
    address: {
        city: String,
        country: String,
        street: String,
        house: Number,
        riquired: true
    },
    phone: {
        type: Number,
        reqired: true
    },
    age: {
        type: Number,
        reqired: true
    },
    bonus: {
        type: Number
    }
});

module.exports = mongoose.model('User', userSchema);