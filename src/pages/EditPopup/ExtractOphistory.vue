<template>
  <v-container fluid>
     <v-overlay 
      :value="overlay"
      opacity="0.4"
      >
    </v-overlay>    

    <!-- dialog 의 inline style은 dialog의 위치를 위한 임시 코드  -->
      <v-card class="dialog extract-op" elevation="3" style="position: absolute; left:50%; top: 20%; margin-left: -400px;  z-index:6">
        <div class="dialog-title ">
          <div class="d-flex column-flex align-center justify-space-between">
            <b>Extract operation history</b>
            <div class="dialog=close">
              <v-btn
                class ="btn-ico" 
                height="16"
                width="16"
                elevation="0"
                :ripple="false"
                icon
                plain
              >
                <i class="ico ico__close"></i>
              </v-btn>      
            </div>
          </div>
        </div>

        <div class="dialog-content bg-default pt-0">
          <div class="py-4 top-text">Paste an extracted JSON history of operations to perform:</div>
          
          <div class="section-col d-flex">
            <div class="col mr-4 d-flex flex-column align-space-between">

              <div class="dialog-section">
                <div class="text-item pl-6  mb-2">
                  <span>Edit single cell on row 12, column 시작일자</span>
                </div>

                <checkbox class="multi mb-3">
                  <template slot="checkedContent">
                    <span class="pl-2">Text transform on cells in column 시작일자 using expression value.to Date()</span>
                  </template>
                </checkbox>
                
                <checkbox class="multi mb-3">
                  <template slot="checkedContent">
                    <span class="pl-2">Text transform on cells in column 시작일자 using expression value.to Date()</span>
                  </template>
                </checkbox>
     
                <checkbox class="mb-3">
                  <template slot="checkedContent">
                    <span class="pl-2">Blank down cells in column 축제명</span>
                  </template>
                </checkbox>
     
                <div class="text-item pl-6  mb-2">
                  <span>Flag row 1</span>
                </div>     

                <div class="text-item pl-6  mb-2">
                  <span>Unflag row 1</span>
                </div>                               

              </div>

              <div class="Section-action d-flex justify-space-between">
                <div class="button-group">
                  <v-btn
                    class="text-capitalize btn-md mr-2"
                    height="32"
                    elevation="0"
                    :ripple="false"
                    outlined
                    primary
                  >Select all</v-btn>  
                  <v-btn
                    class="text-capitalize btn-md mr-2"
                    height="32"
                    elevation="0"
                    :ripple="false"
                    outlined
                    primary
                  >Deselect all</v-btn>  
                </div>
                <div class="button-group d-flex justify-end">
                  <v-btn
                      class="text-capitalize btn-md point-deep "
                      height="32"
                      elevation="0"
                      :ripple="false"
                  >Export</v-btn>                                  
                </div>
              </div>            
            </div>
            <div class="col">
              <v-textarea
                  outlined
                  hide-details
                  no-resize
                  color="#fff"
                  height="435"
                  name=""
                  value=" { “op” : “core/text-reansform:, } "
                  class="pt-0"
                ></v-textarea>              
            </div>
          </div>
        </div>
      </v-card>
  </v-container>
</template>



<script>
  export default {
    name: 'ExtractOphistory',
  } 

</script>

<style src="./EditPopup.scss" lang="scss"/>
