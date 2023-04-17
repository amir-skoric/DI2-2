const mongoose = require('mongoose');

//users Schema
const schema = new mongoose.Schema( {
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("APIUser", schema, 'apiuser');