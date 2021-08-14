const { ObjectId } = require('mongodb')
const { Schema, model } = require('mongoose');

const stateSchema = new Schema({
    stateName: {
        type: String,
        required: true,
        unique: true
    },
    regionId:
        { type: ObjectId, required: true },
    stateCities: [
        { type: ObjectId, required: true },
    ]
})

const State = model('State', stateSchema);

module.exports = State;