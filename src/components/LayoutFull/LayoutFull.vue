<template>
    <v-app class="pa-6">
        <Header />
        <v-main class="content">
            <router-view />
            <Footer />
        </v-main>
    </v-app>
</template>

<script>
    import Header from '@/components/Header/Header';
    import Footer from '@/components/Footer/Footer';
    import './LayoutFull.scss';

    export default {
        name: 'LayoutFull',
        components: {Header, Footer},
    };
</script>

<style src="./LayoutFull.scss" lang="scss" />
