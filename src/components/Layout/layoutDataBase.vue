<template>
    <v-app class="pa-6">
        <headerDataEdit />
        <GNB />
        <v-main class="content">
            <router-view />
<!--            <Footer />-->
        </v-main>
    </v-app>
</template>

<script>
    import headerDataEdit from '@/components/Header/headerDataEdit';
    import GNB from '@/components/GNB/GNB';

    // import Sidebar from '@/components/Sidebar/Sidebar';
    // import Footer from "@/components/Footer/Footer";

    export default {
        name: 'layoutDataEdit',
        // components: {Footer, Header, Sidebar },
        components: {headerDataEdit, GNB },
    };
</script>

<style src="./Layout.scss" lang="scss" />
