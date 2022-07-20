<template>
    <v-app class="pa-6">
        <Header />
        <v-main class="content">
            <router-view />
<!--            <Footer />-->
        </v-main>
    </v-app>
</template>

<script>
    import Header from '@/components/Header/Header';
    import './Layout.scss';

    export default {
        name: 'LayoutFull',
        components: {Header,},
    };
</script>

<style src="./Layout.scss" lang="scss" />
