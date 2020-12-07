const { objectType } = require('@nexus/schema')

const Post = objectType({
  name: 'Post',
  definition(t) {
    t.model.id()
    t.model.titulo()
    t.model.conteudo()
    t.model.publicado()
    t.model.autor()
    t.model.createdAt()
  }
})

module.exports = Post