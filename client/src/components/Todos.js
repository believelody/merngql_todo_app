import React, { Component } from 'react';
import TodoItem from './TodoItem';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
//import { AddIcon } from '@material-ui/icons';

const Todos = ({todos}) => {
  return (
    <List>
    {
      todos.map(todo =>
        <TodoItem key={todo.id} todo={todo} />
      )
    }
    </List>
  )
}

export default Todos;
