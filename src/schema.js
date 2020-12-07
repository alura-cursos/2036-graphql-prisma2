const { makeSchema } = require('@nexus/schema')
const { nexusPrisma } = require('nexus-plugin-prisma')
const path = require('path')

const { User, Post, Review, Query, Mutation } = require('./schemas')

const schema = makeSchema({
  types: [User, Post, Review, Query, Mutation ],
  plugins: [nexusPrisma({ experimentalCRUD: true })],
  outputs: {
    schema: path.join(__dirname, 'schema.graphql'),
    typegen: path.join(__dirname, '../prisma/generated','nexus.ts')
  }
})

module.exports = schema