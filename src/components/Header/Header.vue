<template>
  <v-app-bar
    class="main-header"
    height="65"
    elevation="0"
    fixed
    >
    <v-row class="d-flex align-between justify-space-between">
      <v-col class="logo">
          <v-img src="@/assets/img/logo.png" height="24" contain></v-img>
      </v-col>

      <v-col class="create d-flex align-center justify-end">
        <span class="pr-4 font-weight-regul">New to A-RRANGER?</span>
        <v-btn
          :ripple="false"
          primary
          outlined
          >
          Create an Account
        </v-btn>
      </v-col>
    </v-row>



    
  </v-app-bar>
</template>

<script>

  export default {
    name: 'Header',

    methods: {
      logOut: function () {
        window.localStorage.setItem('authenticated', false);
        this.$router.push('/login');
      }
    }
  };
</script>

<style src="./Header.scss" lang="scss"></style>
