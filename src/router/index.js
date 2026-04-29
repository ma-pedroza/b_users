import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login/Index.vue";
import Usuarios from "../views/Usuario/Index.vue";
import Posts from "../views/Post/Index.vue";
import Albums from "../views/Albums/Index.vue";
import AlbumView from "../views/Albums/View.vue";
import Register from "@/views/Register/Register.vue";
import ProfileView from "@/views/Profile/Index.vue";
import ToDo from "@/views/Todo/Index.vue";
import store from "../store/index";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Usuarios,
    meta: { showBars: true, requireAuth: true, padding: true },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: { showBars: false, requireAuth: false, padding: false },
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: { showBars: false, requireAuth: false, padding: false },
  },
  {
    path: "/users",
    name: "Users",
    component: Usuarios,
    meta: { showBars: true, requireAuth: true, padding: true },
  },
  {
    path: "/posts",
    name: "Posts",
    component: Posts,
    meta: { showBars: true, requireAuth: true, padding: true },
  },
  {
    path: "/albums",
    name: "Albums",
    component: Albums,
    meta: { showBars: true, requireAuth: true, padding: true },
  },
  {
    path: "/todos",
    name: "ToDos",
    component: ToDo,
    meta: { showBars: true, requireAuth: true, padding: true },
  },
  {
    path: "/albums/:id",
    name: "AlbumView",
    component: AlbumView,
    props: true,
    meta: { showBars: true, requireAuth: true, padding: true },
  },

  {
    path: "/profile",
    name: "Profile",
    component: ProfileView,
    meta: { showBars: true, padding: true },
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

router.beforeEach((to, from, next) => {
  const isLogged = store.state.auth.isLogged;

  if (to.matched.some((route) => route.meta.requireAuth) && !isLogged) {
    if (to.path !== "/login") {
      return next("/login");
    }

    next();
  }

  if ((to.path === "/login" || to.path === "/register") && isLogged) {
    return next("/");
  }

  next();
});

export default router;
