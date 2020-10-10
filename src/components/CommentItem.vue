<template lang="pug">
  .box.mb-0.has-background-black-ter
    .content
      p.has-text-light
        strong {{ comment.user.nickname }}
        small  {{ createdAt(comment.createdAt) }}
        template(v-if="isWriter")
          a(@click="onUpdate()")  변경
          a(@click="onRemove()")  삭제
        br
        | {{ comment.content }}
    CommentForm(v-if="isUpdate" title="댓글 변경" button="변경하기" :update="true" :id="comment.id" v-on:change="onChange()")
</template>

<script lang="ts">
import Vue from 'vue';
import comment from '@/store/modules/comment';
import CommentForm from '@/components/CommentForm.vue';

export default Vue.extend({
  name: 'CommentItem',
  components: { CommentForm },
  data() {
    return {
      isUpdate: false,
    };
  },
  props: ['comment'],
  computed: {
    isWriter() {
      if (this.$store.state.user.user === null) {
        return false;
      }
      return this.$store.state.user.user.id === this.$props.comment.user.id;
    },
  },
  methods: {
    createdAt(createdAt: string) {
      const date = new Date(createdAt);
      return `${date.getFullYear()}/${date.getMonth()}/${date.getDay()}`;
    },
    onUpdate() {
      this.isUpdate = true;
    },
    onRemove() {
      this.$store.dispatch('comment/remove', this.$props.comment.id);
    },
    onChange() {
      this.isUpdate = false;
    },
  },
});
</script>

<style lang="scss" scoped>
.box {
  border-radius: 0 0 0 0;

  &:first-child {
    border-top: 1px solid hsl(0, 0%, 100%);
  }

  &:not(:last-child) {
    border-bottom: 1px solid hsl(0, 0%, 100%);
  }
}

p {
  & > {
    strong, small {
      color: hsl(0, 0%, 100%);
    }
  }

  a {
    color: orange;
  }
}

</style>
