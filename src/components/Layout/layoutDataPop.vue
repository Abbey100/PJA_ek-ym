<template>
    <v-app class="pa-6">
        <headerDataBase />
        <GNB />
        <v-main class="content">
            <router-view />
<!--            <Footer />-->
        </v-main>
    </v-app>
</template>

<script>
    import headerDataBase from '@/components/Header/headerDataBase';
    import GNB from '@/components/GNB/GNB';

    // import Sidebar from '@/components/Sidebar/Sidebar';
    // import Footer from "@/components/Footer/Footer";

    export default {
        name: 'layoutDataPop',
        // components: {Footer, Header, Sidebar },
        components: {headerDataBase, GNB },
    };
</script>

<style src="./Layout.scss" lang="scss" />
