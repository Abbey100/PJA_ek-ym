<template>
  <v-container fluid>
     <v-overlay 
      :value="overlay"
      opacity="0.4"
      >
    </v-overlay>    

    <!-- dialog 의 inline style은 dialog의 위치를 위한 임시 코드  -->
      <v-card class="dialog sort-by" elevation="3" style="position: absolute; left:50%; top: 20%; margin-left: -400px;  z-index:6">
        
        <!-- Dialog Title -->
        <dlgTitle :titleText="titleText" />

        <!-- Dialog Content -->
        <div class="dialog-content bg-default pt-0">
          <div class="py-4 top-text">Sort cell calues as</div>

          <div class="section-col d-flex ">

            <!-- drag and drop -->
            <v-col class="sortby-option mr-4 d-flex  align-space-between">

              <div class="dialog-section ">
                <radio class="mt-2">
                  <template slot="checkedContent"><span class="pl-2">text</span></template>
                </radio>

                <checkbox class="ml-6 mt-2">
                  <template slot="checkedContent"><span class="pl-2">Delete joined columns.</span></template>
                </checkbox>

                <radio class="mt-4">
                  <template slot="checkedContent"><span class="pl-2">numbers</span></template>
                </radio>   

                <radio class="mt-2">
                  <template slot="checkedContent"><span class="pl-2">dates</span></template>
                </radio>                

                <radio class="mt-2">
                  <template slot="checkedContent"><span class="pl-2">booleans</span></template>
                </radio>                
              </div>
                    
            </v-col>

            <!-- option -->
            <v-col class="drag-n-drop">

              <div class="dialog-section">
                <v-list dense class="drag">
                  <v-list-item-group
                    v-model="selectedItem"
                    multiple
                    color="primary"
                  >
                    <v-list-item
                      v-for="(item, i) in items"
                      :key="i"
                      :ripple="false"
                    >
                      <v-list-item-content>
                        <v-list-item-title v-text="item.text"></v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
           
                  </v-list-item-group>
                </v-list>
              </div>
            </v-col >
          </div>

          <div class="true-false mt-3 d-flex">
            <radio>
              <template slot="checkedContent">
                <span class="pl-2 pr-2">false </span>
                <v-icon>$i16_Nxt</v-icon>
                <span class="pl-2">True </span>
              </template>
            </radio>
            <radio>
              <template slot="checkedContent">
                <span class="pl-2 pr-2">True </span>
                <v-icon>$i16_Nxt</v-icon>
                <span class="pl-2">False</span>
              </template>
            </radio>
          </div>
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
  name: 'Sortby',
  components: {dlgTitle, dlgActDefault},
  data : () => ({
    titleText : "Sort by [ 지역 ]",
    selectedItem: 0,
    items: [
      { text: '관리기관명 1 1' },
      { text: '관리기관명 1 2' },
      { text: '관리기관명 1 3' },
      { text: '관리기관명 1 4' },
      { text: '관리기관명 1 5' },
    ],          
  }),     
} 

</script>

<style src="./EditPopup.scss" lang="scss"/>
