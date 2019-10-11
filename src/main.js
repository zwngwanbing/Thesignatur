import Vue from 'vue'
import App from './App.vue'
import router from './router'

//element ui 模块引入
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//echartsjs模块引入
import echarts from 'echarts'

Vue.config.productionTip = false

Vue.use(ElementUI)//全局注册element ui
Vue.prototype.$echarts = echarts//全局注册echartsjs


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
