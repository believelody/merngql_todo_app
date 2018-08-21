import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AddTodoForm from './AddTodoForm';

import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';

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
  }
});

class AddTodoModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.open) {
      this.setState({ open: nextProps.open });
    }
  }

  closeModal = value => this.setState({ open: value });

  render() {
    let { open, text } = this.state;
    let { classes } = this.props;

    return (
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        open={open}
        onClose={() => this.closeModal(false)}
      >
        <div className={classes.modal}>
          <Typography variant="title" id="modal-title">
            Add a todo
          </Typography>
          <Typography variant="subheading" id="modal-description">
            <AddTodoForm closeModal={this.closeModal} />
          </Typography>
        </div>
      </Modal>
    );
  }
}

AddTodoModal.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(AddTodoModal);
