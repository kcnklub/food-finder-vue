import {createRouter, createWebHistory} from "vue-router";
import Welcome from "../components/Welcome.vue";
import HomeComponent from "../components/HomeComponent.vue";
import Login from "../components/Login.vue";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: HomeComponent
        },
        {
            path: "/welcome",
            component: Welcome
        },
        {
            path: "/login",
            component: Login
        }
    ]
})

export {router}
