<template>
  <v-container fluid>
    <div class="create-project parse-data">
        <v-row class="d-flex justify-start column-flex">
            <v-col class="import-file-table">

              <!-- 영역 notification -->
              <v-alert
                elevation="3"
                class="notification noti-wh-outlined justify-self-center"
                style="top : 64px; margin-left: -261px; "
                >No table could be parsed. Are you sure this is a valid wiki table?
              </v-alert>                            
            </v-col>
          <v-col class="parse">

            <!-- == Character Encoding ================================ -->
            <v-row class="parse-section char-enc">
              <v-text-field 
                placeholder=""
                label="Character Encoding"
                value="EUC-KR"
                text-color="primary"
                hide-details
                outlined
              >
              </v-text-field>
            </v-row>


            <v-row class="parse-section single">
              <!-- checkbox 템플릿 -->
              <div class="checkbox-group d-flex align-top justify-start column-flex">
                <div class="checkbox-control">
                  <input id="" type="checkbox" checked>
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
              <div class="checkbox-group d-flex align-center justify-start column-flex">
                <div class="checkbox-control">
                  <input id="" type="checkbox" checked>
                  <label form=""></label>
                </div>
                <span class="pl-2">Preserve empty strings</span>
              </div>  

              <!-- checkbox 템플릿 -->
              <div class="checkbox-group d-flex align-center justify-start column-flex">
                <div class="checkbox-control">
                  <input id="" type="checkbox" >
                  <label form=""></label>
                </div>
                <span class="pl-2">Trim leading & trailing whitespace from strings</span>
              </div>  

              <!-- checkbox 템플릿 -->
              <div class="checkbox-group d-flex align-center justify-start column-flex">
                <div class="checkbox-control">
                  <input id="" type="checkbox" >
                  <label form=""></label>
                </div>
                <span class="pl-2">Attempt to parse cell text into numbers</span>
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
    name: 'ParseXML',

    data () {
      return {
        checked:false,
      
      }
    },        
  } 

</script>

<style src="./CreateProject.scss" lang="scss"/>
