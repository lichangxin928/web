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
    // 如果没有参数，或有多个参数就需要（）来定义参数列表
    // 如果有一个参数，可以不用（）
    // 如果函数体积中只有一条语句，可以不用{}，就不用使用 return 会自动加上
    // render: function(createfn){
    //     return createfn(App)
    // },
    // 这里的 c 表示create方法，c(App)则是表示返回语句只有这一行，不加花括号
    render:c => c(App),
    store:store,
    router:router
})
