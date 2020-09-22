<template lang="pug">
  section.hero.is-fullheight-with-navbar
    .hero-body
      .container.has-text-centered
        .column.is-4.is-offset-4
          .box
            form(@submit.prevent="onSubmit")
              h3.title.has-text-black 로그인
              .field
                .control
                  input.input.is-large.is-primary(v-model="email" type="email" placeholder="이메일을 입력해주세요")
              .field
                .control
                  input.input.is-large.is-primary(v-model="password" type="password" placeholder="비밀번호를 입력해주세요")
              button.button.is-primary.is-large.is-fullwidth.is-outlined 로그인
          p.has-text-primary
            router-link(:to="{ name: 'register' }") 회원가입 &nbsp;·&nbsp;
            a 비밀번호 찾기
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    onSubmit() {
      const data: Object = {
        email: this.email,
        password: this.password,
      };
      this.$store.dispatch('user/login', data);
      console.log(this.$store.state['user'].user);
      if (this.$store.state['user'].user !== null) {
        this.$router.push({ name: 'home' });
      }
    },
  },
});
</script>

<style scoped>

</style>
