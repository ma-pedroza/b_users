<template>
  <div id="app" :class="['flex bg-bg-primary dark:bg-space-900 h-screen']">
    <Sidebar v-if="$route.meta.showBars"></Sidebar>
    <div class="flex flex-col w-full h-full min-w-0">
      <Topbar v-if="$route.meta.showBars" @themeChange="changeTheme"></Topbar>
      <div
        class="flex-1 min-h-0 overflow-y-auto overflow-x-auto"
        :class="{ 'p-3': $route.meta.padding }"
      >
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar.vue";
import Topbar from "./components/Topbar.vue";

export default {
  name: "App",
  data() {
    return {};
  },

  computed: {
    users() {
      return this.$store.state.usuario.usuarios;
    },

    darkMode() {
      return this.$store.getters["theme/getTheme"];
    },
  },

  methods: {
    changeTheme() {
      this.$store.dispatch("theme/changeTheme");
    },
  },
  components: {
    Sidebar,
    Topbar,
  },
  created() {
    this.$store.dispatch("usuario/getUsuarios");
    this.$store.dispatch("post/getPosts");
    this.$store.dispatch("comment/getComments");
    this.$store.dispatch("album/getAlbums");
    this.$store.dispatch("photo/getPhotos");
    this.$store.dispatch("todo/getTodos");
  },
};
</script>

<style>
html #app {
  background-image: url("./assets/bg-light.svg");
}

html.dark #app {
  background-image: url("./assets/bg-dark.svg");
}
</style>
