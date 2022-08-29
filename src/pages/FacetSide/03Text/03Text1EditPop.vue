<template>
<gadget class="pb-0">
    <template slot="gadgetTitle">
        <span>시구군명<a class="count">211개</a> </span>
    </template>
    <template slot="gadgetContCtrl">
        <div class="gadget-cont-ctrl d-flex align-center"> <GdgBtnChange /> </div>
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

                        <!-- Sprint3 : style은 팝업 상태를 보여 주기 위한 임시 코드 -->
                        <span class="item-edit dl-r pd-r" style="display:block">
                            <a href="">edit</a>
                        </span>
                        <span class="item-include dl-r pd-l pd-r" style="display:block">>
                            <a href="">include</a>
                        </span>
                    </div>
                </li>
                <li class="facet-text-item d-flex justify-space-between align-center" >
                    <div class="text-wrap">
                        <span class="facet-title">{{itemTitle}}</span>
                        <span class="facet-num">{{itemCount}}</span>
                    </div>
                    <div class="item-ctrl d-flex" >
                        <span class="item-edit dl-r pd-r">
                            <a href="">edit</a>
                        </span>
                        <span class="item-include pd-l pd-r">
                            <a href="">include</a>
                        </span>
                    </div>
                </li>
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
    import FacetTextToggle from '../SideGadget/FacetTextToggle'

    export default {
        name: 'SideText1EditPop',
        components : {GdgBtnChange, FacetTextToggle,},
        data () {
            return {
                itemTitle : '가평군', 
                itemCount : '4', 
                
            }
        }
    }

</script>

<style src="../SideGadget/SideGadget.scss" lang="scss"/>