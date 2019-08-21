import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import City from '@/components/city/City'
import Search from '@/components/search/Search'
import Detail from '@/components/detail/Detail'
import Banner from '@/banner/banner'
import Celebra from '@/components/celebra/celebra'
import PayMent from '@/components/payment/PayMent'
import GetMoney from '@/components/getmoney/GetMoney'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/city',
      name: 'City',
      component: City
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/banner',
      name: 'Banner',
      component: Banner
    },
    {
      path: '/celebra/:id',
      name: 'Celebra',
      component: Celebra,
    },
    {
      path: '/payment',
      name: 'PayMent',
      component: PayMent
    },
    {
      path: '/getmoney',
      name: GetMoney,
      component: GetMoney
    }
  ]
})
