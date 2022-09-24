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
        <!--  d-none : 프로젝트 생성 초기 화면에서 프로젝트 이름 영역은 보이지 않음 --> 
        <div class="project-name d-none">
          <div class="ml-4 pt-1 d-flex column-flex align-center">
            <span class="dl-l pl-4">전국도서관표준데이터.csv</span>
          </div>
        </div>
      </v-col>
    </v-row>
    
  </v-app-bar>
</template>



<script>

  export default {
    name: 'Header2',
  };
</script>

<style src="./Header.scss" lang="scss"></style>
