const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Auth {
        token: ID!
        user: User
    }

     
    type Post {
        _id: ID!
        name: String!
        street: String
        city: String!
        state: String!
        zip: Int
        category: String!
        post_body: String!
        author: User
        # favorites: Int
    }

    type User {
        _id: ID!
        username: String!
        email: String!
        post: [ID]
    }   

    type Query {
        post: [Post]
        user: [User]
        postByCat(category: String!): [Post]
        postByAuthor: [Post]
    }

    type Mutation {
        login(email: String! password: String!): Auth
        addUser(username: String! email: String! password: String!): Auth
        addPost(
            name:String!
            street:String!
            city:String! 
            state:String! 
            zip:String! 
            category:String! 
            post_body:String!) : Post
    }
`;

module.exports = typeDefs;