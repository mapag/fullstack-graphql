/**
 * Here are your Resolvers for your Schema. They must match
 * the type definitions in your scheama
 */

module.exports = {
  Query: {
    user(_, __, { models }) {
      return models.User.findOne()
    },
    pet(_, { input }, { models }) {
      return models.Pet.findOne(input)
    },
    pets(_, { input }, { models }) {
      return models.Pet.findMany(input)
    }
  },
  Mutation: {
    newPet(_, { input }, { models }) {
      return models.Pet.create(input)
    }
  }
}
