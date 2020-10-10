<template lang="pug">
  div.has-background-black-bis
    Nav
    .container.mb-6.pt-6.is-fullheight-with-navbar
      template(v-if="loading")
        span.icon.is-large
          font-awesome-icon.spin(icon="spinner" size="4x" rotation="90")
      template(v-else)
        PostCard(:is-writer="isWriter")
        CommentForm(title="댓글 달기" button="댓글 작성")
        CommentList(v-if="isComments")
      PostTable(:posts="posts" :title="sort")
      Pagination
    Footer
</template>

<script lang="ts">
import Vue from 'vue';
import Nav from '@/components/Nav.vue';
import PostCard from '@/components/PostCard.vue';
import PostTable from '@/components/PostTable.vue';
import Pagination from '@/components/Pagination.vue';
import Footer from '@/components/Footer.vue';
import CommentForm from '@/components/CommentForm.vue';
import CommentList from '@/components/CommentList.vue';

export default Vue.extend({
  name: 'Post',
  components: { Nav, PostCard, Pagination, Footer, PostTable, CommentForm, CommentList },
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
    post() {
      return this.$store.state.post.post;
    },
    isWriter() {
      if (this.$store.state.user.user === null) {
        return false;
      }
      const post = this.$store.getters['post/post'](this.$route.params.postId)[0];
      return this.$store.state.user.user.id === post.user.id;
    },
    isComments() {
      return this.$store.getters['comment/isComments'];
    },
  },
  created() {
    this.loading = true;
    const payload = {
      id: this.$route.params.postId,
      sort: this.sort,
    };
    this.$store.dispatch('post/read', this.$route.params.postId)
      .then(() => {
        this.$store.dispatch('post/list', payload).then(() => {
          this.loading = false;
        });
      });
  },
});
</script>

<style lang="scss" scoped>
.spin {
  animation: rotate_icon 3s linear infinite;
  transform-origin: 50% 50%;
}

@keyframes rotate_icon {
  100% {
    transform: rotate(360deg);
  }
}

.is-fullheight-with-navbar {
  min-height: calc(100vh - 3.25rem - 17.5rem);
}
</style>
