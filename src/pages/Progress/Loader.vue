<template>
  <v-container fluid>

    <CircularProgress />
    <v-overlay 
        :value="overlay"
        color="#fff"
        opacity="0.65"
    >
    </v-overlay>

    <div class="create-project">
        <div class="wrap">

      
        </div>
    </div>
  </v-container>
</template>

<script>

  import CircularProgress from '@/components/Progress/Circular';

    export default {
        name: 'LoaderProgress',
        components :{CircularProgress,},
    }

</script>

<style src="../CreateProject/CreateProject.scss" lang="scss"/>
