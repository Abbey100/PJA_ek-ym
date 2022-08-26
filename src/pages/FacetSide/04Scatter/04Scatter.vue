<template>
<gadget>
    <template slot="gadgetTitle">Width (x) vs. Height (y)</template>
    <template slot="gadgetContCtrl">
        <div class="gadget-cont-ctrl d-flex align-center"> <GdgBtnReset /> </div>
    </template>
    
    <template slot="gadgetBody">
        <div class="gadget-body facet-scatter pt-2 d-flex">

            <!-- Scatter graph Area -->

            <div class="scatter-graph">
                <v-img src="@/assets/img/img__dummy-scatter.png" />
            </div>

            <div class="button-wrap ml-10">

                <div class="scatter-ctrl-btn">
                버튼 영역
                </div>

                <div class="data-ctrl-btn d-flex justify-center">
                    <v-btn
                        class="text-capitalize btn-md px-0 img-scatter"
                        height="16"
                        elevation="0"
                        text
                        :ripple="false" 
                    >
                        <v-img src="@/assets/icon--16/ico__export--grey.svg"  />
                        Export
                    </v-btn> 

                    <v-btn
                        class="text-capitalize btn-md px-0 img-scatter"
                        height="16"
                        elevation="0"
                        text
                        :ripple="false" 
                    >
                        <v-img src="@/assets/icon--16/ico__plot.svg"  />
                        Plot
                    </v-btn> 
                </div>
            </div>
        </div>
    </template>
</gadget>
</template>


<script>
    import GdgBtnReset from '../SideGadget/GdgBtnReset'

    export default {
        name: 'SideScatter',
        components : {GdgBtnReset},
    }

</script>

<style src="../SideGadget/SideGadget.scss" lang="scss"/>