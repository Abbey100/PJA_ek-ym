<template>
<side-panel class="parse">
<template slot="panelContent">
    <v-tabs grow class="panel-tab">
        <v-tabs-slider></v-tabs-slider>
        <v-tab :href="`#facet-filter`">
            Facet / Filter
        </v-tab>
        <v-tab :href="`#undo-redo`">
            Undo<span class="font-weight-regular ml-1">7</span> 
            <span class="font-weight-regular mx-1">/</span>
            Redo<span class="font-weight-regular ml-1">7</span> 
        </v-tab>


        <v-tab-item :value="'facet-filter'" class="facet-filter">
            <div class="tab-content">
            
                <topButtonGroup />
                
                <div class="widget panel-section ">
                    <v-row class="widget-header d-flex">
                        <div class="button-group d-flex align-center">
                            <v-btn
                                class ="btn-ico widget-close" 
                                height="16"
                                width="16"
                                elevation="0"
                                :ripple="false"
                                icon
                                plain
                            >
                                <i class="ico ico__input-clear"></i>
                            </v-btn>  
                            <v-btn
                                class ="btn-ico widget-min" 
                                height="16"
                                width="16"
                                elevation="0"
                                :ripple="false"
                                icon
                                plain
                            >
                                <i class="ico ico__input-clear"></i>
                            </v-btn>  
                        </div>

                        <div class="widget-title d-flex align-center">도서관구분</div>
                    </v-row>
                    <v-row class="widget-body py-2">
                        <v-text-field
                            class="filter-input pt-0"
                            height="48"
                            placeholder="Filter"
                            value="LIVITYPE002"
                            single-line
                            hide-details
                            outlined
                        >
                        </v-text-field>


                    </v-row>
                    <v-row class="d-flex checked-inline">
                        <checkbox >
                            <template slot="checkedContent">
                            <span class="pl-2">case seneitive</span>
                            </template>                    
                        </checkbox>
                        <checkbox class="ml-10 ">
                            <template slot="checkedContent">
                            <span class="pl-2">regular ezpression</span>
                            </template>                    
                        </checkbox>
                    </v-row>
                </div>

            </div>
        </v-tab-item>
    </v-tabs>
</template>
</side-panel>
</template>


<script>
    import TopButtonGroup from '@/components/SidePanel/TopButtonGroup'
    export default {
    name: 'SideFilter',
    components: {TopButtonGroup},

    data () {
      return {
      
        }
    },  
    methods: {
   
    }      
  } 

</script>
<style src="./FacetSide.scss" lang="scss"/>