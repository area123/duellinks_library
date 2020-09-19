<template lang="pug">
  div
    Nav
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
import Nav from '@/components/Nav.vue';

export default Vue.extend({
  components: { NoticeBoard, Nav },
  data() {

  },
});
</script>
