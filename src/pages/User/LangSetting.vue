<template>
<!-- form list group -->
      <v-list>
        <v-container>
           <v-row  class="mb-4">
              <!-- label -->
              <v-col class="label d-flex align-center" cols="2" :class="this.height">
                <span>{{ this.label }}</span>
              </v-col>

              <!-- selector -->
              <v-col class="form d-flex align-center" cols="10">
                  <v-select
                      class="pt-0"
                      label="Type"
                      hide-details 
                   >
                      <template v-slot:append>
                          <i class="ico ico__select-caret"></i>
                      </template>

                      <template>
                          <v-list-item>
                              <v-list-item-title
                              ></v-list-item-title>
                          </v-list-item>
                      </template>
                  </v-select>
              </v-col>
          </v-row>
        </v-container>
      </v-list>
</template>
<script>
export default {
    data: () => ({
      id: 'language',
          name: 'language',
          label: '언어설정',
          height: 'single',
          type: 'selector'
    
    }),
  }
</script>
