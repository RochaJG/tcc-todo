import Vue from 'vue'
import Router from 'vue-router'

// Views
import Todos from './views/Todos.vue'
import Concluidos from './views/Concluidos.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/todos',
    name: 'todos',
    component: Todos
  },
  {
    path: '/concluidos',
    name: 'concluidos',
    component: Concluidos
  },
  {
    path: '*',
    redirect: '/todos'
  }
  ]
})

export default router
