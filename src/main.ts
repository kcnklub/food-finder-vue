import { createApp } from 'vue';
import App from './App.vue';
import WaveUI from 'wave-ui';
import 'wave-ui/dist/wave-ui.css';
import {router} from "@/router/router";

const app = createApp(App)
app.use(router);
new WaveUI(app, {});
app.mount('#app')
