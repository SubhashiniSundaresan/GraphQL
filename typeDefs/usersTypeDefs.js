const {gql} = require("apollo-server-express");
module.exports = gql`
    type Query {
        users: [User]
        user(id: Int!): User
        products: [Product]
        product(id: Int!): Product
        me: User
    }
    type Mutation {
        createUser(id: Int!, name: String!): User!
        removeUser(id: Int!): Boolean
    }
    type User {
        id: Int!
        name: String!
    }
    type Product {
        id: Int!
        title: String!
        rating: Float!
        price: Float!
        brand: String
        owners: [User]!
    }
`