import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import config from '@/config'
// import 'font-awesome/css/font-awesome.css'
//

// icon 16
import i16_Open from '@/assets/svg/icon16/ico__open.vue'


// icon 24
 

// icon 32


// icon gnb
import createprojectActive from '@/assets/svg/iconGnb/ico__createproject--active'
import createprojectRest from '@/assets/svg/iconGnb/ico__createproject--rest'
import importActive from '@/assets/svg/iconGnb/ico__import--active'
import importRest from '@/assets/svg/iconGnb/ico__import--rest'
import logout from '@/assets/svg/iconGnb/ico__logout'
import openprojectActive from '@/assets/svg/iconGnb/ico__openproject--active'
import openprojectRest from '@/assets/svg/iconGnb/ico__openproject--rest'
import setingActive from '@/assets/svg/iconGnb/ico__seting--active'
import settingRest from '@/assets/svg/iconGnb/ico__setting--rest'


Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: config.light
        }
    },
    icons: {
        
        values: {
            i16_Open: {component: i16_Open},
            // GNB 
            createprojectActive: {component: createprojectActive},
            createprojectRest: {component: createprojectRest},
            importActive: {component: importActive},
            importRest: {component: importRest},
            logout: {component: logout},
            enprojectActive: {component: openprojectActive},
            openprojectRest: {component: openprojectRest},
            setingActive: {component: setingActive},
            settingRest: {component: settingRest},
     }
    }
});
