import { gql } from '@apollo/client';

export const QUERY_POST = gql`
  query post($_id: String) {
    post(_id: $_id) {
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




