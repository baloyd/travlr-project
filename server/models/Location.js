const { ObjectId } = require('mongodb')
const { Schema, model } = require('mongoose');

const locationSchema = new Schema({
    location_name: {
        type: String,
        required: true,
        unique: true
    },

    location_address: {
        street: String,
        city: String,
        state: String,
        zip: Number,
    },
    favorites:
        { type: Number },
    city_name:
        { type: String, required: true },
    cata:
        [{ type: String, required: true }]
})

const Location = model('Location', locationSchema);

module.exports = Location;