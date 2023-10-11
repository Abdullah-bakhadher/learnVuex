import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import GettersPage from "../views/GettersPage.vue";
import MutationsPage from "../views/MutationsPage.vue";
import ActionPage from "../views/ActionPage.vue";
import ModulesPage from "../views/ModulesPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/getters",
    name: "GettersPage",
    component: GettersPage,
  },
  {
    path: "/mutation",
    name: "MutationsPage",
    component: MutationsPage,
  },
  {
    path: "/actions",
    name: "ActionPage",
    component: ActionPage,
  },
  {
    path: "/ModulesPage",
    name: "ModulesPage",
    component: ModulesPage,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
