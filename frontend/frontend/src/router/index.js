import { createRouter, createWebHistory } from "vue-router";
import NotesView from "../views/NotesView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "notes",
      component: NotesView,
    },
  ],
});

export default router;
