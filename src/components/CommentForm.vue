<template lang="pug">
  .box.mb-0.has-background-black-ter
    template(v-if="isLogin")
      .field
        label.label.has-text-white {{ title }}
        .control
          input.input.has-background-black-ter.has-text-light(v-model="content" type="text" placeholder="댓글을 입력해주세요")
      .field
        .control
          button.button.is-white(@click="onClick()") {{ button }}
    template(v-else)
      .notification
        | 로그인하지 않으면 댓글을 작성할수 없습니다.
</template>

<script lang="ts">
import Vue from 'vue';
import { CommentRequest } from '@/types/comment';

export default Vue.extend({
  name: 'CommentForm',
  props: ['title', 'update', 'button', 'id', 'comment'],
  data() {
    return {
      content: '',
    };
  },
  computed: {
    isLogin() {
      return this.$store.state.user.user !== null;
    },
  },
  methods: {
    onClick() {
      if (this.$props.update) {
        const comment: CommentRequest = {
          content: this.$data.content,
          parent: this.$props.comment.parent,
          seq: this.$props.comment.seq,
          postId: this.$store.state.post.post.id,
        };
        const payload = {
          data: comment,
          id: this.$props.id,
        };
        this.$store.dispatch('comment/update', payload).then(() => {
          this.$emit('change');
        });
      } else if (this.$props.comment) {
        const comment: CommentRequest = {
          content: this.$data.content,
          parent: this.$props.comment.id,
          seq: this.$props.comment.seq + 1,
          postId: this.$store.state.post.post.id,
        };
        this.$store.dispatch('comment/write', comment).then(() => {
          this.$emit('write');
        });
      } else {
        const comment: CommentRequest = {
          content: this.$data.content,
          parent: null,
          seq: 1,
          postId: this.$store.state.post.post.id,
        };
        this.$store.dispatch('comment/write', comment);
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.box {
  border-radius: 0 0 0 0;
  border-top: 1px solid hsl(0, 0%, 100%);
}

input {
  &::placeholder {
    color: hsl(0, 0%, 86%);
  }

  &:focus {
    border-color: hsl(0, 0%, 86%);
    box-shadow: inherit;
  }
}
</style>
