import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "./components/views/Home";
import BasketView from "@/components/views/Basket";
import FavoriteView from "@/components/views/Favorite";

const routes = [
    {
        path: "/",
        name: 'HomeView',
        component: HomeView
    },
    {
        path: '/basket',
        component: BasketView,
        name: 'BasketView'
    },
    {
        path: '/favorite',
        component: FavoriteView,
        name: 'FavoriteView'
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL),
    linkActiveClass: 'vue-active-link'
})

export default router
