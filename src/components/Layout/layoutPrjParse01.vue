<template>
    <v-app class="pa-6">
        <headerPrjParse01 />
        <GNB />
        <v-main class="content">
            <router-view />
<!--            <Footer />-->
        </v-main>
    </v-app>
</template>

<script>
    import headerPrjParse01 from '@/components/Header/headerPrjParse01';
    import GNB from '@/components/GNB/GNB';

    // import Sidebar from '@/components/Sidebar/Sidebar';
    // import Footer from "@/components/Footer/Footer";

    export default {
        name: 'layoutPrjParse01',
        // components: {Footer, Header, Sidebar },
        components: {headerPrjParse01, GNB },
    };
</script>

<style src="./Layout.scss" lang="scss" />
