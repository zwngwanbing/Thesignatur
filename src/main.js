import Vue from 'vue'
import App from './App.vue'
import router from './router'

//element ui 模块引入
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//echartsjs模块引入
import echarts from 'echarts'

//配置路由验证
router.beforeEach((to, from, next) => {
  if(to.meta.requireAuth){
      //如果调用next() 就会直接跳转到对应url
      //如果想让它跳转到其他页面,就在next('/test')中传入要跳转的hash地址
      next('/ligon')
  }else{
      //没有开启路由验证
      next()  //放行 让他跳转
  }
  })

Vue.config.productionTip = false

Vue.use(ElementUI)//全局注册element ui
Vue.prototype.$echarts = echarts//全局注册echartsjs


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
