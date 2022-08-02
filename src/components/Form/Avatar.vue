<template>
    <v-col cols="10" class="form d-flex align-center">
        <v-list-item-avatar size="80" >
            <v-img :src="avatar"></v-img>
        </v-list-item-avatar>
    </v-col>
</template>
<script>
export default {
    props: {
        avatar: URL,
    },
}
</script>