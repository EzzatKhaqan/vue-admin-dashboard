import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "primeicons/primeicons.css";
import "./assets/style/app.css";
import "./assets/style/styles.scss";
const app = createApp(App);

app.use(router);

app.mount("#app");
