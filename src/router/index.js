import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/HomePage.vue'),
    },
    {
        path: '/note',
        name: 'Note',
        component: () => import('../views/NotePage.vue')
    },
    {
        path: '/essay',
        name: 'Essay',
        component: () => import('../views/EssayPage.vue')
    },
    {
        path: '/game',
        name: 'Game',
        component: () => import('../views/GamePage.vue')
    },
    {
        path: '/article0001',
        name: 'article0001',
        component: () => import('../articles/Article_0001.vue')
    },
    {
        path: '/article0002',
        name: 'article0002',
        component: () => import('../articles/Article_0002.vue')
    },
    {
        path: '/article0003',
        name: 'article0003',
        component: () => import('../articles/Article_0003.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router