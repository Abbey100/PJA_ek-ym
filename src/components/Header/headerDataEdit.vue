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
              <v-icon>$i16_pgStart</v-icon>
            </button>
            <button  type="button" class="top-paginaation mr-1" elevation="0"  >
              <v-icon>$i16_pgPre</v-icon>
            </button>
            <button  type="button" class="top-paginaation mr-1" elevation="0"  >
              <v-icon>$i16_pgNext</v-icon>
            </button>
            <button  type="button" class="top-paginaation" elevation="0"  >
              <v-icon>$i16_pgEnd</v-icon>
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
                  <!-- Sprint_3 Hotfix : v-icon으로 변경 -->           
                  <v-icon class="mr-1">$i16_row</v-icon>
                  Rows
                </div>
                <span class="select-caret">
                  <!-- Sprint_3 Hotfix : v-icon으로 변경 -->
                  <v-icon>$i16_Dwn</v-icon>
                </span>
              </div>

              <!-- Dropdown :: visible - d-bloc-->
              <v-card class="dropdown" style="width: 106px;">
                <ul class="dropdown-menu">
                  <!-- dropdown hover & select : active -->
                  <li class="dropdown-item d-flex column-flex align-center active">
                    <!-- Sprint_3 Hotfix : v-icon으로 변경-->

                    <!-- Default 상태
                    <v-icon class="mr-1">$i16_rowWh</v-icon> -->

                    <!--select & hover 시 아이콘 변경 됨 -->
                    <v-icon class="mr-1">$i16_rowWh</v-icon>
                    <span>Rows</span>
                  </li>
                  <li class="dropdown-item d-flex column-flex align-center">
                    <!-- Sprint_3 Hotfix : v-icon으로 변경 -->
                    <!-- Default 상태 -->
                    <v-icon class="mr-1">$i16_record</v-icon>
                    
                    <!-- select & hover 시 아이콘 변경 됨 
                    <v-icon class="mr-1">$i16_recordWh</v-icon>-->
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
                  <!-- Sprint_3 Hotfix : v-icon으로 변경 -->
                  <v-icon>$i16_Dwn</v-icon>
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
                  <!-- Sprint_3 Hotfix : v-icon으로 변경 -->
                  <v-icon>$i16_Dwn</v-icon>
                </span>
              </div>

              <!-- Dropdown :: visible - d-block -->
              <v-card class="dropdown" style="width: 112px;">
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
            <!-- Sprint_3 Hotfix : v-icon으로 변경 -->
            <v-icon class="mr-2">$i16_Open</v-icon>            
            Open
          </v-btn>  

          <div class="select-control">
            <!-- select -->
            <div class="select pl-4 pr-2">
              <div class="select-item">        
                <v-icon class="mr-2">$i16_ExprtWh</v-icon>        
                Export
              </div>
              <span class="select-caret">
                  <!-- Sprint_3 Hotfix : v-icon으로 변경 -->
                  <v-icon>$i16_DwnWh</v-icon>
              </span>
            </div>

          </div> 
        </v-col>      
      </v-col>
    </v-row>
    
  </v-app-bar>
</template>

<script>

  export default {
    name: 'headerDataEdit',
  };
</script>

<style src="./Header.scss" lang="scss"></style>
