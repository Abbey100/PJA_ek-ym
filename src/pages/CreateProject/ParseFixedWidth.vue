<template>
  <v-container fluid>
    <div class="create-project parse-data">
 
        <v-row class="d-flex justify-start column-flex">
            <v-col class="import-file-table">

              <!-- 상위에 divider 를 올리기 위해 테이블을 한번 감싸줌 -->
              <div class="fixed-width">
                <v-data-table
                    :headers="headers"
                    :items="desserts"
                    :items-per-page="8"
                    hide-default-footer
                    disable-sort
                    class="elevation-0 base-table fixed-width"
                >
                </v-data-table>
                <div class="divider" style="left: 564px">
                  <v-btn
                    class ="btn-ico" 
                    height="16"
                    width="16"
                    elevation="0"
                    :ripple="false"
                    icon
                    plain
                  >
                    <i class="ico ico__delete"></i>
                  </v-btn>      
                </div>
              </div>            
            </v-col>

            <!-- Sprint 2에 수정 됨 
                사이드 패널 공통 클래스 수정, 컴포넌트 화 
                체크박스 컴포넌트화 및 반영 -->
            <SpParseFixedW />
        </v-row>
    </div>

  </v-container>
</template>



<script>
  import SpParseFixedW from './SidePanel/SpParseFixedWidth'
  export default {
    name: 'ParseFixedWidth',
    components : {SpParseFixedW},
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
          { text: 'Column1', value: 'th01' },
          { text: 'Column2', value: 'th02' },
        
        ],
        desserts: [
          {
            th00: '1',
            th01: '축제명,개최장소,축제시작일자,축제종료일자,축제내용,주관기관,주최기관,후원기관,',
            th02: '전화번호,홈페이지주소,관련정보,소재지도로명주소,소재지지번주소,위도,경도,데이터기준일자,제공기관코드,제공기관명',
          },
          {
            th00: '2',
            th01: '전국청소년댄스페스티벌 꿈을 향한 무승부,의정부시청소년수련관,2022-09-17,2022-09-17,',
            th02: '퍼포먼스 댄스경연대회 및 축하공연 등,의정부시청소년수련관+기호일보,의정부시청소년재단,,031-828-9544,http://www.uiyouth.or.kr,홈페이지 참조,경기도 의정부시 의정로 27,경기도 의정부시 의정부동 352,37.73517724,127.0338894,2022-02-17,3820000,경기도 의정부시',
          },
          {
            th00: '3',
            th01: '의정부시 청소년 진로페스티벌,의정부시청소년수련관,2022-05-23,2022-05-27,"직업인, ',
            th02: '대학생 멘토 인터뷰 및 E-sports 대회 뷰티아카데미등",의정부시청소년수련관,의정부시청소년재단,,031-828-9558,http://www.youthexpo.or.kr,홈페이지 참조,경기도 의정부시 의정로 27,경기도 의정부시 의정부동 352,37.73517724,127.0338894,2022-02-17,3820000,경기도 의정부시',
          },
          {
            th00: '4',
            th01: '의정부 청소년 영화제,의정부시청소년수련관,2022-11-05,2022-11-05,청소년 영화 상영',
            th02: '및 시상식,의정부시청소년수련관,의정부시청소년재단,,031-828-9557,https://uyff.modoo.at,홈페이지 참조,경기도 의정부시 의정로 27,경기도 의정부시 의정부동 352,37.73517724,127.0338894,2022-02-17,3820000,경기도 의정부시',
          },
          {
            th00: '5',
            th01: '청소년 푸른별 콘서트,의정부시청소년수련관,2022-12-01,2022-12-01,청소년 동아리 ',
            th02: '공연 및 인기가수 축하공연,의정부시청소년재단+경인일보,의정부시,,031-828-9542,http://www.uiyouth.or.kr,홈페이지 참조,경기도 의정부시 의정로 27,경기도 의정부시 의정부동 352,37.73517724,127.0338894,2022-02-17,3820000,경기도 의정부시',
          },
          {
            th00: '6',
            th01: '청소년안전망 페스티발,의정부시청소년수련관,2022-05-21,2022-05-21,"기념식, ',
            th02: '문화공연, 부스운영, 체험 전시",의정부시청소년상담복지센터,의정부시청소년재단,,031-828-9563,http://www.uiyouth.or.kr,홈페이지 참조,경기도 의정부시 의정로 27,경기도 의정부시 의정부동 352,37.73517724,127.0338894,2022-02-17,3820000,경기도 의정부시',
          },
          {
            th00: '7',
            th01: '청소년 행복주간 지역마을축제(동부권역),부용천(새말역),2022-05-24,2022-05-24,',
            th02: '청소년 유관기관 부스 및 체험 프로그램 운영,새말청소년문화의집,의정부시청소년재단,,031-828-9583,http://www.uiyouth.or.kr,홈페이지 참조,경기도 의정부시 장곡로 551,경기도 의정부시 신곡동 815-1,37.7488377,127.0637621,2022-02-17,3820000,경기도 의정부시',
          },
          {
            th00: '8',
            th01: '청소년 행복주간 지역마을축제,의정부예총,2022-05-25,2022-05-25,"청소년 체험부스, ',
            th02: '청소년 공연",흥선청소년문화의집,흥선청소년문화의집,,031-828-9593,http://www.uiyouth.or.kr,홈페이지 참조,경기도 의정부시 의정로80번길 18,경기도 의정부시 의정부동 477-1,37.73969683,127.0358325,2022-02-17,3820000,경기도 의정부시',
          },
         
        ],
      }
    },        
  } 

</script>

<style src="./CreateProject.scss" lang="scss"/>
