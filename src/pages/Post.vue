<template lang="pug">
  div
    Nav
    PostCard
</template>

<script lang="ts">
import Vue from 'vue';
import Nav from '@/components/Nav.vue';
import PostCard from '@/components/PostCard.vue';


export default Vue.extend({
  name: 'Post',
  components: { Nav, PostCard },
});
</script>

<style scoped>

</style>
