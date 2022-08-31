<template>
  <div class="d-flex justify-start">
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
  </div>
</template>



<script>

  export default {
    name: 'LogoTitle',

  };
</script>

<style src="../Header.scss" lang="scss"></style>
