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
        <!-- 2022.08.20 : head 내 공통 컴포넌트 화 -->
        <LogoTitle />
      </v-col>

      <!-- Header right : Button UI Group -->
      <v-col class="h-right d-flex align-center justify-end">

        <!-- Pagination -->
        <v-col class=" dl-l ">
          <!-- 2022.08.20 : head 내 공통 컴포넌트 화 -->
          <Pagination />  
        </v-col>      

        <v-col class="dl-l">
          <!-- 2022.08.20 : head 내 공통 컴포넌트 화 -->
          <ShowAs />
        </v-col>      

        <!-- Button group -->
        <v-col class="dl-l">
          <!-- 2022.08.20 : head 내 공통 컴포넌트 화 -->
          <ProjCtrl />
        </v-col>      
      </v-col>
    </v-row>
    
  </v-app-bar>
</template>

<script>
  import Pagination from './headComp/Pagination'
  import ShowAs from './headComp/ShowAs'
  import ProjCtrl from './headComp/ProjCtrl'
  import LogoTitle from './headComp/LogoTitle'
  export default {
    name: 'headerDataBase',
    components: {Pagination, ShowAs, ProjCtrl, LogoTitle},

  };
</script>

<style src="./Header.scss" lang="scss"></style>
