import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/login.vue";
import BootstrapVue from 'bootstrap-vue'
	Vue.use(BootstrapVue)
	import 'bootstrap/dist/css/bootstrap.css'
	import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/Login",
    name: "login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/login.vue")
  },
	{
    path: "/Secure",
    name: "secure",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/secure.vue")
  },
  {
    path: "/panier",
    name: "panier",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/panier.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
