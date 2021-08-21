import { gql } from '@apollo/client';

export const QUERY_POST = gql`
  query post {
    post {
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




