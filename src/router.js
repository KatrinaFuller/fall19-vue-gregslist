import Vue from 'vue'
import Router from 'vue-router'
import Cars from './views/Cars.vue'
import Houses from './views/Houses.vue'
import Jobs from "./views/Jobs.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/cars',
      name: 'cars',
      component: Cars
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function () {
        return import(/* webpackChunkName: "about" */ './views/About.vue')
      }
    },
    {
      path: '/cars/:carId',
      name: 'car',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function () {
        return import(/* webpackChunkName: "car" */ './views/Car.vue')
      }
    },
    {
      path: '*',
      redirect: '/cars'
    },
    {
      path: '/houses',
      name: 'houses',
      component: Houses
    },
    {
      path: '/houses/:houseId',
      name: 'house',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function () {
        return import(/* webpackChunkName: "house" */ './views/House.vue')
      }
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: Jobs
    },
    {
      path: '/jobs/:jobId',
      name: 'job',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function () {
        return import(/* webpackChunkName: "job" */ './views/Job.vue')
      }
    }
  ]
})
