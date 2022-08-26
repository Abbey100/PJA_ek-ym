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
            <FacetTextCtrl />
            <FacetTextList />
        </div>
    </template>
</gadget>
</template>


<script>
    import GdgBtnChange from '../SideGadget/GdgBtnChange'
    import FacetTextCtrl from '../SideGadget/FacetTextCtrl'
    import FacetTextList from '../SideGadget/FacetTextList'

    export default {
        name: 'SideText1',
        components : {GdgBtnChange, FacetTextCtrl, FacetTextList},
    }

</script>

<style src="../SideGadget/SideGadget.scss" lang="scss"/>