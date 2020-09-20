<template lang="pug">
  table.table.is-fullwidth.is-hoverable
    thead
      tr
        th 번호
        th 제목
        th 조회수
        th 날짜
        th 작성자
    tbody
      template(v-for="n in 20")
        tr
          td {{ n }}
          td 제목{{ n }}
          td 조회수{{ n }}
          td 날짜 19:05
          td 강해찬
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'PostTable',
  data() {

  },
})
</script>

<style lang="scss" scoped>
.table {
  margin-top: 3rem;
}
</style>
