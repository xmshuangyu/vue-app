import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: '__dirname',
  routes:[
  {
    path: '/',
    redirect: '/secondcomponent'
  },
  {
    name: 'index',
    path:'/secondcomponent',
    component: require('../components/secondcomponent.vue'),
    
      },
    {
      path: '/first',
      name: 'list',
     component: require('../components/list.vue'),
   /*  children: [
        {
          path: '/PlanConfirm',
          name: 'home',
          component: require('../components/PlanConfirm.vue'),
        }
        ]*/
    },
    {
      path: '/PlanConfirm',
      name: 'PlanConfirm',
      component: require('../components/PlanConfirm.vue'),
    },
    {
      path: '/goInsureds',
      name: 'goInsureds',
      component: require('../components/goInsureds.vue'),
    },
    {
      path: '/beInsreds',
      name: 'beInsreds',
      component: require('../components/beInsreds.vue'),
    },
    {
      path: '/Inrocessof',
      name: 'Inrocessof',
      component: require('../components/Inrocessof.vue'),
    },
    {
      path: '/Pay',
      name: 'Pay',
      component: require('../components/Pay.vue'),
    }]
});


export default router;