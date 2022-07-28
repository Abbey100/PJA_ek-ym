<template>
    <div class="attach-item">
        <v-row class="d-flex align-center column-flex justify-start">
            <v-col class="d-flex align-center column-flex justify-start">
                <span class="badge badge-grey font-weight-medium mr-4">{{fileType}}</span>
                <span class="file-name">{{fileName}}</span>
            </v-col>
            <v-col class="close d-flex align-end column-flex justify-center ">
                <v-btn
                    elevation="0"
                    :ripple="false"
                    height="16"
                    icon
                    >
                        <i class="ico ico__close"></i>
                    </v-btn>
            
            </v-col>
        </v-row>
        
    </div>
</template>

<script>

    export default {
        name: 'AttachItem',
        props : {
            fileType : {
                type : String,
                default : "확장자",
                required : true,
            },
            fileName : {
                type : String,
                default : "파일명",
                required : true,
            },
        }
    }

</script>


<style src="./AttachItem.scss" lang="scss"/>
