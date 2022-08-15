<template>
  <v-container fluid>
    <div class="create-project parse-data">
        <v-row class="d-flex justify-start column-flex">
            <v-col class="import-file-table">

              <!-- 영역 notification -->
              <v-alert
                elevation="3"
                class="notification noti-wh-outlined justify-self-center"
                style="top : 64px; margin-left: -261px; "
                >No table could be parsed. Are you sure this is a valid wiki table?
              </v-alert>                            
            </v-col>
       
            <!-- 사이드 패널 공통 클래스 수정, 컴포넌트 화 -->
            <SpParseJsonFile />
        </v-row>
    </div>

  </v-container>
</template>



<script>
  import SpParseJsonFile from './SidePanel/SpParseJsonFile'

  export default {
    name: 'ParseXML',
    components: {SpParseJsonFile},

    data () {
      return {
        checked:false,
      
      }
    },        
  } 

</script>

<style src="./CreateProject.scss" lang="scss"/>
