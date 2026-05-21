<template>
  <div>
    <!-- Desktop -->
    <div class="hidden md:flex justify-between py-3 items-center">
      <el-input
        class="!w-96 !border-none"
        v-model="search"
        size="medium"
        placeholder="Digite para pesquisar"
      />
      <div>
        <el-button
          class="!p-2"
          @click="changeLayout"
          size="medium"
          type="warning"
          ><i class="el-icon-s-grid text-"></i
        ></el-button>
        <el-button
          @click="setCreate()"
          class="!p-2 dark:bg-space-100 dark:border-space-400"
          size="medium"
          type="primary"
        >
          <i class="el-icon-plus"></i>
          Adicionar</el-button
        >
      </div>
    </div>

    <!-- Mobile -->
    <div
      class="block md:hidden flex flex-col justify-between py-3 items-center"
    >
      <el-input
        class="!w-full !border-none"
        v-model="search"
        size="medium"
        placeholder="Digite para pesquisar"
      />
      <div class="mt-2 w-full">
        <el-button
          class="!p-2"
          @click="changeLayout"
          size="medium"
          type="warning"
          ><i class="el-icon-s-grid text-"></i
        ></el-button>
        <el-button
          @click="setCreate()"
          class="!p-2 dark:bg-space-100 dark:border-space-400"
          size="medium"
          type="primary"
        >
          <i class="el-icon-plus"></i>
          Adicionar</el-button
        >
      </div>
    </div>

    <ListCards
      @detail="setDetail"
      v-if="layout == 'cards'"
      :users="users"
      :search="search"
    ></ListCards>
    <ListTable
      @edit="setEdit"
      @detail="setDetail"
      v-if="layout == 'table'"
      :users="users"
      :search="search"
    ></ListTable>
    <DialogDetail
      @close="dialogDetail = false"
      :dialogVisible="dialogDetail"
      :user="userSelectDetail"
    />
    <DialogEdit
      @close="dialogEdit = false"
      :dialogVisible="dialogEdit"
      :user="userSelectEdit"
    />

    <DialogCreate @close="dialogCreate = false" :dialogVisible="dialogCreate" />
  </div>
</template>

<script>
import ListCards from "@/components/Usuario/ListCards.vue";
import ListTable from "@/components/Usuario/ListTable.vue";
import DialogDetail from "@/components/Usuario/DialogDetail.vue";
import DialogCreate from "@/components/Usuario/DialogCreate.vue";
import DialogEdit from "@/components/Usuario/DialogEdit.vue";

export default {
  name: "List",

  data() {
    return {
      layout: "table",
      search: "",
      userSelectDetail: {
        type: Object,
      },
      userSelectEdit: {
        type: Object,
      },
      dialogDetail: false,
      dialogCreate: false,
      dialogEdit: false,
    };
  },

  components: {
    ListCards,
    ListTable,
    DialogDetail,
    DialogCreate,
    DialogEdit,
  },
  computed: {
    users() {
      return this.$store.state.usuario.usuarios;
    },
  },

  methods: {
    changeLayout() {
      if (this.layout == "table") {
        this.layout = "cards";
        return;
      }
      if (this.layout == "cards") {
        this.layout = "table";
        return;
      }
    },

    setDetail(user) {
      this.userSelectDetail = user;
      this.dialogDetail = true;
    },
    setCreate() {
      this.dialogCreate = true;
    },
    setEdit(user) {
      this.userSelectEdit = user;
      this.dialogEdit = true;
    },
  },
};
</script>
