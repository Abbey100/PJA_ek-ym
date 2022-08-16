<template>
  <v-container fluid>
     <v-overlay 
      :value="overlay"
      opacity="0.4"
      >
    </v-overlay>    

    <!-- dialog 의 inline style은 dialog의 위치를 위한 임시 코드  -->
      <v-card class="dialog split-col" elevation="3" style="position: absolute; left:50%; top: 20%; margin-left: -400px;  z-index:6">
        
        <!-- Dialog Title -->
        <dlgTitle :titleText="titleText" />

        <!-- Dialog Content -->
        <div class="dialog-content bg-default pt-0">
          <div class="section-row mt-6">

            <!-- == How to Split Column ================================================ -->
            <v-row class="mb-4">
              <div class="dialog-section how-to">
                <div class="section-title">How to Split Column</div>

                <!-- by separator -->
                <div class="separator">
                  <radio class="mb-1">
                    <template slot="checkedContent">
                      <span class="pl-2">by separator</span>
                    </template>
                  </radio> 
                  <v-row class="pl-6">
                    <span class="mr-2">Separator</span>
                    <v-text-field
                      label=""
                      value=""
                      class="inline-input "
                      single-line
                      hide-details
                    ></v-text-field>    
                    <checkbox class="ml-2">
                      <template slot="checkedContent">
                        <span class="pl-2">regular expression</span>
                      </template>
                    </checkbox>                                   
                  </v-row>   
                  <v-row class="pl-6">
                    <span class="mr-2">Split into</span>
                    <v-text-field
                      label=""
                      value=""
                      class="inline-input "
                      single-line
                      hide-details
                    ></v-text-field>    
                    <span class="ml-2">columnd st most (lesve blank for no limit)</span>                             
                  </v-row>    
                </div>     
                <!-- END by separator -->

                <!-- Field Length -->
                <div class="field-length">
                  <radio class="mb-1">
                    <template slot="checkedContent">
                      <span class="pl-2">By field lengths</span>
                    </template>
                  </radio>      
                  <div class="pl-6">          
                    <v-textarea
                      outlined
                      hide-details
                      no-resize
                      height="60"
                      name=""
                      class="pt-0 my-2"
                    ></v-textarea>   
                  </div>   
                  <span class="pl-6">List of integers separated by commas, e.g., 5,7,15</span>             
                </div>    
                <!-- END Field Length -->    
              </div>          
            </v-row>

            <!-- == After Splitting ================================================ -->
            <v-row>
              <div class="dialog-section after-split">
                <div class="section-title">After Splitting</div>

                <checkbox>
                  <template slot="checkedContent">
                    <span class="pl-2">Guess cell type</span>
                  </template>
                </checkbox>     

                <checkbox>
                  <template slot="checkedContent">
                    <span class="pl-2">Remove this column</span>
                  </template>
                </checkbox>               
              </div>          
            </v-row>
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
  name: 'SplitColumns',
  components: {dlgTitle, dlgActDefault},
  data : () => ({
    titleText : "Split column 관리기관명 1 1 into several columns",
          
  }),     
} 

</script>

<style src="./EditPopup.scss" lang="scss"/>
