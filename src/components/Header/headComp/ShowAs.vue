<template>
  <div class="show-as d-flex">
    <div class="show-control d-flex justify-start flex-colmn align-center">
      <span class="dl-r mr-2 ml-4">Show as</span>

      <!-- selectbox :: Select - Rows & Records -->
      <div class="select-control plain" style="width: 106px">
        <!-- select -->
        <div class="select">
          <div class="select-item">         
            <!-- Sprint_3 Hotfix : v-icon으로 변경 -->           
            <v-icon class="mr-1">$i16_row</v-icon>
            Rows
          </div>
          <span class="select-caret">
            <!-- Sprint_3 Hotfix : v-icon으로 변경 -->
            <v-icon>$i16_Dwn</v-icon>
          </span>
        </div>

        <!-- Dropdown -->
        <v-card class="dropdown  d-block" style="width: 106px;">
          <ul class="dropdown-menu">
            <!-- dropdown hover & select : select -->
            <li class="dropdown-item d-flex column-flex align-center active">
              <!-- 아이템 select & hover 시 아이콘 변경 됨-->
              <!-- Sprint_3 Hotfix : v-icon으로 변경 -->
              <v-icon class="mr-1">$i16_rowWh</v-icon>
              <span>Rows</span>
            </li>
            <li class="dropdown-item d-flex column-flex align-center">
              <!-- Sprint_3 Hotfix : v-icon으로 변경 -->
              <v-icon class="mr-1">$i16_record</v-icon>
              <span>Records</span>
            </li>
          </ul>
        </v-card>              
      </div>

      <!-- selectbox :: View number -->
      <div class="select-control plain" style="width: 74px;">
        <!-- select -->
        <div class="select">
          <div class="select-item">                
            1000
          </div>
          <span class="select-caret">
            <!-- Sprint_3 Hotfix : v-icon으로 변경 -->
            <v-icon>$i16_Dwn</v-icon>
          </span>
        </div>

        <!-- Dropdown :: visible - d-block -->
        <v-card class="dropdown" style="width: 74px;">
          <ul class="dropdown-menu">

            <!-- dropdown hover & select : select -->
            <li class="dropdown-item d-flex column-flex align-center active">
              <span>1000</span>
            </li>
            <li class="dropdown-item d-flex column-flex align-center">
              <span>500</span>
            </li>
            <li class="dropdown-item d-flex column-flex align-center">
              <span>100</span>
            </li>
            <li class="dropdown-item d-flex column-flex align-center select">
              <span>50</span>
            </li>
            <li class="dropdown-item d-flex column-flex align-center">
              <span>25</span>
            </li>
          </ul>
        </v-card>
      </div>
    </div>

    <div class="show-control d-flex justify-start flex-colmn align-center ml-4">
      <!-- selectbox :: View percent -->
      <div class="select-control plain">
        <!-- select -->
        <div class="select">
          <div class="select-item">                
            100%
          </div>
          <span class="select-caret">
            <!-- Sprint_3 Hotfix : v-icon으로 변경 -->
            <v-icon>$i16_Dwn</v-icon>
          </span>
        </div>

        <!-- Dropdown :: visible - d-block -->
        <v-card class="dropdown d-block" style="width: 112px;">
          <ul class="dropdown-menu">

            <!-- dropdown hover & select : select -->
            <li class="dropdown-item d-flex column-flex align-center active">
              <span>100%</span>
            </li>
            <li class="dropdown-item d-flex column-flex align-center">
              <span>125%</span>
            </li>
            <li class="dropdown-item d-flex column-flex align-center">
              <span>150%</span>
            </li>
            <li class="dropdown-item d-flex column-flex align-center">
              <span>200%</span>
            </li>
          </ul>
        </v-card>
      </div>          
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ShowAs',
  };
</script>

<style src="../Header.scss" lang="scss"></style>
