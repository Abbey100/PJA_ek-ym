<template>
    <div class="dialog-title ">
        <div class="d-flex column-flex align-center justify-space-between">
        <b>{{titleText}}</b>
        <!-- Sprint_3 Hotfix : dialog=close -> dialog-close 로 수정 -->
        <div class="dialog-close">
            <v-btn
            class ="btn-ico" 
            height="16"
            width="16"
            elevation="0"
            :ripple="false"
            icon
            plain
            >
                <!-- Sprint_3 Hotfix : v-icon으로 변경 -->
                <v-icon>$i16_close</v-icon>
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

