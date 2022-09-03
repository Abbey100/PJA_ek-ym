<template>
  <v-container fluid>
     <v-overlay 
      :value="overlay"
      opacity="0.4"
      >
    </v-overlay>    

    <!-- dialog 의 inline style은 dialog의 위치를 위한 임시 코드  -->
      <v-card class="dialog custom-text" elevation="3" style="position: absolute; left:50%; top: 5%; margin-left: -400px;  z-index:6">
        
        <!-- Dialog Title -->
        <dlgTitle :titleText="titleText" />

        <!-- Dialog Content -->
        <div class="dialog-content bg-default pt-0">
          <div class="section-row mt-6">
            <div class="dialog-section custom-text-info">
              <v-row class="mb-2  d-flex align-center">
                <v-col class="section-title">Language</v-col>
                <v-col>
                  <div class="select-control" style="width: 100%;">
                      <!-- select -->
                      <div class="select">
                        <div class="select-item">General Refine Expression Language (GREL)</div>
                        <span class="select-caret">
                          <v-img class="ml-2" src="@/assets/icon--16/ico__table__layer-menu.svg" max-width="16" />
                        </span>
                      </div>

                      <!-- Dropdown :: visible - d-block -->
                      <v-card class="dropdown" style="width: 100%;">
                        <ul class="dropdown-menu">

                          <li class="dropdown-item d-flex column-flex align-center active">
                            <span>Text</span>
                          </li>
                          
                        </ul>
                      </v-card>
                    </div>                
                </v-col>
              </v-row>


              <v-row class="d-flex align-center">
                <v-col class="section-title">
                  <div class="title-wrap">
                    Expression
                    <span class="placeholder d-block">No syntax error</span>
                  </div>
                </v-col>
                <v-col>
                  <v-textarea
                    outlined
                    hide-details
                    no-resize
                    height="72"
                    name=""
                    value="value"
                    class="pt-0"
                  ></v-textarea>
                </v-col>
              </v-row>
            
            </div>
          </div>
          
          <div class="section-row mt-6">
            <div class="dialog-section custom-text-detail">
              <CustomTab />
            </div>
          </div>

          <div class="section-row mt-6">
            <div class="dialog-section on-error">
              <v-row>
                <v-col class="section-title">on error</v-col>
                <v-col>
                  <div class="d-flex justify-start mb-3">
                    <radio class="mr-10">
                        <template slot="checkedContent"><span class="pl-2">Keep original</span></template>
                    </radio>   
                    <radio class="mr-10">
                        <template slot="checkedContent"><span class="pl-2">Set to blank</span></template>
                    </radio>   
                    <radio class="mr-10">
                        <template slot="checkedContent"><span class="pl-2">Store error</span></template>
                        <div class="help-title">Variables</div>
                    </radio>   
                  </div>
                  <div>
                    <checkbox class="single-row">
                      <template slot="checkedContent">
                          <div class="text-group">
                            <div class="d-flex justify-start">
                              <span class="px-2">Re-transform up to</span>
                              <span class="inline-input">
                                  <v-text-field 
                                    type="text" 
                                    single-line 
                                    hide-details>
                                  </v-text-field> 
                              </span>
                              <span class="pl-2">times until no change</span>
                            </div>
                          </div>
                      </template>
                    </checkbox>   
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
import CustomTab from './CustomTextTab/CustomTab'


export default {
  name: 'CustomText',
  components: {dlgTitle, dlgActDefault, CustomTab},
  data : () => ({
    titleText : "Custom text transform on column [ 2021-02 ]",        
  }),     
} 

</script>

<style src="./EditPopup.scss" lang="scss"/>
