<template>
    <v-col class="side-panel">
        <slot name="panelContent"></slot>
    </v-col>
</template>

<script>
    export default {
        name: 'sidePanel',
    };
</script>

<style src="./SidePanel.scss" lang="scss" />