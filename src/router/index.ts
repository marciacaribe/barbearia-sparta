import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SobreView from "../views/SobreView.vue";
import ServicosView from "../views/ServicosView.vue";
import AgendamentoView from "../views/AgendamentoView.vue";
import GaleriaView from "../views/GaleriaView.vue";
import ContatoView from "../views/ContatoView.vue";

const router = createRouter({
  // Garanta que está usando createWebHistory e NÃO createWebHashHistory
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "home", component: HomeView },
    { path: "/sobre", name: "sobre", component: SobreView },
    { path: "/servicos", name: "servicos", component: ServicosView },
    { path: "/agendamento", name: "agendamento", component: AgendamentoView },
    { path: "/galeria", name: "galeria", component: GaleriaView },
    { path: "/contato", name: "contato", component: ContatoView },
  ],
});

export default router;
