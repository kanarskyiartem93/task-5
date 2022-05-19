const state = {
    basket: [],
}

const actions = {
    addProductToBasket({commit}, {product, quantity}) {
        commit('addToBasket', {product, quantity})
    },
    deleteFromBasket({commit}, product) {
        commit('deleteProduct', product)
    },
    reduceProductFromBasket({commit}, {product, quantity}) {
        commit('reduceFromBasket', {product, quantity})
    },
}

const mutations = {
    addToBasket(state, {product, quantity}) {
        let findProductInBasket = state.basket.find(item => {
            return item.product.id === product.id
        })
        if (findProductInBasket) {
            findProductInBasket.quantity += quantity;
            return false
        }
        state.basket.push({
            product,
            quantity
        })
    },
    reduceFromBasket(state, {product, quantity}) {
        let findProductInBasket = state.basket.find(item => {
            return item.product.id === product.id
        })
            findProductInBasket.quantity -= quantity;
    },
    deleteProduct(state, product) {
        let index = state.basket.indexOf(product)
        state.basket.splice(index, 1)
    }
}

const getters = {
    getProductsFromBasket(state) {
        return state.basket;
    },
    basketCountProducts(state) {
        return state.basket.length
    },
    getQuantityInBasket(state) {
        return (product) => {
            let basketProduct = state.basket.find(item => {
                return item.product.id === product.id
            })
            if (basketProduct) {
                return basketProduct.quantity
            }
            return 0
        }
    },
}


export default {
    namespace: true,
    state,
    actions,
    mutations,
    getters
}