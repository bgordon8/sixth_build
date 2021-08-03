import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';

export default async function start() {
  const app = express();
  const server = new ApolloServer({
    typeDefs: gql`
      type Query {
        helloWorld: String
      }
    `,
    resolvers: {
      Query: {
        helloWorld: () => 'Hello World hows it been?',
      },
    },
  });

  await server.start();
  server.applyMiddleware({ app });

  return app.listen(3000, () => {
    console.log('listening on port 3000...');
  });
}
