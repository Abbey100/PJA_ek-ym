<template>
    <div class="dialog-title ">
        <div class="d-flex column-flex align-center justify-space-between">
        <b>{{titleText}}</b>
        <div class="dialog=close">
            <v-btn
            class ="btn-ico" 
            height="16"
            width="16"
            elevation="0"
            :ripple="false"
            icon
            plain
            >
            <i class="ico ico__close"></i>
            </v-btn>      
        </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'dlgTitle',
        props : {
            titleText : {
                type : String,
                default : "",
            },
        }        
     
    }

</script>

