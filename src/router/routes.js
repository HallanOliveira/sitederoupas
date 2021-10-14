
const routes = [
  {
    path: '',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/~', component: () => import('pages/Index.vue') },
      { path: 'rota01.vue', component: () => import('pages/rota01.vue') },
      { path: 'teste3', component: () => import('pages/teste3.vue') },
      { path: 'teste4', component: () => import('pages/teste4.vue') },
      { path: 'teste5', component: () => import('pages/teste5.vue') }

    ]
  },
  {
    path: '/estoque',
    component: () => import('layouts/testeLayout.vue'),
    children: [
    
      { path: 'teste2', component: () => import('pages/teste2.vue') },
  
  
  

    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
