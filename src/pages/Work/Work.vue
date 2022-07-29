<template>
<div class=" d-flex column-flex align-center justify-center mt-10">
<ul class="work--list"> 
    <li class="mb-2"><b>Create Project</b></li>
    <li><router-link target="_blank" to="/PageProgress" >Page</router-link> : 페이지 이동 Progress </li>
    <li><router-link target="_blank" to="/FileProgress" >File</router-link> : 파일 업로드 progress</li>
    <li><router-link target="_blank" to="/CircularProgress" >Loader</router-link> : 컨텐츠 로딩 Progress </li>

    <li><hr class="mt-5 mb-4" /></li>

    <li class="mb-2"><b>Create Project</b></li>
    <li><router-link target="_blank" to="/CreateProject" >CreateProject</router-link> : 메인</li>
    <li><router-link target="_blank" to="/ImportFile" >ImportFile</router-link> : 파일 선택</li>
    <li><router-link target="_blank" to="/ImportDatabase" >ImportDatabase</router-link> : 데이타베이스 가져오기</li>
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

