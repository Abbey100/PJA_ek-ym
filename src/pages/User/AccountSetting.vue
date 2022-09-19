<template>
<!-- form list group -->
      <v-list>
        <v-container>
           <v-row  v-for="item in list" v-bind:key="item.id" class="mb-4">
              <!-- sub title -->
              <v-col v-if="item.subtitle !== null" col="12" class="subtitle mt-2 mb-2">{{ item.subtitle }}</v-col>

              <!-- label -->
              <v-col v-if="item.label" class="label d-flex align-center" cols="2" :class="item.height">
                <span>{{ item.label }}</span>
              </v-col>

              <!-- Avatar -->
              <v-col v-if="item.avatar"  cols="10" class="form d-flex align-center">
                <v-container>
                  <v-row class="d-flex">
                    <v-col cols="auto">
                        <v-list-item-avatar size="80" >
                            <v-img :src="item.avatar"></v-img>
                        </v-list-item-avatar>
                    </v-col>
                    <v-col  cols="auto">
                        <v-list-item>
                          <span class="form-desc">jpg 또는 png 파일로 업로드해 주세요.</span>
                        </v-list-item>

                        <!-- Attached -->
                        <v-list-item class="basic-file-list"  v-if="fileName">
                          <attach-item :fileName="fileName"></attach-item>
                        </v-list-item>

                        <!-- Button -->
                        <v-list-item v-else>
                           <v-btn
                              v-bind="attrs"
                              v-on="on"
                              color="primary"
                              class="text-capitalize btn-md mr-2"
                              height="32"
                              elevation="0"
                              outlined
                            >
                              <v-icon>$i16_attach</v-icon>
                               <span class="btn-text">이미지 선택</span>
                            </v-btn>
                        </v-list-item>
                    </v-col>
                  </v-row>
                </v-container>
                 
              </v-col>

              <!-- 기본형 -->
              <v-col  v-else-if="(item.subtitle == null) && (item.type == 'text')"   cols="10"  class="form">
                  <v-text-field
                      class="pt-0"
                      :placeholder="item.placeholder"
                      :value="item.value"
                      :type="item.type"
                      hide-details
                      outlined
                      solo
                      flat
                    ></v-text-field>
              </v-col>

              <!-- 비밀번호 -->
              <v-col v-else-if="(item.subtitle == null) && (item.type== 'password')"  cols="10"  class="form d-flex align-center">
                <v-text-field
                      class="pt-0"
                      v-model="password"
                      :type="item.type"
                      label="Password"
                      required
                      hide-details
                      outlined
                    >
                      <template v-slot:append>
                        <!-- Sprint_3 Hotfix : v-icon으로 변경 -->
                        <v-icon>$i16_PwHide</v-icon>
                      </template>
                    </v-text-field>
              </v-col>
          </v-row>
        </v-container>
      </v-list>
</template>
<script>
import AttachItem from '../../components/AttachItem/AttachItem.vue'
export default {
  components: { AttachItem },
    data: () => ({
      list: [
        { id: 'profile',
          name: 'profile',
          label: '프로필',
          height: 'auto',
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        },
        { id: 'username',
          name: 'username',
          label: '이름',
          height: 'single',
          placeholder: '이름을 입력해 주세요',
          value: '우영우',
          type: 'text',
        },
        { id: 'useremail',
          name: 'useremail',
          label: '이메일',
          height: 'single',
          placeholder: '이메일을 입력해 주세요',
          value: 'wywyw@aedata.co.kr',
          type: 'text',
        },
        { subtitle: '비밀번호 재설정'},
        { id: 'password',
          name: 'password',
          label: '비밀번호 변경',
          height: 'single',
          type: 'password',
        },
        { id: 'password-confirm',
          name: 'password-confirm',
          label: '비밀번호 확인',
          height: 'single',
          type: 'password',
        },
      ],
      fileName: 'photo.png'
    }),
  }
</script>