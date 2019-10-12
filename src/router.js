import Vue from 'vue'
import Router from 'vue-router'
import Logon from './pages/ligon/Logon.vue'//登录页面

Vue.use(Router)

export default new Router({
  routes: [
     {
      path: '/', 
      name: '', 
      component:Logon, //登录
      children:[
        {path:'/register',name:'', component: () => import( './pages/ligon/Register.vue')},//注册
        {path:'/retrieve',name:'', component: () => import( './pages/ligon/Retrieve.vue')},//找回密码
        {path:'/reset',name:'', component: () => import( './pages/ligon/Reset.vue')},//重置密码
      ]
    },
    {
      path: '/index', name: 'index', component: () => import( './pages/index/Index.vue'),//详细页面
      // meta:{requireAuth:true},//路由验证，路由守卫
      children:[
        {path:'/supersignature', name:"", component: () => import( './pages/index/Supersignature.vue')},//超级签名
        {path:'/corporatesignature', name:"",meta:{requireAuth:true}, component: () => import( './pages/index/Corporatesignature.vue')},//超级签名
        {path:'/appwrapping', name:"",meta:{requireAuth:true}, component: () => import( './pages/index/Appwrapping.vue')},//应用封装
        {path:'/inside', name:"",meta:{requireAuth:true}, component: () => import( './pages/index/Inside.vue')},//内侧分发
        {path:'/development', name:"",meta:{requireAuth:true}, component: () => import( './pages/index/Development.vue')},//开发论坛
        {path:'/tool', name:"",meta:{requireAuth:true}, component: () => import( './pages/index/Tool.vue')},//工具箱
        {path:'/aso', name:"",meta:{requireAuth:true}, component: () => import( './pages/index/ASO.vue')},//工具箱
        {path:'/document', name:"",meta:{requireAuth:true}, component: () => import( './pages/index/Document.vue')},//文档价格
        {path:'/forum', name:"", component: () => import( './pages/index/Forum.vue')},//工具箱
      ]
    },
   
  ]
})
