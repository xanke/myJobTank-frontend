import Main from '@/views/Main.vue'

export const otherRouter = {
  path: '/',
  component: Main,
  children: [
    {
      path: '/',
      redirect: 'update/1'
    }
  ]
}

export const routerMap = [

]



export const appRouter = {
  path: '/',
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

export const routers = [otherRouter, appRouter]
