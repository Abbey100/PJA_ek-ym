<template>
  <v-container fluid>
     <v-overlay 
      :value="overlay"
      opacity="0.4"
      >
    </v-overlay>    

    <!-- dialog 의 inline style은 dialog의 위치를 위한 임시 코드  -->
    <!-- table-edit : 공통 속성
        cell-replace : 팝업 구분  -->
    <v-card class="dialog table-edit cell-replace" elevation="3" style="position: absolute; left:50%; top: 5%; margin-left: -400px;  z-index:6">
      <!-- Menu : Edit cells > Replace -->
      
      <!-- Dialog Title -->
      <dlgTitle :titleText="titleText" />

      <!-- Dialog Content -->
      <div class="dialog-content bg-default pt-0">
        <div class="section-row mt-6">
          <div class="dialog-section pb-2">
            <v-row class="mb-2">
              <v-col class="item-title">Find</v-col>
              <v-col>
                <v-text-field 
                  v-model="text"
                  text-color="primary"
                  hide-details
                  outlined
                  class="pt-0"
                  >
              </v-text-field>                
                <div class="option d-flex mt-5">
                  <checkbox class="mr-10">
                    <template slot="checkedContent">
                      <span class="pl-2">case insenetive</span>
                    </template>
                  </checkbox>  

                  <checkbox class="mr-10">
                    <template slot="checkedContent">
                      <span class="pl-2">whole word</span>
                    </template>
                  </checkbox> 

                  <checkbox>
                    <template slot="checkedContent">
                      <span class="pl-2">regular expression</span>
                    </template>
                  </checkbox>      
                </div>
                <div class="descript mt-3">
                  Leave blank to add the replacement string after each character.<br>
                  Check :regula expression” to find special characters (new lines, tabulations...) or complex patterns.                
                </div>
              </v-col>
            </v-row>
          </div>
        </div>


        <div class="section-row mt-4">
          <div class="dialog-section pb-2">
            <v-row class="mb-2">
              <v-col class="item-title">Replace with</v-col>
              <v-col>
                <v-text-field 
                  v-model="text"
                  text-color="primary"
                  hide-details
                  outlined
                  class="pt-0"
                  >
              </v-text-field>                
                <div class="option mt-5">
                  <radio>
                    <template slot="checkedContent">
                      <span class="pl-2">use \n for new lines \t for tabulation, \\n for \t.</span>
                    </template>
                  </radio>  
                </div>
                <div class="descript mt-3">
                  If “regular expression” option is checked and finding pattern contains groups delimited with parentheses, $0 will return the complete string matching the patternm and $1, $2...the 1st, 2nd... group.               
                </div>
              </v-col>
            </v-row>
          </div>
        </div>
        
               
      </div>

      <!-- Dialog Action -->
      <dlgActDefault />  

    </v-card>
  </v-container>
</template>



<script>
import dlgTitle from '@/components/DialogComp/DialogTitle'
import dlgActDefault from '@/components/DialogComp/DialogActionDefault'


export default {
  name: 'CellReplace',
  components: {dlgTitle, dlgActDefault},
  data : () => ({
    titleText : "Replace",        
  }),     
} 

</script>

<style src="./EditPopup.scss" lang="scss"/>
