<template>
  <v-container fluid>
    <div class="create-project parse-data">

      <v-row class="d-flex justify-start column-flex">

          <!-- 영역 notification -->
          <v-col class="import-file-table">
            <v-alert
              elevation="3"
              class="notification noti-wh-outlined justify-self-center"
              style="top : 64px; margin-left: -261px; "
            >No table could be parsed. Are you sure this is a valid wiki table?
          </v-alert>         
          </v-col>
          <v-col class="parse">
            <v-row class="parse-title d-flex justify-space-between column-felx aling-center">
              <b>Line-based text files</b>
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


            <v-row class="parse-section">
              <!-- checkbox 템플릿 -->
                <div class="checkbox-group d-flex align-top justify-start column-flex multi-row text-only mb-1">
                  <div class="checkbox-control">
                    <input id="" type="checkbox" >
                    <label form=""></label>
                  </div>
                  <div class="text-group column-flex align-start">
                    <div class="d-flex justify-start">
                        <span class="pl-2">Column names (comma separated)</span>
                    </div>
                    <div class="pb-1 d-block">
                      <span class="pl-2 d-block">
                      <v-text-field value="http://en.wikipedia.org/wiki/" block placeholder="내용을 입력하세요" type="numnber" single-line hide-details></v-text-field> 
                      </span>
                    </div>
                  </div>
                </div> 

              <!-- checkbox 템플릿 -->
              <div class="checkbox-group d-flex align-center justify-start column-flex single-row">
                <div class="checkbox-control">
                  <input id="" type="checkbox" >
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
                  <input id="" type="checkbox" > 
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

              <!-- checkbox 템플릿 -->
              <div class="checkbox-group d-flex align-center justify-start column-flex single-row">
                <div class="checkbox-control">
                  <input id="" type="checkbox" >
                  <label form=""></label>
                </div>
                <span class="pl-2">Attempt to parse cell text into numbers</span>
              </div> 

              <!-- checkbox 템플릿 -->
                <!-- checkbox 템플릿 -->
                <div class="checkbox-group d-flex justify-start multi-row text-only">
                  <div class="checkbox-control">
                    <input id="" type="checkbox" >
                    <label form=""></label>
                  </div>
                  <div class="text-group column-flex align-start">
                    <div class="d-flex justify-start">
                        <span class="pl-2">Pad cells spanning over multiple rows or columns<br>with nulls</span>
                    </div>
            
                  </div>
                </div>  

              <!-- checkbox 템플릿 -->
              <div class="checkbox-group d-flex align-center justify-start column-flex single-row">
                <div class="checkbox-control">
                  <input id="" type="checkbox" >
                  <label form=""></label>
                </div>
                <span class="pl-2">Store blank rows</span>
              </div> 

                              <!-- checkbox 템플릿 -->
              <div class="checkbox-group d-flex align-center justify-start column-flex single-row">
                <div class="checkbox-control">
                  <input id="" type="checkbox" >
                  <label form=""></label>
                </div>
                <span class="pl-2">	Store archive file</span>
              </div> 

            </v-row>
          </v-col>
      </v-row>
    </div>

  </v-container>
</template>



<script>

  export default {
    name: 'ParseWikitext',
    data () {
      return {
        checked:false,
      }
    },        
  } 

</script>

<style src="./CreateProject.scss" lang="scss"/>
