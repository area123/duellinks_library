<template lang="pug">
  .column.card
    header.card-header
      a(href="#").card-header-title.has-text-centered 공지사항
    .card-content
      ul
        li(v-for='n in 10') 제목
</template>

<script>
export default {
  name: 'NoticeBoard',
};
</script>

<style lang="scss" scoped>
a {
  display: block;
}
</style>
