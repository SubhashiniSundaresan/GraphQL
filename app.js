const express = require('express')
const models = require('./models');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

const app = express()
const { ApolloServer } = require('apollo-server-express')



async function startServer() {
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        context: {
            models
        }
    })
    await server.start()
    server.applyMiddleware({ app })
}

startServer().then(() => app.listen(3000, () => console.log('Apollo GraphQL')))
