const gql = require('graphql-tag');
const { ApolloServer } = require('apollo-server');

const typeDefs = gql`
	type User {
		id: ID!
		name: String!
		email: String!
		friends: [User!]!
		avatar: String
	}

	type Query {
		user: User!
	}
`

const resolvers = {
	Query: {
		user() {
			return {
				id: '1',
				name: 'John Doe',
				email: 'me@me.com',
				friends: []
			}
		}
	}
}

const server = new ApolloServer({
	typeDefs,
	resolvers
})

server.listen(4000).then(() => {
	console.log('Server is running on http://localhost:4000')
})
