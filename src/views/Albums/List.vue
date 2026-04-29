<template>
  <div
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-y-4"
  >
    <Card :album="album" :key="album.id" v-for="album in albums" />
  </div>
</template>

<script>
import Card from "../../components/Album/Card";
export default {
  name: "List",

  components: {
    Card,
  },

  computed: {
    albums() {
      const albums = this.$store.getters["album/getAlbums"];

      const randomAlbums = [...albums].sort(() => Math.random() - 0.5);
      return randomAlbums;
    },
  },
};
</script>
