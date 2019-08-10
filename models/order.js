const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    name: {
        type: String,
        riquired: true
    },
    // address: {
    //     city: String,
    //     country: String,
    //     street: String,
    //     street: String,
    //     house: Number,
    //     riquired: true
    // },
    // createdAt: {
    //     type: String,
    //     reqired: true,
    //     default: Date.now
    // },
    // description: {
    //     type: String
    // },
    // status: {
    //     type: String
    //     riquired: true
    // },
    // list: [
    //     {type: Schema.Types.ObjectId,
    //      amount: Number}
    // ],
    totalCost: {
    type: Number,
    riquired: true
    }
});

module.exports = mongoose.model('Order', orderSchema);