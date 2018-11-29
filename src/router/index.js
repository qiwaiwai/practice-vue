import Vue from 'vue'
import Router from 'vue-router'
const home = r=>require.ensure([],()=>r(require('../page/home/home')),'home')
const city = r=>require.ensure([],()=>r(require('../page/city/city')),'city')
const login = r=>require.ensure([],()=>r(require('../page/login/login')),'login')
const profile = r=>require.ensure([],()=>r(require('../page/profile/profile')),'profile')
const msite = r => require.ensure([], () => r(require('../page/msite/msite')), 'msite')
const food = r => require.ensure([], () => r(require('../page/food/food')), 'food')
const shop = r => require.ensure([], () => r(require('../page/shop/shop')), 'shop')
const foodDetail = r => require.ensure([], () => r(require('../page/shop/children/foodDetail')), 'foodDetail')
const shopDetail = r => require.ensure([], () => r(require('../page/shop/children/shopDetail')), 'shopDetail')
const confirmOrder = r => require.ensure([], () => r(require('../page/confirmOrder/confirmOrder')), 'confirmOrder')
const remark = r => require.ensure([], () => r(require('../page/confirmOrder/children/remark')), 'remark')
const chooseAddress = r => require.ensure([], () => r(require('../page/confirmOrder/children/chooseAddress')), 'chooseAddress')
const payment = r => require.ensure([], () => r(require('../page/confirmOrder/children/payment')), 'payment')
const order = r=>require.ensure([],()=>r(require('../page/order/order')),'order')
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
    },
    //商铺列表页
    {
      path:'/food',
      component:food
    },
    //商铺详情页
    {
      path:'/shop',
      component:shop,
      children:[{
        path:'foodDetail',
        component:foodDetail
      },{
        path:'shopDetail',
        component:shopDetail
      }]
    },
    //确认订单页
    {
      path:'/confirmOrder',
      component:confirmOrder,
      children:[{
          path:'remark',
          component:remark
        },{
          path:'chooseAddress',
          component:chooseAddress
        },{
          path:'payment',
          component:payment
        }
      ]
    },
    //订单列表页
    {
      path:'/order',
      component:order,
      children:[]
    }
  ]
})
