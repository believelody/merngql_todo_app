import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { getTodos } from './queries/queries';
import Todos from './components/Todos';

import './App.css';

/*
  I use this syntax to prevent multiple queries since the way apollo client do is super ugly.
  So I don't care about query. I make a single query but it can contain multiple sub-queries.
  Awesome I know
*/
const rootQuery = gql`
  {
    ${getTodos}
  }
`;

class App extends Component {

  render() {
    return (
      <div>
        <h1>Todo App</h1>
        <Query query={rootQuery}>
        {
          ({ loading, data: {getAllTodos} }) =>
            loading
            ?
            <span>Loading ...</span>
            :
            <Todos todos={getAllTodos} />
        }
        </Query>
      </div>
    )
  }
}

export default App;
