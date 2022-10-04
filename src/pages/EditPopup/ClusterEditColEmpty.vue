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
          <v-col class="mr-6">
            <v-row class="option sec-top pb-4 mb-4">
              <div class="opt-item d-flex align-center mr-8">
                  <span class="opt-title mr-2">Method</span>
                  <div class="select-control" style="width: 144px;">
                    <!-- select -->
                    <div class="select">
                      <div class="select-item">                
                        Nearest Neight...
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
              <div class="opt-item d-flex align-center mr-8">
                  <span class="opt-title mr-2">keying Function</span>
                  <div class="select-control" style="width: 144px;">
                    <!-- select -->
                    <div class="select">
                      <div class="select-item">                
                        PPM
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

              <div class="opt-item d-flex align-center mr-8">
                  <span class="opt-title mr-2">Radius</span>
                  <v-text-field 
                    class="pt-0"
                    text-color="primary"
                    value="1.0"
                    hide-details
                    outlined
                    >
                  </v-text-field>          
              </div>

              <div class="opt-item d-flex align-center">
                  <span class="opt-title mr-2">Block Chars</span>
                  <v-text-field 
                    class="pt-0"
                    text-color="primary"
                    value="6"
                    hide-details
                    outlined
                    >
                  </v-text-field>          
              </div>
            </v-row>
            <v-row class="justify-center align-center">
              <div class="empty-descript d-flex flex-column justify-center">
                <v-img src="@/assets/img/img__no-clusters.png" width="72" contain></v-img>
                <b class="lg-text my-1">No clusters </b>
                <b class="mb-1">선택된 메소드에 클러스터가 없습니다.</b>
                <span>다른 메소드를 선택하거나 매개변수를 바꿔보세요.</span>
              </div>
            </v-row>
          </v-col>

          <v-col>
            <v-row class="found-info sec-top mb-4 justify-center align-center">
              <b>0 clusters found</b>
            </v-row>
       
          </v-col>        
        </div>
      </div>

      <!-- Dialog Action -->
      <DialogActionCluster />  

    </v-card>
  </v-container>
</template>



<script>
import dlgTitle from '@/components/DialogComp/DialogTitle'
import DialogActionCluster from '@/components/DialogComp/DialogActionCluster'


export default {
  name: 'ClusterEditColEmpty',
  components: {dlgTitle, DialogActionCluster,},
    data () {
    return {
      titleText : "Cluster & Edit column [ Publisher ]",     
      checked:false,

    }
  },  
} 

</script>

<style src="./EditPopup.scss" lang="scss"/>
