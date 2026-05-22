<template>
  <main>
    <!-- Desktop -->
    <div
      class="hidden md:block bg-white flex flex-col justify-center gap-4 dark:bg-space-500 dark:text-secondary-100 w-full px-4 h-full overflow-hidden overflow-y-scroll rounded-lg flex flex-col justify-start"
    >
      <div class="flex mt-4 gap-2">
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
          class="border-y dark:border-space-400 w-full flex justify-evenly p-2 hover:scale-105 transition-all duration-700"
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

      <div ref="sentinelDesktop"></div>
    </div>

    <!-- Mobile -->
    <div
      class="flex md:hidden flex-col gap-4 bg-white dark:bg-space-400 dark:text-secondary-100 w-full px-4 h-full overflow-hidden overflow-y-scroll rounded-lg"
    >
      <div class="flex gap-2 pt-2">
        <el-input
          class="!border-none"
          size="medium"
          v-model="search"
          placeholder="Pesquisar"
        />
        <el-select
          v-model="filter"
          size="medium"
          placeholder="Filtrar"
          style="width: 110px"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>

      <div class="flex-1 overflow-y-auto overflow-x-hidden">
        <div
          class="w-full flex p-2 font-semibold text-sm text-gray-500 dark:text-secondary-100"
        >
          <div class="pl-3 flex items-center w-[75%]">
            <span>Descrição</span>
          </div>
          <div class="flex w-[25%] items-center justify-center">
            <span>Status</span>
          </div>
        </div>
        <div
          v-for="tarefa in listaPaginada"
          :key="tarefa.id"
          class="border-y w-full flex p-2"
        >
          <div
            class="pl-3 flex flex-col items-start w-[75%] overflow-hidden gap-1"
          >
            <div class="truncate w-full text-sm font-medium">
              {{ tarefa.title }}
            </div>
            <div
              class="flex items-center gap-2 text-xs text-gray-500 dark:text-secondary-100"
            >
              <el-avatar
                size="small"
                icon="el-icon-user-solid"
                :src="`https://i.pravatar.cc/150?img=${tarefa.userId}`"
              ></el-avatar>
              <span class="truncate">{{ tarefa.nomeUsuario }}</span>
            </div>
          </div>

          <div class="w-[25%] flex items-center justify-center">
            <el-switch
              v-model="tarefa.completed"
              active-color="var(--color-success)"
              inactive-color="var(--color-error)"
            >
            </el-switch>
          </div>
        </div>
        <div v-if="loading" class="py-4 flex justify-center">
          <i class="el-icon-loading text-xl"></i>
          <span class="ml-2">Carregando...</span>
        </div>
      </div>

      <div ref="sentinelMobile"></div>
    </div>
  </main>
</template>

<script>
export default {
  name: "ToDoView",
  data() {
    return {
      currentPage: 1,
      itemsPage: 12,
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
          tarefa.nomeUsuario = usuario?.name;
          return tarefa;
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

      this.observer.observe(this.$refs.sentinelDesktop);
      this.observer.observe(this.$refs.sentinelMobile);
    },
  },

  mounted() {
    this.createObserver();
  },
};
</script>

<style scoped></style>
