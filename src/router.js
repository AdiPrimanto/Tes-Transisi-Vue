import Vue from 'vue'
import Router from 'vue-router'
import HomeVue from "@/layout/HomeVue";
import LoginVue from "@/layout/LoginVue";
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'

Vue.use(Router)

export default new Router ({
    mode: 'history',
    routes: [
        // {
        //     path: '/',
        //     component: Login
        // },
        // {
        //     path: '/home',
        //     component: Home
        // },
        // {
        //     path: '/register',
        //     component: Register
        // },
        {
            path: "/",
            component: LoginVue,
            children: [
                {
                    path: "/",
                    name: "login",
                    components: { default: Login },
                },
                {
                    path: "/register",
                    name: "register",
                    components: { default: Register },
                },
            ],
        },
        {
            path: "/home",
            component: HomeVue,
            children: [
                {
                    path: "/home",
                    name: "Home",
                    components: { default: Home },
                },
                ],
        },
    ]
})