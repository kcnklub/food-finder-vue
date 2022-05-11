import { createApp } from 'vue';
import App from './App.vue';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import WaveUI from 'wave-ui';
import 'wave-ui/dist/wave-ui.css';
import {router} from "@/router/router";
import {createServer} from "miragejs";

createServer({
    routes() {
        this.namespace = "";
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
    }
})

const app = createApp(App)
app.use(router);
new WaveUI(app, {});
app.mount('#app')
