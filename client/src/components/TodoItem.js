import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

import TodoCheckbox from './TodoCheckbox';
import { completeTodo, removeTodo, getAllTodos } from '../queries/queries';

import { withStyles } from '@material-ui/core/styles';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = theme => ({
  item: {
    background: "#4CAF50",
    color: "white"
  }
});

class TodoItem extends Component {

  render() {
    const { todo, classes } = this.props;
    return (
      <Mutation
        mutation={completeTodo}
      >
      {
        (completeTodo) =>
        {
          return(
            <ListItem
              className={ todo.complete ? classes.item : null }
              key={todo.id}
              dense
              button
              onClick={
                () => completeTodo({
                  variables: {
                    id: todo.id,
                    complete: !todo.complete
                  }
                })
              }
            >
              <TodoCheckbox checked={todo.complete} />
              <ListItemText primary={`${todo.text}`} secondary={todo.complete ? 'Completed' : 'Running...'} />
              <ListItemSecondaryAction>
                <Mutation
                  mutation={removeTodo}
                  refetchQueries={
                    () => [
                      { query: gql`${getAllTodos}` }
                    ]
                  }
                >
                {
                  removeTodo => (
                    <IconButton onClick={ () => removeTodo({ variables: {id: todo.id} }) } aria-label="Delete">
                      <DeleteIcon />
                    </IconButton>
                  )
                }
                </Mutation>
              </ListItemSecondaryAction>
            </ListItem>
          )
        }
      }
      </Mutation>
    );
  }
}

export default withStyles(styles)(TodoItem);
