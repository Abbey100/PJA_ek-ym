<template>
  <v-container fluid>
     <v-overlay 
      :value="overlay"
      opacity="0.4"
      >
    </v-overlay>    

    <!-- dialog 의 inline style은 dialog의 위치를 위한 임시 코드  -->
    <!-- Text Field 만 있는 팝업  -->
    <v-card class="dialog single-input" elevation="3" style="position: absolute; left:50%; top: 10%; margin-left: -280px;  z-index:6">
      
      <!-- Dialog Title -->
      <dlgTitle :titleText="titleText" />

      <!-- Dialog Content -->
      <div class="dialog-content bg-default pt-6">
        <v-text-field 
          v-model="text"
          text-color="primary"
          hide-details
          outlined
          class="pt-0"
          >
        </v-text-field>                
      </div>

      <!-- Dialog Action -->
      <dlgActDefault />  

    </v-card>
  </v-container>
</template>



<script>
import dlgTitle from '@/components/DialogComp/DialogTitle'
import dlgActDefault from '@/components/DialogComp/DialogActionDefault'


export default {
  name: 'SingleInput',
  components: {dlgTitle, dlgActDefault},
  data : () => ({
    titleText : "Enter separator to use netween values",        
  }),     
} 

</script>

<style src="./EditPopup.scss" lang="scss"/>
