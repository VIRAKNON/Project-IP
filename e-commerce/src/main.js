import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/css/main.css";
import "./assets/css/responsive.css";
import "./assets/css/bootstrap.min.css";
import "./assets/JS/bootstrap.min.js";

const app = createApp(App);

app.use(router);

app.mount("#app");
