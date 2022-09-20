<template>
    <div class="gadget panel-section">
        <v-row class="gadget-header d-flex">
            <div class="button-group gadget-control d-flex align-center">
                <v-btn
                    class ="btn-ico gadget-close" 
                    height="16"
                    width="16"
                    elevation="0"
                    :ripple="false"
                    icon
                    outlined
                >
                    <!-- Sprint 3 수정사항 : icon 이미지로 변경 -->
                    <v-icon>$i16_NotSaveSm</v-icon>
                </v-btn>  
                <v-btn
                    class ="btn-ico gadget-flip" 
                    height="16"
                    width="15"
                    elevation="0"
                    :ripple="false"
                    icon
                    outlined
                >
                    <!-- Sprint 3 수정사항 : icon 이미지로 변경 -->
                    <v-icon>$i16_flip</v-icon>
                </v-btn>  
            </div>

            <div class="gadget-title d-flex flex-grow-1 align-center justify-space-between mr-2">
                <slot name="gadgetTitle"></slot>
            </div>
            <slot name="gadgetContCtrl"></slot>
        </v-row>
        <slot name="gadgetBody"></slot>
    </div>
</template>


<script>
    export default {
    name: 'Gadget',
    props : {
        gadgetTitle : {
            type : String,
            default : "Gadget Title",
        },
    }  
  } 
</script>

<style src="./Gadget.scss" lang="scss"/>