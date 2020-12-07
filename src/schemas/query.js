const { queryType, nonNull, stringArg } = require('@nexus/schema')

const Query = queryType({
  name: 'Query',
  definition(t) {
    t.crud.users({
      filtering: true,
      ordering: true
    })
    t.crud.user()
    t.crud.reviews()
    t.list.field('postsAprovados', {
      type: 'Post',
      resolve: (_, __, { prisma }) => {
        return prisma.post.findMany({
          where: { publicado: true },
          orderBy: {
            createdAt: 'desc'
          }
        })
      }
    })
    t.list.field('buscaAutoresPublicados', {
      type: 'User',
      args: {
        email: nonNull(stringArg())
      },
      resolve: (_, args, { prisma }) => {
        console.log(args)
        return prisma.user.findMany({
          where: {
            email: { contains: args.email },
            posts: { some: { publicado: true } } //every
          }
        })
      }
    })
  }
})

module.exports = Query