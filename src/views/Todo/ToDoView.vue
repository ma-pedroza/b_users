<template>
  <div
    class="bg-white flex flex-col justify-center gap-4 dark:bg-space-400 dark:text-secondary-100 w-full px-4 h-full overflow-hidden overflow-y-scroll rounded-lg flex flex-col justify-start"
  >
    <div class="flex gap-2">
      <el-input
        class="!w-96 !border-none"
        size="medium"
        v-model="search"
        placeholder="Digite para pesquisar"
      />
      <el-select
        v-model="filter"
        size="medium"
        placeholder="Filtrar por:"
        style="width: 150px"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </div>

    <div class="h-[85%] overflow-y-auto overflow-x-hidden mt-15">
      <div
        class="w-full flex justify-evenly p-2 font-semibold text-sm text-gray-500 dark:text-secondary-100"
      >
        <div class="pl-5 flex items-center w-[100%] overflow-hidden">
          <span class="w-[5%] mr-4">Id</span>
          <span>Titulo</span>
        </div>
        <div class="flex w-full items-center">
          <span class="w-[60%] ml-2">Responsável</span>
          <span class="w-[40%] flex justify-center">Status</span>
        </div>
      </div>
      <div
        v-for="tarefa in listaPaginada"
        class="border-y w-full flex justify-evenly p-2 hover:scale-105 transition-all duration-700"
      >
        <div class="pl-5 flex items-center w-[100%] overflow-hidden">
          <div label="Id" class="w-[5%] mr-4">{{ tarefa.id }}</div>
          <div class="truncate">
            {{ tarefa.title }}
          </div>
        </div>

        <div class="flex w-full items-center">
          <div class="w-[60%] ml-2 flex items-center gap-5">
            <el-avatar
              size="small"
              icon="el-icon-user-solid"
              :src="`https://i.pravatar.cc/150?img=${tarefa.userId}`"
            ></el-avatar>
            {{ tarefa.nomeUsuario }}
          </div>
          <div class="w-[40%] flex justify-center">
            <el-switch
              style="display: block"
              v-model="tarefa.completed"
              active-color="var(--color-success)"
              inactive-color="var(--color-error)"
              active-text="Feito"
              inactive-text="Fazer"
            >
            </el-switch>
          </div>
        </div>
      </div>
      <div v-if="loading" class="py-4 flex justify-center">
        <i class="el-icon-loading text-xl"></i>
        <span class="ml-2">Carregando...</span>
      </div>
    </div>

    <div ref="sentinel"></div>
  </div>
</template>

<script>
export default {
  name: "ToDoView",
  data() {
    return {
      currentPage: 1,
      itemsPage: 10,
      observer: null,
      loading: false,
      search: "",
      filter: "",
      options: [
        { value: "Usuario", label: "Usuario" },
        {
          value: "Tarefa",
          label: "Tarefa",
        },
      ],
    };
  },

  computed: {
    listaDeTarefas() {
      const tasks = this.$store.getters["todo/getTodos"];
      const getUsuario = this.$store.getters["usuario/getUsuarioById"];

      return [...tasks]
        .sort(() => Math.random() - 0.5)
        .map((tarefa) => {
          const usuario = getUsuario(tarefa.userId);
          return {
            ...tarefa,
            nomeUsuario: usuario?.name,
          };
        })
        .filter((tarefa) => {
          if (this.filter === "Usuario") {
            return tarefa.nomeUsuario.toLowerCase().includes(this.search);
          }
          if (this.filter === "Tarefa") {
            return tarefa.title.toLowerCase().includes(this.search);
          }
          return tarefa;
        });
    },

    listaPaginada() {
      const fim = this.currentPage * this.itemsPage;

      return this.listaDeTarefas.slice(0, fim);
    },
  },

  methods: {
    loadMore() {
      if (this.loading) return;

      this.loading = true;

      setTimeout(() => {
        this.currentPage++;
        this.loading = false;
      }, 1000);
    },

    createObserver() {
      this.observer = new IntersectionObserver((entries) => {
        if (
          entries[0].isIntersecting &&
          !this.loading &&
          this.listaPaginada.length < this.listaDeTarefas.length
        ) {
          this.loadMore();
        }
      });

      this.observer.observe(this.$refs.sentinel);
    },
  },

  mounted() {
    this.createObserver();
  },
};
</script>

<style scoped></style>
