<template>
  <v-container fluid>
     <v-overlay 
      :value="overlay"
      opacity="0.4"
      >
    </v-overlay>    

    <!-- dialog 의 inline style은 dialog의 위치를 위한 임시 코드  -->
      <v-card class="dialog trim-tall" elevation="3" style="position: absolute; left:50%; top: 15%; margin-left: -220px;  z-index:6">
        
        <!-- Dialog Title -->
        <dlgTitle :titleText="titleText" />

        <!-- Dialog Content -->
        <div class="dialog-content bg-default pt-0">
          <div class="section-col d-flex ">

            <div class="dialog-section scrollbody mt-6">
              <div class="scrolled">
                <v-list dense>
                  <v-list-item-group
                    v-model="selectedItem"
                    multiple
                    color="primary"
                  >
                    <v-list-item
                      v-for="(item, i) in items"
                      :key="i"
                      :v-slot="{active}"
                      :ripple="false"
                    >
                      <checkbox :input-value="active"></checkbox>
                      <v-list-item-content>
                        <v-list-item-title v-text="item.text"></v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
            
                  </v-list-item-group>
                </v-list>
            </div>
            </div>
          </div>
        </div>

        <!-- Dialog Action -->
        <dlgActDefault>
          <template slot="actLeft">
            <v-btn
                class="text-capitalize btn-md mr-2"
                height="32"
                elevation="0"
                outlined
                :ripple="false"
            >Select All</v-btn>                                  
            <v-btn
                class="text-capitalize btn-md "
                height="32"
                elevation="0"
                outlined
                :ripple="false"
            >UnSelect All</v-btn>      
          </template>
        </dlgActDefault>  
                    
      </v-card>
  </v-container>
</template>



<script>
import dlgTitle from '@/components/DialogComp/DialogTitle'
import dlgActDefault from '@/components/DialogComp/DialogActionDefault'

export default {
  name: 'TrimAndTall',
  components: {dlgTitle, dlgActDefault},
  data : () => ({
    titleText : "Trim leading and talling whitespace",
    selectedItem: 0,
    items: [
      { text: '2006-01' },
      { text: '2006-02' },
      { text: '2006-03' },
      { text: '2006-04' },
      { text: '2006-05' },
      { text: '2006-06' },
      { text: '2006-07' },
      { text: '2006-08' },
      { text: '2006-09' },
      { text: '2006-10' },
      { text: '2006-11' },
      { text: '2006-12' },
      { text: '2006-13' },
      { text: '2006-14' },
      { text: '2006-15' },
    ],          
  }),     
} 

</script>

<style src="./EditPopup.scss" lang="scss"/>
