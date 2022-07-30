<template>
    <div class="gnb-bar d-flex align-center flex-column justify-space-between" >
        <ul class="gnb-list">

            <!-- 메뉴 선택자 : selected-->
            <li class="gnb-item gnb__project-create mb-8 selected">
                <router-link to="/CreateProject">
                    <span>프로젝트 생성</span>
                </router-link>
            </li>
            <li class="gnb-item gnb__project-open mb-8">
                <router-link to="/">
                    <span>프로젝트 열기</span>
                </router-link>
            </li>
            <li class="gnb-item gnb__project-import">
                <router-link to="/">
                    <span>프로젝트 가져오기</span>
                </router-link>
            </li>
        </ul>
        <v-avatar size="40">
            <v-img src="@/assets/img/avatar.svg" height="40" contain></v-img>
        </v-avatar>
    </div>
</template>

<script>

export default {
  name: 'GNB',
}
</script>

<style src="./GNB.scss" lang="scss"/>

