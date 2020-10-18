<template lang="pug">
  Editor
</template>

<script lang="ts">
import Vue from 'vue';
import Nav from '@/components/common/Nav.vue';
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
