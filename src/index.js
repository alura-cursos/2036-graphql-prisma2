const { ApolloServer, gql } = require('apollo-server')
const { PrismaClient } = require('@prisma/client')
const { GraphQLSchema, GraphQLObjectType } = require('graphql')

const prisma = new PrismaClient()

const server = new ApolloServer({ typeDefs, resolvers, context: prisma })
server.listen({ port: 4000 }, () => console.log(`Servidor pronto em localhost:4000`)) 