import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            meta: {title: 'hello world', requireAuth: false},
            path: '/index',
            name: 'HelloWorld',
            component: (resovle) => { require(['./components/HelloWorld.vue'], resovle) }
        }
    ]
})

router.beforeEach((to, from, next) => {
    // 登录验证，进入路由前的处理......
    next()
})

export default router
