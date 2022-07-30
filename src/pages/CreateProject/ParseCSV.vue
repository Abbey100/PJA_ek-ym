<template>
  <v-container fluid>
    <div class="create-project parse-data">
        <v-row class="d-flex justify-start">
            <v-col class="import-file-talbe">
                <v-data-table
                    :headers="headers"
                    :items="desserts"
                    :items-per-page="5"
                    hide-default-footer
                    class="elevation-0"
                ></v-data-table>            
            </v-col>
            <v-col class="parse">
            </v-col>
        </v-row>
    </div>

  </v-container>
</template>



<script>
    export default {
        name: 'ParseCSV',

    data () {
      return {
        headers: [
          {
            text: 'All',
            align: 'start',
            sortable: false,
            value: 'th01',
          },
          { text: '도서관 구분', value: 'th02' },
          { text: '도서관 코드', value: 'th03' },
          { text: '면적', value: 'th04' },
          { text: '시구군', value: 'th05' },
          { text: '장서수', value: 'th06' },
          { text: '방문자수', value: 'th07' },
          { text: '대출지수', value: 'th08' },
        ],
        desserts: [
          {
            th01: 'Frozen Yogurt',
            th02: 159,
            th03: 6.0,
            th04: 24,
            th05: 4.0,
            th06: '1%',
            th07: '1%',
            th08: '1%',
          },
        
        ],
      }
    },        
    }

</script>

<style src="./CreateProject.scss" lang="scss"/>
