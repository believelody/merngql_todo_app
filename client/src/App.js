import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { getAllTodos } from './queries/queries';
import Todos from './components/Todos';
import AddTodoModal from './components/AddTodoModal';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import CircularProgress from '@material-ui/core/CircularProgress';
import './App.css';

/*
  I use this syntax to prevent multiple queries since the way apollo client do is super ugly.
  So I don't care about query. I make a single query but it can contain multiple sub-queries.
  Awesome I know
*/
const rootQuery = gql`
  {
    ${getAllTodos}
  }
`;

const styles = {
  card: {
    maxWidth: 700,
    minHeight: 500,
    margin: "auto",
    position: "relative",
    marginTop: 30
  },
  cardContent: {
    position: "relative",
    borderTop: "1px solid #eee",
    minHeight: 400
  },
  progressBar: {
    position: "absolute",
    top: "50%",
    left: "50%",
    padding: "20px 0",
    transform: "translate(-50%, -50%)"
  },
  media: {
    // ⚠️ object-fit is not supported by IE11.
    objectFit: 'cover',
  },
};

class App extends Component {
  state = {
    open: false
  };

  openModal = () => this.setState({ open: true });

  render() {
    let { open } = this.state;
    let { classes } = this.props;
    
    return (
      <Card className={classes.card}>
        <CardHeader title="Todo App" />
        <CardContent className={classes.cardContent}>
          <Query query={rootQuery}>
          {
            ({ loading, data: {getAllTodos} }) =>
              loading
              ?
              <div className={classes.progressBar}>
                <CircularProgress size={50} />
              </div>
              :
              <Todos todos={getAllTodos} />
          }
          </Query>
          <AddTodoModal open={open} />
        </CardContent>
        <CardActions>
          <Button
            variant="fab"
            color="secondary"
            size="medium"
            onClick={this.openModal}
          >
            <Icon>
              add_circle
            </Icon>
          </Button>
        </CardActions>
      </Card>
    )
  }
}

export default withStyles(styles)(App);
