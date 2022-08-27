<template>
<!-- 
    invert-mode : invert 활성화 시 추가 
-->
<gadget class="pb-0 invert-mode">
    <template slot="gadgetTitle">
        <span>시구군명<a class="count">211개</a> </span>
    </template>
    <template slot="gadgetContCtrl">
        <div class="gadget-cont-ctrl d-flex align-center"> 
            <GdgBtnChange class="mr-2" /> 
            <!-- invert-active : invert 활성화 시 추가  -->
            <v-btn
                    class="text-capitalize invert-active btn-md px-0 mr-2"
                    height="19"
                    elevation="0"
                    text
                    :ripple="false" 
                >
                    <!-- <v-img src="@/assets/icon 16/ico__invert.svg"  /> -->
                    <!-- 활성화 시 이미지 변경 됨 -->
                    <v-img src="@/assets/icon--16/ico__Invert--wh.svg"  />
                    Invert
                </v-btn> 
            <GdgBtnReset /> 
        </div>
    </template>
    
    <template slot="gadgetBody">
        <div class="gadget-body facet-text">
            <FacetTextToggle />
            
            <ul class="facet-text-list pl-0">
                <li class="facet-text-item d-flex justify-space-between align-center" >
                    <div class="text-wrap">
                        <span class="facet-title">{{itemTitle}}</span>
                        <span class="facet-num">{{itemCount}}</span>
                    </div>
                    <div class="item-ctrl d-flex" >
                        <span class="item-edit dl-r pd-r">
                            <a href="">edit</a>
                        </span>
                        <span class="item-include dl-r pd-l pd-r">
                            <a href="">include</a>
                        </span>
                    </div>
                </li>
            </ul>
        </div>

     <div class="layer-pop cell-edit d-block">
<span class="dir-arrow"></span>
        <v-textarea
            outlined
            hide-details
            name="input-7-4"
            value="LIVTYPE002"
            class="pt-0"
        ></v-textarea>
        
        <div class="layer-bottom d-flex justify-end aling-center mt-5">

            <div class="button-group">
            <v-btn
                class="text-capitalize btn-md point-deep mr-2"
                height="32"
                elevation="0"
                :ripple="false"
                outlined
            >취소</v-btn>  

            <v-btn
                class="text-capitalize btn-md point-deep"
                height="32"
                elevation="0"
                :ripple="false"
            >적용</v-btn>                                  
            </div>
        </div>
    </div>
    </template>
</gadget>
</template>


<script>
    import GdgBtnChange from '../SideGadget/GdgBtnChange'
    import GdgBtnReset from '../SideGadget/GdgBtnReset'
    import FacetTextToggle from '../SideGadget/FacetTextToggle'

    export default {
        name: '03Text3Invert',
        components : 
        {
            GdgBtnChange, 
            GdgBtnReset, 
            FacetTextToggle, 
        },

        data () {
            return {
                itemTitle : '가평군', 
                itemCount : '4', 
                
            }
        }           
    }

</script>

<style src="../SideGadget/SideGadget.scss" lang="scss"/>