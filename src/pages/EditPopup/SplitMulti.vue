<template>
  <v-container fluid>
     <v-overlay 
      :value="overlay"
      opacity="0.4"
      >
    </v-overlay>    

    <!-- dialog 의 inline style은 dialog의 위치를 위한 임시 코드  -->
    <v-card class="dialog split-col split-multi" elevation="3" style="position: absolute; left:50%; top: 5%; margin-left: -400px;  z-index:6">
      <!-- Menu : Edit cells > Common transforms > To text -->
      
      <!-- Dialog Title -->
      <dlgTitle :titleText="titleText" />

      <!-- Dialog Content -->
      <div class="dialog-content bg-default pt-0">
        <div class="dialog-section mt-6">
          <div class="section-title">How to Split multi-valued cells</div>
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

            <!-- By Transition -->
            <div class="by-transition">
              <radio class="mb-1">
                <template slot="checkedContent">
                  <span class="pl-2">by transition from lowercase to uppercase</span>
                  <span>[11Abc, Def22]</span>
                </template>
              </radio>   
              <div class="reverse ml-6">
                <checkbox class="mb-1">
                  <template slot="checkedContent">
                    <span class="pl-2">Reverse splitting order</span>
                    <span>[11A, bcD, ef22]</span>
                  </template>
                </checkbox>                  
              </div>          
            </div> 
            <!-- END By Transition -->       
            
            <!-- By Transition -->
            <div class="by-transition mb-0">
              <radio class="mb-1">
                <template slot="checkedContent">
                  <span class="pl-2">by transition from numbers to letters</span>
                  <span>[11, AbcDef22]</span>
                </template>
              </radio>   
              <div class="reverse ml-6">
                <checkbox class="mb-1">
                  <template slot="checkedContent">
                    <span class="pl-2">Reverse splitting order</span>
                    <span>[11AbcDef, 22]</span>
                  </template>
                </checkbox>                  
              </div>          
            </div>  
            <!-- END By Transition -->               
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
  name: 'SplitMulti',
  components: {dlgTitle, dlgActDefault},
  data : () => ({
    titleText : "Split multi-valued cells",        
  }),     
} 

</script>

<style src="./EditPopup.scss" lang="scss"/>
