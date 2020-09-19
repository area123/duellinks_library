<template lang="pug">
  div
    Nav
    RegisterForm
</template>

<script lang="ts">
import Vue from 'vue';
import Nav from '@/components/Nav.vue';
import RegisterForm from '@/components/RegisterForm.vue';


export default Vue.extend({
  components: { Nav, RegisterForm },
});
</script>

<style scoped>

</style>
