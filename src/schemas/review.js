const { objectType } = require('@nexus/schema')

const Review = objectType({
  name: 'Review',
  definition(t) {
    t.model.id()
    t.model.post()
    t.model.reviewer()
    t.model.nota()
    t.model.createdAt()
  }
})

module.exports = Review