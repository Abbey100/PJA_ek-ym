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
                            <!-- 2022.08.20 수정사항: table head dropdown Open icon 이미지로 변경 -->
                            <v-img class="ml-2" src="@/assets/icon--16/ico__table__layer-menu.svg" max-width="16" />
                          </div>
                        </th>
                        <th role="columnheader" aria-sort="none" class="text-start sortable">

                          <!-- dropdown 상위에는 select-control 반드시 필요 -->
                          <div class="text-wrap select-control">
                            <span>도서관 구분</span>
                            <!-- 2022.08.20 수정사항: table head dropdown Open icon 이미지로 변경 -->
                            <v-img class="ml-2" src="@/assets/icon--16/ico__table__layer-menu.svg" max-width="16" />


                            <!-- Dropdown -->
                            <v-card class="dropdown d-block" style="min-width: 160px; top: 20px;  left:0px">
                              <ul class="dropdown-menu">
                                  <li
                                    v-for="item in items" :key ="item"
                                    class="dropdown-item d-flex column-flex align-center justify-space-between" 
                                    :class="{ 'd-section' : item.isSecStart, 
                                              'ico-hide' : item.isIcoHide, 
                                              'sub-menu' : item.isSubMenu }"
                                  >
                                    <div class="item-wrap d-flex column-flex align-center">
                                      <i class="ico ico__pop-menu" 
                                      :class="['ico__pop--' + item.iconName]" ></i>
                                      <span>{{item.text}}</span>
                                    </div>
                                    <i class="ico ico__caret-arr__right" :class="{'d-block' : item.isSubMenu}"></i>

                                    <!-- Sub Menu 
                                          left 좌표는 부모 Pop의 width
                                    -->
                                    <v-card class="dropdown" style="min-width: 196px; left:160px; top:-12px ">
                                      <ul class="dropdown-menu">
                                          <li
                                            v-for="subView01 in subViews01" :key ="subView01"
                                            class="dropdown-item d-flex column-flex align-center" 
                                            :class="{ 'd-section' : subView01.isSecStart, 'ico-hide' : subView01.isIcoHide}"
                                          >
                                            <i class="ico ico__pop-menu" 
                                            :class="['ico__pop--' + subView01.iconName]" ></i>
                                            <span>{{subView01.text}}</span>
                                          </li>
                                      </ul>
                                    </v-card>                    
                                  </li>
                              </ul>
                            </v-card>
                            
                          </div>
                        </th>
                        <th role="columnheader" aria-sort="none" class="text-start sortable">
                          <div class="text-wrap">
                            <span>도서관 구분</span>
                            <!-- 2022.08.20 수정사항: table head dropdown Open icon 이미지로 변경 -->
                            <v-img class="ml-2" src="@/assets/icon--16/ico__table__layer-menu.svg" max-width="16" />

                          </div>
                        </th>
                        <th role="columnheader" aria-sort="none" class="text-start sortable">
                          <div class="text-wrap">
                            <span>도서관 코드</span>
                            <!-- 2022.08.20 수정사항: table head dropdown Open icon 이미지로 변경 -->
                            <v-img class="ml-2" src="@/assets/icon--16/ico__table__layer-menu.svg" max-width="16" />

                          </div>
                        </th>
                        <th role="columnheader" aria-sort="none" class="text-start sortable">
                          <div class="text-wrap select-control">
                            <span>면적</span>
                            <!-- 2022.08.20 수정사항: table head dropdown Open icon 이미지로 변경 -->
                            <v-img class="ml-2" src="@/assets/icon--16/ico__table__layer-menu.svg" max-width="16" />

                            <!-- Dropdown -->
                            <v-card class="dropdown d-block" style="min-width: 160px; top: 20px;  left:0px">
                              <ul class="dropdown-menu">
                                <li
                                  v-for="item in items" :key ="item"
                                  class="dropdown-item d-flex column-flex align-center justify-space-between" 
                                  :class="{ 'd-section' : item.isSecStart, 
                                            'ico-hide' : item.isIcoHide, 
                                            'sub-menu' : item.isSubMenu }"
                                >
                                  <div class="item-wrap d-flex column-flex align-center">
                                    <i class="ico ico__pop-menu" 
                                    :class="['ico__pop--' + item.iconName]" ></i>
                                    <span>{{item.text}}</span>
                                  </div>
                                  <i class="ico ico__caret-arr__right" :class="{'d-block' : item.isSubMenu}"></i>

                                  <!-- Sub Menu 
                                        left 좌표는 부모 Pop의 width
                                  -->
                                  <v-card class="dropdown" style="min-width: 241px; left:160px; top:-12px ">
                                    <ul class="dropdown-menu">
                                        <li
                                          v-for="subView02 in subViews02" :key ="subView02"
                                          class="dropdown-item d-flex column-flex align-center" 
                                          :class="{ 'd-section' : subView02.isSecStart, 'ico-hide' : subView02.isIcoHide}"
                                        >
                                          <i class="ico ico__pop-menu" 
                                          :class="['ico__pop--' + subView02.iconName]" ></i>
                                          <span>{{subView02.text}}</span>
                                        </li>
                                    </ul>
                                  </v-card>                    
                                </li>
                              </ul>
                            </v-card>                            
                          </div>
                        </th>
                        <th role="columnheader" aria-sort="none" class="text-start sortable">
                          <div class="text-wrap">
                            <span>시구군</span>
                            <!-- 2022.08.20 수정사항: table head dropdown Open icon 이미지로 변경 -->
                            <v-img class="ml-2" src="@/assets/icon--16/ico__table__layer-menu.svg" max-width="16" />

                          </div>
                        </th>
                        <th role="columnheader" aria-sort="none" class="text-start sortable">
                          <div class="text-wrap">
                            <span>장서수</span>
                            <!-- 2022.08.20 수정사항: table head dropdown Open icon 이미지로 변경 -->
                            <v-img class="ml-2" src="@/assets/icon--16/ico__table__layer-menu.svg" max-width="16" />

                          </div>
                        </th>
                        <th role="columnheader" aria-sort="none" class="text-start sortable">
                          <div class="text-wrap">
                            <span>방문자수</span>
                            <!-- 2022.08.20 수정사항: table head dropdown Open icon 이미지로 변경 -->
                            <v-img class="ml-2" src="@/assets/icon--16/ico__table__layer-menu.svg" max-width="16" />

                          </div>
                        </th>
                        <th role="columnheader" aria-sort="none" class="text-start sortable">
                          <div class="text-wrap">
                            <span>대출지수</span>
                            <!-- 2022.08.20 수정사항: table head dropdown Open icon 이미지로 변경 -->
                            <v-img class="ml-2" src="@/assets/icon--16/ico__table__layer-menu.svg" max-width="16" />

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
                          <div class="text-wrap">2014</div>
                        </td>

                        <td class="text-start">
                          <div class="text-wrap">
                            <span>LIVTYPE002</span>
                          </div>
                        </td>
                        <td class="text-start">
                          <div class="text-wrap">526</div>
                        </td>
                        <td class="text-start">
                          <div class="text-wrap">20,104</div>
                        </td>
                        <td class="text-start ">
                          <div class="text-wrap"> 
                            <span>성북구</span>
                          </div>
                        </td>
                        <td class="text-start">
                          <div class="text-wrap">3900</div>
                        </td>
                        <td class="text-start">
                          <div class="text-wrap">3915</div>
                        </td>
                        <td class="text-start">
                          <div class="text-wrap">9360</div>
                        </td>
                        </tr>
                    </tbody>
                  </table>
                </div>
              </div>
          
            </v-col>


            <!-- 사이드 패널 공통 클래스로 -->
            <v-col class="side-panel data-control">
              <v-tabs grow class="panel-tab">
                  <v-tabs-slider></v-tabs-slider>
                  <v-tab :href="`#facet-filter`">
                      Facet / Filter
                  </v-tab>
                  <v-tab :href="`#undo-redo`">
                      Undo<span class="font-weight-regular ml-1">7</span> 
                      <span class="font-weight-regular mx-1">/</span>
                      Redo<span class="font-weight-regular ml-1">7</span> 
                  </v-tab>

                  <v-tab-item :value="'facet-filter'" >
                    <div class="tab-content">
                      <v-img src="@/assets/img/img__using-guide.png" class="mb-4" contain></v-img>
                      <div class="guide-text">
                        <b class="d-block">Using facets and filters</b>
                        Use facets and filters to select subsets of your data to act on. Choose facet and filter methods from the menus at the top of each data column.
                      </div>
                    </div>
                  </v-tab-item>
                  <v-tab-item :value="'undo-redo'" class="undo-redo">
                    <div class="tab-content">
                      <div class="button-group">
                        <v-btn
                            class="text-capitalize btn-md m"
                            height="32"
                            elevation="0"
                            outlined
                            :ripple="false" 
                        >추출</v-btn>  
                        <v-btn
                            class="text-capitalize btn-md"
                            height="32"
                            elevation="0"
                            outlined
                            :ripple="false"
                        >적용</v-btn>  

                        <div class="tooltip-view">
                          <i class="ico ico__exclaimation"> </i>
                          <!-- icon hover 시 tooltip 보여줌  -->
                          <tooltip 
                            class="dir-right"
                            :tooltipText="tooltipText"
                          />                            
                        </div>
                      </div>
                      
                      <div class="filter-search">
                        <v-text-field
                          class="filter-input pt-0"
                          height="48"
                          placeholder="Filter"
                          single-line
                          hide-details
                          outlined
                        >
                          <template v-slot:append>
                            <i class="ico ico__search"></i>
                          </template>                      
                        </v-text-field>
                      </div>
                    
                      <v-list>
                        <v-list-item-group
                          v-model="model"
                        >
                          <template v-for="(historyItem, i) in historyItems">
                            <v-divider
                              v-if="!historyItem"
                              :key="`divider-${i}`"
                            ></v-divider>

                            <v-list-item
                              v-else
                              :key="`item-${i}`"
                              :value="historyItem"
                              :ripple="false"
                            >
                              <!-- 
                                hover 스타일 반영 중. 
                                기능 상 필요 하다면 hover 스타일 클래스 [.list-item-hover] 사용 가능 
                                .v-list-item 과 형제 클래스  
                              -->
                              <v-list-item-content>
                                <v-list-item-title v-text="historyItem"></v-list-item-title>
                              </v-list-item-content>
                            </v-list-item>
                          </template>
                        </v-list-item-group>
                      </v-list>

                    </div>
                  </v-tab-item>
                </v-tabs>

            </v-col>
        </v-row>
    </div>

  </v-container>
