import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import config from '@/config'
// import 'font-awesome/css/font-awesome.css'
//

// icon 16
import i16_Exprt       from '@/assets/svg/icon16/ico__export--grey.vue'
import i16_ExprtWh     from '@/assets/svg/icon16/ico__export--wh.vue'
import i16_Open        from '@/assets/svg/icon16/ico__open.vue'
import i16_DscntGr     from '@/assets/svg/icon16/ico__arr--descent--grey.vue'
import i16_DscntWh     from '@/assets/svg/icon16/ico__arr--descent--wh.vue'
import i16_Dscnt       from '@/assets/svg/icon16/ico__arr--descent.vue'
import i16_DwnWh       from '@/assets/svg/icon16/ico__arr--down--wh.vue'
import i16_Dwn         from '@/assets/svg/icon16/ico__arr--down.vue'
import i16_ArrRgh      from '@/assets/svg/icon16/ico__arr--right.vue'
import i16_Up          from '@/assets/svg/icon16/ico__arr--up.vue'
import i16_Nxt         from '@/assets/svg/icon16/ico__arr-next.vue'
import i16_close       from '@/assets/svg/icon16/ico__close'
import i16_mail        from '@/assets/svg/icon16/ico__mail'
import i16_refresh     from '@/assets/svg/icon16/ico__refresh'
import i16_reset       from '@/assets/svg/icon16/ico__reset'
import i16_resetGr     from '@/assets/svg/icon16/ico__reset--grey'
import i16_lineCncl    from '@/assets/svg/icon16/ico__line-cancle'
import i16_NotSaveSm   from '@/assets/svg/icon16/ico__not-save--small'
import i16_SaveSm      from '@/assets/svg/icon16/ico__save--small'
import i16_row         from '@/assets/svg/icon16/ico__row'
import i16_rowWh       from '@/assets/svg/icon16/ico__row--wh'
import i16_record      from '@/assets/svg/icon16/ico__record'
import i16_recordWh    from '@/assets/svg/icon16/ico__record--wh'
import i16_pgEnd       from '@/assets/svg/icon16/ico__page--end'
import i16_pgNext      from '@/assets/svg/icon16/ico__page--next'
import i16_pgPre       from '@/assets/svg/icon16/ico__page--pre'
import i16_pgStart     from '@/assets/svg/icon16/ico__page--start'
import i16_edit        from '@/assets/svg/icon16/ico__edit'
import i16_star        from '@/assets/svg/icon16/ico__star'
import i16_starFilled  from '@/assets/svg/icon16/ico__star--filled'
import i16_flg         from '@/assets/svg/icon16/ico__flg'
import i16_flgFilled   from '@/assets/svg/icon16/ico__flg--filled'
import i16_editSm      from '@/assets/svg/icon16/ico__edit--small'
import i16_info        from '@/assets/svg/icon16/ico__info'
import i16_search      from '@/assets/svg/icon16/ico__search'
import i16_cancel      from '@/assets/svg/icon16/ico__cancel'
import i16_PwShow      from '@/assets/svg/icon16/ico__pw--show'
import i16_PwHide      from '@/assets/svg/icon16/ico__pw--hide'
import i16_attach      from '@/assets/svg/icon16/ico__attach'
import i16_flip        from '@/assets/svg/icon16/ico__flip'
import i16_change      from '@/assets/svg/icon16/ico__change'
import i16_Invt        from '@/assets/svg/icon16/ico__invert'
import i16_InvtWh      from '@/assets/svg/icon16/ico__Invert--wh'
import i16_plot        from '@/assets/svg/icon16/ico__plot'

