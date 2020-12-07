const { mutationType } = require('@nexus/schema')

const Mutation = mutationType({
  name: 'Mutation',
  definition(t) {
    t.crud.createOnePost()
  }
})

module.exports = Mutation