<template>
  <v-container fluid >
    
    <div class="open-project edit-data">
        <v-row class="d-flex justify-start column-flex">
            <v-col class="import-file-table">
            


          
            </v-col>


            <!-- 사이드 패널 공통 클래스로 -->
            <v-col class="side-panel data-control">
              <SidePanelFilter />
            </v-col>
        </v-row>
    </div>

  </v-container>
</template>



<script>
  import SidePanelFilter from './SidePanelFilter'

  export default {
    name: 'DataEditFilter',
    components: {SidePanelFilter,},
    data () {
      return {
        tooltipText: "변경내역을 복사하려면 ‘추출’, 이전복사한 이력을 적용하려면 ‘적용'을 선택하세요",

        isMarkStar : false,
        isMarkFlag : false,
        checked:false,
      }
    },  
    methods: {
      markStar: function() {
          this.isMarkStar = !this.isMarkStar;
      },
      markFlag: function() {
          this.isMarkFlag = !this.isMarkFlag;
      }
    }      
  } 

</script>

<style src="./OpenProject.scss" lang="scss"/>
