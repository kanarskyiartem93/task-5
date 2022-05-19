import { createApp } from 'vue/dist/vue.esm-bundler'
import store from '@/store/index'
import router from "@/router"
import moshaToast from 'mosha-vue-toastify'
import 'mosha-vue-toastify/dist/style.css'


const app = createApp({
})

app.use(router).use(moshaToast).use(store).mount('#app')
