<template>
    <div class="circular-progress d-flex column-flex align-center justify-center">
        <v-progress-circular 
            :value="60"
            :size="80"
            :width="6"
            color="#5551FF"
            background-color="#EBEEF1"

        >
        </v-progress-circular>
    </div>
</template>

<script>

    export default {
        name: 'CircularProgress',
    }

</script>


<style src="./Circular.scss" lang="scss"/>
