<template>
    <ul class="facet-text-list pl-0">
        <li class="facet-text-item d-flex justify-space-between align-center" >
            <div class="text-wrap">
                <span class="facet-title">{{itemTitle}}</span>
                <span class="facet-num">{{itemCount}}</span>
            </div>
            <div class="item-ctrl d-flex" >
                <span class="item-edit dl-r pd-r">
                    <a href="">edit</a>
                </span>
                <span class="item-include dl-r pd-l pd-r">
                    <a href="">include</a>
                </span>
                <span class="item-exclude pd-l">
                    <a href="">exclude</a>
                </span>
            </div>
        </li>
    </ul>
</template>


<script>
    export default {
    name: 'FacetTextInvert',
        data () {
            return {
                itemTitle : '가평군', 
                itemCount : '4', 
                
            }
        }     
} 

</script>

<style src="./SideGadget.scss" lang="scss"/>