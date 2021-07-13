import Vue from "vue";
import Router from "vue-router";
import Home from "../views/pages/Home.vue";

Vue.use(Router);
export default new Router({
  //mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/products/:id",
      name: "product",
      component: () => import("../views/pages/Product.vue"),
    },
    {
      path: "/products",
      name: "products",
      component: () => import("../views/pages/Products.vue"),
    },
    {
      path: "/carts",
      name: "carts",
      component: () => import("../views/pages/Carts.vue"),
    },
  ],
});
