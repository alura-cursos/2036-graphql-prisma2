const { ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`
 type User {
   nome: String
 }
 type Query {
   users: [User]
 }
`

const resolvers = {
 Query: {
   users: () => [{ nome: "Ana" }, {nome: "Bia" }]
 }
}

const server = new ApolloServer({ typeDefs, resolvers })
server.listen({ port: 4000 }, () => console.log(`Servidor pronto em localhost:4000`)) 