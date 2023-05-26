import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);
import LINUI from "@LIN/components";
app.use(LINUI);
app.mount("#app");
