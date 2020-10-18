<template lang="pug">
  footer.footer.has-background-black-ter
    .columns
      .column.has-text-centered
        p <strong>커뮤니티</strong><br/>
          | Copyright&copy; 2020<br/>
          | All Rights Reserved
      .column.has-text-centered
        span.icon.is-large.has-text-white
          font-awesome-icon(:icon="['fab','github']" size="3x")
        br
        a.has-text-orange(href="https://github.com/area123/duellinks_library") front-end
      .column.has-text-centered
        span.icon.is-large.has-text-white
          font-awesome-icon(:icon="['fab','github']" size="3x")
        br
        a.has-text-orange(href="https://github.com/area123/duellinks_library_backend") back-end
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Footer',
});
</script>

<style lang="scss" scoped>
p {
  color: hsl(0, 0%, 96%);

  & > strong {
    color: white;
  }
}

.has-text-orange {
  color: orange;
}
</style>
