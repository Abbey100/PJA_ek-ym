<template>
  <v-container fluid>
     <v-overlay 
      :value="overlay"
      opacity="0.4"
      >
    </v-overlay>    

    <!-- dialog 의 inline style은 dialog의 위치를 위한 임시 코드  -->
      <v-card class="dialog apply-op" elevation="3" style="position: absolute; left:50%; top: 20%; margin-left: -400px;  z-index:6">
          <div class="dialog-title ">
            <div class="d-flex column-flex align-center justify-space-between">
              <b>Apply Operation History</b>
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

          <div class="dialog-content bg-default pt-0">
            <div class="py-4">Paste an extracted JSON history of operations to perform:</div>
            <v-textarea
              outlined
              hide-details
              no-resize
              height="379"
              name=""
              value="[ ]"
              class="pt-0"
            ></v-textarea>
          </div>

          <div class="dialog-action d-flex">
            <div class="button-group d-flex justify-end">
              <v-btn
                  class="text-capitalize btn-md point-deep mr-2"
                  height="32"
                  elevation="0"
                  :ripple="false"
                  outlined
              >Cancel</v-btn>  

              <v-btn
                  class="text-capitalize btn-md point-deep"
                  height="32"
                  elevation="0"
                  :ripple="false"
              >Perform operations</v-btn>                                  
            </div>
          </div>
      </v-card>


  </v-container>
</template>



<script>

  export default {
    name: 'ApplyOpHistory',
   
  } 

</script>

<style src="./EditPopup.scss" lang="scss"/>
