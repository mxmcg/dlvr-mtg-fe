// app/api/hello.ts

import { ApolloServer, gql } from "apollo-server-micro";

// Define your GraphQL schema
const typeDefs = gql`
  type Query {
    sayHello: String
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    sayHello: () => "Hello, world!",
  },
};

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  // Disable the built-in playground in production
  introspection: process.env.NODE_ENV !== "production",
  playground: process.env.NODE_ENV !== "production",
});

const startServer = apolloServer.start();

export default async function handler(req, res) {
  await startServer;
  return apolloServer.createHandler({
    path: "/api/hello",
  })(req, res);
}

// Disable body parser, which is required for Apollo Server
export const config = {
  api: {
    bodyParser: false,
  },
};
