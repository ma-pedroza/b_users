<template>
  <el-row class="py-5" :gutter="20">
    <!-- Desktop -->
    <el-col
      v-for="user in usersFiltrados"
      :span="8"
      class="mb-8 hidden md:block"
    >
      <div class="flex justify-center items-center">
        <Card @detail="emitDetail" :user="user" :key="user.id"></Card>
      </div>
    </el-col>
    <el-col
      v-for="user in usersFiltrados"
      :span="24"
      class="mb-8 block md:hidden"
    >
      <div class="flex justify-center items-center">
        <Card @detail="emitDetail" :user="user" :key="user.id"></Card>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import Card from "../Card.vue";

export default {
  name: "ListCards",

  props: {
    users: {
      type: Array,
    },
    search: String,
  },

  components: {
    Card,
  },

  methods: {
    emitDetail(user) {
      this.$emit("detail", user);
    },
  },

  computed: {
    usersFiltrados() {
      if (!this.search) return this.users;

      return this.users.filter((user) =>
        user.name.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
};
</script>
