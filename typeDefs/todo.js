const { gql } = require('apollo-server-express');

module.exports = gql`
  type Todo {
    id: ID!
    text: String!
    complete: Boolean!
    createdAt: String!
  }

  type Query {
    todos: String
    getAllTodos: [Todo!]!    
  }

  type Mutation {
    addTodo(text: String!): Todo!
  }
`;
