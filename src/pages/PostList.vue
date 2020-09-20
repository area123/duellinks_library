<template lang="pug">
  div
    Nav
    PostTable
    Footer
</template>

<script lang="ts">
import Vue from 'vue';
import Nav from '@/components/Nav.vue';
import PostTable from '@/components/PostTable.vue';
import Footer from '@/components/Footer.vue';

export default Vue.extend({
  name: 'Post',
  components: { Nav, PostTable, Footer },
});
</script>

<style scoped>

</style>
