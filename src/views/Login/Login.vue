<template>
  <div class="flex h-screen w-screen">
    <div
      class="w-[35%] h-[100%] flex flex-col gap-5 items-center justify-center"
    >
      <img class="w-[60%]" src="../../assets/logo-login.png" alt="" />
      <el-button
        size="large"
        @click="changeTheme"
        class="!rounded-2xl !dark:border-primary-900 dark:bg-primary-800 dark:text-white"
      >
        <i v-if="!darkMode" class="el-icon-moon"></i>
        <i v-if="darkMode" class="el-icon-sunny"></i>
      </el-button>
    </div>
    <div
      class="w-[65%] h-[100%] bg-gradient-to-r from-primary-500 to-primary-700 dark:from-primary-700 dark:to-primary-900 flex flex-col items-center justify-center"
    >
      <div class="flex justify-center">
        <img class="w-[80%]" src="../../../public/login.svg" alt="" />
      </div>
      <div class="flex flex-col items-center gap-5 !w-[50%]">
        <el-input
          v-model="authUser.usuario"
          placeholder="Nome"
          prefix-icon="el-icon-user"
        ></el-input>
        <el-input
          v-model="authUser.senha"
          placeholder="Senha"
          prefix-icon="el-icon-key"
        ></el-input>
        <el-button @click="login" class="w-[45%] !rounded-xl">ENTRAR</el-button>
        <div class="flex flex-col text-center gap-1">
          <span class="text-sm text text-white">Não possui uma conta?</span>
          <span
            @click="$router.push('/register')"
            class="cursor-pointer text-sm text text-white font-bold"
            >Cadastre aqui!</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",

  data() {
    return {
      authUser: {
        usuario: "",
        senha: "",
      },
    };
  },

  methods: {
    changeTheme() {
      this.$store.dispatch("theme/changeTheme");
    },

    async login() {
      const payload = this.authUser;
      const login = await this.$store.dispatch("auth/login", payload);

      if (login.status) {
        this.$router.push("/users");
        this.$notify.success({
          title: login.message,
          showClose: false,
        });
      } else {
        this.$notify.error({
          title: login.message,
        });
      }
    },
  },
  computed: {
    darkMode() {
      return this.$store.getters["theme/getTheme"];
    },
  },
};
</script>
