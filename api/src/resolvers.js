/**
 * Here are your Resolvers for your Schema. They must match
 * the type definitions in your scheama
 */

module.exports = {
  Query: {
    user: (_, __, { models }) => {
      return models.User.findOne()
    },
    pets: (_, { input }, { models }) => {
      return models.Pet.findMany(input)

    },
    pet: (_, { input }, { models }) => {
      return models.Pet.findOne(input)
    }
  },
  Mutation: {
    createPet: (_, { input }, { models }) => {
      return models.Pet.create(input)
    },
    updatePet: (_, { input }, { models }) => {
      return models.Pet.update(input.id, input.fields)
    },
    deletePet: (_, { input }, { models }) => {
      return models.Pet.delete(input)
    }
  },
  Pet: {
    __resolveType(pet, { constants }) {
      return pet.weight > constants.BIG_PET_WEIGHT ? 'BigPet' : 'SmallPet'
    },
  },
  SmallPet: {
    type(pet) {
      return pet.type.toUpperCase()
    },
    img(pet) {
      return pet.type === 'DOG'
        ? 'https://placedog.net/300/300'
        : 'http://placekitten.com/300/300'
    },
    owner(pet, _, { models }) {
      return models.User.findOne(pet.user)
    }
  },
  BigPet: {
    type(pet) {
      return pet.type.toUpperCase()
    },
    img(pet) {
      return pet.type === 'DOG'
        ? 'https://placedog.net/300/300'
        : 'http://placekitten.com/300/300'
    },
    owner(pet, _, { models }) {
      return models.User.findOne(pet.user)
    }
  },
  User: {
    pets(user, _, { models }) {
      return models.Pet.findMany(pet => pet.user === user.id)
    }
  }
}
