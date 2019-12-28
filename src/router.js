import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)
/**
 * bug:修复router的promise问题。
 * 也可以install @3.1.1意思的router也可以解决这个问题
 */
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


const router = new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/login',
      name:'login',
      component:() => import('./views/login.vue'),
      meta:{ isPublic:true,name:'登陆页'}
    },
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect:{path:'/homepage'},
      children:[
        //首页
        {
          path: '/homepage',
          name: 'homepage',
          component: () => import('./views/homepage.vue'),
          meta:{name:'管理首页',tab:true}
        },
 
        // 商品
        {
          path: '/goodsAdd',
          name: 'goodsAdd',
          component: () => import('./views/Goods/goodsAdd.vue'),
          meta:{name:'编辑商品',tab:true}
        },
        {
          path: '/goodsEdit/:id',
          name: 'goodsEdit',
          component: () => import('./views/Goods/goodsAdd.vue'),
          props:true,
          meta:{name:'编辑商品',tab:true}
        },
        {
          path: '/goodsList',
          name: 'goodsList',
          component: () => import('./views/Goods/goodsList.vue'),
          meta:{name:'商品列表',tab:true}
        },
        //文章
        {
          path: '/articleClassAdd',
          name: 'articleClassAdd',
          component: () => import('./views/Article/articleClassAdd.vue'),
          meta:{name:'添加文章类别',tab:true}
        },
        {
          path: '/articleClassEdit/:id',
          name: 'articleClassEdit',
          component: () => import('./views/Article/articleClassAdd.vue'),
          meta:{name:'修改文章类别',tab:true},
          props:true,
        },
        {
          path: '/articleClassList',
          name: 'articleClassList',
          component: () => import('./views/Article/articleClassList.vue'),
          meta:{name:'文章类别列表',tab:true}
        },
        {
          path: '/articleAdd',
          name: 'articleAdd',
          component: () => import('./views/Article/articleAdd.vue'),
          meta:{name:'添加文章',tab:true}
        },
        {
          path: '/articleEdit/:id',
          name: 'articleEdit',
          component: () => import('./views/Article/articleAdd.vue'),
          props:true,
          meta:{name:'修改文章',tab:true}
        },
        {
          path: '/articleList',
          name: 'articleList',
          component: () => import('./views/Article/articleList.vue'),
          meta:{name:'文章列表',tab:true}
        },
        //管理员
        {
          path: '/adminAdd',
          name: 'adminAdd',
          component: () => import('./views/AdminUser/adminAdd.vue'),
          meta:{name:'添加管理员',tab:true}
        },
        {
          path: '/adminEdit/:id',
          name: 'adminEdit',
          component: () => import('./views/AdminUser/adminAdd.vue'),
          props:true,
          meta:{name:'修改管理员',tab:true}
        },
        {
          path: '/adminList',
          name: 'adminList',
          component: () => import('./views/AdminUser/adminList.vue'),
          meta:{name:'管理员列表',tab:true}
        },
       
        //mobile账户
        {
          path: '/accountList',
          name: 'accountList',
          component: () => import('./views/Account/accountList.vue'),
          meta:{name:'用户列表',tab:true}
        },
      ]
    },
    {path:'/404',name:'404',component:()=>import('./views/404/index.vue')},
    {path:'*',redirect:'/404'},
  ]
})

router.beforeEach((to,from,next)=>{
  // if(!to.meta.isPublic && !sessionStorage.token){
  //   return next('/login')
  // }
  
  window.document.title = '农商服务平台-'+to.meta.name || '农产品电商服务平台'
  next()
})


export default router