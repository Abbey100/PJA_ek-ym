<template>
    <side-panel class="parse">
        <template slot="panelContent">
           <v-row class="parse-title d-flex justify-space-between column-felx aling-center">
              <b>Line-based text files</b>
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


            <v-row class="parse-section">
                <checkbox class=" multi-row text-only mb-1">
                    <template slot="checkedContent">
                        <div class="text-group column-flex align-start">
                            <div class="d-flex justify-start">
                                <span class="pl-2">Column names (comma separated)</span>
                            </div>
                            <div class="pb-1 d-block">
                                <span class="pl-2 d-block">
                                    <v-text-field value="http://en.wikipedia.org/wiki/" block placeholder="내용을 입력하세요" type="numnber" single-line hide-details></v-text-field> 
                                </span>
                            </div>
                         </div>                    
                    </template>
                </checkbox>   

                <checkbox class=" single-row">
                    <template slot="checkedContent">
                        <div class="text-group">
                            <div class="d-flex justify-start">
                                <span class="px-2">Parse next</span>
                                <span class="inline-input w-56">
                                    <v-text-field placeholder="0" tyle="number" single-line hide-details></v-text-field> 
                                </span>
                                <span class="pl-2">line(s) as column headers</span>
                            </div>
                        </div>                
                    </template>
                </checkbox>   

                <checkbox class=" single-row">
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
                    <template slot="checkedContent"><span class="pl-2">Attempt to parse cell text into numbers</span></template>
                </checkbox>   

                <checkbox class=" multi-row ">
                    <template slot="checkedContent">
                        <div class="text-group column-flex align-start">
                            <div class="d-flex justify-start">
                                <span class="pl-2">Pad cells spanning over multiple rows or columns<br>with nulls</span>
                            </div>
                        </div>                    
                    </template>
                </checkbox>   

                <checkbox class="single-row">
                    <template slot="checkedContent"><span class="pl-2">Store blank rows</span></template>
                </checkbox>   

                <checkbox class="single-row">
                    <template slot="checkedContent"><span class="pl-2">	Store archive file</span></template>
                </checkbox>   
            </v-row>           
        </template>
    </side-panel>      
</template>


<script>

  export default {
    name: 'SpParseWikitext',
  } 

</script>

<style src="./SidePanel.scss" lang="scss"/>
