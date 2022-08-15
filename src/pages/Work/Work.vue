<template>
<div class=" d-flex column-flex align-start justify-center work-wrap">
<ul class="work--list"> 
    <li class="sprint mb-4 "> SPRINT 2</li>
    <li class="mb-2"><b>Data Edit</b></li>
    <li><router-link target="_blank" to="/DataEditaBase" >DataEditBase</router-link> : 데이터 편집 기본</li>    
    <li><router-link target="_blank" to="/DataEditCell" >DataEditCell</router-link> : 데이터 편집 - 셀</li>    
    <li><router-link target="_blank" to="/DataEditFilter" >DataEditFilter</router-link> : 사이드 패널 - 필터</li>    
    <li><router-link target="_blank" to="/DataEditPop" >DataEditPop</router-link> : Table Pop</li>    
    <li><router-link target="_blank" to="/DataEditNoti" >NotiFilled</router-link> : Notification</li>    
    <li><router-link target="_blank" to="/ApplyOPHistory" >ApplyOPHistory</router-link> : Apply Operation History</li>    
    <li><router-link target="_blank" to="/ExtractOphistory" >ExtractOphistory</router-link> : Extract Operation History</li>    
    <li><router-link target="_blank" to="/SplitColumns" >SplitColumns</router-link> : Split Columns</li>    
    <li><router-link target="_blank" to="/JoinColumns" >JoinColumns</router-link> : JoinColumns</li>    

    <li class="sprint mb-4 mt-12"> SPRINT 1</li>
    <li class="mb-2"><b>Create Project</b></li>
    <li><router-link target="_blank" to="/PageProgress" >Page</router-link> : 페이지 이동 Progress </li>
    <li><router-link target="_blank" to="/FileProgress" >File</router-link> : 파일 업로드 progress</li>
    <li><router-link target="_blank" to="/CircularProgress" >Loader</router-link> : 컨텐츠 로딩 Progress </li>

    <li><hr class="mt-5 mb-4" /></li>

    <li class="mb-2"><b>Create Project</b></li>
    <li><router-link target="_blank" to="/CreateProject" >CreateProject</router-link> : 메인</li>
    <li><router-link target="_blank" to="/ImportFile" >ImportFile</router-link> : 파일 선택</li>
    <li><router-link target="_blank" to="/ImportDatabase" >ImportDatabase</router-link> : 데이타베이스 가져오기</li>
    <li><router-link target="_blank" to="/ParseCSV" >ParsingCSV</router-link> : 프로젝트 생성 파싱 : CSV</li>
    <li><router-link target="_blank" to="/ParseLineBased" >ParseLineBased</router-link> : 프로젝트 생성 파싱 : Linebased</li>
    <li><router-link target="_blank" to="/ParseFixedWidth" >ParseFixedWidth</router-link> : 프로젝트 생성 파싱 : Fixed width</li>
    <li><router-link target="_blank" to="/ParsePCAxis" >ParsePCAxis</router-link> : 프로젝트 생성 파싱 : PC Axis</li>
    <li><router-link target="_blank" to="/ParseJsonFile" >ParseJsonFile</router-link> : 프로젝트 생성 파싱 : JSON File</li>
    <li><router-link target="_blank" to="/ParseWikitext" >ParseWikitext</router-link> : 프로젝트 생성 파싱 : Wikitext</li>
    <li><router-link target="_blank" to="/ParseXML" >ParseXML</router-link> : 프로젝트 생성 파싱 : XML</li>
    <li><router-link target="_blank" to="/ParseOpenDoc" >ParseOpenDoc</router-link> : 프로젝트 생성 파싱 : Open Document</li>
    <li><router-link target="_blank" to="/SelectEnc" >SelectEnc</router-link> : 프로젝트 생성 파싱 : Select Encoding</li>

    <li><hr class="mt-5 mb-4" /></li>

    <li class="mb-2"><b>Account</b></li>
    <li><router-link target="_blank" to="/Usersetting" >user</router-link> : 계정 관리</li>

</ul>
</div>

 
</template>
<script>
    export default {
        name: 'Work',
    }
</script>
<style>
    .sprint {
        padding: 4px;
        text-align: center;
        background-color:#FFF7CF;
        font-size: 14px;
        font-weight: bold;
    }
   .work-wrap {
    overflow: auto !important;
    height: calc(100vh - 64px);
    padding: 40px 0;
    background: #fff !important
   }
   .work--list {
    width: 640px;
   }

    .v-application .work--list a {
        color: blue !important;
        width : 160px;
        display: inline-block
    }
</style>

