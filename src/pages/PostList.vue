<template lang="pug">
  div
    Nav
    PostTable(:posts="posts()" :title="title()")
    Pagination
    Footer
</template>

<script lang="ts">
import Vue from 'vue';
import Nav from '@/components/Nav.vue';
import PostTable from '@/components/PostTable.vue';
import Pagination from '@/components/Pagination.vue';
import Footer from '@/components/Footer.vue';
import { Post } from '@/types/post';

export default Vue.extend({
  name: 'PostList',
  components: { Nav, PostTable, Pagination, Footer },
  methods: {
    posts() {
      const posts = this.$store.state['post'].post.filter((post: Post) =>
        post.sort === this.$router.currentRoute.params.post,
      );
      return posts;
    },
    title() {
      return this.$router.currentRoute.params.post;
    },
  },
});
</script>

<style scoped>

</style>
