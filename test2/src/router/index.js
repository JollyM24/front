import { createWebHistory, createRouter } from "vue-router";
import home from "@/views/home.vue";
import diagrams from "@/views/diagrams.vue";
import diatest from "@/views/diatest.vue";

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
      {
        path: "/diatest",
        name: "diatest",
        component: diatest,
      }
    ];
    
    const router = createRouter({
      history: createWebHistory(),
      routes,
    });
    
    export default router;