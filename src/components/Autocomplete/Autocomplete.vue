<template>
    <v-autocomplete
        v-model="values"
        :items="tags"
        chips
        small-chips
        multiple
        hide-details
        outlined
        class="pt-0"
        hide-spin-buttons
        clearable
        clear-icon="$i16_cancel"
        append-icon="$i16_SaveSm"
    >
        <template v-slot:item="data">
            <div class="auto-cmplt-list d-flex">
                <checkbox />
                <v-list-item-content   v-text="data.item"></v-list-item-content>
            </div>
        </template>
    </v-autocomplete> 
</template>

<script>


  export default {
    name: 'Autocomplete',
    components: {},
    data: () => ({
      checkbox1: true,
      checkbox2: false,
      checkbox3: false,
      titleText : "Project metadata",  
      tags: ['서울시 도서관', '서울시', '도서관', 'lib'],
      values: ['서울시 도서관', '서울시'],
      value: null,
    }),   
    methods: {
    },
  } 


</script>


<style src="./Autocomplete.scss" lang="scss"/>
