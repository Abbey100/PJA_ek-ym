<template>
  <v-container fluid>
    <div class="create-project parse-data">
        <v-row class="d-flex justify-start column-flex">
          <v-col class="import-file-table">
                      
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
