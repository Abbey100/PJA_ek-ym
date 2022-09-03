<template>
  <v-container fluid>
     <v-overlay 
      :value="overlay"
      opacity="0.4"
      >
    </v-overlay>    

    <!-- dialog 의 inline style은 dialog의 위치를 위한 임시 코드  -->
    <v-card class="dialog table-edit based-on" elevation="3" style="position: absolute; left:50%; top: 5%; margin-left: -400px;  z-index:6">
      <!-- Menu : Edit column > Add column based on... -->

      <!-- Dialog Title -->
      <dlgTitle :titleText="titleText" />

      <!-- Dialog Content -->
      <div class="dialog-content bg-default pt-0">
        <div class="section-row mt-6">
          <div class="dialog-section ">

            <!-- column name input -->
            <v-row class="mb-2">
              <v-col class="item-title">New column name</v-col>
              <v-col>
                <v-text-field 
                  v-model="text"
                  placeholder="Placeholder"
                  text-color="primary"
                  hide-details
                  outlined
                  class="pt-0"
                  >
              </v-text-field>               
              </v-col>
            </v-row>

            <!-- On Error -->
            <v-row class="d-flex align-center mb-2">
              <v-col class="item-title">On Error </v-col>
              <v-col class="d-flex justify-start align-center">
                <radio class="mr-10">
                    <template slot="checkedContent"><span class="pl-2">set to Blank</span></template>
                </radio> 
                <radio class="mr-10">
                    <template slot="checkedContent"><span class="pl-2">store error</span></template>
                </radio> 
                <radio>
                    <template slot="checkedContent"><span class="pl-2">copy calue from original column</span></template>
                </radio> 
              </v-col>
            </v-row>

            <!-- Language -->
            <v-row class="mb-2">
              <v-col class="item-title">Language</v-col>
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

            <!-- Expression -->
            <v-row>
              <v-col class="item-title">Expression</v-col>
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
  name: 'AddColBasedOn',
  components: {dlgTitle, dlgActDefault, CustomTab},
  data : () => ({
    titleText : "Add column based on column Numbers",        
  }),     
} 

</script>

<style src="./EditPopup.scss" lang="scss"/>
