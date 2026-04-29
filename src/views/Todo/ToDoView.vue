<template>
  <div
    class="bg-white dark:bg-space-400 dark:text-secondary-100 w-full px-4 h-full overflow-hidden overflow-y-scroll rounded-lg flex flex-col justify-start"
  >
    <div
      v-for="tarefa in listaPaginada"
      class="border-y w-full flex justify-evenly p-2 hover:scale-105 transition-all duration-700"
    >
      <div class="pl-5 flex items-center w-[100%] overflow-hidden">
        <div class="w-[5%] mr-4">{{ tarefa.id }}</div>
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
          {{ tarefa.usuario }}
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
    };
  },

  computed: {
    listaDeTarefas() {
      const tasks = this.$store.getters["todo/getTodos"];
      const randomTasks = [...tasks].sort(() => Math.random() - 0.5);
      return randomTasks;
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

<style scoped>
.dark .el-switch {
  .el-switch__label.is-active {
    color: var(--space-200);
  }

  .el-switch__label--right {
    margin-left: 10px;
  }
}
</style>
