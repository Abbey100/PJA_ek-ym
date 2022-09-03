<template>
  <v-container fluid>
     <v-overlay 
      :value="overlay"
      opacity="0.4"
      >
    </v-overlay>    

    <!-- dialog 의 inline style은 dialog의 위치를 위한 임시 코드  -->
      <v-card class="dialog custom-text" elevation="3" style="position: absolute; left:50%; top: 20%; margin-left: -400px;  z-index:6">
        
        <!-- Dialog Title -->
        <dlgTitle :titleText="titleText" />

        <!-- Dialog Content -->
        <div class="dialog-content bg-default pt-0">
          <div class="section-row mt-6">
            <div class="dialog-section custom-text-info">
              <v-row>
                <v-col class="section-title">Language</v-col>
                <v-col></v-col>
              </v-row>


              <v-row>
                <v-col class="section-title">
                  Expression
                  <span class="placeholder d-block">No syntax error</span>
                </v-col>
                <v-col></v-col>
              </v-row>
            
            </div>
          </div>
          
          <div class="section-row mt-6">
            <div class="dialog-section custom-text-detail">
              <v-tabs grow class="panel-tab">
                  <v-tabs-slider></v-tabs-slider>
                  <v-tab :href="`#custom-text-preview`">Preview </v-tab>
                  <v-tab :href="`#custom-text-history`">History</v-tab>
                  <v-tab :href="`#custom-text-starred`">Starred</v-tab>
                  <v-tab :href="`#custom-text-help`">Help</v-tab>

                  <v-tab-item :value="'custom-text-preview'" >
                    <v-data-table
                        :headers="headers"
                        :items="desserts"
                        :items-per-page="2"
                        hide-default-footer
                        disable-sort
                        class="elevation-0 base-table"
                      ></v-data-table>            
                  </v-tab-item>

                  <v-tab-item :value="'custom-text-history'">
                      History
                  </v-tab-item>
                  <v-tab-item :value="'custom-text-starred'">
                      Starred
                  </v-tab-item>
                  <v-tab-item :value="'custom-text-help'">
                      Help
                  </v-tab-item>
              </v-tabs>
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

export default {
  name: 'CustomText',
  components: {dlgTitle, dlgActDefault},
  data : () => ({
    titleText : "Custom text transform on column [ 2021-02 ]",
    headers: [
      {
        text: 'row',
        align: 'start',
        sortable: false,
        value: 'th00',
      },
      { text: 'value', value: 'th01' },
      { text: 'toNumber(value)', value: 'th02' },
    ],    
    desserts: [
      {
        th00: '1',
        th01: '1',
        th02: '11',
      },
      {
        th00: '2',
        th01: '2',
        th02: '12',
      },
    ],          
}),     
} 

</script>

<style src="./EditPopup.scss" lang="scss"/>
