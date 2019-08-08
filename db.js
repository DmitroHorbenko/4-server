const mongoose = require('mongoose');
const connect = mongoose.connect('mongodb://localhost:27017/testNode');
mongoose.set('debug', true);



module.exports = mongoose
