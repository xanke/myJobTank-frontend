import Main from '@/views/Main.vue'

// 作为Main组件的子页面展示但是不在左侧菜单显示的路由写在otherRouter里
export const otherRouter = {
  path: '/',
  name: 'otherRouter',
  component: Main,
  children: [
    {
      path: 'update',
      redirect: 'update/1'
    }
  ]
}

export const appRouter = {
  path: '/',
  name: 'otherRouter',
  component: Main,
  children: [
    {
      path: 'update/:step',
      title: '新简历',
      name: 'update',
      component: resolve => {
        require(['@/views/user/update.vue'], resolve)
      }
    },
    {
      path: 'company/',
      title: '所有公司',
      name: 'company',
      component: resolve => {
        require(['@/views/company/index.vue'], resolve)
      }
    },
    {
      path: 'company/:id',
      title: '公司详情',
      name: 'company_detail',
      component: resolve => {
        require(['@/views/company/detail.vue'], resolve)
      }
    }
  ]
}

// 所有上面定义的路由都要写在下面的routers里
export const routers = [
  otherRouter, 
  appRouter

]
