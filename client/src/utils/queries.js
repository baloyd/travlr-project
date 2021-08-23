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

export const QUERY_BY_CAT = gql`
    query postByCat($category:String!) {
        post(category:$category){
            name
            street
            city
            state
            zip
            post_body
        }
    }

`


