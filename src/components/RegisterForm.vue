<template lang="pug">
  section.hero.is-fullheight-with-navbar
    .hero-body
      .container.has-text-centered
        .column.is-8.is-offset-2
          .box
            ValidationObserver(ref="observer" v-slot="{ invalid }" tag="form" v-on:submit.prevent="onSubmit")
              h3.title.has-text-black.has-text-centered 회원가입
              .field.is-horizontal
                .field-label.is-normal
                  label.label 이메일
                .field-body
                  .field
                    p.control
                      ValidationProvider(name="email" rules="required|email")
                        div(slot-scope="{ errors }")
                          input.input.is-primary(v-model="email" type="email" placeholder="이메일을 입력해주세요" required)
                          Message(:body="errors[0]")
              .field.is-horizontal
                .field-label.is-normal
                  label.label 비밀번호
                .field-body
                  .field
                    p.control
                      ValidationProvider(name="password" :rules="{ required:'required', password: /(?=.*\d)(?=.*[a-z]).{8,}/ }")
                        div(slot-scope="{ errors }")
                          input.input.is-primary(v-model="password" type="password" placeholder="비밀번호를 입력해주세요" required)
                          Message(:body="errors[0]")
              .field.is-horizontal
                .field-label.is-normal
                  label.label 닉네임
                .field-body
                  .field
                    p.control
                      ValidationProvider(name="nickname" rules="min:2|max:10")
                        div(slot-scope="{ errors }")
                          input.input.is-primary(v-model="nickname" type="text" placeholder="닉네임을 입력해주세요" required)
                          Message(:body="errors[0]")
              button.button.is-primary.is-large.is-fullwidth.is-outlined 회원가입
</template>

<script lang="ts">
import Vue from 'vue';
import { UserForm } from '@/types/user';
import { extend, ValidationProvider, ValidationObserver } from 'vee-validate';
import { required, email, regex, min, max } from 'vee-validate/dist/rules';
import Message from '@/components/common/Message.vue';
import Modal from '@/components/common/Modal.vue';

extend('required', {
  ...required,
  message: '값을 입력해야합니다.',
});

extend('email', {
  ...email,
  message: '이메일 형태로 입력해야 합니다.',
});

extend('password', {
  ...regex,
  message: '영어소문자 및 숫자 포함해서 8자리 이상으로 구성해주세요.',
});

extend('min', {
  ...min,
  message: '최소 2글자 이상이여야합니다.',
});

extend('max', {
  ...max,
  message: '최대 10글자 이하이여야합니다.',
});

export default Vue.extend({
  components: { ValidationProvider, Message, ValidationObserver, Modal },
  data() {
    return {
      email: '',
      password: '',
      nickname: '',
    };
  },
  methods: {
    onSubmit: async function() {
      const isValid = await this.$refs.observer.validate();
      if (!isValid) {
        return;
      }
      const data: UserForm = {
        email: this.email,
        password: this.password,
        nickname: this.nickname,
      };
      await this.$store.dispatch('user/register', data);
      if (this.$store.state['user'].user !== null) {
        await this.$router.push({ name: 'home' });
      }
    },
  },
});
</script>

<style scoped>

</style>
