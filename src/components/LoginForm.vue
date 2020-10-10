<template lang="pug">
  section.hero.is-fullheight-with-navbar.has-background-black-bis
    .hero-body
      .container.has-text-centered
        .column.is-4.is-offset-4
          .box.has-background-black-ter
            form(@submit.prevent="onSubmit")
              h3.title.has-text-white 로그인
              .field
                .control
                  input.input.is-large.has-background-black-ter.has-text-light(v-model="email" type="email" placeholder="이메일을 입력해주세요")
              .field
                .control
                  input.input.is-large.has-background-black-ter.has-text-light(v-model="password" type="password" placeholder="비밀번호를 입력해주세요")
              button.button.is-large.is-fullwidth.is-outlined.is-white 로그인
          p
            router-link.has-text-yellow(:to="{ name: 'register' }") 회원가입 &nbsp;·&nbsp;
            a.has-text-yellow 비밀번호 찾기
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
    async onSubmit() {
      const data: UserLoginForm = {
        email: this.email,
        password: this.password,
      };
      await this.$store.dispatch('user/login', data);
      if (this.$store.state.user.user === null) {
        this.showModal = !this.showModal;
        return;
      } else {
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

<style lang="scss" scoped>
input {
  &::placeholder {
    color: hsl(0, 0%, 86%);
  }

  &:focus {
    border-color: hsl(0, 0%, 86%);
    box-shadow: inherit;
  }
}

.has-text-yellow {
  color: orange;
}
</style>
