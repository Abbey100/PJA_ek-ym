<template>
  <v-app-bar
    class="main-header data-edit"
    height="64"
    elevation="0"
    fixed
    >
    <v-row class="d-flex column-flex align-between justify-space-between">

      <!-- Header Left : logo & Project name --> 
      <v-col class="h-left d-flex justify-start">
        <!-- 로고 -->
        <div class="logo">
          <router-link to="/Login">
            <v-img src="@/assets/img/logo.png" height="24" contain></v-img>
          </router-link>
        </div>

        <!-- 프로젝트 이름 -->
        <div class="project-name">
          <div class="ml-4 pt-1 d-flex column-flex align-center">
            <span class="dl-l pl-4">전국도서관표준데이터.csv</span>
          </div>
        </div>
      </v-col>

      <!-- Header right : Button UI Group -->
      <v-col class="h-right d-flex align-center justify-end">

        <!-- Pagination -->
        <v-col class="pagination dl-l  d-flex justify-start">
          <div class="button-group d-flex column-flex align-center mr-4">
            <button  type="button" class="top-paginaation mr-1" elevation="0"  >
              <i class="ico ico__first"></i>
            </button>
            <button  type="button" class="top-paginaation mr-1" elevation="0"  >
              <i class="ico ico__pre"></i>
            </button>
            <button  type="button" class="top-paginaation mr-1" elevation="0"  >
              <i class="ico ico__next"></i>
            </button>
            <button  type="button" class="top-paginaation" elevation="0"  >
              <i class="ico ico__last"></i>
            </button>
          </div>
           <div class="page-input d-flex justify-start column-flex align-center">
              <v-text-field
                class="page-input"
                height="24"
                value="2"
                single-line
                hide-details
                outlined
              ></v-text-field>
              <span class="ml-2">/12Page</span>
            </div>
       
        </v-col>      

        <v-col class="show-as dl-l d-flex">
          <div class="show-control d-flex justify-start flex-colmn align-center">
            <span class="dl-r mr-2 ml-4">Show as</span>

            <!-- selectbox :: Select - Rows & Records -->
            <div class="select-control plain" style="width: 106px">
              <!-- select -->
              <div class="select">
                <div class="select-item">                
                  <i class="ico ico__show ico__rows-bl mr-1"></i>
                  Rows
                </div>
                <span class="select-caret">
                  <i class="ico ico__select-caret"></i>
                </span>
              </div>

              <!-- Dropdown -->
              <v-card class="dropdown" style="width: 106px;">
                <ul class="dropdown-menu">
                  <!-- dropdown hover & select : select -->
                  <li class="dropdown-item d-flex column-flex align-center active">
                    <!-- 아이템 select & hover 시 아이콘 변경 됨-->
                    <i class="ico ico__show ico__rows-wh mr-1"></i>
                    <span>Rows</span>
                  </li>
                  <li class="dropdown-item d-flex column-flex align-center">
                    <i class="ico ico__show ico__rows-bl mr-1"></i>
                    <span>Records</span>
                  </li>
                </ul>
              </v-card>              
            </div>

            <!-- selectbox :: View number -->
            <div class="select-control plain" style="width: 74px;">
              <!-- select -->
              <div class="select">
                <div class="select-item">                
                  1000
                </div>
                <span class="select-caret">
                  <i class="ico ico__select-caret"></i>
                </span>
              </div>

              <!-- Dropdown :: visible - d-block -->
              <v-card class="dropdown" style="width: 74px;">
                <ul class="dropdown-menu">

                  <!-- dropdown hover & select : select -->
                  <li class="dropdown-item d-flex column-flex align-center active">
                    <span>1000</span>
                  </li>
                  <li class="dropdown-item d-flex column-flex align-center">
                    <span>500</span>
                  </li>
                  <li class="dropdown-item d-flex column-flex align-center">
                    <span>100</span>
                  </li>
                  <li class="dropdown-item d-flex column-flex align-center select">
                    <span>50</span>
                  </li>
                  <li class="dropdown-item d-flex column-flex align-center">
                    <span>25</span>
                  </li>
                </ul>
              </v-card>
            </div>
          </div>

          <div class="show-control d-flex justify-start flex-colmn align-center ml-4">
            <!-- selectbox :: View percent -->
            <div class="select-control plain">
               <!-- select -->
              <div class="select">
                <div class="select-item">                
                  100%
                </div>
                <span class="select-caret">
                  <i class="ico ico__select-caret"></i>
                </span>
              </div>

              <!-- Dropdown :: visible - d-block -->
              <v-card class="dropdown " style="width: 112px;">
                <ul class="dropdown-menu">

                  <!-- dropdown hover & select : select -->
                  <li class="dropdown-item d-flex column-flex align-center active">
                    <span>100%</span>
                  </li>
                  <li class="dropdown-item d-flex column-flex align-center">
                    <span>125%</span>
                  </li>
                  <li class="dropdown-item d-flex column-flex align-center">
                    <span>150%</span>
                  </li>
                  <li class="dropdown-item d-flex column-flex align-center">
                    <span>200%</span>
                  </li>
                </ul>
              </v-card>
            </div>          
          </div>
        </v-col>      

        <!-- Button group -->
        <v-col class="project-control d-flex dl-l">
          <v-btn
            class="text-capitalize font-weight-regular btn-open mr-4"
            height="32"
            elevation="0"
            :ripple="false"
            outlined
            primary
          >
            <i class="ico ico__open mr-2"></i>
            Open
          </v-btn>  

          <div class="select-control">
            <!-- select -->
            <div class="select pl-4 pr-2">
              <div class="select-item">                
                <i class="ico ico__export mr-2"></i>
                Export
              </div>
              <span class="select-caret">
                <i class="ico ico__select-caret__wh"></i>
              </span>
            </div>

            <!-- Dropdown -->
            <v-card class="dropdown d-block" style="min-width: 235px; left:-115px ">
              <ul class="dropdown-menu">
                  <li
                    v-for="item in items" :key ="item"
                    class="dropdown-item d-flex column-flex align-center" 
                    :class="{ 'd-section' : item.isSecStart, 
                              'ico-hide' : item.isIcoHide, 
                              'sub-menu' : item.isSubMenu }"
                  >
                    <i class="ico ico__pop-menu" 
                    :class="['ico__pop--' + item.iconName]" ></i>
                    <span>{{item.text}}</span>
                  </li>
              </ul>
            </v-card>
          </div> 
        </v-col>      
      </v-col>
    </v-row>
    
  </v-app-bar>
