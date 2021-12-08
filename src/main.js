// 兼容 IE
// https://github.com/zloirock/core-js/blob/master/docs/2019-03-19-core-js-3-babel-and-a-look-into-the-future.md#babelpolyfill
import 'core-js/stable'
import 'regenerator-runtime/runtime'
// import 'babel-polyfill' // 兼容winphone ie
// import VueQuillEditor from 'vue-quill-editor'

// require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vconsole from 'vconsole'
// 设置 js中可以访问 $cdn
import { $cdn } from '@/config'
// 全局引入按需引入UI库 vant
import '@/plugins/vant'
// 引入全局样式
import '@/assets/css/index.scss'
// 移动端适配
import 'lib-flexible/flexible.js'
// filters
import './filters'

// Vue.use(VueQuillEditor, {
//   placeholder: '请输入内容'
// })
if (process.env.NODE_ENV === 'development') {
  new Vconsole()
}
Vue.prototype.$cdn = $cdn

Vue.config.productionTip = false

window.all = 100

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
