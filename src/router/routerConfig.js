/*
 * Route config 高阶组件 路由守卫
 * - 不可嵌套
 * - 不可添加参数 /:id
 * */

import NotFound from "@/page/home/NotFound.js";
import AuthData from "@/router/AuthData.js";

import Home from "@/page/home/Index.js";
import Details from "@/page/test/Details.js";
import Tests from "@/page/test/Tests.js";

export const routerConfig = [
  {
    path: "/404",
    component: NotFound
  },
  {
    path: "/auth",
    component: AuthData
  },
  {
    path: "/",
    redirect: "/tests"
  },
  {
    path: "/home",
    component: Home,
    auth: true
  },
  {
    path: "/tests",
    component: Tests
  },
  {
    path: "/details",
    component: Details
  }
];
