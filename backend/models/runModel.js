const mongoose = require("mongoose");

const runSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    distance: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true,
    },
    hours: {
        type: Number,
        required: true
    },
    minutes:{
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Runs', runSchema);
