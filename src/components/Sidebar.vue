<template>
  <nav class="flex flex-col items-center w-[70px] h-full mr-2">
    <el-menu
      default-active="1"
      active-text-color="#fffefa"
      text-color="#fffefa"
      class="rounded-lg dark:bg-space-500 dark:border-space-400 !p-3 h-full w-full flex flex-col gap-2 items-center justify-between"
    >
      <div class="w-full flex flex-col">
        <el-card
          class="!bg-transparent card-image !shadow-none !border-none"
          :body-style="{ padding: '0px' }"
        >
          <img
            src="../assets/logo.png"
            alt="Logo bUsers"
            class="w-full object-contain"
          />
        </el-card>
      </div>
      <div class="w-full flex flex-col gap-2">
        <router-link to="/users">
          <el-menu-item
            class="w-full !h-[45px] rounded-lg flex justify-center items-center"
            index="1"
          >
            <i class="el-icon-user !mr-0"></i>
          </el-menu-item>
        </router-link>

        <router-link to="/posts">
          <el-menu-item
            class="w-full h- !h-[45px] rounded-lg flex justify-center items-center"
            index="3"
          >
            <i class="el-icon-chat-dot-square !mr-0"></i>
          </el-menu-item>
        </router-link>

        <router-link to="/albums">
          <el-menu-item
            class="w-full h- !h-[45px] rounded-lg flex justify-center items-center"
            index="4"
          >
            <i class="el-icon-picture-outline !mr-0"></i>
          </el-menu-item>
        </router-link>
        <router-link to="/todos">
          <el-menu-item
            class="w-full h- !h-[45px] rounded-lg flex justify-center items-center"
            index="5"
          >
            <i class="el-icon-notebook-1 !mr-0"></i>
          </el-menu-item>
        </router-link>
      </div>
      <div class="w-full flex flex-col gap-2">
        <router-link to="/profile">
          <el-menu-item
            class="w-full h- !h-[45px] rounded-lg flex justify-center items-center"
            index="6"
          >
            <i class="el-icon-user !mr-0"></i>
          </el-menu-item>
        </router-link>

        <!-- <router-link to="/config">
          <el-menu-item
            class="w-full h- !h-[45px] rounded-lg flex justify-center items-center"
            index="7"
          >
            <i class="el-icon-setting !mr-0"></i>
          </el-menu-item>
        </router-link> -->

        <el-menu-item
          @click="logout"
          class="w-full h- !h-[45px] rounded-lg flex justify-center items-center"
        >
          <i class="el-icon-switch-button !mr-0"></i>
        </el-menu-item>
      </div>
    </el-menu>
  </nav>
</template>

<script>
export default {
  name: "Sidebar",

  methods: {
    logout() {
      this.$store.dispatch("auth/changeIsLogged");
      this.$router.push("/login");
    },
  },
};
</script>
