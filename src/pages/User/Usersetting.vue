<template>
  <v-container fluid>
    <div class="container full-ui">
        <div class="wrap">
            <!-- 페이지 타이틀 영역 -->
            <full-page-title :Title="this.Title" 
                             :MainMessage="this.MainMessage" 
                             :SubMessage="this.SubMessage"
             />
            <!-- 폼카드 : 기본정보 -->
            <v-row class="mb-4 mt-4">
                <v-card class="full-width form-card" >
                <!-- 타이틀 -->
                <v-card-title>기본정보 및 계정 설정</v-card-title>
                <AccountSetting></AccountSetting>
                </v-card>
            </v-row>
            <!-- 폼카드 : 언어설정 -->
            <v-row>
                <v-card class="full-width form-card" >
                <!-- 타이틀 -->
                <v-card-title>기타 환경 설정</v-card-title>
                <LangSetting></LangSetting>
                </v-card>
            </v-row>

        </div>
    </div>
  </v-container>
</template>

<script>
import AccountSetting from './AccountSetting.vue';
import LangSetting from './LangSetting.vue';

export default {
    name: 'Usersetting',
    components: { 
        AccountSetting, 
        LangSetting,
        },
    data() {
        return {
            Title: "사용자 설정",
            MainMessage: "개인정보 및 이를 관리하기 위한 옵션입니다.",
            SubMessage: "",

        }
    },
    methods: {
        Mshow: true,
        Sshow: false,
    },
}

</script>

<style lang="scss" src="@/pages/User/user.scss" />
