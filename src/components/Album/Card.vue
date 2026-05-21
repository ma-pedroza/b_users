<template>
  <div class="flex flex-col gap-3">
    <div class="!w-[300px] h-[280px] cursor-pointer">
      <img
        class="rounded-xl hover:scale-105 ease-in-out duration-300"
        :src="`https://picsum.photos/300/280?random=${album.id}}}`"
        alt="Imagem do album"
        @click="goToAlbum"
      />
    </div>
    <div class="flex items-start justify-between !w-[300px]">
      <div class="flex gap-2">
        <div class="!w-[40px] !h-[40px]">
          <el-avatar
            :src="`https://i.pravatar.cc/150?img=${album.userId}`"
            size="large"
            icon="el-icon-user-solid"
          ></el-avatar>
        </div>
        <div class="flex-grow">
          <span class="text-sm dark:text-light">{{ album.title }}</span>
        </div>
      </div>
      <div class="!w-[40px] !h-[40px] flex-shrink-0 flex justify-center">
        <i
          class="el-icon-star-off text-lg hover:scale-110 transition-transform duration-100 dark:text-light cursor-pointer"
          :class="[
            active
              ? 'el-icon-star-on text-lg scale-150 mt-1 text-[#ffc145] dark:text-[#ffc145]'
              : '',
          ]"
          @click="handleIcon"
        ></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",

  data() {
    return {
      active: false,
    };
  },

  props: {
    album: {
      type: Object,
      required: true,
    },
  },

  methods: {
    goToAlbum() {
      this.$router.push({
        name: "AlbumView",
        params: { id: this.album.id },
      });
    },

    handleIcon() {
      this.active = !this.active;
    },
  },
};
</script>
