<template lang="pug">
  .modal(:class="{ 'is-active': showModal }")
    .modal-background(@click="close")
    .modal-card
      header.modal-card-head
        p.modal-card-title {{ title }}
        button.delete(@click="close")
      section.modal-card-body {{ body }}
      footer.modal-card-foot
        button.button.is-success(@click="close") 확인
        button.button(@click="close") 취소
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Modal',
  props: ['title', 'body', 'showModal'],
  methods:{
    close(){
      this.$emit('close');
    }
  }
});
</script>

<style scoped>

</style>
