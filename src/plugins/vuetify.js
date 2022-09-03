import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import config from '@/config'
// import 'font-awesome/css/font-awesome.css'
//


import i16_Open from '@/assets/svg/icon16/ico__open.vue'
  
Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: config.light
        }
    },
    icons: {
        values: {
            i16_Open: {
                component: i16_Open
            }
        }
    }
});
