<template>
    <div class="facet-text-ctrl d-flex justify-space-between">
        <div class="button-group pb-0">
            <v-btn
                class="name active mr-0"
                height="24"
                elevation="0"
                :ripple="false" 
            >
                name
                <v-img src="@/assets/icon--16/ico__arr--descent--wh.svg" />
            </v-btn> 
            <v-btn
                class="count"
                height="24"
                elevation="0"
                :ripple="false" 
            >
                count
                <v-img src="@/assets/icon--16/ico__arr--descent--grey.svg" />
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
    name: 'FacetTextCtrl',
} 

</script>

<style src="./SideGadget.scss" lang="scss"/>