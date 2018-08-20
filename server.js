const express = require('express');
const bodyParser = require('body-parser');
const { ApolloServer } = require('apollo-server-express');
//const { makeExecutableSchema } = require('graphql-tools');
const cors = require('cors');
const mongoose = require('mongoose');

const db = require('./config/keys').MONGO_URI;
const typeDefs = require('./typeDefs/todo');
const resolvers = require('./resolvers/todo');
const Todo = require('./models/Todo');
const models = { Todo };

const app = express();
const server = new ApolloServer({ typeDefs, resolvers, context: req => ({ req, models }) });
const PORT = process.env.PORT || 4000;

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use(cors());

// app.use(
//   '/graphql',
//   bodyParser.json(),
//   graphqlExpress(req => ({
//     schema,
//     context: { models }
//   }))
// );

server.applyMiddleware({ app });

app.listen(PORT, () => console.log(`Server running at port ${PORT}`));
