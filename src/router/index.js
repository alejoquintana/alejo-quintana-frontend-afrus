import {
    createRouter,
    createWebHistory
} from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/calculadora',
            name: 'calculator',
            component: () => import('../views/CalculatorView.vue')
        },
        {
            path: '/carrito',
            name: 'cart',
            component: () => import('../views/CartView.vue')
        },
        {
            path: '/catalogo',
            name: 'catalogo',
            component: () => import('../views/CatalogoView.vue')
        },
        {
            path: '/contacto',
            name: 'contact',
            component: () => import('../views/ContactoView.vue')
        }
    ]
})

export default router