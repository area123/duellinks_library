<template lang="pug">
  div
    .columns
      NoticeBoard
      NoticeBoard
    .columns
      NoticeBoard
      NoticeBoard
</template>

<script lang="ts">
import Vue from 'vue';
import NoticeBoard from '@/components/NoticeBoard.vue';

export default Vue.extend({
  components: { NoticeBoard },
  data() {

  },
});
</script>
