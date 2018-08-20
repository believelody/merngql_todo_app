import React, { Component } from 'react';
import gql from 'graphql-tools';
import { Mutation } from 'react-apollo';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      check: props.complete
    }
  }

  handleToggle = () => this.setState({ check: !this.state.check });

  render() {
    const { todo } = this.props;
    return (
      <ListItem
        key={todo.id}
        dense
        button
        onClick={this.handleToggle}
      >
        <Checkbox
          checked={this.state.check}
          disableRipple
        />
        <ListItemText primary={`${todo.text}`} secondary={this.state.check ? 'Completed' : 'Running...'} />
        <ListItemSecondaryAction>
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    );
  }

}

export default TodoItem;
