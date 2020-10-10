<template lang="pug">
  div.has-background-black-bis
    Nav
    .container.mb-6.pt-6.is-fullheight-with-navbar
      .columns
        NoticeBoard(sort="자유게시판" :posts="title('자유게시판')" :loading="loading")
        NoticeBoard(sort="공지사항" :posts="title('공지사항')" :loading="loading")
      .columns
        NoticeBoard(sort="게임" :posts="title('게임')" :loading="loading")
        NoticeBoard(sort="콘솔" :posts="title('콘솔')" :loading="loading")
    Footer
</template>

<script lang="ts">
import Vue from 'vue';
import NoticeBoard from '@/components/NoticeBoard.vue';
import Nav from '@/components/Nav.vue';
import Footer from '@/components/Footer.vue';
import { Post } from '@/types/post';

export default Vue.extend({
  components: { NoticeBoard, Nav, Footer },
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    title(sort: string) {
      if (this.$store.state.post.posts === null) {
        return;
      }
      return this.$store.state.post.posts.filter((post: Post) =>
        post.sort === sort,
      );
    },
  },
  created() {
    this.loading = true;
    const payload = {
      page: 1,
      sort: null,
    };
    this.$store.dispatch('post/list', payload)
      .then(() => {
        this.loading = false;
      });
  },
});
</script>

<style lang="scss" scoped>
.columns {
  &:not(:last-child) {
    margin-bottom: 2rem;
  }
}

.column {
  &:not(:last-child) {
    margin-right: 1rem;
  }
}

.is-fullheight-with-navbar {
  min-height: calc(100vh - 3.25rem - 17.5rem);
}
</style>
