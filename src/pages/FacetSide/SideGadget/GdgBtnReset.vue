<template>
    <v-btn
        class="text-capitalize btn-md px-0"
        height="16"
        elevation="0"
        text
        :ripple="false" 
    >
        <!-- Sprint 3 수정사항 : icon 이미지로 변경 -->
        <v-icon>$i16_resetGr</v-icon>    
        Reset
    </v-btn>  
</template>

<script>
    export default {
    name: 'GdgBtnReset',
  } 

</script>