</template>

<script>

  export default {
    name: 'headerDataBase',

    data() {
      return {
       items: [
        {
          iconName : 'logo', 
          isIcoHide : false, 
          text: 'Arrager project archive to file',
          isSecStart: false,
          isSubMenu : false,
        },

        {
          iconName : '', 
          isIcoHide : true, 
          text: 'Tab-separated value',
          isSecStart: true,
          isSubMenu : true,
        },
        {
          iconName : '', 
          isIcoHide : true, 
          text: 'Comma-separated value',
          isSecStart: true,
          isSubMenu : false,
        },
        {
          iconName : 'code', 
          isIcoHide : false, 
          text: 'Html',
          isSecStart: false,
          isSubMenu : false,
        },
        {
          iconName : 'xls', 
          isIcoHide : false, 
          text: 'Excel (.xls)',
          isSecStart: false,
          isSubMenu : false,
        },
        {
          iconName : 'xls', 
          isIcoHide : false, 
          text: 'Excel 2007+ (.xls)',
          isSecStart: false,
          isSubMenu : false,
        },
        {
          iconName : 'odf', 
          isIcoHide : false, 
          text: 'ODF Spreadsheet',
          isSecStart: false,
          isSubMenu : false,
        },

        {
          iconName : '', 
          isIcoHide : true, 
          text: 'Custom tabular exporter...',
          isSecStart: true,
          isSubMenu : false,
        },
        {
          iconName : 'sql', 
          isIcoHide : false, 
          text: 'SQL Exporter',
          isSecStart: false,
          isSubMenu : false,
        },
        {
          iconName : 'template', 
          isIcoHide : false, 
          text: 'Templating',
          isSecStart: false,
          isSubMenu : false,
        },
        {
          iconName : 'drive', 
          isIcoHide : false, 
          text: 'Archive to Google Drive',
          isSecStart: true,
          isSubMenu : false,
        },
        {
          iconName : 'sheet', 
          isIcoHide : false, 
          text: 'Google Sheets',
          isSecStart: false,
          isSubMenu : false,
        },
        {
          iconName : '', 
          isIcoHide : true, 
          text: 'Wikibase edits...',
          isSecStart: true,
          isSubMenu : false,
        },
        {
          iconName : '', 
          isIcoHide : true, 
          text: 'Quick Statements file',
          isSecStart: false,
          isSubMenu : false,
        },
        {
          iconName : '', 
          isIcoHide : true, 
          text: 'Wikibase schema',
          isSecStart: false,
          isSubMenu : false,
        },

       ]
      }
    },

  };
</script>

<style src="./Header.scss" lang="scss"></style>
