<template lang="pug">
  div
    Nav
    .container.mb-6.mt-6
      .columns
        NoticeBoard(sort="자유게시판" :posts="title('자유게시판')")
        NoticeBoard(sort="공지사항" :posts="title('공지사항')")
      .columns
        NoticeBoard(sort="게임" :posts="title('게임')")
        NoticeBoard(sort="콘솔" :posts="title('콘솔')")
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
  methods: {
    title(sort: string) {
      const posts = this.$store.state['post'].post.filter((post: Post) =>
        post.sort === sort,
      );

      return posts.slice(0, 10);
    },
  },
  created() {
    this.$store.dispatch('post/list');
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
</style>