import i16_Sctr01      from '@/assets/svg/icon16/ico__scatter-01'
import i16_Sctr01Wh    from '@/assets/svg/icon16/ico__scatter-01--wh'
import i16_Sctr02      from '@/assets/svg/icon16/ico__scatter-02'
import i16_Sctr02Wh    from '@/assets/svg/icon16/ico__scatter-02--wh'
import i16_Sctr03      from '@/assets/svg/icon16/ico__scatter-03'
import i16_Sctr03Wh    from '@/assets/svg/icon16/ico__scatter-03--wh'
import i16_SctrDot01   from '@/assets/svg/icon16/ico__scatter-dot-01'
import i16_SctrDot01Wh from '@/assets/svg/icon16/ico__scatter-dot-01--wh'
import i16_SctrDot02   from '@/assets/svg/icon16/ico__scatter-dot-02'
import i16_SctrDot02Wh from '@/assets/svg/icon16/ico__scatter-dot-02--wh'
import i16_SctrDot03   from '@/assets/svg/icon16/ico__scatter-dot-03'
import i16_SctrDot03Wh from '@/assets/svg/icon16/ico__scatter-dot-03--wh'



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
            i16_Open:       {component: i16_Open},
            i16_Exprt:      {component:i16_Exprt},
            i16_ExprtWh:    {component: i16_ExprtWh},
            i16_DscntGr:    {component: i16_DscntGr},
            i16_DscntWh:    {component: i16_DscntWh},
            i16_Dscnt:      {component: i16_Dscnt},
            i16_DwnWh:      {component: i16_DwnWh},
            i16_Dwn:        {component: i16_Dwn},
            i16_ArrRgh:     {component: i16_ArrRgh},
            i16_Up:         {component: i16_Up},
            i16_Nxt:        {component: i16_Nxt},
            i16_close:      {component: i16_close},
            i16_mail:       {component: i16_mail},
            i16_refresh:    {component: i16_refresh},
            i16_reset:      {component: i16_reset},
            i16_resetGr:    {component: i16_resetGr},
            i16_lineCncl:   {component: i16_lineCncl},
            i16_NotSaveSm:  {component: i16_NotSaveSm},
            i16_SaveSm:     {component: i16_SaveSm},
            i16_row:        {component: i16_row},
            i16_rowWh:      {component: i16_rowWh},
            i16_record:     {component: i16_record},
            i16_recordWh:   {component: i16_recordWh},
            i16_pgEnd:      {component: i16_pgEnd},
            i16_pgNext:     {component: i16_pgNext},
            i16_pgPre:      {component: i16_pgPre},
            i16_pgStart:    {component: i16_pgStart},
            i16_edit:       {component: i16_edit},
            i16_star:       {component: i16_star},
            i16_starFilled: {component: i16_starFilled},
            i16_flg:        {component: i16_flg},
            i16_flgFilled:  {component: i16_flgFilled},            
            i16_editSm:     {component: i16_editSm},            
            i16_info:       {component: i16_info},            
            i16_search:     {component: i16_search},            
            i16_cancel:     {component: i16_cancel},            
            i16_PwShow:     {component: i16_PwShow},            
            i16_PwHide:     {component: i16_PwHide},            
            i16_attach:     {component: i16_attach},            
            i16_flip:       {component: i16_flip},            
            i16_change:     {component: i16_change},            
            i16_Invt:       {component: i16_Invt},            
            i16_InvtWh:     {component: i16_InvtWh},            
            i16_plot:       {component: i16_plot},            
            
            i16_Sctr01:     {component: i16_Sctr01},            
            i16_Sctr01Wh:   {component: i16_Sctr01Wh},            
            i16_Sctr02:     {component: i16_Sctr02},            
            i16_Sctr02Wh:   {component: i16_Sctr02Wh},            
            i16_Sctr03:     {component: i16_Sctr03},            
            i16_Sctr03Wh:   {component: i16_Sctr03Wh},            
            i16_SctrDot01:  {component: i16_SctrDot01},            
            i16_SctrDot01Wh:{component: i16_SctrDot01Wh},            
            i16_SctrDot02:  {component: i16_SctrDot02},            
            i16_SctrDot02Wh:{component: i16_SctrDot02Wh},            
            i16_SctrDot03:  {component: i16_SctrDot03},            
            i16_SctrDot03Wh:{component: i16_SctrDot03Wh},            

            // i32
            i32_Upload: {component: i32_Upload },
            // GNB 
            GcpActive:  {component: createprojectActive},
            GcpRest:    {component: createprojectRest},
            GiActive:   {component: importActive},
            GiRest:     {component: importRest},
            Glogout:    {component: logout},
            GopActive:  {component: openprojectActive},
            GopRest:    {component: openprojectRest},
            GsActive:   {component: setingActive},
            GsRest:     {component: settingRest},
            // popup Menu
            PMenuDelete:        {component: PMenuDelete},
            PMenuEditCell:      {component: PMenuEditCell},
            PMenuEditCol:       {component: PMenuEditCol},
            PMenuEditExcel:     {component: PMenuEditExcel},
            PMenuFacetNum:      {component: PMenuFacetNum},
            PMenuFacetScatter:  {component: PMenuFacetScatter},
            PMenuFacetTimeline: {component: PMenuFacetTimeline},
            PMenuFacetTxt:      {component: PMenuFacetTxt},
            PMenuGoogleSheet:   {component: PMenuGoogleSheet},
            PMenuGoogledrive:   {component: PMenuGoogledrive},
            PMenuHtml:          {component: PMenuHtml},
            PMenuLogo:          {component: PMenuLogo},
            PMenuOdf:           {component: PMenuOdf},
            PMenuRename:        {component: PMenuRename},
            PMenuSort:          {component: PMenuSort},
            PMenuSql:           {component: PMenuSql},
            PMenuTemplate:      {component: PMenuTemplate},
            PMenuToEnd:         {component: PMenuToEnd},
            PMenuToFront:       {component: PMenuToFront},
            PMenuToLeft:        {component: PMenuToLeft},
            PMenuToRight:       {component: PMenuToRight},
            PMenuTranspose:     {component: PMenuTranspose},
            PMenuView:          {component: PMenuView},
     }
    }
});
