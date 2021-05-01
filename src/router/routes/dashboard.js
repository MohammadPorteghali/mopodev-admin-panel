export default [
  {
    path: '',
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('@/components/dashboard/Dashboard.vue')
      },
      {
        path: '/users',
        name: 'users',
        component: () => import('@/components/dashboard/Users.vue')
      },{
        path: '/profile',
        name: 'profile',
        component: () => import('@/components/dashboard/Profile.vue')
      },
    ],
    component: () =>
        import('@/views/Layout.vue')
  }
]
