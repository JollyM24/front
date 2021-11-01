import { createWebHistory, createRouter } from "vue-router";
import home from "@/views/home.vue";
import diagrams from "@/views/diagrams.vue";

const routes = [
    {
        path: "/home",
        name: "home",
        component: home,
      },
      {
        path: "/diagrams",
        name: "diagrams",
        component: diagrams,
      },
    ];
    
    const router = createRouter({
      history: createWebHistory(),
      routes,
    });
    
    export default router;