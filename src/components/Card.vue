<template>
  <el-card
    class="w-[400px] !rounded-3xl dark:bg-space-500 dark:shadow-space-500 dark:text-secondary-100 dark:border-none dark:hover:bg-space-400"
  >
    <div class="flex flex-row !justify-between items-center">
      <div class="flex flex-row gap-5">
        <div>
          <el-avatar
            size="large"
            icon="el-icon-user-solid"
            :src="`https://i.pravatar.cc/150?img=${user.id}`"
          ></el-avatar>
        </div>
        <div>
          <h1 class="font-bold truncate text-lg">
            <span>{{ user.name }}</span>
          </h1>
          <p class="font-semi-bold text-text-secondary text-xs">
            {{ user.email }}
          </p>
        </div>
      </div>
      <div class="flex items-center justify-end">
        <el-button
          @click="emitDetail(user)"
          size="mini"
          type="default"
          class="!border-none !px-2 dark:bg-space-500 dark:text-secondary-100"
        >
          <i
            class="el-icon-tickets text-2xl text-text-secondary transition-all hover:scale-105"
          ></i>
        </el-button>
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
  name: "Card",

  data() {
    return {};
  },

  methods: {
    emitDetail(user) {
      this.$emit("detail", user);
    },
  },

  props: {
    user: {
      type: Object,
    },
  },
};
</script>

<style scoped>
.el-button--default {
  border: 0px;
  padding: 0px;
  background-color: inherit;
  border-color: inherit;
  color: inherit;
}

.dark .el-button--default {
  border: 0px;
  padding: 0px;
  background-color: inherit;
  border-color: inherit;
  color: inherit;
}
</style>
