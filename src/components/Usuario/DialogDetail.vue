<template>
  <el-dialog
    @close="emit"
    :visible.sync="dialogVisible"
    width="30%"
    class="custom-dialog"
  >
    <div class="flex flex-col items-center justify-center gap-2 py-4">
      <el-avatar
        :src="`https://i.pravatar.cc/150?img=${user.id}`"
        class="!w-[90px] !h-[90px] mt-[-40px] !flex items-center justify-center border-4 border-white dark:border-space-800 shadow-lg"
      >
        <i class="text-4xl el-icon-user-solid"></i>
      </el-avatar>
      <h1 class="text-2xl font-bold mt-2">{{ user.name }}</h1>
      <span class="font-semibold text-secondary-500 dark:text-secondary-200"
        >@{{ user.username }}</span
      >
      <span class="font-medium text-sm text-gray-500 dark:text-gray-300">{{
        user.email
      }}</span>
      <span
        v-if="user.website"
        class="text-xs text-blue-600 dark:text-blue-400 underline cursor-pointer"
        @click="openWebsite(user.website)"
        >{{ user.website }}</span
      >
    </div>

    <div class="grid grid-cols-2 gap-4 px-4 py-2">
      <div
        class="flex flex-col items-center bg-gray-50 dark:bg-space-500 rounded-lg p-2 shadow"
      >
        <span class="font-semibold text-xs text-secondary-400">ID</span>
        <span class="text-sm">{{ user.id }}</span>
      </div>
      <div
        class="flex flex-col items-center bg-gray-50 dark:bg-space-500 rounded-lg p-2 shadow"
      >
        <span class="font-semibold text-xs text-secondary-400">Telefone</span>
        <span class="text-sm">{{ user.phone }}</span>
      </div>
      <div
        class="flex flex-col items-center bg-gray-50 dark:bg-space-500 rounded-lg p-2 shadow"
      >
        <span class="font-semibold text-xs text-secondary-400">Empresa</span>
        <span class="text-sm">{{ user.company?.name }}</span>
        <span
          v-if="user.company?.catchPhrase"
          class="text-xs italic text-gray-400 mt-1"
          >{{ user.company.catchPhrase }}</span
        >
      </div>
      <div
        class="flex flex-col items-center bg-gray-50 dark:bg-space-500 rounded-lg p-2 shadow"
      >
        <span class="font-semibold text-xs text-secondary-400">Endereço</span>
        <span class="text-sm text-center">
          {{ user.address?.street }}, {{ user.address?.suite }}<br />
          {{ user.address?.city }}
        </span>
      </div>
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: "DialogDetail",

  data() {
    return {};
  },

  props: {
    user: {
      type: Object,
      required: true,
    },
    dialogVisible: Boolean,
  },

  methods: {
    emit() {
      this.$emit("close");
    },
    openWebsite(website) {
      let url = website;
      if (!/^https?:\/\//i.test(url)) {
        url = "http://" + url;
      }
      window.open(url, "_blank");
    },
  },
};
</script>

<style>
.custom-dialog .el-dialog {
  border-radius: 24px;
  overflow: hidden;
}
.custom-dialog .el-dialog__body {
  padding: 0px 20px;
}

.custom-dialog .el-dialog__header {
  height: 100px;
  background: linear-gradient(135deg, #5576e2, #1e40af);
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  overflow: hidden;
}

.dark {
  .custom-dialog .el-dialog__header {
    background: linear-gradient(135deg, #5576e2, #01071a);
  }
  .custom-dialog .el-dialog {
    background-color: var(--space-800);
  }
  .custom-dialog .el-dialog__body {
    color: var(--color-text-white);
    background-color: var(--space-800);
  }

  .custom-dialog .el-dialog__footer {
    background-color: var(--space-800);
  }
}
</style>
