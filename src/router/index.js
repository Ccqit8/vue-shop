import Vue from 'vue';
import Router from 'vue-router';

import beforeEach from './beforEach';
import Login from '../components/login/Login.vue';
import Store from '../components/store/Store.vue';
import GoodsDetail from '../components/store/goods/Detail.vue';
import GoodsList from '../components/store/goods/List.vue';
import OrderCommit from '../components/store/order/Commit.vue';
import OrderPay from '../components/store/order/Pay.vue';
import ShoopCart from '../components/store/shopcart/ShoopCart.vue';
Vue.use(Router);
var router = new Router({
  routes: [
    // { name: 'index', path: '/', redirect: '/goods/list' },
    // 登录
    {
      name: 'login',
      path: '/login',
      component: Login
    },
    {
      name: 'store',
      path: '/',
      component: Store,
      children: [
        // 商品详情
        {
          name: 'goodsDetail',
          path: 'goods/detail/:id',
          component: GoodsDetail
        },
        // 订单提交
        {
          name: 'orderCommit',
          path: 'order/commit',
          component: OrderCommit
        },
        // 
        {
          name: 'shopCart',
          path: 'shopcart',
          component: ShoopCart
        },
        // 商品列表
        {
          name: 'goodsList',
          path: 'goods/list',
          component: GoodsList
        },
        // 
        {
          name: 'orderPay',
          path: 'order/pay',
          component: OrderPay
        },
      ]
    }


  ]
});
router.beforeEach(beforeEach);
export default router;
