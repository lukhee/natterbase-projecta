import Vue from 'vue'
import Router from 'vue-router'
import homePage from '@/components/homePage.vue'
import catPage from '@/components/catPage.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: homePage
    },
    {
      path: '/catPage/:category',
      name: 'catPage',
      component: catPage
    }
  ]
})
