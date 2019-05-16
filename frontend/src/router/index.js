import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import Vchars from '../components/echars'
import Demo1 from '../components/demo1'
import Demo2 from '../components/demo2'
import Demo3 from '../components/demo3'
import HighChartsColumnRange from '../charts/HighChartsColumnRange'
import JStatTest from '../components/JStatTest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/v',
      name: 'Vchars',
      component: Vchars
    },
    {
      path: '/demo1',
      name: 'Demo1',
      component: Demo1
    },
    {
      path: '/demo2',
      name: 'Demo2',
      component: Demo2
    },
    {
      path: '/demo3',
      name: 'Demo3',
      component: Demo3
    },
    {
      path: '/range',
      name: 'HighChartsColumnRange',
      component: HighChartsColumnRange
    },
    {
      path: '/j',
      name: 'JStatTest',
      component: JStatTest
    }
  ]
})
