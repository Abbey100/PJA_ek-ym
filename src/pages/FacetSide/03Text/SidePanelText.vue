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
                <SideText1 />
                <SideText2 />
                <SideText3 />
                <SideText3Invert />
            </div>
        </v-tab-item>
        <v-tab-item :value="'undo-redo'" class="undo-redo">
    
        </v-tab-item>
    </v-tabs>

</template>


<script>
    import TopButtonGroup from '@/components/SidePanel/TopButtonGroup'
    import SideText1 from './03Text1'
    import SideText2 from './03Text2'
    import SideText3 from './03Text3'
    import SideText3Invert from './03Text3Invert'
     export default {
        name: 'SidePanelText',  
        components:
        {
            TopButtonGroup,
            SideText1,
            SideText2,
            SideText3,
            SideText3Invert
        }   
    } 

</script>