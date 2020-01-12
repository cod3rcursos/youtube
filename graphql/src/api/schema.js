const resolvers = require ('./resolvers')
const { makeExecutableSchema } = require('graphql-tools')

const usersAttribs = `
    id: ID
    name: String!
    email: String!
    password: String!
`

const typeDefs = `
    type User {
        ${usersAttribs}
    }

    type Query {
        getUser(id: ID!): User
        getUsers: [User]
    }

    input UserInput {
        ${usersAttribs}
    }

    type Mutation {
        createUser(input: UserInput): User
    }
`

module.exports = makeExecutableSchema({ 
    typeDefs,
    resolvers
})