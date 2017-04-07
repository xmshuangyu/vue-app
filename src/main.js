// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from "vue-router"
import router from './router'
import VueResource from 'vue-resource';
import secondcomponent from './components/secondcomponent.vue'
import test from './components/test.vue'
import PlanConfirm from './components/PlanConfirm.vue'
import bus from 'bus.js'
import MintUI from 'mint-ui'
import $ from 'jquery'

Vue.config.productionTip = false
Vue.use(VueResource);
Vue.use(MintUI);
import 'mint-ui/lib/style.css'
/* eslint-disable no-new */


// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
const app = new Vue({
  router: router,
  data() {
      return {
        state: store.state // 所有子組件通通可以利用 this.$root.state 取得該對象
    }
  },
  render: h => h(App)
}).$mount('#app')