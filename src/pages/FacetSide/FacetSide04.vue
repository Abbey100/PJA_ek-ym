<template>
  <v-container fluid >
    
    <div class="open-project edit-data">
        <v-row class="d-flex justify-start column-flex">
            <v-col class="import-file-table">

              <div class="v-data-table elevation-0 base-table editable theme--light">
                <div class="v-data-table__wrapper">
                  <table>
                    <colgroup>
                      <col class="">
                      <col class="">
                      <col class="">
                      <col class="">
                      <col class="">
                      <col class="">
                      <col class="">
                      <col class="">
                      <col class="">
                    </colgroup>

                    <thead class="v-data-table-header">
                      <tr>
                        <th role="columnheader" aria-sort="none" class="text-start sortable">
                          <div class="text-wrap">
                            <span>All</span>
                            <!-- Sprint 3 수정사항 : table head dropdown menu icon 이미지로 변경 -->
                            <v-img src="@/assets/icon--16/ico__arr--down.svg" class="ml-2" />
                          </div>
                        </th>
                        <th role="columnheader" aria-sort="none" class="text-start sortable">
                          <div class="text-wrap">
                            <span>도서관 구분</span>
                            <!-- Sprint 3 수정사항 : table head dropdown menu icon 이미지로 변경 -->
                            <v-img src="@/assets/icon--16/ico__arr--down.svg" class="ml-2" />
                          </div>
                        </th>
                        <th role="columnheader" aria-sort="none" class="text-start sortable">
                          <div class="text-wrap">
                            <span>도서관 구분</span>
                            <!-- Sprint 3 수정사항 : table head dropdown menu icon 이미지로 변경 -->
                            <v-img src="@/assets/icon--16/ico__arr--down.svg" class="ml-2" />
                          </div>
                        </th>
                        <th role="columnheader" aria-sort="none" class="text-start sortable">
                          <div class="text-wrap">
                            <span>도서관 코드</span>
                            <!-- Sprint 3 수정사항 : table head dropdown menu icon 이미지로 변경 -->
                            <v-img src="@/assets/icon--16/ico__arr--down.svg" class="ml-2" />
                          </div>
                        </th>
                        <th role="columnheader" aria-sort="none" class="text-start sortable">
                          <div class="text-wrap">
                            <span>면적</span>
                            <!-- Sprint 3 수정사항 : table head dropdown menu icon 이미지로 변경 -->
                            <v-img src="@/assets/icon--16/ico__arr--down.svg" class="ml-2" />
                          </div>
                        </th>
                        <th role="columnheader" aria-sort="none" class="text-start sortable">
                          <div class="text-wrap">
                            <span>시구군</span>
                            <!-- Sprint 3 수정사항 : table head dropdown menu icon 이미지로 변경 -->
                            <v-img src="@/assets/icon--16/ico__arr--down.svg" class="ml-2" />
                          </div>
                        </th>
                        <th role="columnheader" aria-sort="none" class="text-start sortable">
                          <div class="text-wrap">
                            <span>장서수</span>
                            <!-- Sprint 3 수정사항 : table head dropdown menu icon 이미지로 변경 -->
                            <v-img src="@/assets/icon--16/ico__arr--down.svg" class="ml-2" />
                          </div>
                        </th>
                        <th role="columnheader" aria-sort="none" class="text-start sortable">
                          <div class="text-wrap">
                            <span>방문자수</span>
                            <!-- Sprint 3 수정사항 : table head dropdown menu icon 이미지로 변경 -->
                            <v-img src="@/assets/icon--16/ico__arr--down.svg" class="ml-2" />
                          </div>
                        </th>
                        <th role="columnheader" aria-sort="none" class="text-start sortable">
                          <div class="text-wrap">
                            <span>대출지수</span>
                            <!-- Sprint 3 수정사항 : table head dropdown menu icon 이미지로 변경 -->
                            <v-img src="@/assets/icon--16/ico__arr--down.svg" class="ml-2" />
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                    </tbody>
                  </table>
                </div>
              </div>
            </v-col>
            
      
            <side-panel class="data-control">
              <template slot="panelContent">
                <SidePanelScatter />
              </template>
            </side-panel>
            
        </v-row>
    </div>

  </v-container>
</template>



<script>
  import SidePanelScatter from './04Scatter/SidePanelScatter'
  export default {
    name: 'FacetSide04',
    components:{SidePanelScatter},

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

<style src="../OpenProject/OpenProject.scss" lang="scss"/>
