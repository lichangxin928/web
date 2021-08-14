import Vue from "vue";
import Router from 'vue-router';
import One from '../components/One.vue';
import Two from '../components/Two.vue'
Vue.use(Router);
const routes = [
    {path:'/one',component:One},
    {path:'/two',component:Two}
];

const router = new Router({
    routes:routes
})
export default router