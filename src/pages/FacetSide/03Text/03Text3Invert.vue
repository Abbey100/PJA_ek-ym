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
            <FacetTextCtrl />
            
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
    </template>
</gadget>
</template>


<script>
    import GdgBtnChange from '../SideGadget/GdgBtnChange'
    import GdgBtnReset from '../SideGadget/GdgBtnReset'
    import FacetTextCtrl from '../SideGadget/FacetTextCtrl'

    export default {
        name: '03Text3Invert',
        components : 
        {
            GdgBtnChange, 
            GdgBtnReset, 
            FacetTextCtrl, 
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