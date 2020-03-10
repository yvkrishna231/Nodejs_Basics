const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { required: true, type: String },
    age: { required: true, type: String },
    date: { default: new Date, type: Date }
})

module.exports = mongoose.model('user', userSchema);