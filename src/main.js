import Vue from 'vue'
import router from './router.js'
import store from './store'
import http from './http.js'
import './assets/less/main.less'
import 'vant/lib/index.css'
import { Toast  } from 'vant'

Vue.prototype.toast = Toast
Vue.prototype.http = http
Vue.config.productionTip = false

new Vue({
    el: '#app',
    router,
    store,
    template: '<router-view />'
})