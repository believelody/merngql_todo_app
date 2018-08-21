//const Todo = require('../models/Todo');

module.exports = {
  Query: {
    todos: () => "todos",
    getAllTodos: (parent, args, { models }) => models.Todo.find().sort({ createdAt: -1 }),
    getTodo: (parent, { id }, { models }) => models.Todo.findById(id)
  },

  Mutation: {
    addTodo: (parent, { text }, { models }) => {
      let todo = new models.Todo({ text });

      return todo.save();
    },
    removeTodo: (parent, { id }, { models }) => models.Todo.findByIdAndRemove(id),
    completeTodo: (parent, { id, complete }, { models }) => models.Todo.findByIdAndUpdate(id, {complete}, { new: true }).then(todo => todo)
  }
}
