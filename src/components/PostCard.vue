<template lang="pug">
  .card
    .card-header.is-block
      p.card-header-title 제목
      p.subtitle.is-6 강해찬 | 19:45 | 853
    .card-content
      .content(v-html="content")
</template>

<script>
export default {
  name: 'PostSection',
  data() {
    return {
      content: '<p>Hello World!</p>',
    };
  },
};
</script>

<style lang="scss" scoped>
.card-header-title {
  font-size: 2rem;
}
</style>
