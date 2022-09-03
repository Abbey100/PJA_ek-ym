<template>
  <v-tabs grow class="dialog-tab">
      <v-tabs-slider></v-tabs-slider>
      <v-tab :href="`#custom-text-preview`">Preview </v-tab>
      <v-tab :href="`#custom-text-history`">History</v-tab>
      <v-tab :href="`#custom-text-starred`">Starred</v-tab>
      <v-tab :href="`#custom-text-help`">Help</v-tab>

      <v-tab-item :value="'custom-text-preview'" >
        <TabPreview />         
      </v-tab-item>

      <v-tab-item :value="'custom-text-history'">
          <TabHistory />
      </v-tab-item>
      <v-tab-item :value="'custom-text-starred'">
          Starred
      </v-tab-item>
      <v-tab-item :value="'custom-text-help'">
          <div class="tab-descript">
            View the GREL reference in the OpenRefine User Manual for further details
          </div>
          <TabHelp />
      </v-tab-item>
  </v-tabs>
</template>

<script>
import TabPreview from './CustomTextTab/Preview'
import TabHistory from './CustomTextTab/History'
import TabHelp from './CustomTextTab/Help'

export default {
  name: 'customTab', 
  components: {TabPreview, TabHistory, TabHelp},
} 

</script>

<style src="../EditPopup.scss" lang="scss"/>
