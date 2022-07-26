<template>
  <v-app-bar
    class="main-header"
    height="64"
    elevation="0"
    fixed
    >
    <v-row class="d-flex align-between justify-space-between">
      <v-col class="logo">
        <router-link to="/Login">
          <v-img src="@/assets/img/logo.png" height="32" contain></v-img>
        </router-link>
      </v-col>

      <v-col class="create d-flex align-center justify-end">
        <span class="pr-4 font-weight-regul">New to A-RRANGER?</span>
  
        <router-link
          to="/CreateAccount"
          class="create-account px-4"
        >
          Create an Account
        </router-link>
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
