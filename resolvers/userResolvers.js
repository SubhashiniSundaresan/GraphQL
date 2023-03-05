const userResolvers = {
    Query: {
        users: (parent, args, { models }) => models.users,
        user: (parent, { id }, { models }) => {
            const user = models.users.filter((user) => user.id === id)
            console.log(user)
            return user[0]
        },
        products: (parent, args, { models }) => models.products,
        product: (parent, { id }, { models }) => {
            const product = models.products.filter((product) => product.id === id)
            console.log(product)
            return product[0]
        },
        me: (parent, args, { models }) => models.users[0],
    },
    Mutation: {
        removeUser: (parent, { id }, { models }) => {
            let found = false
            models.users = models.users.filter((user) => {
                if (user.id === id) {
                    found = true
                } else return user
            })
            if (found) {
                return true
            } else return false
        },
        createUser: (parent, { id, name }, { models }) => {
            const newUser = { id, name }
            models.users.push(newUser)
            return newUser
        },
    },
    Product: {
        owners: (parent, args, { models }) => {
            const owners = models.users.filter((user) => {
                if (user.brand === parent.brand) {
                    console.log('userBrand', user.brand)
                    console.log('parentBrand', parent.brand)
                    return user.brand === parent.brand
                }
            })
            return owners
        },
    },
}

module.exports = userResolvers;