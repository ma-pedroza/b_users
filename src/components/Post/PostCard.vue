<template>
  <el-card
    :body-style="{ padding: '0px' }"
    class="box-card w-[clamp(320px, 30vw ,550px)] h-[auto] !rounded-2xl dark:bg-space-500 dark:text-light dark:border-space-800 dark:shadow hover:scale-105 transition-transform duration-100 pointer"
  >
    <div class="p-2 flex items-center gap-2">
      <el-avatar
        shape="circle"
        size="large"
        :src="`https://i.pravatar.cc/150?img=${post.userId}`"
      />
      <div class="flex flex-col">
        <span class="font-semibold"> {{ Usuario.username }} </span>
        <span class="font-semibold text-sm">{{ Usuario.email }}</span>
      </div>
    </div>
    <div>
      <img
        :src="`https://picsum.photos/550/550?random=${post.image}}`"
        alt=""
      />
    </div>
    <div class="p-3 flex gap-3">
      <button>
        <i
          class="text-2xl el-icon-star-off hover:scale-110 transition-transform duration-100"
          :class="[active ? 'el-icon-star-on scale-125 text-[#ffc145]' : '']"
          @click="handleIcon"
        ></i>
      </button>
      <button @click="commentsBoolean">
        <i class="text-2xl el-icon-chat-round"></i>
      </button>
    </div>
    <div v-if="commentsOpen" class="flex flex-col items-center">
      <div
        class="border-t-[0.1px] border-b-[0.1px] border-opacity-50 w-full flex justify-center py-2"
      >
        <p>Comentários</p>
      </div>
      <div class="p-2">
        <div class="flex gap-3 p-3" v-for="comment in comments">
          <div class="!w-[35px] !h-[35px]">
            <el-avatar
              shape="circle"
              :src="`https://i.pravatar.cc/150?img=${Math.random()}`"
              size="small"
            />
          </div>
          <p class="text-sm">{{ comment.body }}</p>
        </div>
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
  name: "PostCard",

  data() {
    return {
      commentsOpen: false,
      comments: [],
      active: false,
    };
  },

  props: {
    post: {
      type: Object,
      required: true,
    },
  },

  computed: {
    Usuario() {
      const usuario = this.$store.getters["usuario/getUsuarioById"](
        this.post.userId
      );
      return usuario;
    },
  },

  methods: {
    getComments() {
      const comentarios = this.$store.getters["comment/getCommentsByPost"](
        this.post.id
      );
      this.comments = comentarios;
    },

    commentsBoolean() {
      this.getComments();
      this.commentsOpen = !this.commentsOpen;
    },

    handleIcon() {
      this.active = !this.active;
    },
  },
};
</script>
