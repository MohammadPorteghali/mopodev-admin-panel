export default [
  {
    path: '',
    children: [{
      path: '/charts',
      name: 'charts',
      component: () => import('@/components/dashboard/Charts.vue')
    }],
    component: () =>
      import('@/views/Dashboard.vue')
  }
]
