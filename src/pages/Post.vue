<template lang="pug">
  div
    Nav
    PostCard
    Pagination
    Footer
</template>

<script lang="ts">
import Vue from 'vue';
import Nav from '@/components/Nav.vue';
import PostCard from '@/components/PostCard.vue';
import Pagination from '@/components/Pagination.vue';
import Footer from '@/components/Footer.vue';

export default Vue.extend({
  name: 'Post',
  components: { Nav, PostCard, Pagination, Footer },
});
</script>

<style scoped>

</style>
