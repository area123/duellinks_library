<template lang="pug">
  article.message(v-if="show")
    .message-body {{ body }}
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Message',
  props: ['body'],
  computed: {
    show() {
      return this.body !== undefined;
    },
  },
});
</script>

<style lang="scss" scoped>
.message {
  margin-top: 0.5rem;
}
</style>
