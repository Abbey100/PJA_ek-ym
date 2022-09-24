<template>
    <v-app class="pa-6">
        <Header2 />
        <GNB />
        <v-main class="content">
            <router-view />
<!--            <Footer />-->
        </v-main>
    </v-app>
</template>

<script>
    import Header2 from '@/components/Header/Header2';
    import GNB from '@/components/GNB/GNB';

    // import Sidebar from '@/components/Sidebar/Sidebar';
    // import Footer from "@/components/Footer/Footer";

    export default {
        name: 'Layout2',
        // components: {Footer, Header, Sidebar },
        components: {Header2, GNB },
    };
</script>

<style src="./Layout.scss" lang="scss" />
