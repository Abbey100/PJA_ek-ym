<template>
  <v-container fluid>

    <div class="login-part d-flex align-center flex-column justify-space-between">
      <div class="login-wrapper ">
          <v-form>
            <v-container>
              <v-row class="flex-column login-title">
                <v-col>
                  <p class="login-slogan text-left font-weight-light">
                  Welcome to<br>A-RRANGER!</p>
                  <p class="login-descript font-weight-regular">Create Your Account!</p>
                </v-col>
 
                <v-form>
                  <v-col class="login-input">
                    <!-- 이름 입력 -->
                    <v-text-field 
                      ref="name"
                      :rules="[() => !!name || 'This field is required']"
                      v-model="name"
                      label="Full Name"
                      placeholder="이름"
                      text-color="primary"
                      required
                      hide-details
                      outlined
                    >
                    </v-text-field>

                    <!-- 이메일 입력 -->
                    <v-text-field 
                      v-model="email"
                      :rules="emailRules"
                      value="admin@flatlogic.com"
                      label="Email"
                      placeholder="Placeholder"
                      text-color="primary"
                      class="mt-4"
                      required
                      hide-details
                      outlined
                    >
                      <template v-slot:append>
                        <img
                          width="16"
                          height="16"
                          src="@/assets/img/icon/icon-16__mail.png"
                          alt=""
                        >
                      </template>
                    </v-text-field>

                    <!-- 비밀번호 입력 -->
                    <v-text-field
                      v-model="password"
                      :rules="passRules"
                      type="password"
                      label="Password"
                      class="mt-4"
                      required
                      hide-details
                      outlined
                    >
                      <template v-slot:append>
                        <img
                          width="16"
                          height="16"
                          src="@/assets/img/icon/icon-16__eye-hide.png"
                          alt=""
                        >
                      </template>
                    </v-text-field>

                    <!-- 비밀번호 확인 -->
                    <v-text-field
                      type="text"
                      label="Confirm Password"
                      value="testpassword11"
                      class="login-error mt-4"
                      required
                      hide-details
                      outlined
                    >
                      <template v-slot:append>
                        <img
                          width="16"
                          height="16"
                          src="@/assets/img/icon/icon-16__eye.png"
                          alt=""
                        >
                      </template>
                    </v-text-field>
                    <div class="text-field__error-msg">· Password are NOT Matching</div>
                  </v-col>

                  <!-- 옵션 선택 -->
                  <!-- Checkbox 템플릿 -->
                  <v-col class="sign-in-option mt-6">
                    <checkbox>
                        <template slot="checkedContent">
                          <span>I have read and agree to the <a href="#" class="font-weight-medium">Terms of Service</a></span>
                        </template>
                    </checkbox>  

                    <checkbox>
                        <template slot="checkedContent">
                          <span>I have read and agree to the  <a href="#" class="font-weight-medium"> Privacy Policy</a></span>
                        </template>
                    </checkbox>                    

                    <checkbox>
                        <template slot="checkedContent">
                           <span>Keep me updated on news and offers</span>
                        </template>
                    </checkbox>                    
                  </v-col>

                  
                  <!-- 가입 버튼 -->
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
                      Sign up</v-btn>
                  </v-col>

                </v-form>
              </v-row>
            </v-container>
          </v-form>
      </div>

      <Footer />
    </div>


  </v-container>
</template>

<script>
  import Footer from '@/components/Footer/Footer';
  // import Checkbox from '@/components/Checkbox/Checkbox';

  export default {
    name: 'CreateAccount',
    // components: {Footer, Checkbox},
    components: {Footer,},

    data() {
      return {
        name: '',
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
        ],
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

<style src="../Login/Login.scss" lang="scss"/>
