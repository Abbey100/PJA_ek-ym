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

            <!-- hover 시 eidt-view 스타일 변경 및 tooltip 보여짐 -->
            <div class="edit-view d-flex align-center">
                grel:isError(Value)
                <tooltip 
                    class="dir-top align-center"
                    :tooltipText="tooltipText"
                />  
            </div>
              
            <FacetTextCtrl />
            <FacetTextList2 />
        </div>
    </template>
</gadget>
</template>


<script>
    import GdgBtnChange from '../SideGadget/GdgBtnChange'
    import FacetTextCtrl from '../SideGadget/FacetTextCtrl'
    import FacetTextList2 from '../SideGadget/FacetTextList2'

    export default {
        name: 'SideText2',
        components : {GdgBtnChange, FacetTextCtrl, FacetTextList2},

        data () {
        return {
            tooltipText: "Click to edit expression",
        }
        }

    }

</script>

<style src="../SideGadget/SideGadget.scss" lang="scss"/>