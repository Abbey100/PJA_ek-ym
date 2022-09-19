<template>
<!-- body에 스크롤을 주기 위해  scrollbody 추가 -->
<div class="v-data-table elevation-0 base-table theme--light scrollbody history">
  <div class="v-data-table__wrapper">
    <table>
      <colgroup>
        <col class="">
        <col class="">
        <col class="">
        <col class="">
      </colgroup>
      <thead class="v-data-table-header">
        <tr>
          <th role="columnheader" scope="col" aria-label="row" class="text-start"><span></span></th>
          <th role="columnheader" scope="col" aria-label="row" class="text-start"><span></span></th>
          <th role="columnheader" scope="col" aria-label="value" class="text-start"><span>value</span></th>
          <th role="columnheader" scope="col" aria-label="toNumber(value)" class="text-start"><span>toNumber(value)</span></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="td in table" :key ="td">
          <td class="text-start">
            <div class="mark-wrap">
              <!-- Sprint_3 Hotfix : v-icon으로 변경 -->
              <!-- 보여주는 방식 변경 : if -> v-show -->
              <span class="mark" @click="markStar">
                <v-icon v-show="!isMarkStar">$i16_star</v-icon>
                <v-icon v-show="isMarkStar">$i16_starFilled</v-icon>
              </span>              
            </div>
          </td>
          <td class="text-start"> {{td.td00}}</td>
          <td class="text-start">{{td.td01}}</td>
          <td class="text-start">{{td.td02}}</td></tr>
      </tbody>
    </table>
  </div>
</div>
</template>



<script>

export default {
  name: 'TabHistory',
    data () {
      return {
        isMarkStar : false,
        checked:false,

        table: [
          {
            td00:'Reuse',
            td01:'This project',
            td02:'grel :isError(value)'
          },
          {
            td00:'Reuse',
            td01:'This project',
            td02:'clojue: value'
          },
          {
            td00:'Reuse',
            td01:'This project',
            td02:'grel :isError(value)'
          },
          {
            td00:'Reuse',
            td01:'This project',
            td02:'clojue: value'
          },
          {
            td00:'Reuse',
            td01:'This project',
            td02:'grel :isError(value)'
          },
          {
            td00:'Reuse',
            td01:'This project',
            td02:'grel :isError(value)'
          },
          {
            td00:'Reuse',
            td01:'This project',
            td02:'clojue: value'
          },
          {
            td00:'Reuse',
            td01:'This project',
            td02:'grel :isError(value)'
          },
          {
            td00:'Reuse',
            td01:'This project',
            td02:'clojue: value'
          },
          {
            td00:'Reuse',
            td01:'This project',
            td02:'grel :isError(value)'
          },
        ]
      }
    },  
    methods: {
      markStar: function() {
          this.isMarkStar = !this.isMarkStar;
      }
    }     
} 

</script>

<style src="../EditPopup.scss" lang="scss"/>
