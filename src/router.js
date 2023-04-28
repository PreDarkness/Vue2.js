import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [{

        path: '/index',
        component: () => import('./pages/index.vue')

    }, {

        // 默认路由
        path: "/*",
        redirect: 'index'

    }]
});
