<template>
  <v-container fluid >
    <v-overlay 
      :value="overlay"
      opacity="0.4"
      >
    </v-overlay>   
    <v-card class="dialog table-edit cell-replace" elevation="3" style="position: absolute; left:50%; top: 5%; margin-left: -400px;  z-index:6">
      <!-- Menu : Edit cells > Replace -->
      
      <!-- Dialog Title -->
      <dlgTitle :titleText="titleText" />

      <!-- Dialog Content -->
      <div class="dialog-content bg-default pt-0 openproject_details">
        <div class="section-row mt-6">
          <div class="dialog-section pb-2">
            <!-- row  : input -->
            <v-row class="mb-2">
              <v-col class="item-title">Create Time</v-col>
              <v-col>
                <v-text-field 
                  text-color="primary"
                  hide-details
                  outlined
                  class="pt-0 edit-mode"
                  clearable
                  clear-icon="$i16_cancel"
                  value="2022-06-09 T05:06:56Z"
                  >
              </v-text-field>             
              </v-col>
            </v-row>

            <!-- row : tag -->
            <v-row class="mb-2">
              <v-col class="item-title">Tags</v-col>
              <v-col>
                <v-autocomplete
                  v-model="values"
                  :items="tags"
                  chips
                  small-chips
                  multiple
                  hide-details
                  outlined
                  class="pt-0 edit-mode"
                  hide-spin-buttons
                  clearable
                  clear-icon="$i16_cancel"
                  append-icon="$i16_SaveSm"
                ></v-autocomplete>          
              </v-col>
            </v-row>
            <!-- row : textarea -->
            <v-row class="mb-2">
              <v-col class="item-title">Description</v-col>
              <v-col>
                <v-textarea
                  text-color="primary"
                  hide-details
                  outlined
                  class="pt-0"
                  auto-grow
                  value="abcdefg hijk lmnop qrs tuvabcdefg hijk lmnop qrs tuvabcdefg hijk lmnop qrs tuvabcdefg hijk lmnop qrs tuvabcdefg hijk lmnop qrs tuvabcdefg hijk lmnop qrs tuvabcdefg hijk lmnop qrs tuvabcdefg hijk lmnop qrs tuvabcdefg hijk lmnop qrs tuv"
                  >
              </v-textarea>             
              </v-col>
            </v-row>
          </div>
        </div>              
      </div>

      <!-- Dialog Action -->
      <dlgActDefault />  

    </v-card>
    <div class="openproject_list">
      <div class="wrap">
              <!-- 페이지 타이틀 영역 -->
              <v-row class="page-title">
                  <h1 class="mb-6">Open Project</h1>
              </v-row>
              <!-- tag type check start -->
              <div class="tagtype_check_area">
                    <v-checkbox
                      v-model="checkbox1"
                      label="전체"
                      hide-details
                    ></v-checkbox>
                    <v-checkbox
                      v-model="checkbox2"
                      label="서울시 도서관"
                      hide-details
                    ></v-checkbox>
                    <v-checkbox
                      v-model="checkbox3"
                      label="서울시"
                      hide-details
                    ></v-checkbox>
              </div>
              <!-- // tag type check end -->
              <!-- table -->
              <template>
                  <v-data-table
                    :headers="headers"
                    :items="lists"
                    class="elevation-1 tag_list_table"
                    hide-default-footer
                  >
                    <template v-slot:[`item.tags`]="{ item }">
                      <v-chip-group
                        column
                      >
                          <v-chip v-if="item.tags1"
                          >
                            {{ item.tags1 }}
                          </v-chip>
                          <v-chip v-if="item.tags2"
                          >
                            {{ item.tags2 }}
                          </v-chip>
                          <v-chip v-if="item.tags3"
                          >
                            {{ item.tags3 }}
                          </v-chip>
                      </v-chip-group>
                    </template>

                    <template v-slot:[`item.btn`]="{ item }">
                          <v-btn v-if="item.btn"
                          elevation="0"
                          >
                            <v-icon>$i16_close</v-icon>
                          </v-btn>
                    </template>
                  </v-data-table>
                </template>
              <!-- // table -->
      </div>
    </div>
  
  </v-container>
</template>



<script>
import dlgTitle from '@/components/DialogComp/DialogTitle'
import dlgActDefault from '@/components/DialogComp/DialogActionDefault'

  export default {
    name: 'OpenProject',
    components: {dlgTitle, dlgActDefault},
    data: () => ({
      checkbox1: true,
      checkbox2: false,
      checkbox3: false,
      titleText : "Project metadata",  
      tags: ['서울시 도서관', '서울시', '도서관', 'lib'],
      values: ['서울시 도서관', '서울시'],
      value: null,
      headers: [
          {
            text: 'Name',
            align: 'start',
            sortable: true,
            value: 'name',
          },
          { text: 'Creator', 
            align: 'start',
            sortable: true,
            value: 'Creator' 
            },
          { text: 'Subject', 
            align: 'start',
            sortable: true,
            value: 'Subject' 
            },
          { text: 'Description', 
            align: 'start',
            sortable: true,
            value: 'Description' 
            },
          { text: 'Row Count', 
            align: 'start',
            sortable: true,
            value: 'RowCount' 
            },
          { text: 'Last Modified', 
            
            align: 'start',
            sortable: true,
            value: 'LastModified' 
            },
          { text: 'tags', 
            align: 'start',
            sortable: true,
            value: 'tags' 
            },
          { text: 'btn', 
            align: 'start',
            sortable: true,
            value: 'btn' 
            },
        ],
      lists: [
        {
          name: '프로젝트 제목제목제목',
          Creator: '이작성',
          Subject: '프로젝트 주제???',
          Description: '2000년 부터 2022년 까지 설립된 도서관 정보 블라블라블라',
          RowCount: '1657492',
          LastModified: '2022-09-20 10:10 PM',
          tags1: '서울시 도서관', tags2: '서울시', tags3: '도서관',
          btn: true,
        },
        {
          name: '프로젝트 제목제목제목',
          Creator: '이작성',
          Subject: '프로젝트 주제???',
          Description: '2000년 부터 2022년 까지 설립된 도서관 정보 블라블라블라',
          RowCount: '1652',
          LastModified: '2022-09-20 10:10 PM',
          tags1: '서울시 도서관', tags2: '서울시',
          btn: true,
        },
        {
          name: '프로젝트 제목제목제목프로젝트 제목제목제목프로젝트 제목제목제목프로젝트 제목제목제목',
          Creator: '이작성',
          Subject: '프로젝트 주제???',
          Description: '2000년 부터 2022년 까지 설립된 도서관 정보 블라블라블라',
          RowCount:'492',
          LastModified: '2022-09-20 10:10 PM',
          tags2: '서울시', tags3: '도서관',
          btn: true,
        },
      ],
    }),   
    methods: {
    },
  } 

</script>

<style src="./OpenProject.scss" lang="scss"/>
