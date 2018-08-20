//const Todo = require('../models/Todo');

module.exports = {
  Query: {
    todos: () => "todos",
    getAllTodos: (parent, args, { models }) => models.Todo.find()
  },

  Mutation: {
    addTodo: (parent, { text }, { models }) => {
      let todo = new models.Todo({ text });

      return todo.save();
    }
  }
}
