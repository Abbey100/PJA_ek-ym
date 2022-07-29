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

            <!-- 파일 가져오기 -->
            <v-row class="get-data import get-file mt-10">
                <!-- 파일 또는 데이터 베이스 가져오기 열기 -->
                <div class="card-wrap d-flex justify-space-between">
                    <div class="card-base import-file">
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
                    <div class="card-base import-database disabled" >
                        <div class="wrap">
                            <div class="card-title"> 
                                <span class="font-weight-bold">Database</span>
                            </div>
                            <div class="descript">
                            
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 파일 가져오기 팝업 -->
                <div class="card-base active import-file d-block">
                    <div class="wrap d-flex flex-column justify-space-between">
                        <div class="card-title">
                            <span class="font-weight-regular">File Upload from</span>
                            <span class="font-weight-bold">This Computer</span>
                        </div>
                        <FileLoader 
                            :progressNum="progressNum"
                        />
                        <div class="descript">
                            Locate one or more files on your computer to upload
                        </div>
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
  import FileLoader from '@/components/AttachItem/FileProgress';


    export default {
        name: 'FileProgress',
        components: {FileLoader,},
        data : () => ({
            progressNum: "65%",
              
        }),
    }

</script>

<style src="../CreateProject/CreateProject.scss" lang="scss"/>
