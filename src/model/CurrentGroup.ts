import {defineStore} from "pinia";
import axios from "axios";

export interface Group {
    id: string;
    name: string;
    numberOfMembers: number;
    members: string[];
    likedPlaces: LikedPlace[];
}

export interface LikedPlace {
    id: string;
    name: string;
    membersThatLiked: string[];
}

export const currentGroupStore = defineStore("currentGroup", {
    state: () => ({
        group: {
            id: "",
            name: "",
            numberOfMembers: 0,
            members: [],
            likedPlaces: []
        } as Group
    }),

    getters: {
        getName: state => state.group.name,
        getSortedLikedPlaces: state => {
            state.group.likedPlaces.sort((a, b) => {
                return b.membersThatLiked.length - a.membersThatLiked.length
            })
            return state.group.likedPlaces
        }
    },

    actions: {
        async setCurrentGroup(groupId: string) {
            const result = await axios.get(`/group/${groupId}`)
            const data = result.data;
            this.group.id = groupId;
            this.group.name = data.groupName;
            this.group.numberOfMembers = data.numberOfMembers;
            this.group.members = data.members;
            this.group.likedPlaces = data.likedPlaces;
            console.log(this.group);
        },

        clearCurrentGroup() {
            this.group.id = "";
            this.group.name = "";
            this.group.numberOfMembers = 0;
            this.group.members = [];
            this.group.likedPlaces = [];
        }
    }
});
