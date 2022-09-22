<template>
  <v-container fluid>

    <div class="login-part d-flex align-center flex-column justify-space-between">
      <div class="login-wrapper ">
        <v-form>
          <v-row class="flex-column login-title">
            <v-col>
              <p class="login-slogan text-left font-weight-light">
              Forget<br>your Password?</p>
              <p class="login-descript font-weight-regular">No worries, we’ll send you an email with instructions to reset your password.</p>
            </v-col>

            <v-form>
              <v-col class="login-input">
                <!-- 이메일 입력 -->
                <v-text-field 
                  v-model="email"
                  :rules="emailRules"
                  value="admin@flatlogic.com"
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
              </v-col>
              
              <!-- reset 버튼 -->
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
                  Reset</v-btn>
              </v-col>

              <!-- login 으로 이동 -->
              <v-col class="go-login d-flex justify-start align-center column-flex mt-2">
        
                    <!-- Sprint_3 Hotfix : v-icon으로 변경 -->
                    <v-icon>$i16_ArrLft</v-icon>
                  <router-link 
                    to="/Login"
                    class="text-capitalize text-decoration-underline font-weight-regular px-1"
                    >
                    <span>Go Back</span>
                  </router-link >
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
    name: 'resetPassword',
    components: {Footer,},
    data() {
      return {
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

<style src="../Login/Login.scss" lang="scss"/>
