<template>
    <div class="attach-item">
        <v-row class="d-flex align-center column-flex justify-start">
            <v-col class="d-flex align-center column-flex justify-start">
                <span v-if="fileType" class="badge badge-grey font-weight-medium mr-4">{{fileType}}</span>
                <span v-else class="file-icon"><v-img src="@/assets/img/icon/icon-16__attach.png" /></span>
                <span class="file-name">{{fileName}}</span>
            </v-col>

            <!-- 닫기 class : close  -->
            <v-col class="close d-flex align-cetner column-flex justify-center" >
                <v-btn v-if="fileType"
                    elevation="0"
                    :ripple="false"
                    height="36"
                    width="36"
                    icon
                    >
                    <i class="ico ico__close"></i>
                </v-btn>
                <v-btn v-else
                    elevation="0"
                    :ripple="false"
                    height="16"
                    width="16"
                    icon
                    >
                    <i class="ico ico__close sm"></i>
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
                default : "",
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
