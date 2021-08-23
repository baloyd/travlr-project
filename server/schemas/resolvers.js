const { AuthenticationError } = require('apollo-server-express');
const { Post, User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        post: async () => {
            return Post.find({});
        },

        postByCat: async (_,{ category }) => {
            console.log(category);
            return Post.find(post=>post.category=category);
        }
    },

    Mutation: {
        //creating a user that requires some parameters, signs a token and sends it back to the client
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);

            return { token, user };
        },

        addPost: async (parent, { name, street, city, state, zip, category, post_body }) => {
            const post = await Post.create({ name, street, city, state, zip, category, post_body });
            console.log(post)
            return post;
        },

        //create the login
        login: async (parent, { email, password }) => {
            //create a user variable that looks for an email
            const user = await User.findOne({ email });
            //if no user with that email is found throw the user an error message
            if (!user) {
                throw new AuthenticationError('No user with this email and password was found! Try again!');
            }
            //create a variable that will store the password and run the isCorrectPassword method
            const correctPw = await user.isCorrectPassword(password);
            //if there the pw did not match throw the user an error message
            if (!correctPw) {
                throw new AuthenticationError('No user with this email and password was found! Try again!')
            }
            // create a variable that will store the token and hand it off to the server if we found a user
            const token = signToken(user);
            //return the token with the found user
            return { token, user };
        },
    }
};

module.exports = resolvers;