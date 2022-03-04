const { gql } = require('apollo-server')

/**
 * Type Definitions for our Schema using the SDL.
 */
const typeDefs = gql`
	enum PetType = {
		DOG
		CAT
	}

	type User {
		id: ID!
		username: String!
	}

	type Pet {
		id: ID!
		name: String!
		type: PetType!
		createdAt: String!
		img: String
	}

	input PetInput {
		name: String
		type: PetType
	}

	input CreatePetInput {
		name: String!
		type: PetType!
	}

	input UpdatePetInput {
		id: ID!
	}

	input DeletePetInput { 
		id: ID!
	}

	type Query {
		user: User
		pets(input: PetInput): [Pet]!
		pet(input: PetInput): Pet
	}

	type Mutation {
		createPet(input: CreatePetInput!): Pet!
		updatePet(input: UpdatePetInput): Pet!
		deletePet(input: DeletePetInput): ID!
	}
`;

module.exports = typeDefs
