<template>
<gadget>
    <template slot="gadgetTitle"><span class="ls-sm">Unicode characters by c...</span></template>
    <template slot="gadgetContCtrl">
        <div class="gadget-cont-ctrl d-flex align-center">
            <GdgBtnChange />
            <GdgBtnReset />
        </div>
    </template>
    
    <template slot="gadgetBody">
        <div class="gadget-body facet-graph py-2">
            <v-row class="graph-area">
                    <!-- 라이브러리 삽입 시 아래 graph-wrap은 삭제 해 주세요 -->
                <div class="graph-wrap">
                    <v-img src="@/assets/img/img__dummy-graph.png" />
                </div>
            </v-row>
            <v-row class="range d-flex justify-center">
                <b>60.00 - 90.00</b>
            </v-row>
        </div>
    </template>
</gadget>
</template>


<script>
    import GdgBtnChange from './GdgBtnChange'
    import GdgBtnReset from './GdgBtnReset'

    export default {
    name: 'SideTextLength',
    components : {GdgBtnChange, GdgBtnReset}
  } 

</script>

<style src="./SideGadget.scss" lang="scss"/>