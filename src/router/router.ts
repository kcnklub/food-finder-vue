import {createRouter, createWebHistory} from "vue-router";
import WelcomeView from "../components/WelcomeView.vue";
import HomeComponent from "../components/HomeComponent.vue";
import LoginView from "../components/LoginView.vue";
import CreateGroup from "../components/CreateGroup.vue";
import GroupsView from "../components/GroupsView.vue";
import GroupView from "../components/GroupView.vue";
import LikedPlaces from "../components/LikedPlaces.vue";
import PlaceSlider from "../components/PlaceSlider.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: HomeComponent
        },
        {
            path: "/welcome",
            component: WelcomeView
        },
        {
            path: "/login",
            component: LoginView
        },
        {
            path: "/group",
            component: GroupsView,
            redirect: "/",
            children: [
                {
                    path: ":id",
                    component: GroupView,
                    children: [
                        {
                            path: "", component: LikedPlaces
                        },
                        {
                            path: "swipe", component: PlaceSlider
                        }
                    ]
                },
                {
                    path: "create-group",
                    component: CreateGroup
                }
            ]
        }
    ]
})

export {router}
