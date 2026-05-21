<template>
  <main>
    <!-- Desktop -->
    <div class="hidden md:flex h-screen w-screen">
      <div
        class="w-[35%] h-[100%] flex flex-col gap-5 items-center justify-center"
      >
        <img class="w-[60%]" src="../../assets/logo-login.png" alt="" />
        <el-button
          @click="changeTheme"
          size="large"
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
          <img class="w-[80%]" src="../../../public/register.svg" alt="" />
        </div>
        <div class="flex flex-col items-center gap-5 !w-[50%]">
          <span class="text-white text-3xl font-extrabold">Criar Conta</span>
          <el-input
            v-model="registerUser.usuario"
            placeholder="Nome"
            prefix-icon="el-icon-user"
          ></el-input>
          <el-input
            v-model="registerUser.senha"
            placeholder="Senha"
            prefix-icon="el-icon-key"
          ></el-input>
          <el-button @click="register" class="w-[45%] !rounded-xl"
            >CADASTRAR</el-button
          >
          <div class="flex flex-col text-center gap-1">
            <span class="text-sm text text-white">Já possui uma conta?</span>
            <span
              @click="$router.push('/login')"
              class="cursor-pointer text-sm text text-white font-bold"
              >Logue aqui!</span
            >
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile -->
    <div class="flex flex-col md:hidden h-screen w-screen">
      <div
        class="w-[100%] h-[50%] flex flex-col gap-5 items-center justify-center"
      >
        <img class="w-[60%]" src="../../assets/logo-login.png" alt="" />
        <el-button
          @click="changeTheme"
          size="large"
          class="!rounded-2xl !dark:border-primary-900 dark:bg-primary-800 dark:text-white"
        >
          <i v-if="!darkMode" class="el-icon-moon"></i>
          <i v-if="darkMode" class="el-icon-sunny"></i>
        </el-button>
      </div>
      <div
        class="w-[100%] h-[70%] bg-gradient-to-r from-primary-500 to-primary-700 dark:from-primary-700 dark:to-primary-900 flex flex-col items-center justify-center"
      >
        <div class="flex justify-center">
          <img class="w-[80%]" src="../../../public/register.svg" alt="" />
        </div>
        <div class="flex flex-col items-center gap-5 !w-[70%]">
          <span class="text-white text-3xl font-extrabold">Criar Conta</span>
          <el-input
            v-model="registerUser.usuario"
            placeholder="Nome"
            prefix-icon="el-icon-user"
          ></el-input>
          <el-input
            v-model="registerUser.senha"
            placeholder="Senha"
            prefix-icon="el-icon-key"
          ></el-input>
          <el-button @click="register" class="w-[45%] !rounded-xl"
            >CADASTRAR</el-button
          >
          <div class="flex flex-col text-center gap-1">
            <span class="text-sm text text-white">Já possui uma conta?</span>
            <span
              @click="$router.push('/login')"
              class="cursor-pointer text-sm text text-white font-bold"
              >Logue aqui!</span
            >
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Register",

  data() {
    return {
      registerUser: {
        usuario: "",
        senha: "",
      },
    };
  },

  methods: {
    changeTheme() {
      this.$store.dispatch("theme/changeTheme");
    },

    async register() {
      const payload = this.registerUser;
      const register = await this.$store.dispatch("auth/setAuthUser", payload);

      if (register.status) {
        this.$notify.success({
          title: "Usuario criado com sucesso!",
          showClose: false,
        });
        this.$router.push("/login");
      } else {
        this.$notify.error({
          title: `${register.message}`,
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
