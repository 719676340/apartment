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
        }
    ]
})

export default router