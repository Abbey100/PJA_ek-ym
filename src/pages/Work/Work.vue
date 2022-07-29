<template>
<div class=" d-flex column-flex align-center justify-center mt-10">
<ul class="work"> 
    <li><router-link target="_blank" to="/PageProgress" >Sample Page</router-link> : 페이지 Progress sample</li>
</ul>
</div>

 
</template>
<script>
    export default {
        name: 'Work',
    }
</script>
<style>
   
   .work {
    width: 640px;
   }
    .v-application a {
        color: blue !important;
    }
</style>

