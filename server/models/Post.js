const { Schema, model } = require('mongoose');

const postSchema = new Schema({
    name: {
        type: String,
        // required: true,
        require: 'You need to write the name of the recommended place',
        unique: true
    },
    street: {
        type: String
    },
    city: {
        type: String,
        // required: true
        require: 'Please write the city'
    },
    state: {
        type: String,
        // required: true
        required: 'Please write the state'
    },
    zip: {
        type: Number
    },
    category: {
        type: String,
        // required: true
        required: 'You need to choose a category'
    },
    post_body: {
        type: String,
        // required: true
        required: 'You must write a comment about your recommended place',
        // minlength: 1
    },
    author: { 
        type: String, 
        required: true,
        trim: true
    },
    favorites:
        { type: Number }
})

const Post = model('Post', postSchema);

module.exports = Post;