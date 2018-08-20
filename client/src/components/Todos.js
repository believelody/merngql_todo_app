import React, { Component } from 'react';
import TodoItem from './TodoItem';
//import { List, Button, AddIcon } from 'material-ui';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/AddIcon';

const Todos = ({todos}) => {
  console.log(todos);
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
