<template>
    <v-footer 
      height="80"
      width="100%"
      class="d-flex justify-center align-start pt-4"
      >
        <!-- Terms of Service -->
        <v-btn
          :ripple="false"
          class="text-capitalize px-0 text-decoration-underline font-weight-regular px-2"
          text
          underline
        >
          Terms of Service
        </v-btn>

        <!-- Support -->
        <v-btn
          :ripple="false"
          class="text-capitalize px-0 text-decoration-underline font-weight-regular px-2"
          text
          underline
        >
          Support
        </v-btn>

        <!-- copyright -->
        <div class="copyright px-2">©2014-2020 Flatlogic, LLC. All rights reserved.</div>
    </v-footer>
</template>

<script>
import config from '../../config';

export default {
  name: 'Footer',

  data: () => ({
    config,
    icons: [
      {icon: 'mdi-facebook', link: 'https://twitter.com/flatlogic/'},
      {icon: 'mdi-twitter', link: 'https://www.facebook.com/flatlogic'},
      {icon: 'mdi-github', link: 'https://github.com/flatlogic/'},

    ],
    links: [
      {text: 'Flatlogic', link: 'https://flatlogic.com/'},
      {text: 'About Us', link: 'https://flatlogic.com/about'},
      {text: 'Blog', link: 'https://flatlogic.com/blog'},
    ]
  }),
}
</script>

<style src="./Footer.scss" lang="scss"/>

