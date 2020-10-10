<template lang="pug">
  .card.is-shadowless.has-background-black-ter
    template(v-if="!loading")
      .card-header.is-block.is-shadowless
        p.card-header-title.is-centered.has-text-white {{ post.title }}
        p.subtitle.is-6.has-text-light.ml-5 {{ post.user.nickname }} | {{ createdAt(post.createdAt) }}
      .card-content
        .content.has-text-light(v-html="post.content")
        .tags(v-if="isTags")
          span.tag.is-white(v-for="tag in tags") {{ tag }}
    template(v-if="isWriter")
      footer.card-footer
        a.card-footer-item(@click="onUpdate") 변경하기
        a.card-footer-item(@click="onRemove") 삭제하기
</template>

<script lang="ts">
import Vue from 'vue';
import { Post } from '@/types/Post';

export default Vue.extend({
  name: 'PostCard',
  props: ['isWriter'],
  data() {
    return {
      loading: false,
      content: '<p>Hello World!</p>',
      tags: null,
    };
  },
  computed: {
    post() {
      return this.$store.state.post.post;
    },
    isTags() {
      const tags: string = this.$store.state.post.post.tags;
      const isTags = tags !== '';
      if (isTags) {
        // @ts-ignore
        this.tags = tags.split(' ');
      }
      return isTags;
    },
  },
  methods: {
    createdAt(createdAt: string) {
      const date = new Date(createdAt);
      return `${date.getFullYear()}/${date.getMonth()}/${date.getDay()}`;
    },
    onRemove() {
      this.$store.dispatch('post/remove', this.post.id);
    },
    onUpdate() {
      this.$router.push({ name: 'write', params: { post: this.$props.post } });
    },
  },
  created() {
    this.loading = true;
    this.$store.dispatch('post/read', this.$route.params.postId)
      .then(() => {
        this.loading = false;
      });
  },
});
</script>

<style lang="scss" scoped>
.card-header-title {
  font-size: 2rem;
}

a {
  color: orange;
}
</style>
