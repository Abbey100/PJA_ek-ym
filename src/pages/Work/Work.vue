<template>
<div class=" d-flex column-flex align-center justify-center mt-10">
<ul class="work--list"> 
    <li><router-link target="_blank" to="/PageProgress" >Sample Page</router-link> : 페이지 Progress sample</li>

    <li><hr class="mt-5 mb-4" /></li>
    <li class="mb-2"><b>Create Project</b></li>
    <li><router-link target="_blank" to="/CreateProject" >Main</router-link> : 메인</li>
    <li><router-link target="_blank" to="/ImportFile" >Import File</router-link> : 파일 선택</li>
    <li><router-link target="_blank" to="/ImportDatabase" >Import Database</router-link> : 데이타베이스 선택</li>
</ul>
</div>

 
</template>
<script>
    export default {
        name: 'Work',
    }
</script>
<style>
   
   .work--list {
    width: 640px;
   }

    .v-application .work--list a {
        color: blue !important;
        width : 140px;
        display: inline-block
    }
</style>

