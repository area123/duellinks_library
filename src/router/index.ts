import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '@/pages/Home.vue';
import Login from '@/pages/Login.vue';
import Register from '@/pages/Register.vue';
import PostList from '@/pages/PostList.vue';
import Post from '@/pages/Post.vue';
import Writer from '@/pages/Writer.vue';

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
  },
  {
    path: '/post/:postId',
    name: 'post',
    component: Post,
  },
  {
    path: '/:post',
    name: 'postlist',
    component: PostList,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
