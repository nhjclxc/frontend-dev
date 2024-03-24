
// 引入路由
import VueRouter from 'vue-router'

// 引入要使用路由的组件
import Hello from '../pages/Hello.vue'
import About from '../pages/about/About.vue'
import Home from '../pages/home/Home.vue'
import News from '../pages/home/news/News.vue'
import Message from '../pages/home/message/Message.vue'

// 配置路由规则
const router = new VueRouter({
    routes: [
        {
            // pages页面规则和路由规则同步
            // /就表示是pages根路径
            path: '/',
            component: Hello
        },
        {
            // pages页面规则和路由规则同步
            path: '/about',
            component: About
        },
        {
            // pages页面规则和路由规则同步
            // /home表示在pages的home下
            path: '/home',
            component: Home,
            // 配置home下面的子路由（嵌套路由、多级路由）
            children: [
                {
                    // pages页面规则和路由规则同步
                    // news表示在home下的路由，实际在用的使用要写：/home/news
                    // 注意这里的path不需要加/，vue-router在遍历children数组的时候会加上/
                    path: 'news',
                    component: News
                },
                {
                    // pages页面规则和路由规则同步
                    // message表示在home下的路由，实际在用的使用要写：/home/message
                    path: 'message',
                    component: Message
                }
            ]
        }
        
    ]
})

// 向外暴露路由
export default router