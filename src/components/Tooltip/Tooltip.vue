<template>
    <div class="tooltip">
        <div class="tooltip-wrap">
            <span class="tooltip-arr"></span>
            <span class="tooltip-text d-flex column-flex align-center">
                {{tooltipText}}
            </span>
        </div>
    </div> 
</template>

<script>

  export default {
    name: 'ApplyOpHistory',
    props : {
        tooltipText : {
            type : String,
            default : "",
            required : true,
        },
    }       
} 

</script>

<style src="./Tooltip.scss" lang="scss"/>
