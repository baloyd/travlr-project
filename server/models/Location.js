const { ObjectId } = require('mongodb')
const { Schema, model } = require('mongoose');

const locationSchema = new Schema({
    location_name: {
        type: String,
        required: true,
        unique: true
    },

    location_Address: {
        street: String,
        city: String,
        state: String,
        zip: Number,
    },
    favorites:
        { type: Number },
    cityId:
        { type: ObjectId, required: true },
    cataId:
        { type: ObjectId, required: true }
})

const Location = model('Location', locationSchema);

module.exports = Location;