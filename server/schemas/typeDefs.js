const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type Query {
        location: [Location]
        post: [Post]
        user: [User]
    }

    type Auth {
        token: ID!
        user: User
    }

    type Location {
        _id: ID!
        location_name: String!
        location_address: String!
        favorites: Int!
        city_name: String!
        cata: String!
    }

    type Post {
        post_body: String!
        author: String!
        favorites: Int
    }

    type User {
        _id: ID!
        username: String!
        email: String!
        post: [ID]
    }   

    type Mutation {
        login(email: String! password: String!): Auth
        addUser(username: String! email: String! password: String!): Auth
        addLocation: Location
        addPost: Post
    }
`;

module.exports = typeDefs;