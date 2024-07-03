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
    },
    {
        path: '/article0004',
        name: 'article0004',
        component: () => import('../articles/Article_0004.vue')
    },
    {
        path: '/article0005',
        name: 'article0005',
        component: () => import('../articles/Article_0005.vue')
    },
    {
        path: '/article0006',
        name: 'article0006',
        component: () => import('../articles/Article_0006.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router