<template lang="pug">
  div
    h1.title {{ title }}
    table.table.is-fullwidth.is-hoverable
      thead
        tr
          th 번호
          th 제목
          th 날짜
          th 작성자
      tbody
        template(v-for="post in posts")
          tr
            td {{ post.id }}
            td {{ post.title }}
            td {{ post.createdAt }}
            td {{ post.user.nickname }}
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'PostTable',
  props: ['posts','title'],
  computed:{
  }
});
</script>

<style lang="scss" scoped>
.table {
  margin-top: 3rem;
}
</style>
