<template>
  <div class="flex flex-col gap-16 items-center">
    <PostCard :post="post" :key="post.id" v-for="post in posts" />
  </div>
</template>

<script>
import PostCard from "@/components/Post/PostCard.vue";

export default {
  name: "Feed",
  components: {
    PostCard,
  },

  computed: {
    posts() {
      const posts = this.$store.getters["post/getPosts"];

      const randomPosts = [...posts].sort(() => Math.random() - 0.5);
      return randomPosts;
    },
  },
};
</script>
