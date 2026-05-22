<template>
  <div>
    <div class="flex items-center gap-4 mb-6">
      <el-button
        class="dark:bg-space-400 dark:text-white"
        @click="$router.back()"
        icon="el-icon-arrow-left"
        circle
      ></el-button>
      <el-avatar
        :src="`https://i.pravatar.cc/150?img=${album.userId}`"
        size="large"
        icon="el-icon-user-solid"
      />
      <div>
        <h1 class="text-lg font-bold dark:text-white capitalize">
          {{ album.title }}
        </h1>
        <span class="text-sm text-gray-500 dark:text-gray-400">
          {{ albumPhotos.length }} fotos
        </span>
      </div>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
      <div
        v-for="photo in albumPhotos"
        :key="photo.id"
        class="flex flex-col gap-1 cursor-pointer"
      >
        <el-image
          class="rounded-xl w-full aspect-square overflow-hidden hover:scale-105 transition-all"
          :src="`https://picsum.photos/150?random=${photo.id}`"
          :preview-src-list="previewList"
          fit="cover"
          lazy
        >
          <div
            slot="placeholder"
            class="w-full h-full bg-gray-200 dark:bg-space-500 animate-pulse rounded-xl"
          ></div>
          <div
            slot="error"
            class="w-full h-full bg-gray-200 dark:bg-space-500 flex items-center justify-center rounded-xl"
          >
            <i class="el-icon-picture-outline text-2xl text-gray-400"></i>
          </div>
        </el-image>
        <span
          class="text-xs text-gray-600 dark:text-gray-400 truncate px-1"
          :title="photo.title"
        >
          {{ photo.title }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "View",

  props: {
    id: {
      type: String,
      required: true,
    },
  },

  computed: {
    album() {
      const albums = this.$store.getters["album/getAlbums"];
      return albums.find((a) => a.id === Number(this.id)) || {};
    },

    albumPhotos() {
      const photos = this.$store.getters["photo/getPhotos"];
      return photos.filter((p) => p.albumId === Number(this.id));
    },

    previewList() {
      return this.albumPhotos.map(
        (p) => `https://picsum.photos/600?random=${p.id}`
      );
    },
  },
};
</script>
