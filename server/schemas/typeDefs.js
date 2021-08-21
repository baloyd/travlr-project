const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Auth {
        token: ID!
        user: User
    }

    # type Location {
    #     _id: ID!
    #     location_name: String!
    #     location_address: String!
    #     favorites: Int!
    #     city_name: String!
    #     cata: String!
    # }

    #  
    type Post {
        # _id: ID!
        name: String!
        street: String
        city: String!
        state: String!
        zip: Int
        category: String!
        post_body: String!
        # should we place this in it's own typedef for posted recommendations?
        # author: String!
        # favorites: Int
    }
    # input type that helps us reduce the amount of parameters we have to type in the mutation
    input postInput {
        name: String!
        street: String
        city: String!
        state: String!
        zip: Int
        category: String!
        # post_body: String!
    }
    type User {
        _id: ID!
        username: String!
        email: String!
        post: [ID]
    }   

    type Query {
        # location: [Location]
        post: [Post]
        user: [User]
    }

    type Mutation {
        login(email: String! password: String!): Auth
        addUser(username: String! email: String! password: String!): Auth
        # addLocation: Location
        # addPost(postData: postInput!): Post
        addPost(name:String! street:String! city:String! state:String! zip:String!, category:String!, post_body:String!): Post
    }
`;

module.exports = typeDefs;