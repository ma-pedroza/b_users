<template>
  <div
    class="flex flex-col bg-white dark:bg-space-500 pb-7 rounded-2xl h-[90%] shadow"
  >
    <div
      class="w-full rounded-t-2xl bg-gradient-to-br from-[#5576e2] to-[#1e40af] h-[100px] dark:from-[#5576e2] dark:to-[#01071a]"
    ></div>
    <div class="px-7 h-full">
      <div class="flex items-center">
        <div class="flex items-center gap-5 py-5 w-full">
          <el-image
            class="rounded-full w-24 h-24"
            :src="`https://i.pravatar.cc/150?img=${photoId}`"
          ></el-image>
          <div>
            <p class="font-bold dark:text-white">{{ form.usuario }}</p>
            <span
              class="font-medium text-secondary-400 dark:text-secondary-100"
              >{{ form.email }}</span
            >
          </div>
        </div>

        <div>
          <el-button @click="toggleDisabled" type="primary"> Editar </el-button>
        </div>
      </div>

      <div class="flex flex-col items-center">
        <div class="flex w-full gap-7 mb-5">
          <div class="w-full flex flex-col gap-y-1">
            <div class="font-medium text-secondary-400 dark:text-white">
              Nome completo
            </div>
            <el-input
              :disabled="isDisabled"
              v-model="form.nomeCompleto"
              class="!border-none"
              size="medium"
              placeholder="Seu nome"
            />
          </div>
          <div class="w-full flex flex-col gap-y-1">
            <div class="font-medium text-secondary-400 dark:text-white">
              Email
            </div>
            <el-input
              :disabled="isDisabled"
              v-model="form.email"
              class="!border-none"
              size="medium"
              placeholder="Seu email"
            />
          </div>
        </div>

        <div class="flex w-full gap-7 mb-5">
          <div class="w-full flex flex-col gap-y-1">
            <div class="font-medium text-secondary-400 dark:text-white">
              Nome de Usuario
            </div>
            <el-input
              :disabled="isDisabled"
              v-model="form.usuario"
              class="!border-none"
              size="medium"
              placeholder="Seu Nome de Usuario"
            />
          </div>
          <div class="w-full flex flex-col gap-y-1">
            <div class="font-medium text-secondary-400 dark:text-white">
              Senha
            </div>
            <el-input
              :disabled="isDisabled"
              v-model="form.senha"
              class="!border-none"
              size="medium"
              placeholder="Sua senha"
            />
          </div>
        </div>

        <div class="flex w-full gap-7 mb-5">
          <div class="w-full flex flex-col gap-y-1">
            <div class="font-medium text-secondary-400 dark:text-white">
              Gênero
            </div>
            <el-input
              :disabled="isDisabled"
              v-model="form.genero"
              class="!border-none"
              size="medium"
              placeholder="Seu gênero"
            />
          </div>
          <div class="w-full flex flex-col gap-y-1">
            <div class="font-medium text-secondary-400 dark:text-white">
              Linguagem
            </div>
            <el-input
              :disabled="isDisabled"
              v-model="form.linguagem"
              class="!border-none"
              size="medium"
              placeholder="Sua linguagem"
            />
          </div>
        </div>
        <div class="mt-8">
          <el-button @click="save" type="success"> Salvar </el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileView",

  data() {
    return {
      form: {
        usuario: "",
        senha: "",
        email: "",
        nomeCompleto: "",
        genero: "",
        linguagem: "",
      },
      isDisabled: true,
    };
  },

  methods: {
    toggleDisabled() {
      this.isDisabled = !this.isDisabled;
    },

    async save() {
      if (!this.isDisabled) {
        const payload = this.form;
        const result = await this.$store.dispatch(
          "auth/updateCurrentUser",
          payload
        );

        if (result.status) {
          this.$notify({
            title: result.message,
            type: "success",
          });
        }
      } else {
        this.$notify({
          title: "Não foi possível editar!",
          message: "Edição esta desabilitada.",
          type: "warning",
        });
      }
    },
  },

  computed: {
    photoId() {
      const userName = this.form.usuario || "A";
      const primeiraLetra = userName[0];
      return primeiraLetra ? primeiraLetra.toUpperCase().charCodeAt(0) - 64 : 1;
    },
  },

  mounted() {
    const user = this.$store.getters["auth/getCurrentUser"];
    this.form = { ...user };
  },
};
</script>

<style></style>
