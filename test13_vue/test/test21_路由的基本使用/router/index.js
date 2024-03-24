
// 引入路由
import VueRouter from 'vue-router'

// 引入要使用路由的组件
import Home from '../components/Home'
import About from '../components/About'
import Hello from '../components/Hello'

// 配置路由规则
const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: Hello
        },
        {
            path: '/home',
            component: Home
        },
        {
            path: '/about',
            component: About
        }
    ]
})

// 向外暴露路由
export default router