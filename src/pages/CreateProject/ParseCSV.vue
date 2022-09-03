<template>
  <v-container fluid>
    <div class="create-project parse-data">
        <v-row class="d-flex justify-start column-flex">
            <v-col class="import-file-table">

                <!-- scroll 위치 :  full-height  
                    full-height 사용시 : 높이 100% 로 스크롤이 바닥에 붙음
                    full-height 미사용시 : 스크롤이 테이블에 따라 붙어 있음
                  -->
                <v-data-table
                    :headers="headers"
                    :items="desserts"
                    :items-per-page="8"
                    hide-default-footer
                    disable-sort
                    class="elevation-0 base-table full-height"
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
          { text: 'All', value: 'th09' },
          { text: '도서관 구분', value: 'th10' },
          { text: '도서관 코드', value: 'th11' },
          { text: '면적', value: 'th12' },
          { text: '시구군', value: 'th13' },
          { text: '장서수', value: 'th14' },
          { text: '방문자수', value: 'th15' },
          { text: '대출지수', value: 'th16' },
          { text: 'All', value: 'th17' },
          { text: '도서관 구분', value: 'th18' },
          { text: '도서관 코드', value: 'th19' },
          { text: '면적', value: 'th20' },
          { text: '시구군', value: 'th21' },
          { text: '장서수', value: 'th22' },
          { text: '방문자수', value: 'th23' },
          { text: '대출지수', value: 'th24' },
          { text: '도서관 구분', value: 'th25' },
          { text: '도서관 코드', value: 'th26' },
          { text: '면적', value: 'th27' },
          { text: '시구군', value: 'th28' },
          { text: '장서수', value: 'th29' },
          { text: '방문자수', value: 'th30' },
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
            th09: '1',
            th10: '2014',
            th11: 'LIVTYPE002',
            th12: 526  ,
            th13: '20,104',
            th14: '서울 성북구',
            th15: 3900,
            th16: 3915,
            th17: 9360,
            th18: '1',
            th19: '2014',
            th20: 'LIVTYPE002',
            th21: 526  ,
            th22: '20,104',
            th23: '서울 성북구',
            th24: 3900,
            th25: 3915,
            th26: 9360,
            th27: '1',
            th28: '2014',
            th29: 'LIVTYPE002',
            th30: 526  ,

          },
      
        ],
      }
    },        
  } 

</script>

<style src="./CreateProject.scss" lang="scss"/>
