import Vue from 'vue';
import Router from 'vue-router';

// component
import Layout from '@/components/Layout/Layout';
import LayoutFull from '@/components/LayoutFull/LayoutFull';

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


import DataEdit from '@/pages/Project/DataEdit';
import Import from '@/pages/Import/Import';
import Typography from '@/pages/Typography/Typography'
import Tables from '@/pages/Tables/Basic'
import Notifications from '@/pages/Notifications/Notifications'
import Icons from '@/pages/Icons/Icons'
import Charts from '@/pages/Charts/Charts'
import Error from "@/pages/Error/Error";
import Login from "@/pages/Login/Login";
import CreateAccount from "@/pages/CreateAccount/CreateAccount";
import ResetPassword from "@/pages/ResetPassword/ResetPassword";
import ProjectList from "@/pages/ProjectList/ProjectList";

Vue.use(Router);

// [FCM004] 라우팅 기능 구현
export default new Router({
  routes: [
    {
      path: '/',
      name: 'LayoutFull',
      component: LayoutFull,
      children: [
        {
          path: 'work',
          name: 'work',
          component: Work,
        },
        {
          path: 'Login',
          name: 'Logn',
          component: Login,
        },
        {
          path: 'CreateAccount',
          name: 'Create Account',
          component: CreateAccount,
        },
        {
          path: 'ResetPassword',
          name: 'Reset Password',
          component: ResetPassword,
        },
        {
          path: 'PageProgress',
          name: 'Page Progress',
          component: PageProgress,
        },
      ],
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
        path: 'DataEdit',
        name: '데이터 편집',
        component: DataEdit,
      },
      {
        path: 'import',
        name: '데이터 불러오기',
        component: Import,
      },
      {
        path: 'typography',
        name: 'Typography',
        component: Typography,
      },
      {
        path: 'tables',
        name: 'Tables',
        component: Tables
      },
      {
        path: 'notifications',
        name: 'Notifications',
        component: Notifications
      },
      {
        path: 'icons',
        name: 'Icons',
        component: Icons
      },
      {
        path: 'charts',
        name: 'Charts',
        component: Charts
      },
      {
        path: 'projectlist',
        name: 'ProjectList',
        component: ProjectList
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
