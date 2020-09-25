<template lang="pug">
  .column.card
    header.card-header
      router-link(:to="{ name: 'postlist', params: { post: sort } }").card-header-title.has-text-centered.is-block {{ sort }}
    .card-content
      ul
        template(v-for="post in posts")
          li
            router-link.is-text(:to="{ name: 'post', params: { postId: post.id } }") {{ post.title }}
</template>

<script>
export default {
  name: 'NoticeBoard',
  props: ['sort', 'posts'],
};
</script>

<style lang="scss" scoped>

</style>
