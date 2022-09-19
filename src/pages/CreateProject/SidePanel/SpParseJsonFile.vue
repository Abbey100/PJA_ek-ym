<template>
    <side-panel class="parse">
        <template slot="panelContent">
            <v-row class="parse-title d-flex justify-space-between column-felx aling-center">
              <b>JSON files</b>
              <v-btn
                  class="text-capitalize update-pre "
                  height="16"
                  elevation="0"
                  :ripple="false" 
                  text
              >
                Update Preview
                <!-- Sprint_3 Hotfix : v-icon으로 변경 -->
                <v-icon>$i16_reset</v-icon>
              </v-btn>
            </v-row>

            <v-row class="parse-section che">
                <checkbox class="single-row">
                    <template slot="checkedContent">
                      <div class="text-group">
                        <div class="d-flex justify-start">
                            <span class="px-2">Load at most</span>
                            <span class="inline-input w-56">
                              <v-text-field placeholder="0" tyle="number" single-line hide-details></v-text-field> 
                            </span>
                            <span class="pl-2">row(s) of data</span>
                        </div>
                      </div>                    
                    </template>
                </checkbox>  

                <checkbox class="single-row">
                    <template slot="checkedContent"><span class="pl-2">Preserve empty strings</span></template>
                </checkbox>   
        
                <checkbox class="single-row">
                    <template slot="checkedContent"><span class="pl-2">Trim leading & trailing whitespace from strings</span></template>
                </checkbox>   
        
                <checkbox class="single-row">
                    <template slot="checkedContent"><span class="pl-2">Attempt to parse cell text into numbers</span></template>
                </checkbox>   
     
                <checkbox class="single-row">
                    <template slot="checkedContent"><span class="pl-2">Store file source</span> </template>
                </checkbox>   
     
     
                <checkbox class="single-row">
                    <template slot="checkedContent"><span class="pl-2">Store archive file</span></template>
                </checkbox>   
            </v-row>
        </template>
    </side-panel>      
</template>


<script>

  export default {
    name: 'SpParseJsonFile',
  } 

</script>

<style src="./SidePanel.scss" lang="scss"/>
