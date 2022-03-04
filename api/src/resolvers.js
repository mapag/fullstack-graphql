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

    // img(pet) {
    //   return pet.type === 'DOG'
    //     ? 'https://placedog.net/300/300'
    //     : 'http://placekitten.com/300/300'
    // }
  },
  SmallPet: {
    // Just to try field resolvers. if there's a cat type, transform it to CAT to comply with PetType
    type(pet) {
      return pet.type.toUpperCase()
    }
  },
  User: {

  }
}
