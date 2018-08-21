import gql from 'graphql-tag';

//  Don't forget to use query when fetching data with variables

export const getAllTodos = `
  query {
    getAllTodos {
      id
      text
      complete
    }
  }
`;

export const getTodo = `
  query ($id: ID!) {
    getTodos(id: $id) {
      id
      text
      complete
    }
  }
`;

export const addTodo = gql`
  mutation ($text: String!) {
    addTodo(text: $text) {
      id
      text
      complete
    }
  }
`;

export const removeTodo = gql`
  mutation ($id: ID!) {
    removeTodo(id: $id) {
      id
    }
  }
`;

export const completeTodo = gql`
  mutation($id: ID!, $complete: Boolean!) {
    completeTodo(id: $id, complete: $complete) {
      id
      text
      complete
    }
  }
`;
