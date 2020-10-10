<template lang="pug">
  .mt-6
    table.table.is-fullwidth.is-hoverable.has-background-black-ter
      thead
        tr
          th.has-text-white 번호
          th.has-text-white 제목
          th.has-text-white 날짜
          th.has-text-white 작성자
      tbody
        template(v-for="post in posts")
          tr.is-link(@click="onClick(post.sort,post.id)")
            td.has-text-light {{ post.id }}
            td.has-text-light {{ post.title }}
            td.has-text-light {{ createdAt(post.createdAt) }}
            td.has-text-light {{ post.user.nickname }}
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'PostTable',
  props: ['posts'],
  methods: {
    onClick(sort: string, id: number) {
      // @ts-ignore
      this.$router.push({ name: 'post', params: { post: sort, postId: id } });
      this.$store.dispatch('post/read', this.$route.params.postId)
        .then(() => {
          this.$store.dispatch('comment/list', this.$store.state.post.post.id);
        });
    },
    createdAt(createdAt: string) {
      const date = new Date(createdAt);
      return `${date.getFullYear()}/${date.getMonth()}/${date.getDay()}`;
    },
  },
});
</script>

<style lang="scss" scoped>
.is-link {
  cursor: pointer;
}

.table {
  &.is-hoverable tbody tr:hover {
    background: hsl(0, 0%, 21%) !important;
  }
}
</style>
