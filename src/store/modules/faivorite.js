import axios from "axios";

const API_URL = 'http://127.0.0.1:8082/api/';
const state = {
    productsFavorite: [],
}

const actions = {
    getFavoriteProductsFromDB: function ({commit}) {
        axios.get(`${API_URL}favorite.php`).then(res => {
            commit('setFavoriteProducts', res.data)
        }).catch((err) => {
            console.log(err);
        })
    },
    addProductToFavorite({commit}, {product, isFavorite}) {
        axios.post(`${API_URL}favorite.php`, {id: product.id}).catch((err) => {
            console.log(err)
        })
        commit('toggleFavoriteProduct', {product, isFavorite})
    },
}

const mutations = {
    toggleFavoriteProduct(state, {product, isFavorite}) {
        if (!isFavorite) {
            state.productsFavorite = state.productsFavorite.filter(item => {
                return item.id !== product.id
            })
            return
        }
        state.productsFavorite.push(product)
    },
    setFavoriteProducts(state, products) {
        state.productsFavorite = products
    }
}

const getters = {
    getProductsFavorite(state) {
        return state.productsFavorite;
    },
    isFavorite(state) {
        return (product) => {
            let favoriteProduct = state.productsFavorite.find(item => {
                return item.id === product.id
            })
            if (favoriteProduct) {
                return true
            }
            return false
        }
    },
    favoriteProductsCount(state) {
        return state.productsFavorite.length
    }
}


export default {
    namespace: true,
    state,
    actions,
    mutations,
    getters
}