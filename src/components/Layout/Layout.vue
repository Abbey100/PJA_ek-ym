<template>
    <v-app class="pa-6">
        <Header />
        <GNB />
        <v-main class="content">
            <router-view />
<!--            <Footer />-->
        </v-main>
    </v-app>
</template>

<script>
    import Header from '@/components/Header/Header';
    import GNB from '@/components/GNB/GNB';

    // import Sidebar from '@/components/Sidebar/Sidebar';
    // import Footer from "@/components/Footer/Footer";

    export default {
        name: 'Layout',
        // components: {Footer, Header, Sidebar },
        components: {Header, GNB },
    };
</script>

<style src="./Layout.scss" lang="scss" />
