import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import config from '@/config'
// import 'font-awesome/css/font-awesome.css'
//

// icon 16
import i16_Exprt from '@/assets/svg/icon16/ico__export--grey.vue'
import i16_ExprtWh from '@/assets/svg/icon16/ico__export--wh.vue'
import i16_Open from '@/assets/svg/icon16/ico__open.vue'
import i16_DscntGr from '@/assets/svg/icon16/ico__arr--descent--grey.vue'
import i16_DscntWh from '@/assets/svg/icon16/ico__arr--descent--wh.vue'
import i16_Dscnt from '@/assets/svg/icon16/ico__arr--descent.vue'
import i16_DwnWh from '@/assets/svg/icon16/ico__arr--down--wh.vue'
import i16_Dwn from '@/assets/svg/icon16/ico__arr--down.vue'
import i16_Up from '@/assets/svg/icon16/ico__arr--up.vue'
import i16_Nxt from '@/assets/svg/icon16/ico__arr-next.vue'





// icon 24
 

// icon 32
import i32_Upload from '@/assets/svg/icon32/ico__upload.svg'


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

// icon pop menu
import PMenuLogo  from '@/assets/svg/iconPopMenu/ico__logo.vue'
import PMenuDelete  from '@/assets/svg/iconPopMenu/ico__delete.vue'
import PMenuEditCell  from '@/assets/svg/iconPopMenu/ico__edit-cell.vue'
import PMenuEditCol  from '@/assets/svg/iconPopMenu/ico__edit-column.vue'
import PMenuEditExcel  from '@/assets/svg/iconPopMenu/ico__excel.vue'
import PMenuFacetNum  from '@/assets/svg/iconPopMenu/ico__facet--numeric.vue'
import PMenuFacetTxt  from '@/assets/svg/iconPopMenu/ico__facet--text.vue'
import PMenuFacetTimeline  from '@/assets/svg/iconPopMenu/ico__facet--timeline.vue'
import PMenuFacetScatter  from '@/assets/svg/iconPopMenu/ico__facet-scatter.vue'
import PMenuGoogledrive  from '@/assets/svg/iconPopMenu/ico__google-drive.vue'
import PMenuGoogleSheet  from '@/assets/svg/iconPopMenu/ico__google-sheet.vue'
import PMenuHtml  from '@/assets/svg/iconPopMenu/ico__html.vue'
import PMenuOdf  from '@/assets/svg/iconPopMenu/ico__odf.vue'
import PMenuRename  from '@/assets/svg/iconPopMenu/ico__rename.vue'
import PMenuSort  from '@/assets/svg/iconPopMenu/ico__sort.vue'
import PMenuSql  from '@/assets/svg/iconPopMenu/ico__sql.vue'
import PMenuTemplate  from '@/assets/svg/iconPopMenu/ico__template.vue'
import PMenuToEnd  from '@/assets/svg/iconPopMenu/ico__to-end.vue'
import PMenuToFront  from '@/assets/svg/iconPopMenu/ico__to-front.vue'
import PMenuToLeft  from '@/assets/svg/iconPopMenu/ico__to-left.vue'
import PMenuToRight  from '@/assets/svg/iconPopMenu/ico__to-right.vue'
import PMenuTranspose  from '@/assets/svg/iconPopMenu/ico__transpose.vue'
import PMenuView  from '@/assets/svg/iconPopMenu/ico__view.vue'

// icon pagenation


Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: config.light
        }
    },
    icons: {
        values: {
            // i16
            i16_Open: {component: i16_Open},
            i16_Exprt: {component:i16_Exprt},
            i16_ExprtWh: {component: i16_ExprtWh},
            i16_DscntGr: {component: i16_DscntGr},
            i16_DscntWh: {component: i16_DscntWh},
            i16_Dscnt: {component: i16_Dscnt},
            i16_DwnWh: {component: i16_DwnWh},
            i16_Dwn: {component: i16_Dwn},
            i16_Up: {component: i16_Up},
            i16_Nxt: {component: i16_Nxt},
            // i32
            i32_Upload: {component: i32_Upload },
            // GNB 
            GcpActive: {component: createprojectActive},
            GcpRest: {component: createprojectRest},
            GiActive: {component: importActive},
            GiRest: {component: importRest},
            Glogout: {component: logout},
            GopActive: {component: openprojectActive},
            GopRest: {component: openprojectRest},
            GsActive: {component: setingActive},
            GsRest: {component: settingRest},
            // popup Menu
            PMenuDelete: {component: PMenuDelete},
            PMenuEditCell: {component: PMenuEditCell},
            PMenuEditCol: {component: PMenuEditCol},
            PMenuEditExcel: {component: PMenuEditExcel},
            PMenuFacetNum: {component: PMenuFacetNum},
            PMenuFacetScatter: {component: PMenuFacetScatter},
            PMenuFacetTimeline: {component: PMenuFacetTimeline},
            PMenuFacetTxt: {component: PMenuFacetTxt},
            PMenuGoogleSheet: {component: PMenuGoogleSheet},
            PMenuGoogledrive: {component: PMenuGoogledrive},
            PMenuHtml: {component: PMenuHtml},
            PMenuLogo: {component: PMenuLogo},
            PMenuOdf: {component: PMenuOdf},
            PMenuRename: {component: PMenuRename},
            PMenuSort: {component: PMenuSort},
            PMenuSql: {component: PMenuSql},
            PMenuTemplate: {component: PMenuTemplate},
            PMenuToEnd: {component: PMenuToEnd},
            PMenuToFront: {component: PMenuToFront},
            PMenuToLeft: {component: PMenuToLeft},
            PMenuToRight: {component: PMenuToRight},
            PMenuTranspose: {component: PMenuTranspose},
            PMenuView: {component: PMenuView},
     }
    }
});
