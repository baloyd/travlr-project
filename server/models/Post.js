const { ObjectId } = require('mongodb');
const { Schema, model } = require('mongoose');

const postSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    street: {
        type: String
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    zip: {
        type: Number
    },
    category: {
        type: String,
        required: true
    },
    post_body: {
        type: String,
        required: true
    },
    author:
        { type: String, required: true },
    favorites:
        { type: Number }
})

const Post = model('Post', postSchema);

module.exports = Post;