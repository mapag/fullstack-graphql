const { gql } = require('apollo-server')

/**
 * Type Definitions for our Schema using the SDL.
 */
const typeDefs = gql`
	enum PetType {
		DOG
		CAT
		LLAMA
	}

	type User {
		id: ID!
		username: String!
		pets: [Pet]!
	}

	interface Pet {
		id: ID!
		name: String!
		type: PetType!
		weight: Float!
		createdAt: String!
		img: String
		owner: User!
	}

	type BigPet implements Pet {
		id: ID!
		name: String!
		type: PetType!
		weight: Float!
		createdAt: String!
		img: String
		owner: User!
		hasClaw: Boolean
	}

	type SmallPet implements Pet {
		id: ID!
		name: String!
		type: PetType!
		weight: Float!
		createdAt: String!
		img: String
		owner: User!
		hasLegs: Boolean
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
