import Main from '@/views/Main.vue'

export const otherRouter = {
  path: '/',
  component: Main,
  children: [
    {
      path: '/',
      redirect: 'resume_upload/upload'
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
      path: 'resume_upload/:step',
      title: '新简历',
      name: 'resume_upload',
      component: resolve => {
        require(['@/views/user/update.vue'], resolve)
      }
    },
    {
      path: 'dashboard/',
      title: '所有公司',
      name: 'dashboard',
      component: resolve => {
        require(['@/views/company/index.vue'], resolve)
      }
    },
    {
      path: 'dashboard/joborder/:id',
      title: '公司详情',
      name: 'company_detail',
      component: resolve => {
        require(['@/views/company/detail.vue'], resolve)
      }
    }
  ]
}

export const routers = [otherRouter, appRouter]
