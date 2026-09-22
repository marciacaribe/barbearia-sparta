import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // 1. Importa as rotas
import "./style.css";

const app = createApp(App);

app.use(router); // 2. DIZ AO VUE PARA USAR O ROUTER (Essencial!)
app.mount("#app");
