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
                            <i class="ico ico__select-caret"></i>
                          </div>
                        </th>
                        <th role="columnheader" aria-sort="none" class="text-start sortable">
                          <div class="text-wrap">
                            <span>도서관 구분</span>
                            <i class="ico ico__select-caret"></i>
                          </div>
                        </th>
                        <th role="columnheader" aria-sort="none" class="text-start sortable">
                          <div class="text-wrap">
                            <span>도서관 구분</span>
                            <i class="ico ico__select-caret"></i>
                          </div>
                        </th>
                        <th role="columnheader" aria-sort="none" class="text-start sortable">
                          <div class="text-wrap">
                            <span>도서관 코드</span>
                            <i class="ico ico__select-caret"></i>
                          </div>
                        </th>
                        <th role="columnheader" aria-sort="none" class="text-start sortable">
                          <div class="text-wrap">
                            <span>면적</span>
                            <i class="ico ico__select-caret"></i>
                          </div>
                        </th>
                        <th role="columnheader" aria-sort="none" class="text-start sortable">
                          <div class="text-wrap">
                            <span>시구군</span>
                            <i class="ico ico__select-caret"></i>
                          </div>
                        </th>
                        <th role="columnheader" aria-sort="none" class="text-start sortable">
                          <div class="text-wrap">
                            <span>장서수</span>
                            <i class="ico ico__select-caret"></i>
                          </div>
                        </th>
                        <th role="columnheader" aria-sort="none" class="text-start sortable">
                          <div class="text-wrap">
                            <span>방문자수</span>
                            <i class="ico ico__select-caret"></i>
                          </div>
                        </th>
                        <th role="columnheader" aria-sort="none" class="text-start sortable">
                          <div class="text-wrap">
                            <span>대출지수</span>
                            <i class="ico ico__select-caret"></i>
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


            <!-- 사이드 패널 공통 클래스 수정, 컴포넌트 화 -->
            <SideFilter />
        </v-row>
    </div>

  </v-container>
</template>



<script>
  import SideFilter from './FacetSide/01Filter'

  export default {
    name: 'FacetSide',
    components: {SideFilter,},
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

<style src="../OpenProject/OpenProject.scss" lang="scss"/>
