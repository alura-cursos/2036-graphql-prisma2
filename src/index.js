const { ApolloServer, gql } = require('apollo-server')
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const typeDefs = gql`
  scalar DateTime
  type User {
    id: Int
    nome: String
    email: String
    createdAt: DateTime
    posts: [Post]
  }

  type Post {
    id: Int
    titulo: String
    conteudo: String
  }

  type Query {
    users: [User]
    postsByUser (id: Int): [Post]
    postsByReviewer (id: Int): [Post]
  }
`

const resolvers = {
 Query: {
   users: async () => await prisma.user.findMany({
     include: {
       posts: true
     }
   }),
   postsByUser: async (_, args) => {
     return prisma.user
      .findUnique({ where: { id: Number(args.id) }})
      .posts()
   },
   postsByReviewer: async (_, args) => {
     return prisma.review
      .findUnique({ where: { id: Number(args.id) } })
      .reviewer()
      .posts()
   }
 }
}

const server = new ApolloServer({ typeDefs, resolvers, context: prisma })
server.listen({ port: 4000 }, () => console.log(`Servidor pronto em localhost:4000`)) 