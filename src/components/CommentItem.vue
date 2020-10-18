<template lang="pug">
  .box.mb-0.has-background-black-ter
    .content
      p.has-text-light(:style="{marginLeft:comment.seq - 1 +'rem'}")
        strong {{ comment.user.nickname }}
        small  {{ createdAt(comment.createdAt) }}
        a(@click="onWrite()")  댓글 달기
        template(v-if="isWriter")
          a(@click="onUpdate()")  변경
          a(@click="onRemove()")  삭제
        br
        | {{ comment.content }}
    CommentForm(v-if="isUpdate" title="댓글 변경" button="변경하기" :update="true" :id="comment.id" v-on:change="onChange()" :comment="comment")
    CommentForm(v-if="isCommenter" title="댓글 달기" button="댓글 작성" :comment="comment" v-on:write="onCommenter()")
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
      isCommenter: false,
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
      this.isUpdate = !this.isUpdate;
    },
    onRemove() {
      this.$store.dispatch('comment/remove', this.$props.comment.id);
    },
    onChange() {
      this.isUpdate = false;
    },
    onWrite() {
      this.isCommenter = !this.isCommenter;
    },
    onCommenter() {
      this.isCommenter = !this.isCommenter;
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
