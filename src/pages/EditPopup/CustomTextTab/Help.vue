<template>
  <v-data-table
    :headers="headers"
    :items="desserts"
    :items-per-page="8"
    hide-default-footer
    disable-sort
    hide-default-header
    class="elevation-0 base-table scrollbody help"
  ></v-data-table>    
</template>



<script>

export default {
  name: 'TabHelp',
  data : () => ({
    headers: [
      {
        text: 'Variables',
        align: 'start',
        sortable: false,
        value: 'th00',
      },
      { text: '', value: 'th01' },
    ],    
    desserts: [
      {
        th00: 'cell',
        th01: 'The current cell. It ha s few fields : ‘value’,\n‘recon’ and ‘errorMessage’.'
      },
      {
        th00: 'value',
        th01: 'The current cell. It ha s few fields : ‘value’,\n‘recon’ and ‘errorMessage’.'
      },
      {
        th00: 'row',
        th01: 'The current cell. It ha s few fields : ‘value’,\n‘recon’ and ‘errorMessage’.'
      },
      {
        th00: 'row',
        th01: 'The current cell. It ha s few fields : ‘value’,\n‘recon’ and ‘errorMessage’.'
      },
      {
        th00: 'cell',
        th01: 'The current cell. It ha s few fields : ‘value’,\n‘recon’ and ‘errorMessage’.'
      },
      {
        th00: 'value',
        th01: 'The current cell. It ha s few fields : ‘value’,\n‘recon’ and ‘errorMessage’.'
      },
      {
        th00: 'row',
        th01: 'The current cell. It ha s few fields : ‘value’,\n‘recon’ and ‘errorMessage’.'
      },
      {
        th00: 'row',
        th01: 'The current cell. It ha s few fields : ‘value’,\n‘recon’ and ‘errorMessage’.'
      },

    ],          
  }),     
} 

</script>

<style src="../EditPopup.scss" lang="scss"/>
