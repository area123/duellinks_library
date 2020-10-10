<template lang="pug">
  div.has-background-black-bis
    Nav
    .container.mb-6.pt-6.is-fullheight-with-navbar
      h1.title.has-text-centered.has-text-white {{ sort }}
      PostTable(:posts="posts" :title="sort")
      Pagination
    Footer
</template>

<script lang="ts">
import Vue from 'vue';
import Nav from '@/components/Nav.vue';
import PostTable from '@/components/PostTable.vue';
import Pagination from '@/components/Pagination.vue';
import Footer from '@/components/Footer.vue';

export default Vue.extend({
  name: 'PostList',
  components: { Nav, PostTable, Pagination, Footer },
  data() {
    return {
      loading: false,
    };
  },
  computed: {
    sort() {
      return this.$route.params.post;
    },
    posts() {
      return this.$store.state.post.posts;
    },
  },

  mounted() {
    this.loading = true;
    const payload = {
      page: 1,
      sort: this.sort,
    };
    this.$store.dispatch('post/list', payload)
      .then(() => (this.loading = false));
  },
});
</script>

<style lang="scss" scoped>
.is-fullheight-with-navbar {
  min-height: calc(100vh - 3.25rem - 17.5rem);
}
</style>
