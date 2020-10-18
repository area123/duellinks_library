<template lang="pug">
  div
    Nav(:is-login="isLogin")
    router-view
</template>

<script lang="ts">
import Vue from 'vue';
import Nav from '@/components/common/Nav.vue';

export default Vue.extend({
  components: { Nav },
  computed: {
    isLogin() {
      return this.$store.state.user.user !== null;
    },
  },
});

</script>

<style lang="scss">
@import "~bulma/bulma";
</style>
