const { ObjectId } = require('mongodb')
const { Schema, model } = require('mongoose');

const postSchema = new Schema({
    post_body: {
        type: String,
        required: true,
        unique: true
    },
    author:
        { type: String, required: true },
    favorites:
        { type: Number }
})

const Post = model('Post', postSchema);

module.exports = Post;