<template>
  <v-container fluid>
     <v-overlay 
      :value="overlay"
      opacity="0.4"
      >
    </v-overlay>    

    <!-- dialog 의 inline style은 dialog의 위치를 위한 임시 코드  -->
    <div class="dialog" style="position: absolute; left:50%; top: 20%; margin-left: -400px;  z-index:6">
        <v-card
          elevation="3"
        >
          <div class="sel-enc">
            <div class="dialog-title ">
              <div class="d-flex column-flex align-center justify-space-between">
                <b>Select Encoding</b>
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

              <div class="dialog-content">
                <v-tabs grow class="dialog-tab">
                  <v-tabs-slider></v-tabs-slider>
                  <v-tab :href="`#common-encodings`">
                      Common Encodings
                  </v-tab>
                  <v-tab :href="`#all-encodings`">
                      All Encodings
                  </v-tab>

                  <v-tab-item :value="'common-encodings'" >
                    <v-data-table
                      :headers="headers"
                      :items="desserts"
                      :items-per-page="8" 
                      hide-default-footer
                      disable-sort
                      dense 
                      class="elevation-0 base-table enc-table"
                    ></v-data-table>                        
                  </v-tab-item>
                  <v-tab-item :value="'all-encodings'" >
                    <v-data-table
                      :headers="headers"
                      :items="desserts"
                      :items-per-page="8"
                      hide-default-footer
                      disable-sort    
                      class="elevation-0 base-table enc-table"
                    ></v-data-table>                             
                  </v-tab-item>
                </v-tabs>
              </div>
          </div>
        </v-card>
    </div>


  </v-container>
</template>



<script>

  export default {
    name: 'SelectEnc',
    data () {
      return {
        checked:false,
        headers: [
          {
            text: 'Encoding',
            align: 'start',
            sortable: false,
            value: 'th00',
          },
          { text: 'Aliases', value: 'th01' },

        ],
        desserts: [
          {
            th00: 'ISO-8859-1',
            th01: '819, ISO8859-1, l1, ISO_8859-1:1987, ISO_8859-1, 8859_1, iso-ir-100, latin1, cp819, ISO8859_1, IBM819, ISO_8859_1, IBM-819, csISOLatin1',
  
          },
          {
            th00: 'US-ASCII',
            th01: 'NSI_X3.4-1968, cp367, csASCII, iso-ir-6, ASCII, iso_646.irv:1983, ANSI_X3.4-1986, ascii7, default, ISO_646.irv:1991, ISO646-US, IBM367, 646, us',
     
          },
          {
            th00: 'UTF-16',
            th01: 'UTF_16, unicode, utf16, UnicodeBig',
   
          },
          {
            th00: 'UTF-8',
            th01: 'unicode-1-1-utf-8, UTF8',
     
          },
          {
            th00: 'windows-1252',
            th01: '	ibm-1252, cp1252, ibm1252, cp5348',

          },
         
 
        ],        
      }
    },        
  } 

</script>

<style src="./CreateProject.scss" lang="scss"/>
