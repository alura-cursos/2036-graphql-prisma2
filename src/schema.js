const { objectType } = require('@nexus/schema')

const User = objectType({
  name: 'User',
  definitions(t) {
    t.model.id()
    t.model.nome()
    t.model.email()
    t.model.createdAt()
    t.model.posts()
  }
})

const Post = objectType({
  name: 'Post',
  definitions(t) {
    t.model.id()
    t.model.titulo()
    t.model.conteudo()
    t.model.publicado()
    t.model.autor()
    t.model.createdAt()
  }
})

const Review = objectType({
  name: 'Review',
  definitions(t) {
    t.model.id()
    t.model.post()
    t.model.reviewer()
    t.model.nota()
    t.model.createdAt()
  }
})