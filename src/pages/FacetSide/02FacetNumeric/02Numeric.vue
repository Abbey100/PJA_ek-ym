<template>
<gadget>
    <template slot="gadgetTitle">장서수</template>
    <template slot="gadgetContCtrl">
        <div class="gadget-cont-ctrl d-flex align-center">
            <GdgBtnChange class="mr-2" />
            <GdgBtnReset />
        </div>
    </template>
    
    <template slot="gadgetBody">
        <div class="gadget-body facet-graph pt-2">
            <v-row class="graph-area">
                    <!-- Sprint 3 : 라이브러리 삽입 시 아래 graph-wrap은 삭제  -->
                <div class="graph-wrap">
                    <v-img src="@/assets/img/img__dummy-graph.png" />
                </div>
            </v-row>
            <v-row class="range d-flex justify-center"><b>6,000 - 10,900</b></v-row>
            <v-row class="d-flex checked-inline justify-space-between mt-4">
                <checkbox class="multi">
                    <template slot="checkedContent">
                        <div class="d-flex flex-column pl-2">
                            <span>Numeric</span>
                            <span class="facet-num mt-1">11</span>
                        </div>
                    </template>                    
                </checkbox>
                <checkbox class="multi">
                    <template slot="checkedContent">
                        <div class="d-flex flex-column pl-2">
                            <span>Non-Numeric</span>
                            <span class="facet-num mt-1">11</span>
                        </div>
                    </template>                    
                </checkbox>
                <checkbox class="multi">
                    <template slot="checkedContent">
                        <div class="d-flex flex-column pl-2">
                            <span>Blank</span>
                            <span class="facet-num mt-1">11</span>
                        </div>
                    </template>                    
                </checkbox>
                <checkbox class="multi">
                    <template slot="checkedContent">
                        <div class="d-flex flex-column pl-2">
                            <span>Error</span>
                            <span class="facet-num mt-1">11</span>
                        </div>
                    </template>                    
                </checkbox>
            </v-row>                         
        </div>
    </template>
</gadget>
</template>


<script>
    import GdgBtnChange from '../SideGadget/GdgBtnChange'
    import GdgBtnReset from '../SideGadget/GdgBtnReset'

    export default {
    name: 'SideNumeric',
    components : {GdgBtnChange, GdgBtnReset}
  } 

</script>

<style src="../SideGadget/SideGadget.scss" lang="scss"/>