</template>



<script>
  export default {
    name: 'DataEditaPop',

    data () {
      return {
        tooltipText: "변경내역을 복사하려면 ‘추출’, 이전복사한 이력을 적용하려면 ‘적용'을 선택하세요",

        isMarkStar : false,
        isMarkFlag : false,
        checked:false,
          items: [
          {
            iconName : '', 
            isIcoHide : true, 
            text: 'Facet',
            isSecStart: false,
            isSubMenu : true,
          },
          {
            iconName : '', 
            isIcoHide : true, 
            text: 'Text filter',
            isSecStart: false,
            isSubMenu : false,
          },
          {
            iconName : 'edit-cell', 
            isIcoHide : false, 
            text: 'Edit cells',
            isSecStart: true,
            isSubMenu : true,
          },
          {
            iconName : 'edit-col', 
            isIcoHide : false, 
            text: 'Edit column',
            isSecStart: false,
            isSubMenu : true,
          },
          {
            iconName : 'transpose', 
            isIcoHide : false, 
            text: 'Transpose',
            isSecStart: false,
            isSubMenu : true,
          },
          {
            iconName : 'sort', 
            isIcoHide : false, 
            text: 'Sort',
            isSecStart: true,
            isSubMenu : false,
          },
          {
            iconName : 'view', 
            isIcoHide : false, 
            text: 'View',
            isSecStart: false,
            isSubMenu : true,
          },  
          {
            iconName : '', 
            isIcoHide : true, 
            text: 'Reconcile',
            isSecStart: true,
            isSubMenu : true,
          },                  
        ],
        subViews01: [
          {
            iconName : '', 
            isIcoHide : true, 
            text: 'Collapse this column',
            isSecStart: false,
            isSubMenu : false,
          },
          {
            iconName : '', 
            isIcoHide : true, 
            text: 'Collapse all other columns',
            isSecStart: false,
            isSubMenu : false,
          },
          {
            iconName : '', 
            isIcoHide : true, 
            text: 'Collapse all columns to left',
            isSecStart: false,
            isSubMenu : false,
          },
          {
            iconName : '', 
            isIcoHide : true, 
            text: 'Collapse all columns to right',
            isSecStart: false,
            isSubMenu : false,
          },
        ],
        subViews02: [
          {
            iconName : '', 
            isIcoHide : true, 
            text: 'Split into several columns',
            isSecStart: false,
            isSubMenu : false,
          },
          {
            iconName : '', 
            isIcoHide : true, 
            text: 'Join columns',
            isSecStart: false,
            isSubMenu : false,
          },
          {
            iconName : '', 
            isIcoHide : true, 
            text: 'Add column based on this column',
            isSecStart: true,
            isSubMenu : false,
          },
          {
            iconName : '', 
            isIcoHide : true, 
            text: 'Add column by fetching URLs',
            isSecStart: false,
            isSubMenu : false,
          },
          {
            iconName : '', 
            isIcoHide : true, 
            text: 'Add columns from reconciled values',
            isSecStart: false,
            isSubMenu : false,
          },
          {
            iconName : 'rename', 
            isIcoHide : false, 
            text: 'Rename this column',
            isSecStart: true,
            isSubMenu : false,
          },
          {
            iconName : 'remove', 
            isIcoHide : false, 
            text: 'Remove this coulumn',
            isSecStart: false,
            isSubMenu : false,
          },
          {
            iconName : 'begin', 
            isIcoHide : false, 
            text: 'Move column to beginning',
            isSecStart: true,
            isSubMenu : false,
          },
          {
            iconName : 'end', 
            isIcoHide : false, 
            text: 'Move column to end',
            isSecStart: false,
            isSubMenu : false,
          },
          {
            iconName : 'left', 
            isIcoHide : false, 
            text: 'Move column left',
            isSecStart: false,
            isSubMenu : false,
          },
          {
            iconName : 'right', 
            isIcoHide : false, 
            text: 'Move column right',
            isSecStart: false,
            isSubMenu : false,
          },
        ],

        historyItems: [
          '1. Mass edit 5 cells in colume 도서관코드',
          '',
          '2. Mass edit 5 cells in colume 도서관코드',
          '',
          '3. Edit single cell on row 5, column 시군구',
          '',
          '4. Edit single cell on row 5, column 시군구',
          '',
          '5. Edit single cell on row 5, column 시군구',
        ],
        model: 1,      
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
