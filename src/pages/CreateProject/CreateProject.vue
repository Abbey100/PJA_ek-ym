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


            <!-- 파일, 데이터베이스 가져오기 -->
            <v-row class="get-data d-flex justify-space-between mt-10">
                <div class="card-base">
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
                <div class="card-base">
                    <div class="wrap">
                        <div class="card-title">
                            <span class="font-weight-bold">Database</span>
                        </div>
                        <div class="descript"> </div>
                    </div>
                </div>
            </v-row>
        </div>
    </div>
  </v-container>
</template>

<script>


    export default {
        name: 'CreateProject',
    }

</script>

<style src="./CreateProject.scss" lang="scss"/>
