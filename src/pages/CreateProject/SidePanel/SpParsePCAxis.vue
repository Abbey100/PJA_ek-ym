<template>
    <side-panel class="parse">
        <template slot="panelContent">
              <v-row class="parse-title d-flex justify-space-between column-felx aling-center">
                <b>PC-Axis</b>
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

              <v-row class="parse-section">
                <checkbox class="single-row">
                    <template slot="checkedContent">
                      <div class="text-group">
                        <div class="d-flex justify-start">
                            <span class="px-2">Ignore first</span>
                            <span class="inline-input w-56">
                              <v-text-field placeholder="0" tyle="number" single-line hide-details></v-text-field> 
                            </span>
                            <span class="pl-2">line(s) at beginning of file</span>
                        </div>
                      </div>                  
                    </template>
                </checkbox>   

                <checkbox class="single-row">
                    <template slot="checkedContent">
                        <div class="text-group">
                            <div class="d-flex justify-start">
                                <span class="px-2">Discard initial</span>
                                <span class="inline-input w-56">
                                <v-text-field placeholder="0" tyle="number" single-line hide-details></v-text-field> 
                                </span>
                                <span class="pl-2">row(s) of data</span>
                            </div>
                        </div>                    
                    </template>
                </checkbox>   

                <checkbox class="single-row">
                    <template slot="checkedContent"><span class="pl-2">Store blank rows</span> </template>
                </checkbox>   

                <checkbox class="single-row">
                    <template slot="checkedContent"><span class="pl-2">Store blank cells as nulls</span></template>
                </checkbox>   
              </v-row>   
        </template>
    </side-panel>      
</template>


<script>

  export default {
    name: 'SpParsePCAxis',
  } 

</script>

<style src="./SidePanel.scss" lang="scss"/>
