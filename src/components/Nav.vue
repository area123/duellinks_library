<template lang="pug">
  nav.navbar.is-light(role="navigation")
    .navbar-brand
      router-link.navbar-item(:to="{ name: 'home' }") 듀링 도서관
      .navbar-burger(@click="active = !active" :class="{ 'is-active': active} ")
        span(v-for="n in 3")
    .navbar-menu(:class="{ 'is-active': active }")
      .navbar-start
        a.navbar-item 자유 게시판
        a.navbar-item 듀얼킹달성 덱리스트
        a.navbar-item 파밍 및 이벤트
        a.navbar-item 카드 평가
      .navbar-end
        .buttons
          template(v-if="!isLogin")
            router-link.button.is-primary.is-outlined(:to="{ name: 'register' }")
              strong 회원가입
            router-link.button.is-primary.is-outlined(:to="{ name: 'login' }")
              strong 로그인
          template(v-else)
            button.button.is-primary.is-outlined(@click="onClick")
              strong 로그아웃
            router-link.button.is-primary.is-outlined(:to="{ name: 'writer' }")
              strong 글쓰기
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Nav',
  data() {
    return {
      active: false,
    };
  },
  methods: {
    onClick() {
      this.$store.dispatch('user/logout');
    },
  },
  computed: {
    isLogin() {
      return this.$store.state['user'].user !== null;
    },
  },
});
</script>

<style lang="scss" scoped>
.navbar-brand {
  a {
    font-weight: bold;
    font-size: 1.5rem;
  }
}

.buttons {
  margin-right: 0.5rem;
}
</style>
