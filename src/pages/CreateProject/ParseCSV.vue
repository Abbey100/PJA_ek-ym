<template>
  <v-container fluid>
    <div class="create-project parse-data">
        <v-row class="d-flex justify-start column-flex">
            <v-col class="import-file-table">
                <v-data-table
                    :headers="headers"
                    :items="desserts"
                    :items-per-page="8"
                    hide-default-footer
                    disable-sort
                    class="elevation-0 base-table"
                ></v-data-table>            
            </v-col>

            <!-- Sprint 2에 수정 됨 
                사이드 패널 공통 클래스 수정, 컴포넌트 화 
                체크박스 컴포넌트화 및 반영 -->
            <SpParseCSV />
        </v-row>
    </div>

  </v-container>
</template>



<script>
  import SpParseCSV from './SidePanel/SpParseCSV'
  export default {
    name: 'ParseCSV',
    components: {SpParseCSV},
    data () {
      return {
        checked:false,
        headers: [
          {
            text: '',
            align: 'start',
            sortable: false,
            value: 'th00',
          },
          { text: 'All', value: 'th01' },
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
            th00: '1',
            th01: '2014',
            th02: 'LIVTYPE002',
            th03: 526  ,
            th04: '20,104',
            th05: '서울 성북구',
            th06: 3900,
            th07: 3915,
            th08: 9360,
          },
          {
            th00: '2',
            th01: '2014',
            th02: 'LIVTYPE002',
            th03: 526  ,
            th04: '20,104',
            th05: '서울 성북구',
            th06: 3900,
            th07: 3915,
            th08: 9360,
          },
          {
            th00: '3',
            th01: '2014',
            th02: 'LIVTYPE002',
            th03: 526  ,
            th04: '20,104',
            th05: '서울 성북구',
            th06: 3900,
            th07: 3915,
            th08: 9360,
          },
          {
            th00: '4',
            th01: '2014',
            th02: 'LIVTYPE002',
            th03: 526  ,
            th04: '20,104',
            th05: '서울 성북구',
            th06: 3900,
            th07: 3915,
            th08: 9360,
          },
          {
            th00: '5',
            th01: '2014',
            th02: 'LIVTYPE002',
            th03: 526  ,
            th04: '20,104',
            th05: '서울 성북구',
            th06: 3900,
            th07: 3915,
            th08: 9360,
          },
          {
            th00: '6',
            th01: '2014',
            th02: 'LIVTYPE002',
            th03: 526  ,
            th04: '20,104',
            th05: '서울 성북구',
            th06: 3900,
            th07: 3915,
            th08: 9360,
          },
          {
            th00: '7',
            th01: '2014',
            th02: 'LIVTYPE002',
            th03: 526  ,
            th04: '20,104',
            th05: '서울 성북구',
            th06: 3900,
            th07: 3915,
            th08: 9360,
          },
          {
            th00: '8',
            th01: '2014',
            th02: 'LIVTYPE002',
            th03: 526  ,
            th04: '20,104',
            th05: '서울 성북구',
            th06: 3900,
            th07: 3915,
            th08: 9360,
          },
 
        ],
      }
    },        
  } 

</script>

<style src="./CreateProject.scss" lang="scss"/>
