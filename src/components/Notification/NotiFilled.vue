<template>
    <v-alert
        elevation="3"
        class="notification d-flex"
        >
        <slot name="alertText"></slot>

        <a class="noti-undo">Undo</a>
    </v-alert>    
</template>


<script>
    export default {
        name: 'NotiFilled',
    };
</script>

<style src="./Notification.scss" lang="scss" />