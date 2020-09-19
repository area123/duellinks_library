<template lang="pug">
  section.hero.is-fullheight-with-navbar
    .hero-body
      .container.has-text-centered
        .column.is-8.is-offset-2
          .box
            form(v-on:submit.prevent="onSubmit")
              h3.title.has-text-black.has-text-centered 회원가입
              .field.is-horizontal
                .field-label.is-normal
                  label.label 이메일
                .field-body
                  .field.has-addons
                    p.control.is-expanded
                      input.input.is-primary(v-model="email" type="email" placeholder="이메일을 입력해주세요" required)
                    .control
                      button.button.is-primary.is-outlined(v-on:click.prevent="onSubmit") 아이디 확인
              .field.is-horizontal
                .field-label.is-normal
                  label.label 비밀번호
                .field-body
                  .field
                    p.control
                      input.input.is-primary(v-model="password" type="password" placeholder="비밀번호를 입력해주세요" required)
              .field.is-horizontal
                .field-label.is-normal
                  label.label 닉네임
                .field-body
                  .field
                    p.control
                      input.input.is-primary(v-model="nickname" type="text" placeholder="닉네임을 입력해주세요" required)
              button.button.is-primary.is-large.is-fullwidth.is-outlined 회원가입


</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      email: '',
      password: '',
      nickname: '',
    };
  },
  methods: {
    onSubmit: function() {
      // TODO form 전송
    },
  },
});
</script>

<style scoped>

</style>
