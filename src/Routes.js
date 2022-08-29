import Vue from 'vue';
import Router from 'vue-router';

// component :: Component
import Layout from '@/components/Layout/Layout';                     // Layout : 기본 레이아웃
import layoutPrjParse01 from '@/components/Layout/layoutPrjParse01'; // 프로젝트 생성 Parse data Header 01 레이아웃
import layoutPrjParse02 from '@/components/Layout/layoutPrjParse02'; // 프로젝트 생성 Parse data Header 02 레이아웃
import layoutDataPop from '@/components/Layout/layoutDataPop';     // 프로젝트 편집 기본 header
import layoutDataEdit from '@/components/Layout/layoutDataEdit';     // 프로젝트 편집  
import LayoutFull from '@/components/LayoutFull/LayoutFull';         // 로그인 용 I Shape 레이아웃

// 작업 목록
import Work from "@/pages/Work/Work";

//Progress
import PageProgress from "@/pages/Progress/Page";
import FileProgress from '@/pages/Progress/File';
import CircularProgress from '@/pages/Progress/Loader';

// Pages
// CreateProject
import CreateProject from '@/pages/CreateProject/CreateProject';
import ImportFile from '@/pages/CreateProject/ImportFile';
import ImportDatabase from '@/pages/CreateProject/ImportDatabase';
import ParseCSV from '@/pages/CreateProject/ParseCSV';
import ParseLineBased from '@/pages/CreateProject/ParseLineBased';
import ParseFixedWidth from '@/pages/CreateProject/ParseFixedWidth';
import ParsePCAxis from '@/pages/CreateProject/ParsePCAxis';
import ParseJsonFile from '@/pages/CreateProject/ParseJsonFile';
import ParseWikitext from '@/pages/CreateProject/ParseWikitext';
import ParseXML from '@/pages/CreateProject/ParseXML';
import ParseOpenDoc from '@/pages/CreateProject/ParseOpenDoc';
import SelectEnc from '@/pages/CreateProject/SelectEnc';

// EditData
import DataEditaBase from '@/pages/OpenProject/DataEditBase';
import DataEditCell from '@/pages/OpenProject/DataEditCell';
import DataEditPop from '@/pages/OpenProject/DataEditPop';
import DataEditNoti from '@/pages/OpenProject/DataEditNoti';
import DataEditFilter from '@/pages/OpenProject/DataEditFilter';
import ApplyOpHistory from '@/pages/EditPopup/ApplyOpHistory';
import ExtractOphistory from '@/pages/EditPopup/ExtractOphistory';
import SplitColumns from '@/pages/EditPopup/SplitColumns';
import JoinColumns from '@/pages/EditPopup/JoinColumns';
import SortBy from '@/pages/EditPopup/SortBy';

// Facet Side
import FacetSide01 from '@/pages/FacetSide/FacetSide01';
import FacetSide02 from '@/pages/FacetSide/FacetSide02';
import FacetSide03 from '@/pages/FacetSide/FacetSide03';
import FacetSide03EditPop from '@/pages/FacetSide/FacetSide03EditPop';
import FacetSide04 from '@/pages/FacetSide/FacetSide04';

//
import Error from "@/pages/Error/Error";
import Login from "@/pages/Login/Login";
import CreateAccount from "@/pages/CreateAccount/CreateAccount";
import ResetPassword from "@/pages/ResetPassword/ResetPassword";

//UserSetting
import Usersetting from '@/pages/User/Usersetting';

Vue.use(Router);

