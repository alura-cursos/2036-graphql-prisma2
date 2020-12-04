const { ApolloServer } = require('apollo-server')
const { PrismaClient } = require('@prisma/client')

const schema = require('./schema')

const prisma = new PrismaClient({ log: ['query'] })

const server = new ApolloServer({ schema, context: { prisma } })
server.listen({ port: 4000 }, () => console.log(`Servidor pronto em localhost:4000`)) 