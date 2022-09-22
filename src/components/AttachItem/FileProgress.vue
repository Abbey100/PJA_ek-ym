<template>
    <div class="attach-item">
        <v-row class="d-flex column-flex justify-start align-center">
            <!-- 
                진행률 표시 : 숫자  
                class : percent
            -->
            <v-col class="percent d-flex align-center column-flex justify-start pl-2">
                <span class="Progress-num badge-grey font-weight-medium mr-4">{{progressNum}}</span>
            </v-col>

            <!-- 
                진행률 표시 : Progress 
                class : bar
            -->
            <v-col class="bar d-flex align-center column-flex justify-start pl-4">
                <v-progress-linear 
                    class="file"
                    value="65"
                    height="16"
                    color="#5551FF"
                    background-color="#EBEEF1"
                    rounded
                >
                </v-progress-linear>
                                
            </v-col>

            <v-col class="close d-flex align-cetner column-flex justify-center ">
                <v-btn
                    elevation="0"
                    :ripple="false"
                    height="16"
                    width="16"
                    icon
                    >
                    <!-- Sprint_3 Hotfix : v-icon으로 변경 -->
                    <v-icon>$i16_close</v-icon>
                </v-btn>
            </v-col>          
        </v-row>
    </div>
</template>

<script>

    export default {
        name: 'FileLoader',
        props : {
            progressNum : {
                type : String,
                default : "65%",
                required : true,
            },
        }        
     
    }

</script>


<style src="./AttachItem.scss" lang="scss"/>
