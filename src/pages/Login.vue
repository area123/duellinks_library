<template lang="pug">
  div
    Nav
    LoginForm(v-bind:is-nav="true")
</template>

<script lang="ts">
import Vue from 'vue';
import Nav from '@/components/Nav.vue';
import LoginForm from '@/components/LoginForm.vue';

export default Vue.extend({
  data() {
    return {};
  },

  components: { Nav, LoginForm },
});
</script>

<style scoped>

</style>
