const { objectType } = require('@nexus/schema')

const User = objectType({
  name: 'User',
  definition(t) {
    t.model.id()
    t.model.nome()
    t.model.email()
    t.model.createdAt()
    t.model.posts()
  }
})

module.exports = User