<template lang="pug">
  nav.pagination.is-centered
    a.pagination-previous 이전 페이지
    a.pagination-next 다음 페이지
    ul.pagination-list
      li
        a.pagination-link(v-for="n in 9") {{ n }}
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Pagination',
})
</script>

<style scoped>

</style>
