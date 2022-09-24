<template>
    <div class="dialog-action d-flex">
        <slot name="actLeft">
        <div class="button-group d-flex justify-start">
            <v-btn
                class="text-capitalize btn-md point-deep mr-2"
                height="32"
                elevation="0"
                outlined
                :ripple="false"
            >Select All</v-btn>                                  
            <v-btn
                class="text-capitalize btn-md point-deep "
                height="32"
                elevation="0"
                outlined
                :ripple="false"
            >UnSelect All</v-btn>                                  
        </div>        
        </slot>
        <div class="button-group d-flex justify-end">
            <v-btn
            class="text-capitalize btn-md mr-2"
            height="32"
            elevation="0"
            outlined
            :ripple="false"
            >Except Cluster</v-btn>                                  
            <v-btn
            class="text-capitalize btn-md primary mr-2"
            height="32"
            elevation="0"
            :ripple="false"
            >Merge Selected & Close</v-btn>                                  
            <v-btn
            class="text-capitalize btn-md point-deep mr-2"
            height="32"
            elevation="0"
            :ripple="false"
            >Merge Selected & Close</v-btn>                                  
            <v-btn
                class="text-capitalize btn-md point-deep"
                height="32"
                elevation="0"
                outlined
                :ripple="false"
            >Close</v-btn>                                  
        </div>
    </div>  
</template>


<script>

    export default {
        name: 'DialogActionCluster',
        props : {
            dlgPrimaryBtn : {
                type : String,
                default : "OK",
            },
            dlgSecondaryBtn : {
                type : String,
                default : "Cancel",
            },
        }        
     
    }

</script>
