<template>
  <!-- 
      클래스 추가 : project-new 
      프로젝트 생성 중 상단 헤더 구분    
  -->
  <v-app-bar
    class="main-header project-new"
    height="64"
    elevation="0"
    fixed
    >
    <v-row class="d-flex column-flex align-between justify-space-between">

      <!-- 
          :: 2022.08.01 수정
          :: 수정 항목 
              - v-row 내부 col 클래스 명, 구조 등 수정
              - 좌우 영역을 구분 하여 해당 영역에 필요한 데이터 구조를 명확히 하기 위함

          :: v-col(left) - logo 삭제, h-left 추가
          :: v-col(right) - create 삭제, h-right 추가
      -->
      <!-- 내부 요소들은 d-block/d-none 을 이용해 view/hide -->

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
        
        <!-- 계정 생성 버튼 -->
        <div class="create d-none">
          <span class="pr-4 font-weight-regul">New to A-RRANGER?</span>
    
          <router-link
            to="/CreateAccount"
            class="create-account px-4"
          >
            Create an Account
          </router-link>
        </div>

        <!-- Tag -->

        <div class="tag-wrap">
          <div class="dl-r pr-6 mr-6 d-flex justify-start column-flex align-center">
            <!-- 태그 추가 -->
            <v-btn
              class="text-capitalize add-tag"
              height="24"
              elevation="0"
              :ripple="false"
              outlined
              rounded
              small
            >
              + Tags</v-btn>

            <!-- 추가 된 태그 -->

            <!-- 태그 입력 -->
          </div>
        </div>

        <!-- Project reate button -->
        <v-btn
          class="text-capitalize font-weight-regular btn-create-prj"
          height="32"
          elevation="0"
          :ripple="false"
          color="primary"
        >
          Create Project</v-btn>        
      </v-col>
    </v-row>
    
  </v-app-bar>
</template>

<script>

  export default {
    name: 'headerPrjParse02',

    methods: {
      logOut: function () {
        window.localStorage.setItem('authenticated', false);
        this.$router.push('/login');
      }
    }
  };
</script>

<style src="./Header.scss" lang="scss"></style>
