import { createRouter, createWebHistory } from "vue-router";
import CarSelectionView from "../views/CarSelectionView.vue";
import ColorSelectionView from "../views/ColorSelectionView.vue";
import PackSelectionView from "../views/PackSelectionView.vue";
import SummaryView from "../views/SummaryView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "select-car",
      component: CarSelectionView,
    },
    {
      path: "/select-color",
      name: "select-color",
      component: ColorSelectionView,
    },
    {
      path: "/select-pack",
      name: "select-pack",
      component: PackSelectionView,
    },
    {
      path: "/summary",
      name: "summary",
      component: SummaryView,
    },
  ],
});

export default router;
