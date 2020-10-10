<template lang="pug">
  div
    template(v-if="!loading && isComments")
      template(v-for="comment in comments")
        CommentItem(:comment="comment")
</template>

<script lang="ts">
import Vue from 'vue';
import CommentItem from '@/components/CommentItem.vue';

export default Vue.extend({
  name: 'CommentList',
  components: { CommentItem },
  computed: {
    comments() {
      return this.$store.state.comment.comments;
    },
    isComments() {
      return this.$store.state.comment.comments !== null;
    },
    loading() {
      return this.$store.state.comment.loading;
    },
  },
  mounted() {
    this.$store.dispatch('comment/list', this.$store.state['post'].post.id);
  },
});
</script>

<style scoped>

</style>
