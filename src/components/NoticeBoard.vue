<template lang="pug">
  .column.card.has-background-grey-darker
    header.card-header.has-background-black-ter
      router-link(:to="{ name: 'postlist', params: { post: sort } }").card-header-title.has-text-centered.is-block.has-text-white {{ sort }}
    .card-content
      ul
        .has-text-centered.column(v-if="loading")
          span.icon.is-large
            font-awesome-icon.spin(icon="spinner" size="4x" rotation="90")
        template(v-for="post in posts" v-else)
          li.is-link.has-text-light(@click="onClick(sort,post.id)") {{ post.title }}
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'NoticeBoard',
  props: ['sort', 'posts', 'loading'],
  methods: {
    onClick(sort: string, id: number) {
      // @ts-ignore
      this.$router.push({ name: 'post', params: { post: sort, postId: id } });
    },
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

.is-vcentered {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  align-items: center;
}

.is-link {
  cursor: pointer;

  &:hover {
    background: hsl(0, 0%, 29%);
  }
}
</style>
