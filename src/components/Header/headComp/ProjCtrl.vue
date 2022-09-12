<template>
  <div class="project-control d-flex">
          <v-btn
      class="text-capitalize font-weight-regular btn-open mr-4"
      height="32"
      elevation="0"
      :ripple="false"
      outlined
      primary
    >
          <v-icon>$i16_Open</v-icon>
      Open
    </v-btn>  

    <div class="select-control">
      <!-- select -->
      <div class="select pl-4 pr-2">
        <div class="select-item"> 
          <!-- v-icon으로 변경 -->  
          <v-icon>$i16_ExprtWh</v-icon>
           Export
        </div>
        <span class="select-caret">
          <v-icon>$i16_DwnWh</v-icon>
        </span>
      </div>

      <!-- Dropdown -->
      <v-card class="dropdown d-block"  style="min-width: 235px; left:-115px;" :class="{'d-block' : isIconHide}">
        <ul class="dropdown-menu" >
            <li
              v-for="item in items" :key ="item"
              class="dropdown-item d-flex column-flex align-center" 
              :class="{ 'd-section' : item.isSecStart, 
                        'ico-hide' : item.isIcoHide, 
                        'sub-menu' : item.isSubMenu }"
            >
              <v-icon>{{ '$' + 'PMenu' + item.iconName }}</v-icon>
              <span>{{item.text}}</span>
            </li>
        </ul>
      </v-card>
    </div> 
  </div>
</template>

<script>
  export default {
    name: 'ProjCtrl',
    isView : true,
    data() {
      return {
       drdn: [
        {
          isIcoHide : false, 
        },  
       ],      
       items: [
        {
          iconName : 'Logo', 
          isIcoHide : false, 
          text: 'Arrager project archive to file',
          isSecStart: false,
          isSubMenu : false,
        },

        {
          iconName : '', 
          isIcoHide : true, 
          text: 'Tab-separated value',
          isSecStart: true,
          isSubMenu : true,
        },
        {
          iconName : '', 
          isIcoHide : true, 
          text: 'Comma-separated value',
          isSecStart: true,
          isSubMenu : false,
        },
        {
          iconName : 'Html', 
          isIcoHide : false, 
          text: 'Html',
          isSecStart: false,
          isSubMenu : false,
        },
        {
          iconName : 'EditExcel', 
          isIcoHide : false, 
          text: 'Excel (.xls)',
          isSecStart: false,
          isSubMenu : false,
        },
        {
          iconName : 'EditExcel', 
          isIcoHide : false, 
          text: 'Excel 2007+ (.xls)',
          isSecStart: false,
          isSubMenu : false,
        },
        {
          iconName : 'Odf', 
          isIcoHide : false, 
          text: 'ODF Spreadsheet',
          isSecStart: false,
          isSubMenu : false,
        },

        {
          iconName : '', 
          isIcoHide : true, 
          text: 'Custom tabular exporter...',
          isSecStart: true,
          isSubMenu : false,
        },
        {
          iconName : 'Sql', 
          isIcoHide : false, 
          text: 'SQL Exporter',
          isSecStart: false,
          isSubMenu : false,
        },
        {
          iconName : 'Template', 
          isIcoHide : false, 
          text: 'Templating',
          isSecStart: false,
          isSubMenu : false,
        },
        {
          iconName : 'Googledrive', 
          isIcoHide : false, 
          text: 'Archive to Google Drive',
          isSecStart: true,
          isSubMenu : false,
        },
        {
          iconName : 'GoogleSheet', 
          isIcoHide : false, 
          text: 'Google Sheets',
          isSecStart: false,
          isSubMenu : false,
        },
        {
          iconName : '', 
          isIcoHide : true, 
          text: 'Wikibase edits...',
          isSecStart: true,
          isSubMenu : false,
        },
        {
          iconName : '', 
          isIcoHide : true, 
          text: 'Quick Statements file',
          isSecStart: false,
          isSubMenu : false,
        },
        {
          iconName : '', 
          isIcoHide : true, 
          text: 'Wikibase schema',
          isSecStart: false,
          isSubMenu : false,
        },

       ]
      }
    },

  };
</script>

<style src="../Header.scss" lang="scss"></style>
