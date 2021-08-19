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

    # type Cata {
    #     _id: ID!
    #     cataName: String!
    # }

    # type City {
    #     _id: ID!
    #     cityName: String!
    #     regionId: ID!
    #     stateId: ID!
    # }

    type Location {
        _id: ID!
        location_name: String!
        location_address: String!
        favorites: Int!
        city_name: String!
        cata: String!
        # tags: [String]!
    }

    type Post {
        post_body: String!
        author: String!
        favorites: Int
    }

    # type Region {
    #     regionName: String!
    #     regionStates: [ID]
    # }

    # type State {
    #     stateName: String!
    #     regionId: ID!
    #     stateCities: [ID]
    # }

    type User {
        _id: ID!
        username: String!
        email: String!
        post: [ID]
    }   

    type Mutation {
        login(email: String! password: String!): Auth
        addUser(username: String! email: String! password: String!): Auth
        addLocation(location_name: String!, location_address: String!): Location
        addPost(post_body: String!): Post

    }
`;

module.exports = typeDefs;