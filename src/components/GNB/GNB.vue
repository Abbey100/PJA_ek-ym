<template>
    <div class="gnb-bar d-flex align-center flex-column justify-space-between" >
        <ul class="gnb-list">

            <!-- 메뉴 선택자 : selected-->
            <li class="gnb-item gnb__project-create mb-8 selected">
                <v-icon>$GcpActive</v-icon>
                <span> 프로젝트 생성 </span>
                <!-- <router-link to="/CreateProject">
                    <span>프로젝트 생성</span>
                </router-link> -->
            </li>
            <li class="gnb-item gnb__project-open mb-8">
                <v-icon>$GiRest</v-icon>
                <span> 프로젝트 열기 </span>
                <!-- <router-link to="/">
                    <span>프로젝트 열기</span>
                </router-link> -->
            </li>
            <li class="gnb-item gnb__project-import">
                <v-icon>$GopRest</v-icon>
                <span> 프로젝트 가져오기 </span>
                <!-- <router-link to="/">
                    <span>프로젝트 가져오기</span>
                </router-link> -->
            </li>
        </ul>

        <ul class="gnb-list">
            <li class="gnb-item gnb__setting mb-4">
                <router-link to="/User">
                    <span>설정</span>
                </router-link>
            </li>
            <li class="gnb-item gnb__logout">
  
                <v-avatar size="40">
                    <v-img src="https://cdn.vuetifyjs.com/images/lists/1.jpg" height="40" contain></v-img>
                </v-avatar>

                <!-- Sprint 2에 수정 됨 
                    2022.08.14 전역 component로 수정 
                    avatar hover 시 tooltip 보여줌  
                -->
                <tooltip 
                    class="dir-left"
                    :tooltipText="tooltipText"
                />                  
            </li>
        </ul>
    
    </div>
</template>

<script>
export default {
    name: 'GNB',

    data () {
        return {
            tooltipText: "로그아웃",
        }
    }
}
</script>

<style src="./GNB.scss" lang="scss"/>

