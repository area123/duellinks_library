import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '@/pages/Home.vue';
import Login from '@/pages/Login.vue';
import Register from '@/pages/Register.vue';
import PostList from '@/pages/PostList.vue';
import Post from '@/pages/Post.vue';
import Writer from '@/pages/Writer.vue';
import store from '@/store';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '',
    name: 'home',
    component: Home,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
  },
  {
    path: '/write',
    name: 'write',
    component: Writer,
    props: true,
  },
  {
    path: '/:post',
    name: 'postlist',
    component: PostList,
  },
  {
    path: '/:post/:postId',
    name: 'post',
    component: Post,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});


router.beforeEach(((to, from, next) => {
  if (to.name !== 'postlist') {
    next();
  }
  const payload = {
    page: 1,
    sort: to.params.post,
  };
  store.dispatch('post/list', payload).then(() => {
    next();
  }).catch(() => {
    next();
  });
}));

export default router;
