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

export const ADD_BOOK = gql`
  mutation addBook($book: ID!) {
    addBook(bookId: $bookId) {
      _id
      username
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

export const DELETE_BOOK = gql`
  mutation deleteBook($id: ID!) {
    deleteBook(bookId: $_id) {
        _id
        username
        bookCount
        books{
           _id
           authors
           description
           title
           image
           link
           bookId
        }  
      }
    }
`;

