import Vuex from 'vuex'
import main from "@/store/modules/main"
import favorite from '@/store/modules/faivorite'
import basket from '@/store/modules/basket'

export default new Vuex.Store({
    modules: {
        main,
        basket,
        favorite
    }
})