<template>
  <nav
    class="flex flex-row bg-white border-b dark:bg-space-500  dark:border-space-400 dark:text-white w-full h-[70px] rounded-lg p-3 justify-between"
  >
    <h1 class="font-semibold">{{ title }}</h1 class="font-semibold">
    <div class="flex items-center gap-2">
      <el-button class="!p-2 dark:border-space-400 dark:bg-space-400 dark:text-white">
        <i class="el-icon-bell"></i>
      </el-button>
      <el-button @click="emit" class="!p-2 dark:border-space-400 dark:bg-space-400 dark:text-white">
        <i v-if="!darkMode" class="el-icon-moon"></i>
        <i v-if="darkMode" class="el-icon-sunny"></i>
      </el-button>
    </div>
  </nav>
</template>

<script>

export default {
  name: "Navbar",

  data() {
    return {
      title: "",
    };
  },

  methods: {
    updateTitle() {
      switch (this.$route.name) {
        case "Users":
          this.title = "Listagem de Usuários";
          break;
        case "Posts":
          this.title = "Feed de Posts";
          break;
        case "Albums":
          this.title = "Listagem de Albuns";
          break;
        case "Profile": 
          this.title = "Perfil"
          break;
        case "ToDos":
          this.title = "To Do"
      }
    },

    emit() {
      this.$emit('themeChange')
    }
  },

  computed: {
    darkMode() {
      return this.$store.getters['theme/getTheme']
    }
  },

  created() {
    this.updateTitle();
  },

  watch: {
    $route(value) {
      this.updateTitle();
    }
  }
};
</script>
