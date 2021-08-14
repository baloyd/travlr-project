const { ObjectId } = require('mongodb')
const { Schema, model } = require('mongoose');

const postSchema = new Schema({
    post_title: {
        type: String,
        required: true,
        unique: true
    },
    post_body: {
        type: String,
        required: true,
        unique: true
    },
    authorId:
        { type: ObjectId, required: true },
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

const Post = model('Post', postSchema);

module.exports = Post;