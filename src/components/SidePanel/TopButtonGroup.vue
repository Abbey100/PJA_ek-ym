<template>
    <div class="panel-section button-group d-flex justify-space-between">
        <div>
            <v-btn
                class="text-capitalize btn-md m"
                height="32"
                elevation="0"
                outlined
                :ripple="false" 
            >Reset all</v-btn>  
            <v-btn
                class="text-capitalize btn-md"
                height="32"
                elevation="0"
                outlined
                :ripple="false"
            >Remove all</v-btn>  
        </div>
        <div class="r-btn d-flex justify-end">
            <v-btn
                class="text-capitalize update-pre px-0 mx-0"
                height="32"
                elevation="0"
                :ripple="false"
                text
            >
                <i class="ico ico__refresh mr-2"></i>
                Refresh
            </v-btn>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TopButtonGroup',
    };
</script>

<style src="./SidePanel.scss" lang="scss" />