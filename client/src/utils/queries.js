import { gql } from '@apollo/client';


export const QUERY_USER = gql`
  {
    user {
      _id
      username
      email
      bookCount
      books{
        _id
        authors
        description
        image
        link
        title
        bookId
     }  
    }
  }
`;