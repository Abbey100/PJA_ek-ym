<template>
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

        <v-tab-item :value="'facet-filter'" >
            <div class="tab-content">
                <TopButtonGroup />
                <SideFilter />
                <SideNumeric />
            </div>
        </v-tab-item>
        <v-tab-item :value="'undo-redo'" class="undo-redo">
    
        </v-tab-item>
    </v-tabs>

</template>


<script>
    import TopButtonGroup from '@/components/SidePanel/TopButtonGroup'
    import SideFilter from './SideGadget/01Filter'
    import SideNumeric from './SideGadget/02Numeric'
     export default {
        name: 'SidePanelTab03',  
        components:{TopButtonGroup, SideFilter, SideNumeric}   
    } 

</script>