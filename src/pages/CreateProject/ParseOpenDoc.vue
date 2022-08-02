<template>
  <v-container fluid>
    <div class="create-project parse-data">
        <v-row class="d-flex justify-start column-flex">
            <v-col class="import-file-table">

            </v-col>
          <v-col class="parse">
            <v-row class="parse-title d-flex justify-space-between column-felx aling-center">
              <b>OpenDocument Format spreadshee...</b>
              <v-btn
                  class="text-capitalize update-pre "
                  height="16"
                  elevation="0"
                  :ripple="false" 
                  text
              >
                Update Preview
                <i class="ico ico__refresh"></i>
              </v-btn>
            </v-row>

            <v-row class="parse-section ws-import d-column">
              <div class="section-title">
                Worksheets to Import
              </div>
              <v-row>
                <v-btn
                  class="text-capitalize font-weight-regular point-deep"
                  height="32"
                  elevation="0"
                  outlined
                  :ripple="false"
                >
                  Select all</v-btn>     
                <v-btn
                  class="text-capitalize font-weight-regular btn-md"
                  height="32"
                  elevation="0"
                  :ripple="false"
                  color="primary"
                  outlined
                >
                  Deselect all</v-btn>   
              </v-row>  
            </v-row>


            <v-row class="parse-section ">
              <!-- checkbox 템플릿 -->
              <div class="checkbox-group d-flex align-center justify-start column-flex single-row">
                <div class="checkbox-control">
                  <input id="" type="checkbox">
                  <label form=""></label>
                </div>

                <!-- input이 inline으로 들어가는 text group -->
                <div class="text-group">
                  <div class="d-flex justify-start">
                      <span class="px-2">Ignore first</span>
                      <span class="inline-input w-56">
                        <v-text-field placeholder="0" tyle="number" single-line hide-details></v-text-field> 
                      </span>
                      <span class="pl-2">line(s) at begining of file</span>
                  </div>
                </div>
              </div>  

              <!-- checkbox 템플릿 -->
              <div class="checkbox-group d-flex align-center justify-start column-flex single-row">
                <div class="checkbox-control">
                  <input id="" type="checkbox">
                  <label form=""></label>
                </div>

                <!-- input이 inline으로 들어가는 text group -->
                <div class="text-group">
                  <div class="d-flex justify-start">
                      <span class="px-2">Parse next</span>
                      <span class="inline-input w-56">
                        <v-text-field placeholder="0" tyle="number" single-line hide-details></v-text-field> 
                      </span>
                      <span class="pl-2">line(s) as column headers</span>
                  </div>
                </div>
              </div>  

              <!-- checkbox 템플릿 -->
              <div class="checkbox-group d-flex align-center justify-start column-flex single-row">
                <div class="checkbox-control">
                  <input id="" type="checkbox">
                  <label form=""></label>
                </div>

                <!-- input이 inline으로 들어가는 text group -->
                <div class="text-group">
                  <div class="d-flex justify-start">
                      <span class="px-2">Discard initial</span>
                      <span class="inline-input w-56">
                        <v-text-field placeholder="0" tyle="number" single-line hide-details></v-text-field> 
                      </span>
                      <span class="pl-2">row(s) of data</span>
                  </div>
                </div>
              </div>  

              <!-- checkbox 템플릿 -->
              <div class="checkbox-group d-flex align-center justify-start column-flex single-row">
                <div class="checkbox-control">
                  <input id="" type="checkbox">
                  <label form=""></label>
                </div>

                <!-- input이 inline으로 들어가는 text group -->
                <div class="text-group">
                  <div class="d-flex justify-start">
                      <span class="px-2">Load at most</span>
                      <span class="inline-input w-56">
                        <v-text-field placeholder="0" tyle="number" single-line hide-details></v-text-field> 
                      </span>
                      <span class="pl-2">row(s) of data</span>
                  </div>
                </div>
              </div>  
            </v-row>

            <v-row class="parse-section single">
              <!-- checkbox 템플릿 -->
              <div class="checkbox-group d-flex align-center justify-start column-flex">
                <div class="checkbox-control">
                  <input id="" type="checkbox" checked>
                  <label form=""></label>
                </div>
                <span class="pl-2">Store blank rows</span>
              </div>  

              <!-- checkbox 템플릿 -->
              <div class="checkbox-group d-flex align-center justify-start column-flex">
                <div class="checkbox-control">
                  <input id="" type="checkbox" >
                  <label form=""></label>
                </div>
                <span class="pl-2">Store blank cells as nulls</span>
              </div>  

              <!-- checkbox 템플릿 -->
              <div class="checkbox-group d-flex align-center justify-start column-flex">
                <div class="checkbox-control">
                  <input id="" type="checkbox" >
                  <label form=""></label>
                </div>
                <span class="pl-2">Store file source</span>
              </div>  

              <!-- checkbox 템플릿 -->
              <div class="checkbox-group d-flex align-center justify-start column-flex">
                <div class="checkbox-control">
                  <input id="" type="checkbox" >
                  <label form=""></label>
                </div>
                <span class="pl-2">Store archive file</span>
              </div>  
            </v-row>
          </v-col>
        </v-row>
    </div>

  </v-container>
</template>



<script>
  export default {
    name: 'ParseOpenDoc',

    data () {
      return {
        checked:false,
      
      }
    },        
  } 

</script>

<style src="./CreateProject.scss" lang="scss"/>
