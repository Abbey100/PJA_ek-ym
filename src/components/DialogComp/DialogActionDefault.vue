<template>
    <div class="dialog-action d-flex">
        <slot name="actLeft"></slot>
        <div class="button-group d-flex justify-end">
            <v-btn
                class="text-capitalize btn-md point-deep mr-2"
                height="32"
                elevation="0"
                outlined
                :ripple="false"
            >{{dlgSecondaryBtn}}</v-btn>                                  
            <v-btn
                class="text-capitalize btn-md point-deep "
                height="32"
                elevation="0"
                :ripple="false"
            >{{dlgPrimaryBtn}}</v-btn>                                  
        </div>
    </div>  
</template>


<script>

    export default {
        name: 'dlgActDefault',
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
