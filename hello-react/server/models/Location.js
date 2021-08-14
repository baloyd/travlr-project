const { ObjectId } = require('mongodb')
const { Schema, model } = require('mongoose');

const locationSchema = new Schema({
    location_name: {
        type: String,
        required: true,
        unique: true
    },
    // is this correct or will they all need to be an object?
    location_Address: {
        street: String,
        city: String,
        state: String,
        zip: Number,
    },
    favorites:
        { type: Number, required: true },
    cityId:
        { type: ObjectId, required: true },
    cataId:
        { type: ObjectId, required: true },
    tags: [
        { type: String, required: true },
    ]
})

const Location = model('Location', locationSchema);

module.exports = Location;