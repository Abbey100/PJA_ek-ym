<template>
  <v-container fluid>
    <div class="create-project parse-data">
        <v-row class="d-flex justify-start column-flex">
          <v-col class="import-file-table">
                      
          </v-col>
            <!-- Sprint 2에 수정 됨 
                사이드 패널 공통 클래스 수정, 컴포넌트 화 
                체크박스 컴포넌트화 및 반영 -->
          <SpParseJsonFile />
        </v-row>           
    </div>

  </v-container>
</template>



<script>
  import SpParseJsonFile from './SidePanel/SpParseJsonFile'
  export default {
    name: 'ParsePCAxis',
    components: {SpParseJsonFile},

    data () {
      return {
        checked:false,
    
      }
    },        
  } 

</script>

<style src="./CreateProject.scss" lang="scss"/>
