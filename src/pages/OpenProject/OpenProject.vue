<template>
  <v-container fluid >
    
    <div class="open-project edit-data">
        <v-row class="d-flex justify-start column-flex">
            <v-col class="import-file-table ">

              <div class="v-data-table elevation-0 base-table editable theme--light v-data-table--fixed-header full-height">
                <div class="v-data-table__wrapper overflow-y-auto" >
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
                            <!-- Sprint_3 Hotfix : v-icon으로 변경 -->
                            <!-- 보여주는 방식 변경 : if -> v-show -->
                            <span class="mark" @click="markStar">
                              <v-icon v-show="!isMarkStar">$i16_star</v-icon>
                              <v-icon v-show="isMarkStar">$i16_starFilled</v-icon>
                            </span>
                            <span class="mark" @click="markFlag">
                              <v-icon v-show="!isMarkFlag">$i16_flg</v-icon>
                              <v-icon v-show="isMarkFlag">$i16_flgFilled</v-icon>                              
                            </span>
                          </div>

                          <div class="text-wrap">
                            <span>1</span>
                          </div>
                        </td>
                        <td class="text-start">
                          <div class="text-wrap justify-space-between"> 
                            <span>2014</span>
                            <!-- Sprint_3 Hotfix : v-icon으로 변경 -->
                            <!-- 구분 클래스 추가 : cell-edit -->                            
                            <v-icon class="cell-edit">$i16_editSm</v-icon>
                          </div>                              
                        </td>

                        <td class="text-start">
                          <div class="text-wrap justify-space-between">
                            <span>LIVTYPE002</span>
                          </div>
                        </td>
                        <td class="text-start">
                          <div class="text-wrap justify-space-between type-num"> 
                            <!-- // 숫자로 설정된 글자의 경우 'type_num' 클래스 추가 -->
                            <span>526</span>
                            <v-icon class="cell-edit">$i16_editSm</v-icon>
                          </div>                          
                        </td>
                        <td class="text-start">
                          <div class="text-wrap justify-space-between"> 
                            <span>20,104</span>
                            <v-icon class="cell-edit">$i16_editSm</v-icon>
                          </div>                            
                        </td>

                        <td class="text-start ">
                          <div class="text-wrap justify-space-between"> 
                            <span>성북구</span>
                            <v-icon class="cell-edit">$i16_editSm</v-icon>
                          </div>
                        </td>
                        <td class="text-start">
                          <div class="text-wrap justify-space-between"> 
                            <span>3900</span>
                            <v-icon class="cell-edit">$i16_editSm</v-icon>
                          </div>                          
                        </td>
                        <td class="text-start">
                          <div class="text-wrap justify-space-between"> 
                            <span>3915</span>
                            <v-icon class="cell-edit">$i16_editSm</v-icon>
                          </div>                            
                        </td>
                        <td class="text-start">
                          <div class="text-wrap justify-space-between"> 
                            <span>9360</span>
                            <v-icon class="cell-edit">$i16_editSm</v-icon>
                          </div>                             
                        </td>
                      </tr>
                      <tr class="">
                        <td class="text-start d-flex align-center">
                          <div class="mark-wrap">
                            <!-- Sprint_3 Hotfix : v-icon으로 변경 -->
                            <!-- 보여주는 방식 변경 : if -> v-show -->
                            <span class="mark" @click="markStar">
                              <v-icon v-show="!isMarkStar">$i16_star</v-icon>
                              <v-icon v-show="isMarkStar">$i16_starFilled</v-icon>
                            </span>
                            <span class="mark" @click="markFlag">
                              <v-icon v-show="!isMarkFlag">$i16_flg</v-icon>
                              <v-icon v-show="isMarkFlag">$i16_flgFilled</v-icon>                              
                            </span>
                          </div>

                          <div class="text-wrap">
                            <span>1</span>
                          </div>
                        </td>
                        <td class="text-start">
                          <div class="text-wrap justify-space-between"> 
                            <span>2014</span>
                            <v-icon class="cell-edit">$i16_editSm</v-icon>
                          </div>                              
                        </td>

                        <td class="text-start">
                          <div class="text-wrap justify-space-between">
                            <span>LIVTYPE002</span>
                          </div>
                        </td>
                        <td class="text-start">
                          <div class="text-wrap justify-space-between type-num"> 
                            <!-- // 숫자로 설정된 글자의 경우 'type_num' 클래스 추가 -->
                            <span>526</span>
                            <v-icon class="cell-edit">$i16_editSm</v-icon>
                          </div>                          
                        </td>
                        <td class="text-start">
                          <div class="text-wrap justify-space-between"> 
                            <span>20,104</span>
                            <v-icon class="cell-edit">$i16_editSm</v-icon>
                          </div>                            
                        </td>

                        <td class="text-start ">
                          <div class="text-wrap justify-space-between"> 
                            <span>성북구</span>
                            <v-icon class="cell-edit">$i16_editSm</v-icon>
                          </div>
                        </td>
                        <td class="text-start">
                          <div class="text-wrap justify-space-between"> 
                            <span>3900</span>
                            <v-icon class="cell-edit">$i16_editSm</v-icon>
                          </div>                          
                        </td>
                        <td class="text-start">
                          <div class="text-wrap justify-space-between"> 
                            <span>3915</span>
                            <v-icon class="cell-edit">$i16_editSm</v-icon>
                          </div>                            
                        </td>
                        <td class="text-start">
                          <div class="text-wrap justify-space-between"> 
                            <span>9360</span>
                            <v-icon class="cell-edit">$i16_editSm</v-icon>
                          </div>                             
                        </td>
                      </tr>
                      <tr class="">
                        <td class="text-start d-flex align-center">
                          <div class="mark-wrap">
                            <!-- Sprint_3 Hotfix : v-icon으로 변경 -->
                            <!-- 보여주는 방식 변경 : if -> v-show -->
                            <span class="mark" @click="markStar">
                              <v-icon v-show="!isMarkStar">$i16_star</v-icon>
                              <v-icon v-show="isMarkStar">$i16_starFilled</v-icon>
                            </span>
                            <span class="mark" @click="markFlag">
                              <v-icon v-show="!isMarkFlag">$i16_flg</v-icon>
                              <v-icon v-show="isMarkFlag">$i16_flgFilled</v-icon>                              
                            </span>
                          </div>

                          <div class="text-wrap">
                            <span>1</span>
                          </div>
                        </td>
                        <td class="text-start">
                          <div class="text-wrap justify-space-between"> 
                            <span>2014</span>
                            <v-icon class="cell-edit">$i16_editSm</v-icon>
                          </div>                              
                        </td>

                        <td class="text-start">
                          <div class="text-wrap justify-space-between">
                            <span>LIVTYPE002</span>
                          </div>
                        </td>
                        <td class="text-start">
                          <div class="text-wrap justify-space-between type-num"> 
                            <!-- // 숫자로 설정된 글자의 경우 'type_num' 클래스 추가 -->
                            <span>526</span>
                            <v-icon class="cell-edit">$i16_editSm</v-icon>
                          </div>                          
                        </td>
                        <td class="text-start">
                          <div class="text-wrap justify-space-between"> 
                            <span>20,104</span>
                            <v-icon class="cell-edit">$i16_editSm</v-icon>
                          </div>                            
                        </td>

                        <td class="text-start ">
                          <div class="text-wrap justify-space-between"> 
                            <span>성북구</span>
                            <v-icon class="cell-edit">$i16_editSm</v-icon>
                          </div>
                        </td>
                        <td class="text-start">
                          <div class="text-wrap justify-space-between"> 
                            <span>3900</span>
                            <v-icon class="cell-edit">$i16_editSm</v-icon>
                          </div>                          
                        </td>
                        <td class="text-start">
                          <div class="text-wrap justify-space-between"> 
                            <span>3915</span>
                            <v-icon class="cell-edit">$i16_editSm</v-icon>
                          </div>                            
                        </td>
                        <td class="text-start">
                          <div class="text-wrap justify-space-between"> 
                            <span>9360</span>
                            <v-icon class="cell-edit">$i16_editSm</v-icon>
                          </div>                             
                        </td>
                      </tr>
                      <tr class="">
                        <td class="text-start d-flex align-center">
                          <div class="mark-wrap">
                            <!-- Sprint_3 Hotfix : v-icon으로 변경 -->
                            <!-- 보여주는 방식 변경 : if -> v-show -->
                            <span class="mark" @click="markStar">
                              <v-icon v-show="!isMarkStar">$i16_star</v-icon>
                              <v-icon v-show="isMarkStar">$i16_starFilled</v-icon>
                            </span>
                            <span class="mark" @click="markFlag">
                              <v-icon v-show="!isMarkFlag">$i16_flg</v-icon>
                              <v-icon v-show="isMarkFlag">$i16_flgFilled</v-icon>                              
                            </span>
                          </div>

                          <div class="text-wrap">
                            <span>1</span>
                          </div>
                        </td>
                        <td class="text-start">
                          <div class="text-wrap justify-space-between"> 
                            <span>2014</span>
                            <v-icon class="cell-edit">$i16_editSm</v-icon>
                          </div>                              
                        </td>

                        <td class="text-start">
                          <div class="text-wrap justify-space-between">
                            <span>LIVTYPE002</span>
                          </div>
                        </td>
                        <td class="text-start">
                          <div class="text-wrap justify-space-between type-num"> 
                            <!-- // 숫자로 설정된 글자의 경우 'type_num' 클래스 추가 -->
                            <span>526</span>
                            <v-icon class="cell-edit">$i16_editSm</v-icon>
                          </div>                          
                        </td>
                        <td class="text-start">
                          <div class="text-wrap justify-space-between"> 
                            <span>20,104</span>
                            <v-icon class="cell-edit">$i16_editSm</v-icon>
                          </div>                            
                        </td>

                        <td class="text-start ">
                          <div class="text-wrap justify-space-between"> 
                            <span>성북구</span>
                            <v-icon class="cell-edit">$i16_editSm</v-icon>
                          </div>
                        </td>
                        <td class="text-start">
                          <div class="text-wrap justify-space-between"> 
                            <span>3900</span>
                            <v-icon class="cell-edit">$i16_editSm</v-icon>
                          </div>                          
                        </td>
                        <td class="text-start">
                          <div class="text-wrap justify-space-between"> 
                            <span>3915</span>
                            <v-icon class="cell-edit">$i16_editSm</v-icon>
                          </div>                            
                        </td>
                        <td class="text-start">
                          <div class="text-wrap justify-space-between"> 
                            <span>9360</span>
                            <v-icon class="cell-edit">$i16_editSm</v-icon>
                          </div>                             
                        </td>
                      </tr>
                      <tr class="">
                        <td class="text-start d-flex align-center">
                          <div class="mark-wrap">
                            <!-- Sprint_3 Hotfix : v-icon으로 변경 -->
                            <!-- 보여주는 방식 변경 : if -> v-show -->
                            <span class="mark" @click="markStar">
                              <v-icon v-show="!isMarkStar">$i16_star</v-icon>
                              <v-icon v-show="isMarkStar">$i16_starFilled</v-icon>
                            </span>
                            <span class="mark" @click="markFlag">
                              <v-icon v-show="!isMarkFlag">$i16_flg</v-icon>
                              <v-icon v-show="isMarkFlag">$i16_flgFilled</v-icon>                              
                            </span>
                          </div>

                          <div class="text-wrap">
                            <span>1</span>
                          </div>
                        </td>
                        <td class="text-start">
                          <div class="text-wrap justify-space-between"> 
                            <span>2014</span>
                            <v-icon class="cell-edit">$i16_editSm</v-icon>
                          </div>                              
                        </td>

                        <td class="text-start">
                          <div class="text-wrap justify-space-between">
                            <span>LIVTYPE002</span>
                          </div>
                        </td>
                        <td class="text-start">
                          <div class="text-wrap justify-space-between type-num"> 
                            <!-- // 숫자로 설정된 글자의 경우 'type_num' 클래스 추가 -->
                            <span>526</span>
                            <v-icon class="cell-edit">$i16_editSm</v-icon>
                          </div>                          
                        </td>
                        <td class="text-start">
                          <div class="text-wrap justify-space-between"> 
                            <span>20,104</span>
                            <v-icon class="cell-edit">$i16_editSm</v-icon>
                          </div>                            
                        </td>

                        <td class="text-start ">
                          <div class="text-wrap justify-space-between"> 
                            <span>성북구</span>
                            <v-icon class="cell-edit">$i16_editSm</v-icon>
                          </div>
                        </td>
                        <td class="text-start">
                          <div class="text-wrap justify-space-between"> 
                            <span>3900</span>
                            <v-icon class="cell-edit">$i16_editSm</v-icon>
                          </div>                          
                        </td>
                        <td class="text-start">
                          <div class="text-wrap justify-space-between"> 
                            <span>3915</span>
                            <v-icon class="cell-edit">$i16_editSm</v-icon>
                          </div>                            
                        </td>
                        <td class="text-start">
                          <div class="text-wrap justify-space-between"> 
                            <span>9360</span>
                            <v-icon class="cell-edit">$i16_editSm</v-icon>
                          </div>                             
                        </td>
                      </tr>
                      <tr class="">
                        <td class="text-start d-flex align-center">
                          <div class="mark-wrap">
                            <!-- Sprint_3 Hotfix : v-icon으로 변경 -->
                            <!-- 보여주는 방식 변경 : if -> v-show -->
                            <span class="mark" @click="markStar">
                              <v-icon v-show="!isMarkStar">$i16_star</v-icon>
                              <v-icon v-show="isMarkStar">$i16_starFilled</v-icon>
                            </span>
                            <span class="mark" @click="markFlag">
                              <v-icon v-show="!isMarkFlag">$i16_flg</v-icon>
                              <v-icon v-show="isMarkFlag">$i16_flgFilled</v-icon>                              
                            </span>
                          </div>

                          <div class="text-wrap">
                            <span>1</span>
                          </div>
                        </td>
                        <td class="text-start">
                          <div class="text-wrap justify-space-between"> 
                            <span>2014</span>
                            <v-icon class="cell-edit">$i16_editSm</v-icon>
                          </div>                              
                        </td>

                        <td class="text-start">
                          <div class="text-wrap justify-space-between">
                            <span>LIVTYPE002</span>
                          </div>
                        </td>
                        <td class="text-start">
                          <div class="text-wrap justify-space-between type-num"> 
                            <!-- // 숫자로 설정된 글자의 경우 'type_num' 클래스 추가 -->
                            <span>526</span>
                            <v-icon class="cell-edit">$i16_editSm</v-icon>
                          </div>                          
                        </td>
                        <td class="text-start">
                          <div class="text-wrap justify-space-between"> 
                            <span>20,104</span>
                            <v-icon class="cell-edit">$i16_editSm</v-icon>
                          </div>                            
                        </td>

                        <td class="text-start ">
                          <div class="text-wrap justify-space-between"> 
                            <span>성북구</span>
                            <v-icon class="cell-edit">$i16_editSm</v-icon>
                          </div>
                        </td>
                        <td class="text-start">
                          <div class="text-wrap justify-space-between"> 
                            <span>3900</span>
                            <v-icon class="cell-edit">$i16_editSm</v-icon>
                          </div>                          
                        </td>
                        <td class="text-start">
                          <div class="text-wrap justify-space-between"> 
                            <span>3915</span>
                            <v-icon class="cell-edit">$i16_editSm</v-icon>
                          </div>                            
                        </td>
                        <td class="text-start">
                          <div class="text-wrap justify-space-between"> 
                            <span>9360</span>
                            <v-icon class="cell-edit">$i16_editSm</v-icon>
                          </div>                             
                        </td>
                      </tr>
                      <tr class="">
                        <td class="text-start d-flex align-center">
                          <div class="mark-wrap">
                            <!-- Sprint_3 Hotfix : v-icon으로 변경 -->
                            <!-- 보여주는 방식 변경 : if -> v-show -->
                            <span class="mark" @click="markStar">
                              <v-icon v-show="!isMarkStar">$i16_star</v-icon>
                              <v-icon v-show="isMarkStar">$i16_starFilled</v-icon>
                            </span>
                            <span class="mark" @click="markFlag">
                              <v-icon v-show="!isMarkFlag">$i16_flg</v-icon>
                              <v-icon v-show="isMarkFlag">$i16_flgFilled</v-icon>                              
                            </span>
                          </div>

                          <div class="text-wrap">
                            <span>1</span>
                          </div>
                        </td>
                        <td class="text-start">
                          <div class="text-wrap justify-space-between"> 
                            <span>2014</span>
                            <v-icon class="cell-edit">$i16_editSm</v-icon>
                          </div>                              
                        </td>

                        <td class="text-start">
                          <div class="text-wrap justify-space-between">
                            <span>LIVTYPE002</span>
                          </div>
                        </td>
                        <td class="text-start">
                          <div class="text-wrap justify-space-between type-num"> 
                            <!-- // 숫자로 설정된 글자의 경우 'type_num' 클래스 추가 -->
                            <span>526</span>
                            <v-icon class="cell-edit">$i16_editSm</v-icon>
                          </div>                          
                        </td>
                        <td class="text-start">
                          <div class="text-wrap justify-space-between"> 
                            <span>20,104</span>
                            <v-icon class="cell-edit">$i16_editSm</v-icon>
                          </div>                            
                        </td>

                        <td class="text-start ">
                          <div class="text-wrap justify-space-between"> 
                            <span>성북구</span>
                            <v-icon class="cell-edit">$i16_editSm</v-icon>
                          </div>
                        </td>
                        <td class="text-start">
                          <div class="text-wrap justify-space-between"> 
                            <span>3900</span>
                            <v-icon class="cell-edit">$i16_editSm</v-icon>
                          </div>                          
                        </td>
                        <td class="text-start">
                          <div class="text-wrap justify-space-between"> 
                            <span>3915</span>
                            <v-icon class="cell-edit">$i16_editSm</v-icon>
                          </div>                            
                        </td>
                        <td class="text-start">
                          <div class="text-wrap justify-space-between"> 
                            <span>9360</span>
                            <v-icon class="cell-edit">$i16_editSm</v-icon>
                          </div>                             
                        </td>
                      </tr>

                      <tr class="">
                        <td class="text-start d-flex align-center">
                          <div class="mark-wrap">
                            <!-- Sprint_3 Hotfix : v-icon으로 변경 -->
                            <!-- 보여주는 방식 변경 : if -> v-show -->
                            <span class="mark" @click="markStar">
                              <v-icon v-show="!isMarkStar">$i16_star</v-icon>
                              <v-icon v-show="isMarkStar">$i16_starFilled</v-icon>
                            </span>
                            <span class="mark" @click="markFlag">
                              <v-icon v-show="!isMarkFlag">$i16_flg</v-icon>
                              <v-icon v-show="isMarkFlag">$i16_flgFilled</v-icon>                              
                            </span>
                          </div>

                          <div class="text-wrap">
                            <span>1</span>
                          </div>
                        </td>
                        <td class="text-start">
                          <div class="text-wrap justify-space-between"> 
                            <span>2014</span>
                            <v-icon class="cell-edit">$i16_editSm</v-icon>
                          </div>                              
                        </td>

                        <td class="text-start ">
                          <div class="text-wrap justify-space-between">
                            <span>LIVTYPE002</span>
                            <v-icon class="cell-edit">$i16_editSm</v-icon>
                          </div>
                     
                        </td>
                        <td class="text-start">
                          <div class="text-wrap justify-space-between type-num"> 
                            <span>526</span>
                            <v-icon class="cell-edit">$i16_editSm</v-icon>
                          </div>                          
                        </td>
                        <td class="text-start">
                          <div class="text-wrap justify-space-between"> 
                            <span>20,104</span>
                            <v-icon class="cell-edit">$i16_editSm</v-icon>
                          </div>                            
                        </td>

                        <!-- hover 시 : hover 는 보여주기 위한 임시 클래스 -->
                        <td class="text-start hover">
                          <div class="text-wrap justify-space-between"> 
                            <span>성북구</span>
                            <v-icon class="cell-edit">$i16_editSm</v-icon>
                          </div>
                        </td>
                        <td class="text-start">
                          <div class="text-wrap justify-space-between"> 
                            <span>3900</span>
                            <v-icon class="cell-edit">$i16_editSm</v-icon>
                          </div>                          
                        </td>
                        <td class="text-start">
                          <div class="text-wrap justify-space-between"> 
                            <span>3915</span>
                            <v-icon class="cell-edit">$i16_editSm</v-icon>
                          </div>                            
                        </td>
                        <td class="text-start">
                          <div class="text-wrap justify-space-between"> 
                            <span>9360</span>
                            <v-icon class="cell-edit">$i16_editSm</v-icon>
                          </div>                             
                        </td>
                      </tr>
                      <tr class="">
                        <td class="text-start d-flex align-center">
                          <div class="mark-wrap">
                            <!-- Sprint_3 Hotfix : v-icon으로 변경 -->
                            <!-- 보여주는 방식 변경 : if -> v-show -->
                            <span class="mark" @click="markStar">
                              <v-icon v-show="!isMarkStar">$i16_star</v-icon>
                              <v-icon v-show="isMarkStar">$i16_starFilled</v-icon>
                            </span>
                            <span class="mark" @click="markFlag">
                              <v-icon v-show="!isMarkFlag">$i16_flg</v-icon>
                              <v-icon v-show="isMarkFlag">$i16_flgFilled</v-icon>                              
                            </span>
                          </div>

                          <div class="text-wrap">
                            <span>1</span>
                          </div>
                        </td>
                        <td class="text-start">
                          <div class="text-wrap justify-space-between"> 
                            <span>2014</span>
                            <v-icon class="cell-edit">$i16_editSm</v-icon>
                          </div>                              
                        </td>

                        <td class="text-start">
                          <div class="text-wrap justify-space-between">
                            <span>LIVTYPE002</span>
                          </div>
                        </td>
                        <td class="text-start">
                          <div class="text-wrap justify-space-between type-num"> 
                            <span>526</span>
                            <v-icon class="cell-edit">$i16_editSm</v-icon>
                          </div>                          
                        </td>
                        <td class="text-start">
                          <div class="text-wrap justify-space-between"> 
                            <span>20,104</span>
                            <v-icon class="cell-edit">$i16_editSm</v-icon>
                          </div>                            
                        </td>

                        <td class="text-start ">
                          <div class="text-wrap justify-space-between"> 
                            <span>성북구</span>
                            <v-icon class="cell-edit">$i16_editSm</v-icon>
                          </div>
                        </td>
                        <td class="text-start">
                          <div class="text-wrap justify-space-between"> 
                            <span>3900</span>
                            <v-icon class="cell-edit">$i16_editSm</v-icon>
                          </div>                          
                        </td>
                        <td class="text-start">
                          <div class="text-wrap justify-space-between"> 
                            <span>3915</span>
                            <v-icon class="cell-edit">$i16_editSm</v-icon>
                          </div>                            
                        </td>
                        <td class="text-start">
                          <div class="text-wrap justify-space-between"> 
                            <span>9360</span>
                            <v-icon class="cell-edit">$i16_editSm</v-icon>
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
    name: 'OpenProject',
    components: {SidePanelTab,},
    data () {
      return {
        tooltipText: "변경내역을 복사하려면 ‘추출’, 이전복사한 이력을 적용하려면 ‘적용'을 선택하세요",

        isMarkStar : false,
        isMarkFlag : false,
        checked:false,
      scrollInvoked: 0,
      }
    },  
    methods: {
      markStar: function() {
          this.isMarkStar = !this.isMarkStar;
      },
      markFlag: function() {
          this.isMarkFlag = !this.isMarkFlag;
      },
      onScroll () {
        this.scrollInvoked++
      },
    }      
  } 

</script>

<style src="./OpenProject.scss" lang="scss"/>
