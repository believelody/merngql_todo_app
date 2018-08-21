import React from 'react';
import { Mutation } from 'react-apollo';

export default ({children, mutation, ...props}) =>
<Mutation mutation={mutation}>
{
  ({ data }) => {
    if (loading) return <span>Loading...</span>

    return children;
  }
}
</Mutation>
