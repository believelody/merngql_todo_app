import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import { addTodo, getAllTodos } from '../queries/queries';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  textField: {
    margin: `0 ${theme.spacing.unit}`,
    width: 300
  },
  button: {
    marginTop: 20
  }
});

class AddTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = (e, addTodo) => {
    e.preventDefault();
    addTodo({variables: {text: this.state.text}});
    this.setState({ text: '' });
    this.props.closeModal(false);
  }

  render() {
    let { text } = this.state;
    let { classes } = this.props;
    return (
      <Mutation
        mutation={addTodo}
        refetchQueries={ () => [{ query: gql`${getAllTodos}` }] }
      >
      {
        addTodo => (
          <form onSubmit={e => this.handleSubmit(e, addTodo)} noValidate>
            <TextField
              className={ classes.textField }
              value={text}
              label="Text"
              onChange={this.handleChange}
              margin="normal"
              name="text"
              margin="normal"
            />
            <br />
            <Button type="submit" className={ classes.button } variant="outlined">
              Validate
            </Button>
          </form>
        )
      }
      </Mutation>
    );
  }

}

export default withStyles(styles)(AddTodoForm);
