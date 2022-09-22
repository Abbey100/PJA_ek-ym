<template>
    <v-row class="page-title">
        <h1 class="mb-6">{{ Title }}</h1>
        <div class="descript font-weight-regular">
            <p v-if="Mshow=true">{{ MainMessage }}</p>
            <span v-else-if="Sshow=true">{{ SubMessage }}</span>
        </div>
    </v-row>
</template>
<script>
export default {
    name: "FullPageTitle",
    props: { 
            Title: {
                type: String,
                default: '',
            },
            MainMessage: {
                type: String,
                default: '',
            },
            SubMessage: {
                type: String,
                default: '',
            },
        },
}
</script>
<style lang="scss">
@import '../../styles/app';

   .page-title { 
        h1 {
            display: block;
            width: 100%;
            height: 75px;
            height: auto;
            padding: 8px 0 17px;
            font-size: 32px;
            color: $primary;
            border-bottom: 2px solid $primary;
        }
        .descript {
            p {
                 font-size: $font-size-16;
                 color: $grey-default;
                 margin-bottom: 6px;
                 line-height: 24px;
            }

            span {
                display: block;
                font-size: $font-size-14;
                line-height: 19px;
                color : #969696;
            }
        }
     
    }
</style>