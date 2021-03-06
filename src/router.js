import Vue from 'vue'
import Router from 'vue-router'
import store from './store'

import Home from '@/components/statics/Home'
import Dashboard from '@/components/dashboard/Dashboard'
import Settings from '@/components/user/Settings'
import LogIn from '@/components/user/LogIn'
import SignUp from '@/components/user/SignUp'
import LogOut from '@/components/user/LogOut'
import Exercices from '@/components/exercices/Exercices'
import Exercice from '@/components/exercices/Exercice'
import Weights from '@/components/user/Weights'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'Log in',
      component: LogIn,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/signup',
      name: 'Sign up',
      component: SignUp,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/logout',
      name: 'Log out',
      component: LogOut,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/weights',
      name: 'Weights',
      component: Weights,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/exercices',
      name: 'Exercices',
      component: Exercices,
      meta: {
        requiresAuth: true
      }
    },
    {
      path:'/exercice/:id',
      name: 'Exercice',
      component: Exercice,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters['users/isLoggedIn']) {
      next('/login')
    } else {
      next()
    }
  } else {
    next()
  }

  if (!to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters['users/isLoggedIn']) {
      next('/dashboard')
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
