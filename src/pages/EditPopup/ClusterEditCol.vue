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
              <div class="opt-item d-flex align-center">
                  <span class="opt-title mr-2">keying Function</span>
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
            </v-row>
            <v-row class="cluster-table">
              <div class="v-data-table elevation-0 base-table v-data-table--fixed-header theme--light">
                <div class="v-data-table__wrapper">
                  <table>
                    <colgroup>
                      <col class="">
                      <col class="">
                      <col class="">
                      <col class="">
                      <col class="">
                    </colgroup>
                    <thead class="v-data-table-header">
                      <tr>
                        <th role="columnheader" scope="col" aria-label="Cluster Size" class="text-start"><span>Cluster Size</span></th>
                        <th role="columnheader" scope="col" aria-label="Row count" class="text-start"><span>Row count</span></th>
                        <th role="columnheader" scope="col" aria-label="Values in Cluster" class="text-start"><span>Values in Cluster</span></th>
                        <th role="columnheader" scope="col" aria-label="Merge" class="text-start"><span>Merge</span></th>
                        <th role="columnheader" scope="col" aria-label="New Cell  Value" class="text-start"><span>New Cell  Value</span></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="">
                        <td class="text-start">6</td>
                        <td class="text-start">18</td>
                        <td class="text-start">
                          <div class="value-item d-flex">
                            <span class="text-clc-deep">Publication International Ltd</span>
                            <span class="value-row">(2rows)</span>
                          </div>
                          <div class="value-item d-flex">
                            <span class="text-clc-deep">Publication International Ltd</span>
                            <span class="value-row">(7rows)</span>
                          </div>
                          <div class="value-item d-flex">
                            <span class="text-clc-deep">Publication International Ltd</span>
                            <span class="value-row">(210ows)</span>
                          </div>
                          <div class="value-item d-flex">
                            <span class="text-clc-deep">Publication International Ltd</span>
                            <span class="value-row">(2rows)</span>
                          </div>
                          <div class="value-item d-flex">
                            <span class="text-clc-deep">Publication International Ltd</span>
                            <span class="value-row">(2rows)</span>
                          </div>
                        </td>
                        <td class="text-start"><checkbox /></td>
                        <td class="text-start">
                          <v-text-field 
                            text-color="primary"
                            value="Publications international Ltd"
                            hide-details
                            outlined
                            >
                          </v-text-field>
                        </td>
                      </tr>
                      <tr class="">
                        <td class="text-start">6</td>
                        <td class="text-start">18</td>
                        <td class="text-start">
                          <div class="value-item d-flex">
                            <span class="text-clc-deep">Publication International Ltd</span>
                          </div>
                          <div class="value-item d-flex">
                            <span class="text-clc-deep">Publication International Ltd</span>
                          </div>
                          <div class="value-item d-flex">
                            <span class="text-clc-deep">Publication International Ltd</span>
                          </div>
                        </td>
                        <td class="text-start"><checkbox /></td>
                        <td class="text-start">
                          <v-text-field 
                            text-color="primary"
                            value="Publications international Ltd"
                            hide-details
                            outlined
                            >
                          </v-text-field>
                        </td>
                      </tr>
                      <tr class="">
                        <td class="text-start">6</td>
                        <td class="text-start">18</td>
                        <td class="text-start">
                          <div class="value-item d-flex">
                            <span class="text-clc-deep">Publication International Ltd</span>
                          </div>
                          <div class="value-item d-flex">
                            <span class="text-clc-deep">Publication International Ltd</span>
                          </div>
                          <div class="value-item d-flex">
                            <span class="text-clc-deep">Publication International Ltd</span>
                          </div>
                        </td>
                        <td class="text-start"><checkbox /></td>
                        <td class="text-start">
                          <v-text-field 
                            text-color="primary"
                            value="Publications international Ltd"
                            hide-details
                            outlined
                            >
                          </v-text-field>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </v-row>
          </v-col>

          <v-col>
            <v-row class="found-info sec-top mb-4 justify-center align-center">
              <b>279 clusters found</b>
            </v-row>

            <v-row class="cluster-graph mb-6">
              <v-row class="mb-2">
                <b># Choices in cluster</b>
              </v-row>
              <v-row class="graph-area">
                <!-- Sprint 3 : 라이브러리 삽입 시 아래 graph-wrap은 삭제  -->
                  <div class="graph-wrap">
                      <v-img src="@/assets/img/img__dummy-graph.png" />
                  </div>
              </v-row>
              <v-row class="range d-flex justify-center">2 - 6</v-row>
            </v-row>

            <v-row class="cluster-graph mb-6">
              <v-row class="mb-2">
                <b># Row in cluster</b>
              </v-row>
              <v-row class="graph-area">
                <!-- Sprint 3 : 라이브러리 삽입 시 아래 graph-wrap은 삭제  -->
                  <div class="graph-wrap">
                      <v-img src="@/assets/img/img__dummy-graph.png" />
                  </div>
              </v-row>
              <v-row class="range d-flex justify-center">2 - 6</v-row>
            </v-row>

            <v-row class="cluster-graph mb-6">
              <v-row class="mb-2">
                <b># Average length of choice</b>
              </v-row>
              <v-row class="graph-area">
                <!-- Sprint 3 : 라이브러리 삽입 시 아래 graph-wrap은 삭제  -->
                  <div class="graph-wrap">
                      <v-img src="@/assets/img/img__dummy-graph.png" />
                  </div>
              </v-row>
              <v-row class="range d-flex justify-center">2 - 6</v-row>
            </v-row>

            <v-row class="cluster-graph mb-6">
              <v-row class="mb-2">
                <b># Length variance of choices</b>
              </v-row>
              <v-row class="graph-area">
                <!-- Sprint 3 : 라이브러리 삽입 시 아래 graph-wrap은 삭제  -->
                  <div class="graph-wrap">
                      <v-img src="@/assets/img/img__dummy-graph.png" />
                  </div>
              </v-row>
              <v-row class="range d-flex justify-center">2 - 6</v-row>
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
  name: 'ClusterEditCol',
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
