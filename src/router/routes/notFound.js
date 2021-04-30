export default [
  {
    path: '*',
    component: () =>
      import('@/components/core/NotFound.vue')
  }
]
