export default [
  {
    path: '/dashboard',
    children: [
      {
        path: '/profile',
        name: 'profile',
        meta: {
          requiresAuth: false
          // TODO this test , after test requiresAuth must be true
        },
        component: () =>
          import(
            /* webpackChunkName: "profile" */ '@/components/dashboard/Profile.vue'
          )
      },
      {
        path: '',
        name: 'dashboard',
        meta: {
          requiresAuth: false
          // TODO this test , after test requiresAuth must be true
        },
        component: () =>
          import(
            /* webpackChunkName: "home" */ '@/components/dashboard/home/Home.vue'
          )
      },
        {
            path: '/usersManagement',
            name: 'usersManagement',
            component: () =>
                import('@/components/dashboard/users/Users.vue')
        },
      {
        path: '/newProfile',
        name: 'usersManagement',
        component: () =>
            import('@/components/dashboard/Profile.vue')
      }
    ],
    meta: {
      requiresAuth: false
      // TODO this test , after test requiresAuth must be true
    },
    component: () =>
      import(
        /* webpackChunkName: "dashboard" */ '@/components/dashboard/Dashboard.vue'
      )
  }
]
