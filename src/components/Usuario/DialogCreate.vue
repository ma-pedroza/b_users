<template>
  <el-dialog
    @close="emit"
    :visible.sync="dialogVisible"
    width="clamp(400px, 30vw, 550px)"
    class="custom-dialog"
  >
    <div class="flex flex-col items-center justify-center gap-1">
      <el-avatar
        class="!w-[80px] !h-[80px] mt-[-30px] !flex items-center justify-center border border-white dark:border-space-700 border-4"
      >
        <i class="text-4xl el-icon-user-solid"></i>
      </el-avatar>
      <el-form label-position="top" ref="form" :model="payload" :rules="rules">
        <div class="flex gap-2">
          <el-form-item prop="name">
            <el-input
              placeholder="Nome"
              suffix-icon="el-icon-s-custom"
              v-model="payload.name"
            >
            </el-input>
          </el-form-item>
          <el-form-item prop="username">
            <el-input
              placeholder="Nome de Usuario"
              suffix-icon="el-icon-user"
              v-model="payload.username"
            >
            </el-input>
          </el-form-item>
        </div>
        <div class="flex gap-2">
          <el-form-item prop="email">
            <el-input
              placeholder="Email"
              suffix-icon="el-icon-message"
              v-model="payload.email"
            >
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              placeholder="Telefone"
              suffix-icon="el-icon-phone-outline"
              v-model="payload.phone"
            >
            </el-input>
          </el-form-item>
        </div>

        <el-form-item class="!m-0">
          <el-input
            placeholder="Website"
            suffix-icon="el-icon-monitor"
            v-model="payload.website"
          >
          </el-input>
        </el-form-item>
        <h2 class="text-center p-3 font-semibold text-secondary text-lg">
          Empresa
        </h2>
        <div class="flex gap-2">
          <el-form-item>
            <el-input
              placeholder="Nome"
              suffix-icon="el-icon-office-building"
              v-model="payload.company.name"
            >
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              placeholder="Frase de efeito"
              suffix-icon="el-icon-edit"
              v-model="payload.company.catchPhrase"
            >
            </el-input>
          </el-form-item>
        </div>
        <el-form-item class="!m-0">
          <el-input
            placeholder="Negócio"
            suffix-icon="el-icon-suitcase"
            v-model="payload.company.bs"
          >
          </el-input>
        </el-form-item>
        <h2 class="text-center p-3 font-semibold text-secondary text-lg">
          Endereço
        </h2>
        <div class="flex gap-2">
          <el-form-item>
            <el-input
              placeholder="Rua"
              suffix-icon="el-icon-location-outline"
              v-model="payload.address.street"
            >
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              placeholder="Número"
              suffix-icon="el-icon-house"
              v-model="payload.address.suite"
            >
            </el-input>
          </el-form-item>
        </div>
        <el-form-item>
          <el-input
            placeholder="Cidade"
            suffix-icon="el-icon-school"
            v-model="payload.address.city"
          >
          </el-input>
        </el-form-item>
      </el-form>
    </div>

    <span slot="footer" class="dialog-footer">
      <div class="flex justify-center">
        <el-button @click="criar()" type="primary">Criar</el-button>
      </div>
    </span>
  </el-dialog>
</template>

<script>
export default {
  name: "DialogCreate",

  data() {
    return {
      payload: {
        name: "",
        username: "",
        email: "",
        address: {
          street: "",
          suite: "",
          city: "",
          zipcode: "",
        },
        phone: "",
        website: "",
        company: {
          name: "",
          catchPhrase: "",
          bs: "",
        },
      },
      rules: {
        name: [
          { required: true, message: "Nome obrigatório", trigger: "blur" },
          { min: 3, message: "Mínimo 3 caracteres", trigger: "blur" },
        ],
        username: [
          {
            required: true,
            message: "Nome de Usuario obrigatório",
            trigger: "blur",
          },
          { min: 3, message: "Mínimo 3 caracteres", trigger: "blur" },
        ],
        email: [
          { required: true, message: "Email obrigatório", trigger: blur },
          {
            type: "email",
            message: "Formato inválido",
            trigger: ["blur", "change"],
          },
        ],
      },
    };
  },

  props: {
    dialogVisible: Boolean,
  },

  methods: {
    emit() {
      this.$emit("close");
    },

    criar() {
      const loadingInstance = this.$loading({
        lock: true,
        text: "Carregando",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)",
      });

      this.$refs.form.validate((valid) => {
        if (!valid) {
          loadingInstance.close();
          console.log("Erro na validação!");
          return;
        }

        this.$store
          .dispatch("usuario/postUsuario", this.payload)
          .then(() => {
            this.$notify({
              title: "Sucesso",
              message: "Usuário criado com sucesso!",
              type: "success",
            }),
              loadingInstance.close();
            this.emit();
          })
          .catch((error) => {
            console.error(error);
            this.$notify.error({
              title: "Erro",
              message: "Não foi possível criar o usuário.",
            });
          });
      });
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
