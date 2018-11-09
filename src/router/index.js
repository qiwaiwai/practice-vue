import Vue from 'vue'
import Router from 'vue-router'
const home = r=>require.ensure([],()=>r(require('../page/home/home')),'home')
const city = r=>require.ensure([],()=>r(require('../page/city/city')),'city')
const login = r=>require.ensure([],()=>r(require('../page/login/login')),'login')
const profile = r=>require.ensure([],()=>r(require('../page/profile/profile')),'profile')
const msite = r => require.ensure([], () => r(require('../page/msite/msite')), 'msite')
Vue.use(Router)

export default new Router({
  routes: [
    //地址为空时跳转home
    {
      path: '',
      redirect:'/home'
    },
    //首页城市列表页
    {
      path:'/home',
      component:home
    },
    //当前选择城市页
    {
      path:'/city/:cityid',
      component:city
    },
    //登录注册页
    {
      path:'/login',
      component:login
    },
    //个人信息页
    {
      path:'/profile',
      component:profile
    },
    //所有商铺列表页
    {
      path:'/msite',
      component:msite,
      meta:{keepAlive: true}
    }
  ]
})
