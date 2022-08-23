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
                <SideNumeric />
                <SideTimeline />
                <SideNumericLog />
                <SideTextLength />
            </div>
        </v-tab-item>
        <v-tab-item :value="'undo-redo'" class="undo-redo">
    
        </v-tab-item>
    </v-tabs>

</template>


<script>
    import TopButtonGroup from '@/components/SidePanel/TopButtonGroup'
    import SideNumeric from './SideGadget/02Numeric'
    import SideTimeline from './SideGadget/02Timeline'
    import SideNumericLog from './SideGadget/02NumericLog'
    import SideTextLength from './SideGadget/02TextLength'
     export default {
        name: 'SidePanelTab02',  
        components:{TopButtonGroup, SideNumeric, SideTimeline, SideNumericLog, SideTextLength}   
    } 

</script>