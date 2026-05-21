<template>
  <main>
    <!-- Desktop -->
    <el-table
      :data="
        users.filter(
          (data) =>
            !search || data.name.toLowerCase().includes(search.toLowerCase())
        )
      "
      class="rounded-2xl hidden md:block"
      empty-text="Não há registros."
      max-height="650"
    >
      <el-table-column label="Nome" prop="name">
        <template slot-scope="scope">
          <div class="flex items-center gap-2">
            <el-avatar
              :src="`https://i.pravatar.cc/150?img=${scope.row.id}`"
              size="large"
              icon="el-icon-user-solid"
            ></el-avatar>
            <span>{{ scope.row.name }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="Email" prop="email"> </el-table-column>
      <el-table-column label="Telefone" prop="phone"></el-table-column>
      <el-table-column label="Empresa" prop="company.name"></el-table-column>
      <el-table-column label="Ações" align="center">
        <template slot-scope="scope">
          <el-button
            @click="emitDetail(scope.row)"
            class="!px-1 !py-1 dark:bg-space-400 dark:text-white"
            size="mini"
          >
            <i class="text-lg -0 el-icon-tickets"></i>
          </el-button>
          <el-button
            @click="emitEdit(scope.row)"
            class="!px-1 !py-1 dark:bg-space-400 dark:text-white"
            size="mini"
          >
            <i class="text-lg -0 el-icon-edit-outline"></i>
          </el-button>
          <el-button
            class="!px-1 !py-1"
            size="mini"
            type="danger"
            @click="deleteUser(scope.row)"
          >
            <i class="text-lg -0 el-icon-delete"></i>
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- Mobile -->
    <el-table
      :data="
        users.filter(
          (data) =>
            !search || data.name.toLowerCase().includes(search.toLowerCase())
        )
      "
      class="rounded-2xl block md:hidden"
      empty-text="Não há registros."
      max-height="750"
    >
      <el-table-column min-width="150" label="Nome" prop="name">
        <template slot-scope="scope">
          <div class="flex items-center gap-2">
            <el-avatar
              :src="`https://i.pravatar.cc/150?img=${scope.row.id}`"
              size="large"
              icon="el-icon-user-solid"
            ></el-avatar>
            <span>{{ scope.row.name }}</span>
          </div>
        </template>
      </el-table-column>

      <el-table-column label="Ações" align="center">
        <template slot-scope="scope">
          <el-dropdown>
            <i class="el-icon-more"></i>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item
                  @click.native="emitDetail(scope.row)"
                  class="dark:bg-space-400 dark:text-white"
                >
                  <i class="text-lg -0 el-icon-tickets"></i>
                  Detalhes
                </el-dropdown-item>

                <el-dropdown-item
                  @click.native="emitEdit(scope.row)"
                  class="dark:bg-space-400 dark:text-white"
                >
                  <i class="text-lg -0 el-icon-edit-outline"></i>
                  Editar
                </el-dropdown-item>

                <el-dropdown-item
                  @click.native="deleteUser(scope.row)"
                >
                  <i class="text-lg -0 el-icon-delete"></i>
                  Excluir
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </template>
      </el-table-column>
    </el-table>
  </main>
</template>

<script>
export default {
  name: "ListTable",

  props: {
    users: {
      type: Array,
    },
    search: {
      type: String,
    },
  },

  methods: {
    emitDetail(row) {
      this.$emit("detail", row);
    },

    emitEdit(row) {
      this.$emit("edit", row);
    },

    deleteUser(user) {
      this.$confirm("Deseja excluir este usuário?", "Aviso", {
        confirmButtonText: "OK",
        cancelButtonText: "Cancelar",
        type: "warning",
        center: true,
      })
        .then(() => {
          this.$notify({
            title: "Excluido",
            message: "Usuário excluido com sucesso!",
            type: "success",
          });
        })
        .catch((error) => {
          console.error(error);
          this.$notify.error({
            title: "Erro",
            message: "Não foi possível excluir o usuário.",
          });
        });
    },
  },
};
</script>
