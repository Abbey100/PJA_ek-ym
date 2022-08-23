<template>
    <div class="gadget-cont-ctrl d-flex align-center">
        <v-btn
            class="text-capitalize btn-md px-0 mr-2"
            height="16"
            elevation="0"
            text
            :ripple="false" 
        >
            <v-img src="@/assets/icon--16/ico__change.svg"  />
            change
        </v-btn>  
    </div>  
</template>

<script>
    export default {
    name: 'GadgetContCtrl',
  } 

</script>
