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

export const ADD_REC = gql`
  mutation addRec($nameOfRec:String!, $nameOfActivity:String!, $location:String!, $comment: String!){
    addRec(nameOfRec: $nameOfRec, nameOfActivity:$nameOfActivity, location:$location,comment:$comment) {
      recommendation {
        nameOfRec
        nameOfActivity
        location
        comment
      }
    }
  }
`;

