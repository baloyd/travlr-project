import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

// export const ADD_POST = gql `
//   mutation addPost($postData: postInput!) {
//     addPost(postData: $postInput) {
//       _id
//       name
//       street
//       city
//       state
//       zip
//       category
//       post_body
//     }
//   }
// `;

export const ADD_POST = gql `
  mutation addPost($_id: ID! $name: String!,$street:String!,$city:String!,$state:String!,$zip:String!, $category:String!, $post_body:String!) {
    addPost(_id:$_id name:$name, street:$street, city:$city, state:$state, zip:$zip,category:$category,post_body:$post_body) {
      _id
      name
      street
      city
      state
      zip
      category
      post_body
    }
  }
`;