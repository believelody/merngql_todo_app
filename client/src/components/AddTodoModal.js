import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: theme.spacing.unit * 50,
    padding: theme.spacing.unit * 4,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
  },
  textField: {
    margin: `0 ${theme.spacing.unit}`,
    width: 300
  },
  button: {
    marginTop: 20
  }
});

class AddTodoModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      text: ''
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.open) {
      this.setState({ open: nextProps.open });
    }
  }

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  closeModal = () => this.setState({ open: false });

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.text);
  }

  render() {
    let { open, text } = this.state;
    let { classes } = this.props;

    return (
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        open={open}
        onClose={this.closeModal}
      >
        <div className={classes.modal}>
          <Typography variant="title" id="modal-title">
            Add a todo
          </Typography>
          <Typography variant="subheading" id="modal-description">
            <form onSubmit={this.handleSubmit} noValidate>
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
          </Typography>
        </div>
      </Modal>
    );
  }
}

export default withStyles(styles)(AddTodoModal);
