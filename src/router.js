import Vue from 'vue'
import Router from 'vue-router'
import Lndex from './pages/index/Index.vue'//登录页面

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Lndex,//首页
      children:[
        {path:'/supersignature', name:"Supersignature", component: () => import( './pages/index/Supersignature.vue')},//超级签名
        {path:'/corporatesignature', name:"corporatesignature", component: () => import( './pages/index/Corporatesignature.vue')},//超级签名
        {path:'/appwrapping', name:"appwrapping", component: () => import( './pages/index/Appwrapping.vue')},//应用封装
        {path:'/inside', name:"inside", component: () => import( './pages/index/Inside.vue')},//内侧分发
        {path:'/development', name:"development", component: () => import( './pages/index/Development.vue')},//开发论坛
        {path:'/tool', name:"tool", component: () => import( './pages/index/Tool.vue')},//工具箱
        {path:'/aso', name:"aso", component: () => import( './pages/index/ASO.vue')},//工具箱
        {path:'/document', name:"document", component: () => import( './pages/index/Document.vue')},//文档价格
        {path:'/forum', name:"forum", component: () => import( './pages/index/Forum.vue')},//工具箱
      ]
    },
    {
      path: '/ligon', name: 'ligon', component: () => import( './pages/ligon/Logon.vue'),//登录
      children:[
        {path:'/register',name:'register', component: () => import( './pages/ligon/Register.vue')},//注册
        {path:'/retrieve',name:'retrieve', component: () => import( './pages/ligon/Retrieve.vue')},//找回密码
        {path:'/reset',name:'reset', component: () => import( './pages/ligon/Reset.vue')},//重置密码
      ]
    }
  ]
})
