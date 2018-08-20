import React, { Component } from 'react';
import gql from 'graphql-tools';
import { Mutation } from 'react-apollo';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

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
        <ListItemText primary={`${todo.text}`} />
        <ListItemSecondaryAction>
          { this.state.check ? 'Completed' : 'Running...' }
        </ListItemSecondaryAction>
      </ListItem>
    );
  }

}

export default TodoItem;
