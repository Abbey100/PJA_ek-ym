<template>
    <v-tabs grow class="panel-tab">
        <v-tabs-slider></v-tabs-slider>
        <v-tab :href="`#undo-redo`">
            Undo<span class="font-weight-regular ml-1">7</span> 
            <span class="font-weight-regular mx-1">/</span>
            Redo<span class="font-weight-regular ml-1">7</span> 
        </v-tab>

        <v-tab-item :value="'undo-redo'" class="undo-redo">
        <div class="tab-content">
            <div class="button-group">
            <v-btn
                class="text-capitalize btn-md m"
                height="32"
                elevation="0"
                outlined
                :ripple="false" 
            >추출</v-btn>  
            <v-btn
                class="text-capitalize btn-md"
                height="32"
                elevation="0"
                outlined
                :ripple="false"
            >적용</v-btn>  
            
            <!-- hover 시 : hover 는 보여주기 위한 임시 클래스 -->
            <div class="tooltip-view hover">
                <i class="ico ico__exclaimation"> </i>
                <!-- icon hover 시 tooltip 보여줌  -->
                <tooltip 
                    style=" top:-21px; right: 20px; width:180px"
                    class="dir-right"
                    :tooltipText="tooltipText"
                />                            
            </div>
            </div>
            
            <div class="filter-search">
            <v-text-field
                class="filter-input pt-0"
                height="48"
                placeholder="Filter"
                value="Mass"
                single-line
                hide-details
                outlined
            >
                <template v-slot:append>
                    <v-btn
                        class ="btn-ico" 
                        height="16"
                        width="16"
                        elevation="0"
                        :ripple="false"
                        icon
                        plain
                    >
                        <i class="ico ico__input-clear"></i>
                    </v-btn>  
                    <i class="ml-2 ico ico__search"></i>
                </template>                      
            </v-text-field>
            </div>
        
            <v-list>
            <v-list-item-group
                v-model="model"
            >
                <template v-for="(item, i) in items">
                <v-divider
                    v-if="!item"
                    :key="`divider-${i}`"
                ></v-divider>

                <v-list-item
                    v-else
                    :key="`item-${i}`"
                    :value="item"
                    :ripple="false"
                >
                    <!-- 
                    hover 스타일 반영 중. 
                    기능 상 필요 하다면 hover 스타일 클래스 [.list-item-hover] 사용 가능 
                    .v-list-item 과 형제 클래스  
                    -->
                    <v-list-item-content>
                    <v-list-item-title v-text="item"></v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                </template>
            </v-list-item-group>
            </v-list>

        </div>
        </v-tab-item>
    </v-tabs>

</template>


<script>
  export default {
    name: 'SidePanelFilter',

    data () {
      return {
        tooltipText: "변경내역을 복사하려면 ‘추출’, 이전복사한 이력을 적용하려면 ‘적용'을 선택하세요",
        checked:false,

        items: [
          '1. Mass edit 5 cells in colume 도서관코드',
          '',
          '2. Mass edit 5 cells in colume 도서관코드',
        ],
        model: 1,      
      }
    },  
    methods: {
      markStar: function() {
          this.isMarkStar = !this.isMarkStar;
      },
      markFlag: function() {
          this.isMarkFlag = !this.isMarkFlag;
      }
    }      
  } 

</script>
<style src="./SidePanel.scss" lang="scss"/>