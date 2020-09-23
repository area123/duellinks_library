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
    Modal(:title="title" :body="body" :show-modal="showModal" v-on:close="onClose")
</template>

<script lang="ts">
import Vue from 'vue';
import { UserLoginForm } from '@/types/user';
import Modal from '@/components/common/Modal.vue';

export default Vue.extend({
  data() {
    return {
      email: '',
      password: '',
      title: '로그인 실패',
      body: '이메일 또는 비밀번호를 확인해주세요.',
      showModal: false,
    };
  },
  methods: {
    onSubmit: async function() {
      const data: UserLoginForm = {
        email: this.email,
        password: this.password,
      };
      await this.$store.dispatch('user/login', data);
      if (this.$store.state['user'].user_error !== null) {
        console.log(this.$store.state['user'].user_error);
        this.showModal = !this.showModal;
        return;
      } else {
        console.log(this.$store.state['user'].user_error);
        await this.$router.push({ name: 'home' });
      }
    },
    onClose() {
      this.showModal = !this.showModal;
    },
  },
  components: { Modal },
});
</script>

<style scoped>

</style>
