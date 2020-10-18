<template lang="pug">
  nav.navbar.has-background-black-ter.is-fixed-top.is-fixed-top-touch(role="navigation")
    .navbar-brand
      router-link.navbar-item.has-text-white(:to="{ name: 'home' }") 커뮤니티
      .navbar-burger(@click="active = !active" :class="{ 'is-active': active} ")
        span(v-for="n in 3")
    .navbar-menu(:class="{ 'is-active': active }")
      .navbar-start
        router-link.navbar-item.has-text-light(:to="{ name: 'postlist', params: { post: item } }" v-for="item in sort") {{ item }}
      .navbar-end
        .buttons
          template(v-if="!isLogin")
            router-link.button.is-outlined.is-white(:to="{ name: 'register' }")
              strong 회원가입
            router-link.button.is-outlined.is-white(:to="{ name: 'login' }")
              strong 로그인
          template(v-else)
            button.button.is-outlined.is-white(@click="onClick")
              strong 로그아웃
            router-link.button.is-outlined.is-white(:to="{ name: 'write' }")
              strong 글쓰기
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Nav',
  props:['isLogin'],
  data() {
    return {
      active: false,
      sort: ['자유게시판', '공지사항', '게임', '콘솔'],
    };
  },
  methods: {
    onClick() {
      this.$store.dispatch('user/logout');
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

.navbar-item {
  &:hover {
    background: hsl(0, 0%, 21%);
  }

  &:focus {
    background: hsl(0, 0%, 21%);
  }
}

.is-active {
  &.navbar-menu {
    background: hsl(0, 0%, 14%) !important;
  }
  &.navbar-burger {
    background: hsl(0, 0%, 14%) !important;
  }
}
</style>
