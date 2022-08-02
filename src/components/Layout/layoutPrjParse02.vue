<template>
    <v-app class="pa-6">
        <headerPrjParse02 />
        <GNB />
        <v-main class="content">
            <router-view />
<!--            <Footer />-->
        </v-main>
    </v-app>
</template>

<script>
    import headerPrjParse02 from '@/components/Header/headerPrjParse02';
    import GNB from '@/components/GNB/GNB';

    // import Sidebar from '@/components/Sidebar/Sidebar';
    // import Footer from "@/components/Footer/Footer";

    export default {
        name: 'layoutPrjParse02',
        // components: {Footer, Header, Sidebar },
        components: {headerPrjParse02, GNB },
    };
</script>

<style src="./Layout.scss" lang="scss" />
