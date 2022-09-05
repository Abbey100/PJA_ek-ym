<template>
  <v-data-table
    :headers="headers"
    :items="desserts"
    :items-per-page="2"
    hide-default-footer
    disable-sort
    class="elevation-0 base-table scrollbody preview"
  ></v-data-table>    
</template>



<script>

export default {
  name: 'TabPreview',
  data : () => ({
    headers: [
      {
        text: 'row',
        align: 'start',
        sortable: false,
        value: 'th00',
      },
      { text: 'value', value: 'th01' },
      { text: 'toNumber(value)', value: 'th02' },
    ],    
    desserts: [
      {
        th00: '1',
        th01: '1',
        th02: '11',
      },
      {
        th00: '2',
        th01: '2',
        th02: '12',
      },
    ],          
}),    
} 

</script>

<style src="../EditPopup.scss" lang="scss"/>
