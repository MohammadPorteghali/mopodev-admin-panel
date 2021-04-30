export default [
  {
    path: '*',
    component: () =>
      import('@/components/NotFound.vue')
  }
]
