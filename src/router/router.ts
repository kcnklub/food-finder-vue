import {createRouter, createWebHistory} from "vue-router";
import WelcomeView from "../components/WelcomeView.vue";
import HomeComponent from "../components/HomeComponent.vue";
import CreateGroup from "../components/CreateGroup.vue";
import GroupsView from "../components/GroupsView.vue";
import GroupView from "../components/GroupView.vue";
import UserLogin from "@/components/UserLogin.vue";
import {Auth} from "aws-amplify";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: HomeComponent,
            meta: { requiresAuth: true}
        },
        {
            path: "/welcome",
            component: WelcomeView,
            meta: { requiresAuth: false}
        },
        {
            path: "/login",
            component: UserLogin,
            meta: { requiresAuth: false}
        },
        {
            path: "/group",
            component: GroupsView,
            redirect: "/",
            children: [
                {
                    path: ":id",
                    component: GroupView
                },
                {
                    path: "create-group",
                    component: CreateGroup,
                    meta: {requiresAuth: true}
                }
            ]
        }
    ]
})

router.beforeResolve((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        Auth.currentAuthenticatedUser().then(() => {
            next()
        }).catch(() => {
            console.log(from.path);
            if(from.path === '/welcome'){
                next({
                    path: '/login'
                })
            }
            next({
                path: '/welcome'
            });
        });
    } else {
        next();
    }
})

export {router}