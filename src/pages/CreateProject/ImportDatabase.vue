<template>
  <v-container fluid>
    <div class="create-project">
        <div class="wrap">

            <!-- 페이지 타이틀 영역 -->
            <v-row class="page-title">
                <h1 class="mb-6">Create Project</h1>

                <div class="descript font-weight-regular">
                    <p>Create a project by importing data. What kinds of data files can I import?</p>
                    <span>TSV, CSV, *SV, Excel (.xls and .xlsx), JSON, XML, RDF as XML, and Google Data documents are all supported. Support for other formats can be added with OpenRefine extensions.</span>
                </div>
            </v-row>

            <!-- 데이터 가져오기 활성화 -->
            <!-- 
                데이터 가져오는 방식 선택 시 get-data에 클래스 추가
                공통 : import
                개별
                    파일 가져오기 : get-file
                    데이터베이스 : get-database
                    미선택 항목 : disabled
                    선택 항목 상세 보이기 : d-block

                예시
                    경우 : 파일 가져오기 선택 시
                    get-data [import] [get-file]
                        card-wrap
                                .
                                .
                                .
                            card-base import-file
                            card-base import-database [disaled]

                            .
                            .
                            .
                        
                        card-base active import-file [d-block]
                        card-base active import-database 
            -->

            <!-- 데이터베이스 가져오기 -->
            <v-row class="get-data import get-database mt-10">
                <!-- 파일 또는 데이터 베이스 가져오기 열기 -->
                <div class="card-wrap d-flex justify-space-between">
                    <div class="card-base import-file disabled">
                        <div class="wrap d-flex flex-column justify-space-between">
                            <div class="card-title">
                                <span class="font-weight-regular">File Upload from</span>
                                <span class="font-weight-bold">This Computer</span>
                            </div>
                            <div class="descript">
                                Locate one or more files on your computer to upload
                            </div>
                        </div>
                    </div>    
                    <div class="card-base import-database " >
                        <div class="wrap">
                            <div class="card-title"> 
                                <span class="font-weight-bold">Database</span>
                            </div>
                            <div class="descript">
                            
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 데이터 베이스 가져오기 팝업 -->
                <div class="card-base active import-database d-block">
                    <div class="wrap d-flex flex-column">
                        <div class="card-title">
                            <span class="font-weight-bold">Database</span>
                        </div>
                        <v-form>
                            <v-row class="d-flex justify-start  mt-6">
                                <!-- 이름 -->
                                <v-col class="name mr-8">
                                    <v-text-field 
                                        v-model="text"
                                        label="Name"
                                        placeholder="Placeholder"
                                        text-color="primary"
                                        hide-details
                                        outlined
                                        >
                                    </v-text-field>
                                </v-col>

                                <!-- 타입 선택 -->
                                <v-col class="type mr-4">
                                    <v-select
                                        :items="['My SQL']"
                                        hide-details
                                        label="Type"
                                    >
                                        <template v-slot:append>
                                            <!-- Sprint_3 Hotfix : v-icon으로 변경 -->
                                            <v-icon>$i16_Dwn</v-icon>
                                        </template>

                                        <template v-slot:item="{ item, attrs, on }">
                                            <v-list-item
                                                v-bind="attrs"
                                                v-on="on"
                                            >
                                                <v-list-item-title
                                                :id="attrs['aria-labelledby']"
                                                v-text="item"
                                                ></v-list-item-title>
                                            </v-list-item>
                                        </template>
                                    </v-select>
                                </v-col>

                                <!-- 호스트 입력 -->
                                <v-col class="host mr-4">
                                    <v-text-field 
                                        v-model="text"
                                        label="Host"
                                        placeholder="Host"
                                        text-color="primary"
                                        hide-details
                                        outlined
                                        >
                                    </v-text-field>                                    
                                </v-col>

                                <!-- 포트 입력 -->
                                <v-col class="port">
                                    <v-text-field 
                                        v-model="num"
                                        label="Port"
                                        placeholder="Port"
                                        text-color="primary"
                                        hide-details
                                        outlined
                                        >
                                    </v-text-field>                                    
                                </v-col>
                            </v-row>

                            <!-- 데이타베이스 명 -->
                            <v-row class="mt-4">
                                <v-col class="name mr-8">
                                    <v-text-field 
                                        v-model="text"
                                        label="Database name"
                                        placeholder="Database name"
                                        text-color="primary"
                                        hide-details
                                        outlined
                                        >
                                    </v-text-field>
                                </v-col>

                                <!-- 사용자 -->
                                <v-col class="mr-4">
                                    <v-text-field 
                                        v-model="text"
                                        label="User"
                                        placeholder="User"
                                        text-color="primary"
                                        hide-details
                                        outlined
                                        >
                                    </v-text-field>                                
                                </v-col>

                                <!-- 비밀번호 입력 -->
                                <v-col class="password">
                                    <v-text-field
                                        v-model="password"
                                        type="password"
                                        label="Password"
                                        placeholder="●●●●●●●●"
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
                                </v-col>
                            </v-row>


                            <!-- database inner button -->
                            <v-row class="d-flex justify-space-between btn-group">
                                <!-- BUTTON LEFT -->
                                <v-col>
                                <!-- BUTTON : TEST -->
                                    <v-btn
                                        class="text-capitalize btn-md"
                                        height="32"
                                        elevation="0"
                                        :ripple="false"
                                        outlined
                                        color="primary"
                                    >Test</v-btn>                                
                                </v-col>

                                <!-- BUTTON RIGHT -->
                                <v-col class="d-flex justify-end">
                                    <!-- BUTTON : CANCEL -->
                                    <v-btn
                                        class="text-capitalize btn-md point-deep mr-2"
                                        height="32"
                                        elevation="0"
                                        :ripple="false"
                                        outlined
                                    >Cancel</v-btn>  

                                    <!-- BUTTON : SAVE -->
                                    <v-btn
                                        class="text-capitalize btn-md point-deep"
                                        height="32"
                                        elevation="0"
                                        :ripple="false"
                                    >Save</v-btn>  
                                </v-col>
                            </v-row>
                        </v-form>
                    </div>
                </div>
            </v-row>
            <v-row class="btn-connect d-flex justify-center">
                 <v-btn
                  class="text-capitalize"
                  height="48"
                  elevation="0"
                  :ripple="false"
                  large
                  color="primary"
                >Connect</v-btn>
             </v-row>             
        </div>  
    </div>
  </v-container>
</template>

<script>


    export default {
        name: 'ImportFile',
    }

</script>

<style src="./CreateProject.scss" lang="scss"/>
