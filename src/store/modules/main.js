import axios from "axios";

const API_URL = 'http://127.0.0.1:8082/api/';

const state = {
    products: [],
}

const actions = {
    getAllProducts: function ({commit}) {
        axios.get(`${API_URL}products.php`).then(res => {
            commit('setProducts', res.data)
        }).catch((err) => {
            console.log(err);
        })
    }
}

const mutations = {
    setProducts(state, products) {
        state.products = products
    },
}

const getters = {
    getProducts(state) {
        return state.products;
    }
}


export default {
    namespace: true,
    state,
    actions,
    mutations,
    getters
}