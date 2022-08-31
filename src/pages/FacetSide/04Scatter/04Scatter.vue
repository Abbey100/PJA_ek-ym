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

            <div class="button-wrap ml-10 flex-column">
                <div class="scatter-ctrl-btn d-flex align-center flex-column mb-4">
                    <div class="button-group lin-log">
                        <v-btn
                            class="facet-text-toggle active mr-0"
                            height="24"
                            elevation="0"
                            :ripple="false" 
                        >
                             lin
                        </v-btn> 
                        <v-btn
                            class="facet-text-toggle mr-0"
                            height="24"
                            elevation="0"
                            :ripple="false" 
                        >
                            log
                        </v-btn> 
                    </div>
                    <div class="button-group">
                        <v-btn
                            class="btn-ico facet-text-toggle active mr-0 px-2"
                            height="24"
                            elevation="0"
                            :ripple="false" 
                        >
                            <!-- normal : ico__scatter-01 -->
                            <v-img src="@/assets/icon--16/ico__scatter-01--wh.svg" />
                        </v-btn> 
                        <v-btn
                            class="btn-ico facet-text-toggle mr-0 px-2"
                            height="24"
                            elevation="0"
                            :ripple="false" 
                        >
                            <v-img src="@/assets/icon--16/ico__scatter-02.svg" />
                        </v-btn> 
                        <v-btn
                            class="btn-ico facet-text-toggle mr-0 px-2"
                            height="24"
                            elevation="0"
                            :ripple="false" 
                        >
                            <v-img src="@/assets/icon--16/ico__scatter-03.svg" />
                        </v-btn> 
                    </div>
                    <div class="button-group">
                        <v-btn
                            class="btn-ico facet-text-toggle active mr-0 px-2"
                            height="24"
                            elevation="0"
                            :ripple="false" 
                        >
                            <!-- normal : ico__scatter-01 -->
                            <v-img src="@/assets/icon--16/ico__scatter-dot-01--wh.svg" />
                        </v-btn> 
                        <v-btn
                            class="btn-ico facet-text-toggle mr-0 px-2"
                            height="24"
                            elevation="0"
                            :ripple="false" 
                        >
                            <v-img src="@/assets/icon--16/ico__scatter-dot-02.svg" />
                        </v-btn> 
                        <v-btn
                            class="btn-ico facet-text-toggle mr-0 px-2"
                            height="24"
                            elevation="0"
                            :ripple="false" 
                        >
                            <v-img src="@/assets/icon--16/ico__scatter-dot-03.svg" />
                        </v-btn> 
                    </div>
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