// [FCM004] 라우팅 기능 구현
export default new Router({
  routes: [
    { 
      path: '/',
      name: 'LayoutFull',
      component: LayoutFull,
      children: [
        { // == 작업 목록 ============================================
          path: 'work',
          name: 'work',
          component: Work,
        },
        { // == 로그인 기본 ==========================================
          path: 'Login',
          name: 'Logn',
          component: Login,
        },
        { // == 계정 생성 ===========================================
          path: 'CreateAccount',
          name: 'Create Account',
          component: CreateAccount,
        },
        { // == 비밀번호 재설정 ====================================== 
          path: 'ResetPassword',
          name: 'Reset Password',
          component: ResetPassword,
        },
        { // == 페이지 프로그레스 샘플 ================================
          path: 'PageProgress',
          name: 'Page Progress',
          component: PageProgress,
        },
      ],
    },
    
    { // 프로젝트 생성 - Parse Data
      path: '/',
      name: 'layoutPrjParse01',
      component: layoutPrjParse01,
      children: [
        { // == Header 기본 : headerPrjParse01 ======================
          path: 'ParseCSV',
          name: '프로젝트 생성 중 : CSV',
          component: ParseCSV,
        },
      ],
    },
    { // 프로젝트 생성 - Parse Data
      path: '/',
      name: 'layoutPrjParse02',
      component: layoutPrjParse02,
      children: [
        { // == Header 기본 : headerPrjParse02 ======================
          path: 'ParseLineBased',
          name: '프로젝트 생성 중 : LineBsed',
          component: ParseLineBased,
        },
        { // == Header 기본 : headerPrjParse02 ======================
          path: 'ParseFixedWidth',
          name: '프로젝트 생성 중 : Fixed Width',
          component: ParseFixedWidth,
        },
        { // == Header 기본 : headerPrjParse02 ======================
          path: 'ParsePCAxis',
          name: '프로젝트 생성 중 : Pc Axis',
          component: ParsePCAxis,
        },
        { // == Header 기본 : headerPrjParse02 ======================
          path: 'ParseJsonFile',
          name: '프로젝트 생성 중 : JSON File',
          component: ParseJsonFile,
        },
        { // == Header 기본 : headerPrjParse02 ======================
          path: 'ParseWikitext',
          name: '프로젝트 생성 중 : Wikitext',
          component: ParseWikitext,
        },
        { // == Header 기본 : headerPrjParse02 ======================
          path: 'ParseXML',
          name: '프로젝트 생성 중 : XML',
          component: ParseXML,
        },
        { // == Header 기본 : headerPrjParse02 ======================
          path: 'ParseOpenDoc',
          name: '프로젝트 생성 중 : Open Document',
          component: ParseOpenDoc,
        },
        { // == Header 기본 : headerPrjParse02 ======================
          path: 'SelectEnc',
          name: '프로젝트 생성 중 : Select Encoding',
          component: SelectEnc,
        },
      ],
    },

    { // 프로젝트 편집 - Edit Data
      path: '/',
      name: 'layoutDataEdit',
      component: layoutDataEdit,
      children: [
        { // == Header Export : layoutDataExport ======================
          path: 'DataEditaBase',
          name: '데이터 편집 : DataEditBase',
          component: DataEditaBase,
        },
        { // == Header 기본 : layoutDataEdit ======================
          path: 'DataEditCell',
          name: '데이터 편집 : DataEditCell',
          component: DataEditCell,
        },
        { // == Header 기본 : layoutDataEdit ======================
          path: 'DataEditNoti',
          name: '알림 : DataEditNoti',
          component: DataEditNoti,
        },
        { // == Header 기본 : layoutDataEdit ======================
          path: 'DataEditFilter',
          name: '데이터 편집 : DataEditFilter',
          component: DataEditFilter,
        },
        { // == Header 기본 : layoutDataEdit ======================
          path: 'ApplyOpHistory',
          name: '팝업 : ApplyOpHistory',
          component: ApplyOpHistory,
        },
        { // == Header 기본 : layoutDataEdit ======================
          path: 'ExtractOphistory',
          name: '팝업 : ExtractOphistory',
          component: ExtractOphistory,
        },
        { // == Header 기본 : layoutDataEdit ======================
          path: 'SplitColumns',
          name: '팝업 : SplitColumns',
          component: SplitColumns,
        },
        { // == Header 기본 : layoutDataEdit ======================
          path: 'JoinColumns',
          name: '팝업 : JoinColumns',
          component: JoinColumns,
        },
        { // == Header 기본 : layoutDataEdit ======================
          path: 'SortBy',
          name: '팝업 : SortBy',
          component: SortBy,
        },
        { // == Header 기본 : layoutDataEdit ======================
          path: 'FacetSide01',
          name: 'Facet Side : FacetSide01',
          component: FacetSide01,
        },
        { // == Header 기본 : layoutDataEdit ======================
          path: 'FacetSide02',
          name: 'Facet Side : FacetSide02',
          component: FacetSide02,
        },
        { // == Header 기본 : layoutDataEdit ======================
          path: 'FacetSide03',
          name: 'Facet Side : FacetSide03',
          component: FacetSide03,
        },
        { // == Header 기본 : layoutDataEdit ======================
          path: 'FacetSide03EditPop',
          name: 'Facet Side : FacetSide03EditPop',
          component: FacetSide03EditPop,
        },
        { // == Header 기본 : layoutDataEdit ======================
          path: 'FacetSide04',
          name: 'Facet Side : FacetSide04',
          component: FacetSide04,
        },
      ],
    },

    { // 프로젝트 편집 - Edit Data
      path: '/',
      name: 'layoutDataPop',
      component: layoutDataPop,
      children: [
        { // == Header Export : layoutDataExport ======================
          path: 'DataEditPop',
          name: 'header & data edit pop menu',
          component: DataEditPop,
        },
      ]
    },
    {
    path: '/',
    redirect: 'login',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: 'FileProgress',
        name: '파일 가져오기 진행상황 표시',
        component: FileProgress,
      },
      {
        path: 'CircularProgress',
        name: '데이터 로딩',
        component: CircularProgress,
      },
      {
        path: 'CreateProject',
        name: '프로젝트 생성',
        component: CreateProject,
      },
      {
        path: 'ImportFile',
        name: '파일 가져오기',
        component: ImportFile,
      },
      {
        path: 'ImportDatabase',
        name: '데이터베이스 가져오기',
        component: ImportDatabase,
      },
      {
        path: 'ParseCSV',
        name: '프로젝트 생성 파싱',
        component: ParseCSV,
      },
      {
        path: 'Usersetting',
        name: 'UserSetting',
        component: Usersetting
      },
    ],
  },
    {
      path: '*',
      name: 'Error',
      component: Error
    }
  ],
});
