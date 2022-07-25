<template>
    <div class="d-flex justify-center align-center mt-10 mb-8 footer">
        <!-- Terms of Service -->
        <router-link 
          to="/#"
          class="text-capitalize font-weight-regular px-2"
          >
          Terms of Service</router-link>

        <!-- Support -->
        <router-link 
          to="/#"
          class="text-capitalize font-weight-regular px-2"
          >
          Support</router-link>

        <!-- copyright -->
        <div class="copyright px-2">©2014-2020 Flatlogic, LLC. All rights reserved.</div>
    </div>
</template>

<script>

export default {
  name: 'Footer',

}
</script>

<style src="./Footer.scss" lang="scss"/>

