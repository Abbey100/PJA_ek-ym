<template>
    <side-panel class="parse">
        <template slot="panelContent">
            <v-row class="parse-title d-flex justify-space-between column-felx aling-center">
                <b>CSV/TSV/Separator-based files</b>
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

            <!-- == Columns are separated by / single  ================================ -->
            <v-row class="parse-section col-sprt single">

                <div class="section-title mb-1">Columns are separated by</div>

                <radio class="single-row">
                    <template slot="checkedContent"><span class="pl-2">commas (CSV)</span></template>
                </radio>                       
            
                <radio class="single-row">
                    <template slot="checkedContent"><span class="pl-2">tabs (TSV)</span></template>
                </radio>                       
            
                <radio class="single-row">
                    <template slot="checkedContent">
                        <span class="px-2">custom </span>
                        <v-text-field
                            label=""
                            value=""
                            class="inline-input"
                            placeholder="내용을 입력해 주세요"
                            single-line
                            hide-details
                        ></v-text-field>                
                    </template>
                </radio>                       
            </v-row>

            <v-row class="parse-section">

                <checkbox class="multi-row mb-3">
                    <template slot="checkedContent">
                        <!-- input이 inline으로 들어가는 text group -->
                        <div class="text-group column-flex align-start ">
                            <div class="d-flex justify-start column-flex align-center">
                                <span class="px-2 ">Use character</span>
                                <span class="inline-input w-56">
                                    <v-text-field placeholder="" single-line hide-details></v-text-field> 
                                </span>
                                <span class="pl-2">to enclose cells containing</span>
                            </div>
                            <div class="d-flex justify-start column-flex align-center">
                                <span class="pl-2">column separators </span>
                            </div>
                        </div>
                    </template>
                </checkbox>   

                <checkbox class="multi-row text-only">
                    <template slot="checkedContent">
                        <div class="text-group column-flex align-start">
                            <div class="d-flex justify-start">
                                <span class="pl-2">Trim leading &amp; trailing whitespace from strings Escape<br>special character with \</span>
                            </div>
                        </div>
                    </template>
                </checkbox>   
            </v-row>

            <v-row class="parse-section">
                <checkbox class="single-row">
                    <template slot="checkedContent">
                        <div class="text-group">
                            <div class="d-flex justify-start">
                                <span class="px-2">Ignore first</span>
                                <span class="inline-input w-40">
                                    <v-text-field placeholder="0" type="numnber" single-line hide-details></v-text-field> 
                                </span>
                                <span class="pl-2">line(s) at begining of file</span>
                            </div>
                        </div>
                    </template>
                </checkbox>   
            </v-row>

            <v-row class="parse-section">
                <radio class="single-row">
                    <template slot="checkedContent">
                        <!-- input이 inline으로 들어가는 text group -->
                        <div class="text-group">
                            <div class="d-flex justify-start">
                                <span class="px-2">Parse next</span>
                                <span class="inline-input w-40">
                                    <v-text-field placeholder="0" type="numnber" single-line hide-details></v-text-field> 
                                </span>
                                <span class="pl-2">line(s) as column headers</span>
                            </div>
                        </div>                    
                    </template>
                </radio>  

                <radio class="multi-row text-only">
                    <template slot="checkedContent">
                        <div class="text-group column-flex align-start">
                            <div class="d-flex justify-start">
                                <span class="pl-2">Column names (comma separated)</span>
                            </div>
                            <div class="pb-1 d-block">
                                <span class="pl-2 d-block">
                                <v-text-field disabled block placeholder="내용을 입력하세요" type="numnber" single-line hide-details></v-text-field> 
                                </span>
                            </div>
                        </div>                
                    </template>
                </radio>  
            </v-row>

            <v-row class="parse-section">
                <checkbox class=" single-row mb-1">
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
            </v-row>

            <v-row class="parse-section">
                <checkbox class="single-row">
                    <template slot="checkedContent"><span class="pl-2">Attempt to Parse cell text into numbers</span></template>
                </checkbox>   

                <checkbox class="single-row">
                    <template slot="checkedContent"><span class="pl-2">Store blank rows</span></template>
                </checkbox>   

                <checkbox class="single-row">
                    <template slot="checkedContent"><span class="pl-2">Store blank cells as nulls</span></template>
                </checkbox>   

                <checkbox class="single-row">
                    <template slot="checkedContent"><span class="pl-2">Store file souce</span></template>
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
    name: 'SpParseCSV',
  } 

</script>

<style src="./SidePanel.scss" lang="scss"/>
