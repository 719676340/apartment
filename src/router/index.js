import { createRouter, createWebHashHistory } from 'vue-router'

const router=createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:'/',
            // redirect:'/login'
            component: ()=>import('../views/Login.vue')
        },
        {
            path:'/login',
            name:'login',
            component: ()=>import('../views/Login.vue')
        },
        {
            path:'/introduce',
            name:'introduce',
            component: ()=>import('../views/Introduce.vue')
        },
        {
            path:'/admin/',
            name:'admin',
            component: ()=>import('../views/admin.vue'),
            children:[
                {
                    path: 'visitor',
                    component: ()=>import('../views/visitor.vue'),
                }
            ]

        }
    ]
})

export default router