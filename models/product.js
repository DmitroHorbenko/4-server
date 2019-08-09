const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String,
        riquired: true
    },
    category: {
        type: Schema.Types.ObjectId,
        riquired: true
    },
    description: {
        type: String
    },
    cost: {
        type: Number,
        riquired: true
    }
});

module.exports = mongoose.model('Product', productSchema);