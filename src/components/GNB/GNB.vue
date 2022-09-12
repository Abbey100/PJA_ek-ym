<template>
    <div class="gnb-bar d-flex align-center flex-column justify-space-between" >
        <ul class="gnb-list">

            <!-- 메뉴 선택자 : selected-->
            <li class="gnb-item mb-8 selected">
                <v-btn to="/CreateProject">
                    프로젝트 생성 
                    <v-icon>$GcpActive</v-icon>
                     <!-- default는 GcpRest -->
                </v-btn>
            </li>
            <li class="gnb-item mb-8">
                <v-btn to="/">
                        프로젝트 열기
                    <v-icon>$GopRest</v-icon>
                     <!-- active는 GopActive -->
                </v-btn>
            </li>
            <li class="gnb-item">
                <v-btn to="/">
                    프로젝트 가져오기 
                    <v-icon>$GiRest</v-icon>
                     <!-- active는 GiActive -->
                </v-btn>
            </li>
        </ul>

        <ul class="gnb-list">
            <li class="gnb-item mb-4">
                    <v-btn to="/Usersetting">
                        설정
                     <v-icon>$GsRest</v-icon>
                     <!-- active는 GsActive -->
                    </v-btn>
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

