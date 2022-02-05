const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    books: [Book]
  }

  type Book {
    _id: ID
    authors: String
    description: String
    image: String
    link: String
    title: String
    bookId: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addBook(book: ID!): User
    deleteBook(book: ID!): User
  }
`;

module.exports = typeDefs;