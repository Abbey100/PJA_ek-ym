<template>
    <div class="facet-text-ctrl d-flex justify-space-between">
        <!--  활성화 :  active -->
        <div class="button-group pb-0">
            <v-btn
                class="name facet-text-toggle active mr-0"
                height="24"
                elevation="0"
                :ripple="false" 
            >
                name
                <v-icon>$i16_DscntWh</v-icon>
            </v-btn> 
            <v-btn
                class="count facet-text-toggle"
                height="24"
                elevation="0"
                :ripple="false" 
            >
                count                 
                <v-icon>$i16_DscntGr</v-icon>
            </v-btn> 
        </div>

        <v-btn
            class="text-capitalize cluster px-0"
            height="24"
            elevation="0"
            :ripple="false" 
        >
            Cluster
        </v-btn> 
    </div>
</template>


<script>
    export default {
    name: 'FacetTextToggle',
} 

</script>

<style src="./SideGadget.scss" lang="scss"/>