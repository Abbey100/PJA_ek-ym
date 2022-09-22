<template>
    <side-panel class="parse">
        <template slot="panelContent">
            <v-row class="parse-title d-flex justify-space-between column-felx aling-center">
                <b>Fixed-width</b>
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


                <v-row class="parse-section ">

                <div class="checkless mb-1">
                    <div class="text-group d-flex justify-start">
                        <span class="d-flex column-flex align-center">Parse every</span>
                        <span class="inline-input w-40 mx-2">
                        <v-text-field placeholder="0" tyle="number" single-line hide-details></v-text-field> 
                        </span>
                        <span class="d-flex column-flex align-center">line(s) into one row</span>
                    </div>  
                </div>              

                <checkbox class="single-row">
                    <template slot="checkedContent"><span class="pl-2">Store blank rows</span> </template>
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
            </v-row>     
        </template>
    </side-panel>      
</template>


<script>

  export default {
    name: 'SpParseFixedW',
  } 

</script>

<style src="./SidePanel.scss" lang="scss"/>
