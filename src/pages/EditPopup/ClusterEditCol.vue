<template>
  <v-container fluid>
     <v-overlay 
      :value="overlay"
      opacity="0.4"
      >
    </v-overlay>    

    <!-- dialog 의 inline style은 dialog의 위치를 위한 임시 코드  -->
    <!-- table-edit : 공통 속성
        custom-text : 팝업 구분  -->
    <v-card class="dialog table-edit cluster-edit" elevation="3" style="position: absolute; width: 1200px; left:50%; top: 5%; margin-left: -600px;  z-index:6">
      <!-- Menu : Edit cells > Common transforms > To text -->
      
      <!-- Dialog Title -->
      <dlgTitle :titleText="titleText" />

      <!-- Dialog Content -->
      <div class="dialog-content bg-default pt-6">
        <div class="top-text mb-4">
          <p class="mb-2">This feature helps you find groups of different cell values that might be alternative representations of the same thing. For example, the two strings "New York" and "new york" are very likely to refer to the same concept and just have capitalization differences, and "Gödel" and "Godel" probably refer to the same person.</p>
          <a href="#" class="text-clc-deep">find out more</a>
        </div>

        <div class="section-col d-flex">
          <div class="col mr-6">
            <div class="option d-flex align-center">
              <span class="opt-title mr-2">Method</span>

              <div class="select-control" style="width: 144px;">
                <!-- select -->
                <div class="select">
                  <div class="select-item">                
                    key collision
                  </div>
                  <span class="select-caret">
                    <!-- Sprint_3 Hotfix : v-icon으로 변경 -->
                    <v-icon>$i16_Dwn</v-icon>
                  </span>
                </div>

                <!-- Dropdown :: visible - d-block -->
                <v-card class="dropdown" >
                  <ul class="dropdown-menu">
                  </ul>
                </v-card>
              </div>            
            </div>
            <div class="cluster-table">
              <v-data-table
                  :headers="headers"
                  :items="desserts"
                  :items-per-page="1"
                  hide-default-footer
                  disable-sort
                  fixed-header
                  class="elevation-0 base-table"
              ></v-data-table> 
            </div>
          </div>

          <div class="col">
            279 clusters found
          </div>        
        </div>
      </div>

      <!-- Dialog Action -->
      <dlgActDefault />  

    </v-card>
  </v-container>
</template>



<script>
import dlgTitle from '@/components/DialogComp/DialogTitle'
import dlgActDefault from '@/components/DialogComp/DialogActionCluster'


export default {
  name: 'ClusterEditCol',
  components: {dlgTitle, dlgActDefault,},
    data () {
    return {
      titleText : "Cluster & Edit column [ Publisher ]",     
      checked:false,
      headers: [
        {
          text: 'Cluster Size',
          align: 'start',
          sortable: false,
          value: 'th00',
        },
        { text: 'Row count', value: 'th01' },
        { text: 'Values in Cluster', value: 'th02' },
        { text: 'Merge', value: 'th03' },
        { text: 'New Cell  Value', value: 'th04' },
      ],
      desserts: [
        {
          th00: '1',
          th01: '2014',
          th02: 'LIVTYPE002',
          th03: 526  ,
          th04: '20,104',
        },
      ],
    }
  },  
} 

</script>

<style src="./EditPopup.scss" lang="scss"/>
