<template>
  <v-container fluid>
    <div class="create-project parse-data">
        <v-row class="d-flex justify-start column-flex">
            <v-col class="import-file-talbe">
                <v-data-table
                    :headers="headers"
                    :items="desserts"
                    :items-per-page="8"
                    hide-default-footer
                    disable-sort
                    class="elevation-0 base-table"
                ></v-data-table>            
            </v-col>
            <v-col class="parse">
              <v-row class="parse-title d-flex justify-space-between column-felx aling-center">
                <b>CSV/TSV/Separator-based files</b>
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


              <!-- == option check only ================================ -->
              <v-row class="parse-section single">

                <div class="section-title mb-1">
                  <div class="text-group d-flex justify-start mt-1">
                      <span class="d-flex column-flex align-center">Parse every</span>
                      <span class="inline-input w-40 mx-2">
                        <v-text-field placeholder="0" tyle="number" single-line hide-details></v-text-field> 
                      </span>
                      <span class="d-flex column-flex align-center">line(s) into one row</span>
                  </div>                
                </div>

                <!-- checkbox 템플릿 -->
                <div class="checkbox-group d-flex align-center justify-start column-flex">
                  <div class="checkbox-control">
                    <input id="" type="checkbox" checked>
                    <label form=""></label>
                  </div>
                  <span class="pl-2">Attempt to Parse cell text into numbers</span>
                </div>  

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
                  <span class="pl-2">Store file souce</span>
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

              <!-- == option check single ================================ -->
              <v-row class="parse-section chk-option single">
                <!-- checkbox 템플릿 -->
                <div class="checkbox-group d-flex align-top justify-start column-flex">
                  <div class="checkbox-control">
                    <input id="" type="checkbox" checked>
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
                <div class="checkbox-group d-flex align-top justify-start column-flex">
                  <div class="checkbox-control">
                    <input id="" type="checkbox" checked>
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
              </v-row>
      

            </v-col>
        </v-row>
    </div>

  </v-container>
</template>



<script>
  export default {
    name: 'ParseLineBased',

    data () {
      return {
        checked:false,
        headers: [
          {
            text: '',
            align: 'start',
            sortable: false,
            value: 'th00',
          },
          { text: 'Column1', value: 'th01' },
        
        ],
        desserts: [
          {
            th00: '1',
            th01: '축제명,개최장소,축제시작일자,축제종료일자,축제내용,주관기관,주최기관,후원기관,전화번호,홈페이지주소,관련정보,소재지도로명주소,소재지지번주소,위도,경도,데이터기준일자,제공기관코드,제공기관명',
          },
        ],
      }
    },        
  } 

</script>

<style src="./CreateProject.scss" lang="scss"/>
