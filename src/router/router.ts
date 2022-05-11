import {createRouter, createWebHistory} from "vue-router";
import Welcome from "../components/Welcome.vue";
import HomeComponent from "../components/HomeComponent.vue";
import Login from "../components/Login.vue";
import CreateGroup from "../components/CreateGroup.vue";
import Group from "../components/Group.vue";

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
        },
        {
            path: "/group",
            component: CreateGroup,
            children: [
                {
                    path: ":id",
                    component: Group
                }
            ]
        }
    ]
})

export {router}
