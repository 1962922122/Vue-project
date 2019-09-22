import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
Vue.config.productionTip = false

//导入axios
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)



// 引入Mint Ui全部组件
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

//导入mui样式
import "./lib/dist/css/mui.min.css"
import "./lib/dist/css/icons-extra.css"



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
