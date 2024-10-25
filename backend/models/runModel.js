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
        required: true
    },
    time: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                return /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/.test(v);
            },
            message: props => `${props.value} is not a valid time format!`
        }
    }
});

module.exports = mongoose.model('Runs', runSchema);
