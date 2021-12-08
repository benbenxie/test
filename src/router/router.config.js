/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/',
    component: () => import('@/views/layouts/index'),
    redirect: '/home',
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/home',
    component: () => import('@/views/home/index'),
    meta: {
      title: '首页',
      keepAlive: false
    }
  }
]
