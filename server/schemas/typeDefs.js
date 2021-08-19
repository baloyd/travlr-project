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
<<<<<<< HEAD
        addLocation(location_name: String!, location_address: String!): Location
        addPost(post_body: String!): Post

=======
        addLocation: Location
        addPost: Post
>>>>>>> 7f9d415d371f57615c7a374058643088a2371ae4
    }
`;

module.exports = typeDefs;