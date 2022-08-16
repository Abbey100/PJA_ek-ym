<template>
  <v-container fluid >
    <NotiFilled class="noti-point" style="top:20px; left:50%; margin-left: -320px">
      <template slot="alertText">
        <span>Edit single cell on row 4, column 시구군Edit single cell on row 4, column 시구군Edit single cell on row 4, column 시구군Edit single cell on row 4, column 시구군Edit single cell on row 4, column 시구군Edit single cell on row 4, column 시구군Edit single cell on row 4, column 시구군Edit single cell on row 4, column 시구군Edit single cell on row 4, column 시구군Edit single cell on row 4, column 시구군Edit single cell on row 4, column 시구군Edit single cell on row 4, column 시구군Edit single cell on row 4, column 시구군</span>      
      </template>
    </NotiFilled>
    <NotiFilled class="noti-point" style="top:50%; left:50%; margin-left: -120px">
      <template slot="alertText">
        <span>Edit single cell on row 4</span>      
      </template>
    </NotiFilled>
    <div class="open-project edit-data">
      <v-row class="d-flex justify-start column-flex">
        <v-col class="import-file-table">

        </v-col>
        

        <!-- 사이드 패널 공통 클래스 수정, 컴포넌트 화 -->
        <side-panel class="data-control">
          <template slot="panelContent">
            <SidePanelTab />
          </template>
        </side-panel>
      </v-row>
    </div>

  </v-container>
</template>



<script>
  import SidePanelTab from './SidePanelTab'
  import NotiFilled from '@/components/Notification/NotiFilled'

  export default {
    name: 'DataEditaCell',
    components: {SidePanelTab,NotiFilled},
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
