<template>
    <ul class="facet-text-list pl-0">
        <li
            v-for="item in items" :key ="item"
            class="facet-text-item d-flex justify-space-between align-center" 
        >
            <div class="text-wrap">
                {{item.title}}
                <span class="facet-num">{{item.count}}</span>
            </div>
            <div class="item-ctrl d-flex" >
                <span class="item-edit dl-r pd-r6">
                    <a href="">edit</a>
                </span>
                <span class="item-include dl-r pd-l6">
                    <a href="">include</a>
                </span>
            </div>
        </li>
    </ul>
</template>


<script>
    export default {
    name: 'FacetTextList',
        data () {
            return {
                items: [
                    {
                        title : '가평군', 
                        count : '4', 
                    },
                    {
                        title : '강남구', 
                        count : '12', 
                    },
                    {
                        title : '강릉시', 
                        count : '1', 
                    },
                    {
                        title : '거제시', 
                        count : '2', 
                    },
                    {
                        title : '거창군', 
                        count : '0', 
                    },
                    {
                        title : '경산시', 
                        count : '9', 
                    },
                    {
                        title : '고령군', 
                        count : '7', 
                    },
                    {
                        title : '고령군', 
                        count : '7', 
                    },
                    {
                        title : '고령군', 
                        count : '7', 
                    },
                    {
                        title : '고령군', 
                        count : '7', 
                    },
                    {
                        title : '고령군', 
                        count : '7', 
                    },
                    {
                        title : '고령군', 
                        count : '7', 
                    },
                ],
            }
        }     
} 

</script>

<style src="./SideGadget.scss" lang="scss"/>