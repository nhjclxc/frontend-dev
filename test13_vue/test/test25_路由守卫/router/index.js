
// 引入路由
import VueRouter from 'vue-router'

// 引入要使用路由的组件
import Hello from '../pages/Hello.vue'
import About from '../pages/about/About.vue'
import Home from '../pages/home/Home.vue'
import News from '../pages/home/news/News.vue'
import Message from '../pages/home/message/Message.vue'
import MessageDetail from '../pages/home/message/MessageDetail.vue'

// 配置路由规则
const router = new VueRouter({
    routes: [
        {
            // pages页面规则和路由规则同步
            // /就表示是pages根路径
            name: 'HelloRouter',
            path: '/',
            meta: {title: '欢迎使用'},
            component: Hello
        },
        {
            name: 'AboutRouter',
            path: '/about',
            meta: {title: '关于'},
            component: About,
        },
        {
            name: 'HomeRouter',
            path: '/home',
            meta: {title: '主页'},
            component: Home,
            // 3、独享路由守卫
            beforeEnter: (to, from, next) => {
                // ...
                console.log('关于的beforeEnter');
                next()
            },
            children: [
                {
                    // 注意这里的path不需要加/，vue-router在遍历children数组的时候会加上/
                    name: 'NewsRouter',
                    path: 'news',
                    meta: {title: '新闻'},
                    component: News,
                    children: [
                        {
                            name: 'NewsDetailRouter',
                            // path: 'detail',
                            path: 'detail/:id/:title',
                            // component: NewsDetail
                            component: () => import('../pages/home/news/NewsDetail.vue')

                        }
                    ]
                },
                {
                    name: 'MessageRouter',
                    path: 'message',
                    component: Message,
                    children: [
                        {
                            name: 'MessageDetailRouter',
                            path: 'detail',
                            component: MessageDetail
                        }
                    ]
                }
            ]
        }
        
    ]
})

/**
 * 路由守卫
 * 1、前置路由守卫
 * 2、后置路由守卫
 * 3、独享路由守卫
 * 4、组件内路由守卫 [ '../pages/about/About.vue']
 * 
 * 注意: 只要使用了前置路由守卫、独享路由守卫和组件内路由守卫,那么里面的next()不调用的话,无法进行组件路由切换【要在合适的时候调用next()来进行路由切换】
 */

// 通过路由守卫来控制哪些页面可以被查看
// 通过输入框【\components\PageHeader.vue】来模拟登录过程，如果输入的username不是admin或root
// 那么不允许查看home下面的其他路由组件，

// 1、前置路由守卫
// beforeEach是前置路由守卫,在路由组件切换之前由vue-router来调用
router.beforeEach((to, from, next) => {
    // to and from are both route objects. must call `next`.
    // console.log('to', to);
    // console.log('from', from);
    // console.log('next', next);

    // 定义正则表达式
    var regex = /^\/home\//;

    // console.log('to.path', to.path);
    if (regex.test(to.path)) {
        console.log('目标路由要去往：/home/*');
        // 如果是要去主页的路由，那么就进行身份验证，身份数据在window.username上
        let username = window.username
        if (!username){
            // 如果username没值提示去输入框登录
            confirm('请先登录')
            return 
        }
        if ( ! (username === 'admin' || username === 'root')) {
            confirm('你不是管理员,无权限查看主页下的内容')
            // 如果不是admin或root直接退出，表示本次路由不进行转发
            return 
        }
    }
    // 目标路由不是/home/*下的，或权限验证通过，则进行路由转发
    next()


})

// 2、后置路由守卫
// afterEach是后置路由守卫,在路由组件切换之后由vue-router来调用,
// 路由切换完成之后来做一些事情,这里模拟切换html野蛮标题
router.afterEach((to, from) => {
    // to and from are both route objects.
    // console.log('to', to);
    // console.log('from', from);

    document.title = to.meta.title || '路由测试'

})




// 向外暴露路由
export default router