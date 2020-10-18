import { createLocalVue, shallowMount } from '@vue/test-utils';
import VueRouter from 'vue-router';
import Vuex, { Module } from 'vuex';
import Nav from '@/components/common/Nav.vue';
import { User } from '@/types/user';

const localVue = createLocalVue();
localVue.use(VueRouter);
localVue.use(Vuex);
const router = new VueRouter();

interface IUser {
  user: User | null;
}

const user: Module<IUser, any> = {
  namespaced: true,
  state: {
    user: {
      createdAt: '2020-09-29T02:05:17.035Z',
      email: 'test@test.com',
      id: 342,
      nickname: 'kang',
    },
  },
  getters: {},
  actions: {},
  mutations: {},
};

const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    user,
  },
});

describe('Nav.vue 컴포넌트 테스트', () => {
  it('로그인이 되있을때 렌더링 테스트', () => {
    const logoutBtn = '로그아웃';
    const writeBtn = '글쓰기';
    const wrapper = shallowMount(Nav, {
      localVue,
      router,
      store,
    });
    expect(wrapper.text()).toMatch(logoutBtn);
    expect(wrapper.text()).toMatch(writeBtn);
  });
});
