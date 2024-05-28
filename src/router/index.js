import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// // 선언
// import HomeView from "../views/HomeView.vue";


// const routes = [
//   {
//     path: "/",
//     name: "home",
//     component: HomeView,
//   },
//   {
//     path: "/about",
//     name: "about",
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () =>
//       import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
//   },
// ];

const Users = {
  template: `
    <div class="user">
      <h2>User</h2>
    </div>
  `
}
// 라우터 설계
const routes = [
  { 
    path: "/ge/", 
    name: "Layout",
    component: () => import("@/components/Layout"),
    children: [
      { 
        path: "list",
        name: "List",
        component: () => import("@/views/Index")
      },
      { 
        path: "FirstView",
        name: "FirstView",
        component: () => import("@/views/FirstView")
      },
      { 
        path: "SecondView",
        name: "SecondView",
        component: () => import("@/views/SecondView")
      },
      { 
        path: "bong",
        name: "Bong",
        component: () => import("@/views/Bong")
      },
      { 
        path: "modal",
        name: "modal",
        component: () => import("@/views/Modal")
      },
      { 
        path: "user",
        name: "User",
        component: Users 
      },
    ]
  },
  { 
    path: "/",
    name: "Index",
    component: () => import("@/views/Index")
  },
  { 
    path: "/store",
    name: "store",
    component: () => import("@/views/Store")
  },
  { 
    path: "/m1",
    name: "m1",
    component: () => import("@/views/UserProfile")
  },
  { 
    path: "/m2",
    name: "m2",
    component: () => import("@/views/PostList")
  },
  { 
    path: "/m3",
    name: "m3",
    component: () => import("@/views/Login")
  },
];


// 라우터 생성
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// 라우터 추출 (main.js에서 import)
export default router;
