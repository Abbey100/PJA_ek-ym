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
                            <!-- v-icon으로 변경 -->
                            <v-icon>$i16_Dwn</v-icon>
                          </div>
                        </th>
                        <th role="columnheader" aria-sort="none" class="text-start sortable">
                          <div class="text-wrap">
                            <span>도서관 구분</span>
                            <!-- v-icon으로 변경 -->
                            <v-icon>$i16_Dwn</v-icon>
                          </div>
                        </th>
                        <th role="columnheader" aria-sort="none" class="text-start sortable">
                          <div class="text-wrap">
                            <span>도서관 구분</span>
                            <!-- v-icon으로 변경 -->
                            <v-icon>$i16_Dwn</v-icon>
                          </div>
                        </th>
                        <th role="columnheader" aria-sort="none" class="text-start sortable">
                          <div class="text-wrap">
                            <span>도서관 코드</span>
                            <!-- v-icon으로 변경 -->
                            <v-icon>$i16_Dwn</v-icon>
                          </div>
                        </th>
                        <th role="columnheader" aria-sort="none" class="text-start sortable">
                          <div class="text-wrap">
                            <span>면적</span>
                            <!-- v-icon으로 변경 -->
                            <v-icon>$i16_Dwn</v-icon>
                          </div>
                        </th>
                        <th role="columnheader" aria-sort="none" class="text-start sortable">
                          <div class="text-wrap">
                            <span>시구군</span>
                            <!-- v-icon으로 변경 -->
                            <v-icon>$i16_Dwn</v-icon>
                          </div>
                        </th>
                        <th role="columnheader" aria-sort="none" class="text-start sortable">
                          <div class="text-wrap">
                            <span>장서수</span>
                            <!-- v-icon으로 변경 -->
                            <v-icon>$i16_Dwn</v-icon>
                          </div>
                        </th>
                        <th role="columnheader" aria-sort="none" class="text-start sortable">
                          <div class="text-wrap">
                            <span>방문자수</span>
                            <!-- v-icon으로 변경 -->
                            <v-icon>$i16_Dwn</v-icon>
                          </div>
                        </th>
                        <th role="columnheader" aria-sort="none" class="text-start sortable">
                          <div class="text-wrap">
                            <span>대출지수</span>
                            <!-- v-icon으로 변경 -->
                            <v-icon>$i16_Dwn</v-icon>
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
                <SidePanelTextEditPop />
              </template>
            </side-panel>
            
        </v-row>
    </div>

    <!-- Sprint3 : Facet Text eidt layer popup -->
    <div class="layer-pop  facet-edit d-block" style="right: 124px; top:238px">
      <span class="dir-arrow dir-right"></span>
      <v-textarea
          outlined
          hide-details
          name="input-7-4"
          value="LIVTYPE002"
          class="pt-0"
          no-resize
      ></v-textarea>
      
      <div class="layer-bottom d-flex justify-end aling-center mt-5">

          <div class="button-group">
          <v-btn
              class="text-capitalize btn-md point-deep mr-2"
              height="32"
              elevation="0"
              :ripple="false"
              outlined
          >취소</v-btn>  

          <v-btn
              class="text-capitalize btn-md point-deep"
              height="32"
              elevation="0"
              :ripple="false"
          >적용</v-btn>                                  
          </div>
      </div>
    </div> 
  </v-container>
</template>



<script>
  import SidePanelTextEditPop from './03Text/SidePanelTextEditpop'
  export default {
    name: 'FacetSide03EditPop',
    components:{SidePanelTextEditPop},

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
