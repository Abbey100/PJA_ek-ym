// Vue 
import Vue from 'vue'
import App from './App.vue'
import router from './Routes'
import store from './store/index'
import vuetify from './plugins/vuetify'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import axios from 'axios';
import VModal from 'vue-js-modal';

// 전역 Component
import FullPageTitle from './components/Title/FullPageTitle';
import Tooltip from '@/components/Tooltip/Tooltip';
import Checkbox from '@/components/Checked/Checkbox';
import Radio from '@/components/Checked/Radio';


Vue.use(Toast);
Vue.use(VModal, { dynamic: true });

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
Vue.config.errorHandler = (e) => {
  console.error(e);
  Vue.prototype.$toast.error(e.message);
}

// 전역 Component
Vue.component('full-page-title', FullPageTitle);
Vue.component('tooltip', Tooltip);
Vue.component('checkbox', Checkbox);
Vue.component('radio', Radio);

new Vue({
  vuetify,
  router,
  render: h => h(App), store
}).$mount('#app')