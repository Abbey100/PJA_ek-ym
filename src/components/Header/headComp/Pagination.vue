<template>
  <div class="pagination d-flex justify-start">
    <div class="button-group d-flex align-center mr-4">
      <button  type="button" class="top-pagination  mr-1" elevation="0"  >
        <v-img src="@/assets/icon--16/ico__page--start.svg" max-width="16" />
      </button>
      <button  type="button" class="top-pagination  mr-1" elevation="0"  >
      <v-img src="@/assets/icon--16/ico__page--start.svg" max-width="16" />
      </button>
      <button  type="button" class="top-pagination mr-1" elevation="0"  >
        <v-img src="@/assets/icon--16/ico__page--next.svg" max-width="16" />
      </button>
      <button  type="button" class="top-pagination" elevation="0"  >
        <v-img src="@/assets/icon--16/ico__page--end.svg" max-width="16" />
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
