const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    name: String,
    createdAt: {
        type: String,
        reqired: true,
        default: Date.now
    }
});

module.exports = mongoose.model('Category', categorySchema);