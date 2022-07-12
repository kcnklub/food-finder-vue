import {createApp} from 'vue';
import App from './App.vue';
import {router} from "@/router/router";
import {createServer} from "miragejs";
import {createPinia} from "pinia";
import "./index.css";

createServer({
    routes() {
        this.namespace = "";
        this.post("/createNewUser", () => {
            return {
                userId: "user-id",
                username: "kcnklub"
            }
        })
        this.get("/get-groups/kcnklub", () => {
            return [
                {
                    id: 0,
                    groupName: "Fellas need food!",
                    numberOfMembers: 4
                },
                {
                    id: 1,
                    groupName: "Date night",
                    numberOfMembers: 2
                }
            ]
        });
        this.get("/group/0", () => {
            return {
                id: 0,
                groupName: "Fellas need food!",
                numberOfMembers: 4,
                members: ["Kyle", "Steven", "Slade", "Clayton"],
                likedPlaces: [
                    {
                        id: "ChIJFx9-iGst34cR1dlmJDxXusM",
                        name: "Buffalo Wild Wings",
                        membersThatLiked: ["Kyle", "Steven"]
                    },
                    {
                        id: "ChIJb1IbqqMy34cRsfkkFHh-yyc",
                        name: "Subway",
                        membersThatLiked: ["Kyle", "Clayton", "Steven"]
                    }
                ]
            }
        });
        this.get("/group/1", () => {
            return {
                id: 0,
                groupName: "Date Night",
                numberOfMembers: 2,
                members: ["Kyle", "Shannon"],
                likedPlaces: [
                    {
                        id: "ChIJFx9-iGst34cR1dlmJDxXusM",
                        name: "Buffalo Wild Wings",
                        membersThatLiked: ["Kyle", "Steven"]
                    },
                    {
                        id: "ChIJb1IbqqMy34cRsfkkFHh-yyc",
                        name: "Subway",
                        membersThatLiked: ["Kyle", "Clayton"]
                    }
                ]
            }
        });
        this.get("place", () => {
            const array = [
                {
                    id: "ChIJFx9-iGst34cR1dlmJDxXusM",
                    name: "Buffalo Wild Wings",
                    photoReference: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2022%2F02%2F02%2Fbuffalo-wild-wings.jpg&q=60-iJEgdl",
                },
                {
                    id: "ChIJ3z6Xenky34cR6Rz3D9VwxM4",
                    name: "Starbucks",
                    photoReference: "https://images.sirved.com/ChIJM50ZKtLPD4gRscTBDTDzfmw/1cqdsV1JxL.png",
                },
                {
                    id: "ChIJb1IbqqMy34cRsfkkFHh-yyc",
                    name: "Subway",
                    photoReference: "https://s3-media0.fl.yelpcdn.com/bphoto/j2zJNRQIy69ynoD798r7LQ/258s.jpg",
                }
            ];
            return array[Math.floor(Math.random() * array.length)]
        })
        this.passthrough("http://localhost:8080/place");
    }
})

const app = createApp(App)
app.use(router);
app.use(createPinia());
app.mount('#app')
