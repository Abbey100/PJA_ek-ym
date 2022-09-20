<template>
  <div class="pagination d-flex justify-start">
    <div class="button-group d-flex align-center mr-4">
      <button  type="button" class="top-paginaation mr-1" elevation="0"  >
        <v-icon>$i16_pgStart</v-icon>
      </button>
      <button  type="button" class="top-paginaation mr-1" elevation="0"  >
        <v-icon>$i16_pgPre</v-icon>
      </button>
      <button  type="button" class="top-paginaation mr-1" elevation="0"  >
        <v-icon>$i16_pgNext</v-icon>
      </button>
      <button  type="button" class="top-paginaation" elevation="0"  >
        <v-icon>$i16_pgEnd</v-icon>
      </button>
    </div>
      <div class="page-input d-flex justify-start align-center">
        <v-text-field
          class="page-input"
          height="24"
          value="2"
          single-line
          hide-details
          outlined
        ></v-text-field>
        <span class="ml-2">/12Page</span>
      </div>
  </div>
</template>



<script>

  export default {
    name: 'Pagination',

  };
</script>

<style src="../Header.scss" lang="scss"></style>
