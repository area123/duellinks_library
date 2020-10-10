<template lang="pug">
  nav.pagination.is-centered.mt-6.mb-6
    a.pagination-previous.has-text-white(@click="prevPage()") 이전 페이지
    a.pagination-next.has-text-white(@click="nextPage()" :class="{ 'disable': disable(current_page) }") 다음 페이지
    ul.pagination-list
      li
        p.pagination-link.has-text-white(v-for="n in 9" @click="onClick(n)" :class="{ 'disable': disable(n) }") {{ n }}
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Pagination',
  data() {
    return {
      current_page: 1,
      sort: '',
    };
  },
  methods: {
    onClick(page: number) {
      if (this.$store.state.post.last_page < page) {
        return;
      }
      const payload = {
        page: page,
        sort: this.sort,
      };
      this.$store.dispatch('post/list', payload)
        .then(() => {
          this.current_page = this.$store.state.post.current_page;
        });
    },
    prevPage() {
      if (this.current_page < 1) {
        return;
      }
      const payload = {
        page: this.current_page - 1,
        sort: this.sort,
      };
      this.$store.dispatch('post/list', payload)
        .then(() => {
          this.current_page = this.$store.state.post.current_page;
        });
    },
    nextPage() {
      if (this.$store.state.post.last_page < this.current_page) {
        return;
      }
      const payload = {
        page: this.current_page + 1,
        sort: this.sort,
      };
      this.$store.dispatch('post/list', payload)
        .then(() => {
          this.current_page = this.$store.state.post.current_page;
        });
    },
    disable(page: number) {
      return this.$store.state.post.last_page < page;
    },
  },
  mounted() {
    if (isNaN(this.$store.state.post.current_page)) {
      this.current_page = 1;
      return;
    }
    this.current_page = this.$store.state.post.current_page;
    this.sort = this.$route.params.post;
  },
});
</script>

<style lang="scss" scoped>
.pagination-link {
  cursor: pointer;
}

.disable {
  cursor: default;

  &:hover {
    border-color: #dbdbdb;
  }
}
</style>
