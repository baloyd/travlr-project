const { Schema, model } = require('mongoose');

const cataSchema = new Schema({
    cataName: {
        type: String,
        required: true,
        unique: true
    }
})

const Cata = model('Cata', cataSchema);

module.exports = Cata;