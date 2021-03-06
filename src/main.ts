import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { library, IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faBold,
  faItalic,
  faStrikethrough,
  faUnderline,
  faImage,
  faListUl,
  faListOl,
  faWindowMinimize,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faBold, faItalic, faUnderline, faStrikethrough, faImage, faListUl, faListOl, faWindowMinimize, faSpinner);
library.add(faGithub as IconDefinition);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
