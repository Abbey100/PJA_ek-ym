<template>
  <v-container fluid>
    <div class="create-project parse-data">

      <v-row class="d-flex justify-start column-flex">

          <!-- 영역 notification -->
          <v-col class="import-file-table">
            <v-alert
              elevation="3"
              class="notification noti-wh-outlined justify-self-center"
              style="top : 64px; margin-left: -261px; "
            >No table could be parsed. Are you sure this is a valid wiki table?
          </v-alert>         
          </v-col>

            <!-- Sprint 2에 수정 됨 
                사이드 패널 공통 클래스 수정, 컴포넌트 화 
                체크박스 컴포넌트화 및 반영 -->
          <SpParseWikitext />
      </v-row>
    </div>

  </v-container>
</template>



<script>
  import SpParseWikitext from './SidePanel/SpParseWikitext'

  export default {
    name: 'ParseWikitext',
    components: {SpParseWikitext},
    data () {
      return {
        checked:false,
      }
    },        
  } 

</script>

<style src="./CreateProject.scss" lang="scss"/>
