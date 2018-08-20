//  Don't forget to use query when fetching data with variables

export const getAllTodos = `
  getAllTodos {
    id
    text
    complete
  }
`;

export const addTodo = `
  mutation ($text: String!) {
    addTodo(text: $text) {
      id
      text
      complete
    }
  }
`;
