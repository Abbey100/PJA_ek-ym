<template>
  <v-container fluid>

    <div class="login-part d-flex align-center justify-start flex-column ">
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
                      hide-details
                      required
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
                      hide-details
                      required
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
                      hide-details
                      required
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
                    <!-- 오류 시 error 추가 / hide-details 삭제 -->
                    <v-text-field
                      type="password"
                      label="Confirm Password"
                      class="mt-4"
                      error
                      required
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
                  </v-col>

                  <!-- 옵션 선택 -->
                  <v-col class="sign-in-option">
                    <input type="checkbox">
                    <label for="">I have read and agree to the Terms of Service</label>
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
                      Sign in</v-btn>
                  </v-col>

                </v-form>
              </v-row>
            </v-container>
          </v-form>
      </div>
    </div>

    <footer />

  </v-container>
</template>

<script>

  export default {
    name: 'CreateAccount',
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
        checkbox: true,
     
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
