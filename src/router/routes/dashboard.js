export default [
  {
    path: '',
    children: [
      {
        path: '/charts',
        name: 'charts',
        component: () => import('@/components/dashboard/Charts.vue')
      },
      {
        path: '/users',
        name: 'users',
        component: () => import('@/components/dashboard/Users.vue')
      },
    ],
    component: () =>
        import('@/views/Layout.vue')
  }
]
