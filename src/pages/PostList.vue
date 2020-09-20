<template lang="pug">
  div
    Nav
    PostTable
    Pagination
    Footer
</template>

<script lang="ts">
import Vue from 'vue';
import Nav from '@/components/Nav.vue';
import PostTable from '@/components/PostTable.vue';
import Pagination from '@/components/Pagination.vue';
import Footer from '@/components/Footer.vue';

export default Vue.extend({
  name: 'PostList',
  components: { Nav, PostTable, Pagination, Footer },
});
</script>

<style scoped>

</style>
