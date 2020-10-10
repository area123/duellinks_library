<template lang="pug">
  footer.footer.has-background-black-ter
    .content.has-text-centered.has-text-light
      p <strong>커뮤니티</strong>
      | Copyright&copy; 2020<br/>
      | All Rights Reserved
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Footer',
});
</script>

<style lang="scss" scoped>
.has-text-light > p > strong {
  color: white;
}
</style>
