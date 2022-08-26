<template>

<gadget class="pb-0">
    <template slot="gadgetTitle">
        <span>시구군명<a class="count">211개</a> </span>
    </template>
    <template slot="gadgetContCtrl">
        <div class="gadget-cont-ctrl d-flex align-center"> 
            <GdgBtnChange class="mr-2" /> 
            <GdgBtnInvert class="mr-2" /> 
            <GdgBtnReset /> 
        </div>
    </template>
    
    <template slot="gadgetBody">
        <div class="gadget-body facet-text">
            <FacetTextCtrl />
            <FacetTextListExclude />
        </div>
    </template>
</gadget>
</template>


<script>
    import GdgBtnChange from '../SideGadget/GdgBtnChange'
    import GdgBtnInvert from '../SideGadget/GdgBtnInvert'
    import GdgBtnReset from '../SideGadget/GdgBtnReset'
    import FacetTextCtrl from '../SideGadget/FacetTextCtrl'
    import FacetTextListExclude from '../SideGadget/FacetTextListExclude'

    export default {
        name: 'SideText3',
        components : 
        {
            GdgBtnChange, 
            GdgBtnInvert, 
            GdgBtnReset, 
            FacetTextCtrl, 
            FacetTextListExclude
        },
    }

</script>

<style src="../SideGadget/SideGadget.scss" lang="scss"/>