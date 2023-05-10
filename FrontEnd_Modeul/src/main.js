import App from "./App.vue";
import { createApp } from "vue";
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'
import { createRouter, createWebHashHistory } from "vue-router";

import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import "@mdi/font/css/materialdesignicons.css";

const vuetify = createVuetify({
  components,
  directives
  // theme: { defaultTheme: 'light' },
});

import Layout from "./components/Layout.vue";
import Index from "./components/Index.vue";
import Signup from "./components/Signup.vue";
import Login from "./components/Login.vue";
import Chat from "./components/Chat.vue";
import FindPwd from "./components/FindPwd.vue";
import FindId from "./components/FindId.vue";

import MyPage from './components/member/MyPage.vue';
import MypageEdit from './components/member/MypageEdit.vue';
import ChangePwd from './components/member/ChangePwd.vue';
import Favorite from './components/member/Favorite.vue';

import MemberLayout from "./components/member/Layout.vue"; // 그냥 Layout이라고 또 쓸 수도 있다?
import List from "./components/member/stuff/List.vue";
import MyRegList from "./components/member/stuff/MyRegList.vue";
import MyDutchList from "./components/member/stuff/MyDutchList.vue";
import Detail from "./components/member/stuff/Detail.vue";
import Reg from "./components/member/stuff/Reg.vue";
import CrawlingReg from "./components/member/stuff/CrawlingReg.vue";
import EditReg from "./components/member/stuff/EditReg.vue";
import ListSearch from "./components/member/stuff/ListSearch.vue";
import CrawlingList from "./components/member/stuff/CrawlingList.vue";
import Gps from "./components/member/stuff/Gps.vue";
import ParticipationList from "./components/member/participation/List.vue";

import AdminLayout from "./components/admin/Layout.vue";
import AdminLogin from "./components/admin/Login.vue";
import AdminIndex from "./components/admin/Index.vue";

import MemberList from "./components/admin/member/List.vue";
import StuffList from "./components/admin/stuff/List.vue";
import CategoryList from "./components/admin/category/List.vue";
import Analytics from "./components/admin/analytics/List.vue";
import ReportList from "./components/admin/report/List.vue";

const routes = [
  {
    path: "/",
    component: Layout,
    children: [
      { path: "index", component: Index },
      { path: "login", component: Login },
      { path: "login/findpwd", component: FindPwd },
      { path: "login/findid", component: FindId },
      { path: "signup", component: Signup },
      { path: "chat/:stuffId/:memberId", component: Chat }
    ]
  },
  {
    path: "/member",
    component: MemberLayout,
    children: [
      { path: "mypage", component: MyPage },
      { path: "mypage/edit", component: MypageEdit },
      { path: "mypage/changepwd", component: ChangePwd },
			{ path: 'mypage/favorite', component: Favorite },
      { path: "mypage/myreglist", component: MyRegList },
      { path: "mypage/mydutchlist", component: MyDutchList },
      { path: "stuff/list", component: List },
      { path: "stuff/:id", component: Detail },
      { path: "stuff/reg", component: Reg },
      { path: "stuff/crawlingreg", component: CrawlingReg },
      { path: "stuff/edit/:id", component: EditReg },
      { path: "stuff/listsearch", component: ListSearch },
      { path: "stuff/recommends", component: CrawlingList },
      { path: "stuff/gps", component: Gps },
      { path: "participation/list", component: ParticipationList }
    ]
  },
  { path: "/admin/login", component: AdminLogin },
  {
    path: "/admin",
    component: AdminLayout,
    children: [
      { path: "index", component: AdminIndex },
      { path: "member/list", component: MemberList },
      { path: "stuff/list", component: StuffList },
      { path: "category/list", component: CategoryList },
      { path: "report/list", component: ReportList }
      // { path: "analytics/list", component: Analytics }
    ]
  }
];

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  // router 기록!
  history: createWebHashHistory(),
  routes // short for `routes: routes`
});

const pinia = createPinia();
pinia.use(piniaPersist);

// 이제는 .js파일이 아니라 뷰엔진(변환기!!)이 들어간 .vue 파일을 이용한다.
createApp(App).use(router).use(vuetify).use(pinia).mount("#app");
