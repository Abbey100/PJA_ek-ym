<template>
  <v-container fluid>
     <v-overlay 
      :value="overlay"
      opacity="0.4"
      >
    </v-overlay>    

    <!-- dialog 의 inline style은 dialog의 위치를 위한 임시 코드  -->
    <!-- table-edit : 공통 속성
        custom-text : 팝업 구분  -->
    <v-card class="dialog table-edit cluster-edit" elevation="3" style="position: absolute; left:50%; top: 5%; margin-left: -400px;  z-index:6">
      <!-- Menu : Edit cells > Common transforms > To text -->
      
      <!-- Dialog Title -->
      <dlgTitle :titleText="titleText" />

      <!-- Dialog Content -->
      <div class="dialog-content bg-default pt-6">
        <div class="descript">This feature helps you find groups of different cell values that might be alternative representations of the same thing. For example, the two strings "New York" and "new york" are very likely to refer to the same concept and just have capitalization differences, and "Gödel" and "Godel" probably refer to the same person.</div>
        <a href="#" class="point-deep">find out more</a>
      </div>

      <!-- Dialog Action -->
      <dlgActDefault />  

    </v-card>
  </v-container>
</template>



<script>
import dlgTitle from '@/components/DialogComp/DialogTitle'
import dlgActDefault from '@/components/DialogComp/DialogActionCluster'


export default {
  name: 'ClusterEditCol',
  components: {dlgTitle, dlgActDefault,},
  data : () => ({
    titleText : "Cluster & Edit column [ Publisher ]",        
  }),     
} 

</script>

<style src="./EditPopup.scss" lang="scss"/>
