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
                },
                {
                    path:'apartmentchange',
                    component: ()=>import('../views/adminapartmentchange.vue'),
                },
                {
                    path:'apartmentout',
                    component:()=>import('../views/adminapartmentout.vue')
                },
                {
                    path:'apartmentin',
                    component:()=>import('../views/adminapartmentin.vue')
                },
                {
                    path:'apartmentquery',
                    component:()=>import('../views/adminapartmentquery.vue')
                },
                {
                    path:'fixinfo',
                    component:()=>import('../views/adminfixinfo.vue')
                },
                {
                    path:'apartmentinfo',
                    component:()=>import('../views/adminapartmentinfo.vue')
                },
                {
                    path:'stuinfo',
                    component:()=>import('../views/adminstuinfo.vue')
                },
                {
                    path:'money',
                    component:()=>import('../views/adminmoney.vue')
                }
            ]
        },
        {
            path:'/stu/',
            name:'stu',
            component: ()=>import('../views/stu.vue'),
            children:[
                {
                    path:'fixinfo',
                    component: ()=>import('../views/stufixinfo.vue'),
                },
                {
                    path:'apartmentout',
                    component: ()=>import('../views/stuapartmentout.vue'),
                },
                {
                    path:'apartmentin',
                    component: ()=>import('../views/stuapartmentin.vue'),
                },
                {
                    path:'apartmentchoose',
                    component: ()=>import('../views/stuapartmentchoose.vue')
                },
                {
                    path:'apartmentadjust',
                    component: ()=>import('../views/stuapartmentadjust.vue')
                },
                {
                    path:'stuinfo',
                    component: ()=>import('../views/stuinfo.vue')
                },
                {
                    path:'myinfo',
                    component: ()=>import('../views/stumyinfo.vue')
                },
                {
                    path:'money',
                    component: ()=>import('../views/stumoney.vue')
                }
            ]
        }
    ]
})

export default router