import Vue from 'vue'
import App from './App.vue'
import store from './store/index.js'
import router from './router/index.js'
// 导入 elementui
// import ElementUI from 'element-ui'
import {Row,Button,Switch} from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// 使用elementui
Vue.use(Row).use(Button).use(Switch)
/* eslint-disable no-new */
new Vue({
    el: '#app',
    render: c => c(App),
    store:store,
    router:router
})
