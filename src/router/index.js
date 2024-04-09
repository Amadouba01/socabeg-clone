import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PropertyPromotion from '../views/PropertyPromotion.vue'
import PropertyDetailsView from '../views/PropertyDetailsView.vue'


Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {  
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/property-promotion',
      name: 'PropertyPromotion',
      component: PropertyPromotion,
    },
    {
      path: '/property-promotion/:slug',
      name: 'PropertyDetailsView',
      component: PropertyDetailsView,
    },
    
    
  ]
})

export default router
