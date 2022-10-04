<template>
  <v-container fluid>

    <div class="login-part d-flex align-center flex-column justify-space-between">
      <div class="login-wrapper ">
        <v-form>
          <v-row class="flex-column login-title">
            <v-col>
              <p class="login-slogan text-left font-weight-light">
              Great to<br>Have you here!</p>
              <p class="login-descript font-weight-regular">You can login to access your workspace.</p>
            </v-col>

            <v-form>
              <v-col class="login-input">
                <!-- 이메일 입력 -->
                <v-text-field 
                  v-model="email"
                  :rules="emailRules"
                  label="Email"
                  placeholder="Placeholder"
                  text-color="primary"
                  hide-details
                  required
                  outlined
                >
                  <template v-slot:append>
                    <!-- Sprint_3 Hotfix : v-icon으로 변경 -->
                    <v-icon>$i16_mail</v-icon>
                  </template>
                </v-text-field>

                <!-- 비밀번호 입력 -->
                <v-text-field
                  v-model="password"
                  :rules="passRules"
                  value="12345678"
                  type="password"
                  label="Password"
                  class=" mt-4"
                  placeholder="●●●●●●●●"
                  hide-details
                  required
                  outlined
                >
                  <template v-slot:append>
                    <!-- Sprint_3 Hotfix : v-icon으로 변경 -->
                    <!-- 보여주는 방식 변경 : if -> v-show -->                    
                    <v-icon v-show="isPwHide">$i16_PwHide</v-icon>
                    <v-icon v-show="isPwShow">$i16_PwShow</v-icon>
                          
                  </template>
                </v-text-field>

              </v-col>

              <!-- 비밀번호 찾기 -->
              <v-col class="forget-password d-flex justify-end pb-6">
                <router-link 
                  to="/ResetPassword"
                  class="text-capitalize text-decoration-underline font-weight-regular px-0 mt-2"
                  >
                    Forget Password
                </router-link >
              </v-col>
              
              <!-- 로그인 버튼 -->
              <v-col class="btn-login mt-6">
                <v-btn
                  class="text-capitalize"
                  height="48"
                  elevation="0"
                  :ripple="false"
                  block
                  large
                  :disabled="password.length === 0 || email.length === 0"
                  color="primary"
                  @click="login"
                >
                  Sign in</v-btn>
              </v-col>

              <v-col cols="12" class="d-flex justify-center my-10 font-size-14 ">
                <span> or </span>
              </v-col>

              <!-- 구글 버튼 -->
              <v-col>
                <v-btn 
                  :ripple="false"
                  height="48"  
                  block 
                  outlined  
                  elevation="0" 
                  class="google text-capitalize font-weight-regular"
                  >
                  <v-img src="@/assets/google.png" max-width="24" class="mr-4"></v-img>
                  Sign in with Google</v-btn>
              </v-col>
            </v-form>
          </v-row>
        </v-form>
      </div>
      <Footer />
    </div>


    
  </v-container>
</template>

<script>
  import Footer from '@/components/Footer/Footer';

  export default {
    name: 'Login',
    components: {Footer},
    data() {
      return {
        isPwHide : true,
        isPwShow : false,

        email: 'admin@flatlogic.com',
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+/.test(v) || 'E-mail must be valid',
        ],
        createFullName: '이름',
        createEmail: 'id@aedata.co.kr',
        createPassword: '123456',
        password: '123456',
        passRules: [
          v => !!v || 'Password is required',
          v => v.length >= 6 || 'Min 6 characters'
        ]

        // 패스워드 아이콘 상태 변경
     
      }
    },
    // methods: {
    //   login(){
    //     window.localStorage.setItem('authenticated', true);
    //     this.$router.push('/import');
    //   }
    // },
    // created() {
    //   if (window.localStorage.getItem('authenticated') === 'true') {
    //     this.$router.push('/import');
    //   }
    // }
  }

</script>

<style src="./Login.scss" lang="scss"/>
