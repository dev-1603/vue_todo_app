
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Todo.vue') },
      //{ path: '/help', component: () => import('pages/help.vue') },
     // { path: '/excel', component: () => import('pages/excel.vue') },
     // { path: '/spread', component: () => import('pages/spread.vue') },
     // { path: '/webix', component: () => import('pages/webix.vue') },
      //{ path: '/sample', component: () => import('pages/sample.vue') }


    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
