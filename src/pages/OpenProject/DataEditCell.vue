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
                      <tr class="">
                        <td class="text-start d-flex align-center">
                          <div class="mark-wrap">
                            <span class="mark" @click="markStar">
                              <i class="ico" :class="[ isMarkStar ?  'ico__star-on' : 'ico__star-off']"></i>
                            </span>
                            <span class="mark" @click="markFlag">
                              <i class="ico" :class="[ isMarkFlag ?  'ico__flag-on' : 'ico__flag-off']"></i>
                            </span>
                          </div>

                          <div class="text-wrap">
                            <span>1</span>
                          </div>
                        </td>
                        <td class="text-start">
                          <div class="text-wrap justify-space-between"> 
                            <span>2014</span>
                            <i class="ico ico__edit"></i>
                          </div>                              
                        </td>

                        <td class="text-start">
                          <div class="text-wrap justify-space-between">
                            <span>LIVTYPE002</span>
                          </div>
                        </td>
                        <td class="text-start">
                          <div class="text-wrap justify-space-between"> 
                            <span>526</span>
                            <i class="ico ico__edit"></i>
                          </div>                          
                        </td>
                        <td class="text-start">
                          <div class="text-wrap justify-space-between"> 
                            <span>20,104</span>
                            <i class="ico ico__edit"></i>
                          </div>                            
                        </td>

                        <td class="text-start ">
                          <div class="text-wrap justify-space-between"> 
                            <span>성북구</span>
                            <i class="ico ico__edit"></i>
                          </div>
                        </td>
                        <td class="text-start">
                          <div class="text-wrap justify-space-between"> 
                            <span>3900</span>
                            <i class="ico ico__edit"></i>
                          </div>                          
                        </td>
                        <td class="text-start">
                          <div class="text-wrap justify-space-between"> 
                            <span>3915</span>
                            <i class="ico ico__edit"></i>
                          </div>                            
                        </td>
                        <td class="text-start">
                          <div class="text-wrap justify-space-between"> 
                            <span>9360</span>
                            <i class="ico ico__edit"></i>
                          </div>                             
                        </td>
                      </tr>

                      <tr class="">
                        <td class="text-start d-flex align-center">
                          <div class="mark-wrap">
                            <span class="mark" @click="markStar">
                              <i class="ico" :class="[ isMarkStar ?  'ico__star-on' : 'ico__star-off']"></i>
                            </span>
                            <span class="mark" @click="markFlag">
                              <i class="ico" :class="[ isMarkFlag ?  'ico__flag-on' : 'ico__flag-off']"></i>
                            </span>
                          </div>

                          <div class="text-wrap">
                            <span>1</span>
                          </div>
                        </td>
                        <td class="text-start">
                          <div class="text-wrap justify-space-between"> 
                            <span>2014</span>
                            <i class="ico ico__edit"></i>
                          </div>                              
                        </td>

                        <td class="text-start active-edit">
                          <div class="text-wrap justify-space-between">
                            <span>LIVTYPE002</span>
                            <i class="ico ico__edit"></i>

                            <!-- 에디트 버튼과 함께 위치 하기 위해 
                                아래 layer-pop 보여 질때 이 위치에 그려짐  -->
                            <span class="dir-arrow"></span>
                          </div>
                          <div class="layer-pop cell-edit">

                            <div class="data-type mb-4 d-flex align-center ">
                              <span>Data type</span>
                              <!-- selectbox :: View number -->
                              <div class="select-control" style="width: 100%;">
                                <!-- select -->
                                <div class="select">
                                  <div class="select-item">                
                                    Text
                                  </div>
                                  <span class="select-caret">
                            <!-- v-icon으로 변경 -->
                                    <v-icon>$i16_Dwn</v-icon>
                                  </span>
                                </div>

                                <!-- Dropdown :: visible - d-block -->
                                <v-card class="dropdown" style="width: 100%;">
                                  <ul class="dropdown-menu">

                                    <!-- dropdown hover & select : select -->
                                    <li class="dropdown-item d-flex column-flex align-center active">
                                      <span>Text</span>
                                    </li>
                                    <li class="dropdown-item d-flex column-flex align-center">
                                      <span>Number</span>
                                    </li>
                                    <li class="dropdown-item d-flex column-flex align-center">
                                      <span>Boolean</span>
                                    </li>
                                    <li class="dropdown-item d-flex column-flex align-center select">
                                      <span>Date</span>
                                    </li>
                                  </ul>
                                </v-card>
                              </div>
                            </div>

                            <v-textarea
                              outlined
                              hide-details
                              name="input-7-4"
                              value="LIVTYPE002"
                              class="pt-0"
                            ></v-textarea>
                            
                            <div class="layer-bottom d-flex justify-space-between aling-center mt-5">

                              <div class="option-check d-flex align-center">
                                <checkbox class="ml-2">
                                  <template slot="checkedContent">
                                    <span class="pl-2">동일한 셀에 모두 적용</span>
                                  </template>
                                </checkbox>                                     
                              </div>

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

                        </td>
                        <td class="text-start">
                          <div class="text-wrap justify-space-between"> 
                            <span>526</span>
                            <i class="ico ico__edit"></i>
                          </div>                          
                        </td>
                        <td class="text-start">
                          <div class="text-wrap justify-space-between"> 
                            <span>20,104</span>
                            <i class="ico ico__edit"></i>
                          </div>                            
                        </td>

                        <td class="text-start">
                          <div class="text-wrap justify-space-between"> 
                            <span>성북구</span>
                            <i class="ico ico__edit"></i>
                          </div>
                        </td>
                        <td class="text-start">
                          <div class="text-wrap justify-space-between"> 
                            <span>3900</span>
                            <i class="ico ico__edit"></i>
                          </div>                          
                        </td>
                        <td class="text-start">
                          <div class="text-wrap justify-space-between"> 
                            <span>3915</span>
                            <i class="ico ico__edit"></i>
                          </div>                            
                        </td>
                        <td class="text-start">
                          <div class="text-wrap justify-space-between"> 
                            <span>9360</span>
                            <i class="ico ico__edit"></i>
                          </div>                             
                        </td>
                      </tr>
                      <tr class="">
                        <td class="text-start d-flex align-center">
                          <div class="mark-wrap">
                            <span class="mark" @click="markStar">
                              <i class="ico" :class="[ isMarkStar ?  'ico__star-on' : 'ico__star-off']"></i>
                            </span>
                            <span class="mark" @click="markFlag">
                              <i class="ico" :class="[ isMarkFlag ?  'ico__flag-on' : 'ico__flag-off']"></i>
                            </span>
                          </div>

                          <div class="text-wrap">
                            <span>1</span>
                          </div>
                        </td>
                        <td class="text-start">
                          <div class="text-wrap justify-space-between"> 
                            <span>2014</span>
                            <i class="ico ico__edit"></i>
                          </div>                              
                        </td>

                        <td class="text-start">
                          <div class="text-wrap justify-space-between">
                            <span>LIVTYPE002</span>
                          </div>
                        </td>
                        <td class="text-start">
                          <div class="text-wrap justify-space-between"> 
                            <span>526</span>
                            <i class="ico ico__edit"></i>
                          </div>                          
                        </td>
                        <td class="text-start">
                          <div class="text-wrap justify-space-between"> 
                            <span>20,104</span>
                            <i class="ico ico__edit"></i>
                          </div>                            
                        </td>

                        <td class="text-start ">
                          <div class="text-wrap justify-space-between"> 
                            <span>성북구</span>
                            <i class="ico ico__edit"></i>
                          </div>
                        </td>
                        <td class="text-start">
                          <div class="text-wrap justify-space-between"> 
                            <span>3900</span>
                            <i class="ico ico__edit"></i>
                          </div>                          
                        </td>
                        <td class="text-start">
                          <div class="text-wrap justify-space-between"> 
                            <span>3915</span>
                            <i class="ico ico__edit"></i>
                          </div>                            
                        </td>
                        <td class="text-start">
                          <div class="text-wrap justify-space-between"> 
                            <span>9360</span>
                            <i class="ico ico__edit"></i>
                          </div>                             
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
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

  export default {
    name: 'DataEditaCell',
    components: {SidePanelTab,},
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
