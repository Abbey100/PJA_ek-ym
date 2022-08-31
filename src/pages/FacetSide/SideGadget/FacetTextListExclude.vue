<template>
    <ul class="facet-text-list pl-0">
        <!-- 항목 include 시 : include-active -->
        <li class="facet-text-item d-flex justify-space-between align-center include-active" >
            <div class="text-wrap">
                <span class="facet-title">{{itemTitle}}</span>
                <span class="facet-num">{{itemCount}}</span>
            </div>
            <div class="item-ctrl d-flex" >
                <span class="item-edit dl-r pd-r6">
                    <a href="">edit</a>
                </span>
                <!-- span class="item-include dl-r pd-l6 pd-r6">
                    <a href="">include</a>
                </!-->
                <span class="item-exclude pd-l6">
                    <a href="">exclude</a>
                </span>
            </div>
        </li>
    </ul>
</template>


<script>
    export default {
    name: 'FacetTextListExclude',
        data () {
            return {
                itemTitle : '가평군', 
                itemCount : '4', 
                
            }
        }     
} 

</script>

<style src="./SideGadget.scss" lang="scss"/>