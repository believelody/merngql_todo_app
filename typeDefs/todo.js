const { gql } = require('apollo-server-express');

module.exports = gql`
  type Todo {
    id: ID!
    text: String!
    complete: Boolean!
  }

  type Query {
    todos: String
    getAllTodos: [Todo!]!
    getTodo(id: ID!): Todo!
  }

  type Mutation {
    addTodo(text: String!): Todo!
    removeTodo(id: ID!): Todo
    completeTodo(id: ID!, complete: Boolean!): Todo!
  }
`;
