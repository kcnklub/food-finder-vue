import {defineStore} from "pinia";

export interface User {
    username: string;
}

export const currentUserStore = defineStore('user', {
    state: () => ({
        user: {username: ""} as User
    }),

    getters: {
        username: state => state.user.username
    },

    actions: {
        setUsername(username: string) {
            this.user.username = username;
        }
    }
})
