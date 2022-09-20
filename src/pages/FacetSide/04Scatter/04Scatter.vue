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
                            <!-- normal : scatter-01 -->
                            <!-- Sprint_3 Hotfix : v-icon으로 변경 -->
                            <v-icon>$i16_Sctr01Wh</v-icon>                            
                        </v-btn> 
                        <v-btn
                            class="btn-ico facet-text-toggle mr-0 px-2"
                            height="24"
                            elevation="0"
                            :ripple="false" 
                        >
                            <!-- Sprint_3 Hotfix : v-icon으로 변경 -->
                            <v-icon>$i16_Sctr02</v-icon>                           
                        </v-btn> 
                        <v-btn
                            class="btn-ico facet-text-toggle mr-0 px-2"
                            height="24"
                            elevation="0"
                            :ripple="false" 
                        >
                            <!-- Sprint_3 Hotfix : v-icon으로 변경 -->
                            <v-icon>$i16_Sctr03</v-icon>                           
                        </v-btn> 
                    </div>
                    <div class="button-group">
                        <v-btn
                            class="btn-ico facet-text-toggle active mr-0 px-2"
                            height="24"
                            elevation="0"
                            :ripple="false" 
                        >
                            <!-- normal : scatter-01 -->
                            <!-- Sprint_3 Hotfix : v-icon으로 변경 -->
                            <v-icon>$i16_SctrDot01Wh</v-icon>                                
                        </v-btn> 
                        <v-btn
                            class="btn-ico facet-text-toggle mr-0 px-2"
                            height="24"
                            elevation="0"
                            :ripple="false" 
                        >
                            <!-- Sprint_3 Hotfix : v-icon으로 변경 -->
                            <v-icon>$i16_SctrDot02</v-icon>    
                        </v-btn> 
                        <v-btn
                            class="btn-ico facet-text-toggle mr-0 px-2"
                            height="24"
                            elevation="0"
                            :ripple="false" 
                        >
                            <!-- Sprint_3 Hotfix : v-icon으로 변경 -->
                            <v-icon>$i16_SctrDot03</v-icon> 
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
                        <!-- Sprint_3 Hotfix : v-icon으로 변경 -->
                        <v-icon>$i16_Exprt</v-icon>                     
                        Export
                    </v-btn> 

                    <v-btn
                        class="text-capitalize btn-md px-0 img-scatter"
                        height="16"
                        elevation="0"
                        text
                        :ripple="false" 
                    >
                        <!-- Sprint_3 Hotfix : v-icon으로 변경 -->
                        <v-icon>$i16_plot</v-icon>                      
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