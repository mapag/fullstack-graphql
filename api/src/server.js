const { ApolloServer } = require('apollo-server')
const typeDefs = require('./schema')
const resolvers = require('./resolvers')
const {models, db} = require('./db')
const constants = require('./constants')

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: { models, db, constants }
})

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
})
