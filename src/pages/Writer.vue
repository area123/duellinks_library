<template lang="pug">
  div
    Nav
    Editor
</template>

<script lang="ts">
import Vue from 'vue';
import Nav from '@/components/Nav.vue';
import Editor from '@/components/Editor.vue';

export default Vue.extend({
  name: 'Writer',
  components: { Nav, Editor },
  data() {
    return {};
  },
});
</script>

<style scoped>

</style>
