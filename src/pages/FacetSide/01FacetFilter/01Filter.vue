<template>
<gadget>
    <template slot="gadgetTitle">도서관구분</template>
    <template slot="gadgetBody">
        <div class="gadget-body py-2">
            <v-row>
                <v-text-field
                    class="filter-input pt-0"
                    height="48"
                    placeholder="Filter"
                    value="LIVITYPE002"
                    single-line
                    hide-details
                    outlined
                >
                </v-text-field>
            </v-row>
            <v-row class="d-flex checked-inline mt-2">
                <checkbox >
                    <template slot="checkedContent">
                    <span class="pl-2">case seneitive</span>
                    </template>                    
                </checkbox>
                <checkbox class="ml-10 ">
                    <template slot="checkedContent">
                    <span class="pl-2">regular ezpression</span>
                    </template>                    
                </checkbox>
            </v-row>                         
        </div>
    </template>
</gadget>
</template>


<script>
    export default {
    name: 'SideFilter',
  } 

</script>