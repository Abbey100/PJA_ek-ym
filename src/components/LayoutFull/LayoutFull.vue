<template>
    <v-app class="pa-6">
        <Header />
        <v-main class="content">
            <router-view />
        </v-main>
    </v-app>
</template>

<script>
    import Header from '@/components/Header/Header';
    import './LayoutFull.scss';

    export default {
        name: 'LayoutFull',
        components: {Header},
    };
</script>

<style src="./LayoutFull.scss" lang="scss" />
