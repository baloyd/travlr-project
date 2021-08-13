const { gql } = require('apollo-server-express');

const typeDefs = gql `

    type User {
        _id: ID!
        username: String
        email: String
        comments: [Comments]
    }

    type Comments {
        _id: ID!
        description: String!
        user: User
    }

    type Auth {
        token: ID!
        user: User
    }

    type Mutation {
        login(email: String! password: String!): Auth
        addUser(username: String! email: String! password: String!): Auth
        addRec(nameOfRec:String! nameOfActivity:String! location:String! comment: String!)
    }
`;

module.exports = typeDefs;