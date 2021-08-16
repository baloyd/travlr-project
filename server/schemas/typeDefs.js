const { gql } = require('apollo-server-express');

const typeDefs = gql `

    type Auth {
        token: ID!
        user: User
    }

    type Cata {
        cataName: String!
    }

    type City {
        _id: ID!
        cityName: String!
        regionId: [Region]!
        stateId: [State]!
        # cityCats: 
    }

    type Location {
        _id: ID!
        location_name: String!
        location_Address: String!
        favorites: Int!
        cityId: [City]!
        cataId: [Category]!
        tags: String!
    }

    type Post {
        post_title: String!
        post_body: String!
        authorId: [User]!
        favorites: Int!
        cityId: [City]!
        cataId: [Cata]!
        tags: String!
    }

    type Region {
        regionName: String!
        # regionStates:
    }

    type State {
        stateName: String!
        regionId: [Region]!
        # stateCities:
    }

    type User {
        _id: ID!
        username: String!
        email: String!
        post: [Post]
    }   

    type Mutation {
        login(email: String! password: String!): Auth
        addUser(username: String! email: String! password: String!): Auth
        location: Location
    }
`;

module.exports = typeDefs;