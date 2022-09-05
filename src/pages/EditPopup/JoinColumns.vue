<template>
  <v-container fluid>
     <v-overlay 
      :value="overlay"
      opacity="0.4"
      >
    </v-overlay>    

    <!-- dialog 의 inline style은 dialog의 위치를 위한 임시 코드  -->
      <v-card class="dialog join-column" elevation="3" style="position: absolute; left:50%; top: 15%; margin-left: -400px;  z-index:6">
        
        <!-- Dialog Title -->
        <dlgTitle :titleText="titleText" />

        <!-- Dialog Content -->
        <div class="dialog-content bg-default pt-0">
          <div class="section-col d-flex ">

            <!-- drag and drop -->
            <v-col class="drag-n-drop mr-4 d-flex flex-column align-space-between">
              <div class="py-4 top-text">Select and order columns to join</div>

              <div class="dialog-section ">
                <v-list dense class="drag">
                  <v-list-item-group
                    v-model="selectedItem"
                    multiple
                    color="primary"
                  >
                    <v-list-item
                      v-for="(item, i) in items"
                      :key="i"
                      :v-slot="{active}"
                      :ripple="false"
                    >
                      <checkbox :input-value="active"></checkbox>
                      <v-list-item-content>
                        <v-list-item-title v-text="item.text"></v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
           
                  </v-list-item-group>
                </v-list>
              </div>

              <div class="section-action mt-2 d-flex">
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
              </div>            
            </v-col>

            <!-- option -->
            <v-col class="join-options">
              <div class="py-4 top-text">Select options</div>

              <div class="dialog-section">

                <!-- Option group 01 -->
                <v-row class="d-flex">
                  <span>Separator between the content of each column</span>
                  <v-text-field
                    label=""
                    value=""
                    class="inline-input ml-2"
                    single-line
                    hide-details
                  ></v-text-field>   
                  <span class="descript">Enter one or more characters, or keep blank to join the columns without separator.</span>                 
                </v-row>   

                <!-- Option group 02 -->
                <v-row class="d-flex option-group">
                  <v-row>
                    <radio>
                      <template slot="checkedContent">
                        <span class="pl-2">Replace nulls with</span>
                        <v-text-field
                          label=""
                          value=""
                          class="inline-input ml-2"
                          single-line
                          hide-details
                        ></v-text-field>                      
                      </template>
                    </radio>
                    <span class="descript pl-6">Enter one or more characters, or keep blank to replace nulls with blank strings.</span>                 
                  </v-row>
                  <v-row class="mt-1">
                    <radio>
                      <template slot="checkedContent">
                        <span class="pl-2">Skip nulls.</span>
                      </template>
                    </radio>
                  </v-row>
                </v-row>

                <!-- Option group 03 -->
                <v-row class="d-flex option-group">
                   <checkbox class="multi">
                      <template slot="checkedContent">
                        <span class="pl-2">In separator and nulls substitutes, use \n for new lines, \t for tabulation, \\n for \n, \\t for \t.</span>
                      </template>
                    </checkbox>                
                </v-row>

                <!-- Option group 04 -->
                <v-row class="d-flex option-group">
                   <radio class="mb-1">
                      <template slot="checkedContent">
                        <span class="pl-2">Write result in selected column.</span>
                      </template>
                    </radio>                
                   <radio>
                      <template slot="checkedContent">
                        <span class="pl-2">Write result in new column named</span>
                        <v-text-field
                          label=""
                          value=""
                          width="179"
                          class="inline-input ml-2 w-02"
                          single-line
                          hide-details
                        ></v-text-field>   
                      </template>
                    </radio>                
                </v-row>

                <!-- Option group 05 -->
                <v-row class="d-flex option-group">
                   <checkbox>
                      <template slot="checkedContent">
                        <span class="pl-2">Delete joined columns.</span>
                      </template>
                    </checkbox>                
                </v-row>
              </div>
            </v-col >
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
    titleText : "JoinColumns",
    selectedItem: 0,
    items: [
      { text: '관리기관명 1 1' },
      { text: '관리기관명 1 2' },
      { text: '관리기관명 1 3' },
      { text: '관리기관명 1 4' },
      { text: '관리기관명 1 5' },
      { text: '관리기관명 1 5' },
      { text: '관리기관명 1 5' },
      { text: '관리기관명 1 5' },
      { text: '관리기관명 1 5' },
      { text: '관리기관명 1 5' },
      { text: '관리기관명 1 5' },
      { text: '관리기관명 1 5' },
    ],          
  }),     
} 

</script>

<style src="./EditPopup.scss" lang="scss"/>
