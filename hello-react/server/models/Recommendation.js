const { Schema, model} = require('mongoose');

const recommendationSchema = new Schema(
    {
        nameOfRec: {
            type: String,
            required: true,
        },
        nameOfActivity: {
            type: String,
            required: true,
        },
        location: {
            type: String,
            required: true,
        },
        comment: {
            type: String,
            required: true,
        }
        
    }
);

const Recommendation = model('Recommendation', recommendationSchema);
  
  module.exports = Recommendation;