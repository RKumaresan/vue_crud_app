import { createRouter, createWebHistory } from 'vue-router';

import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Home from '../views/Home.vue'
import About from '../views/About.vue';
import Settings from '../views/Settings.vue';
import AddItem from '../views/AddItem.vue';
import EditItem from '../views/EditItem.vue';
import LayoutElement from '../layout/index.vue'


const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/register',
        component: Register
    },
    {
        path: '/',
        component: LayoutElement,
        children: [
            {
                path: 'home',
                component: Home
            },
            {
                path: '/about',
                component: About
            },
            {
                path: '/settings',
                component: Settings
            },
            { path: 'add', component: AddItem },
            { path: 'edit/:id', component: EditItem }
        ]
    }
];


const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
