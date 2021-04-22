<template>
  <div class='header clearfix'>
      <div class="head-left">
          {{name}}
      </div>
      <div class="head-right">
          <el-popover placement='bottom' :width="160">
                <p>用户退出</p>
                <div style="text-align: right; margin: 0">
                  <el-button type="primary" size="mini" @click="logout"><span class="wordcolor">确定</span></el-button>
                </div>              
              <template #reference>
                <div class="info">
                    <span><i class="iconfont  icon-touxiang"></i></span>
                    <span class="infoname">{{userinfo}}</span>
                </div>
              </template>
          </el-popover>
      </div>
  </div>    
</template>

<script>
import {onMounted, reactive, toRefs } from 'vue'
import {useRouter} from 'vue-router'
import {localRemove} from '../utils/index'
// import { useStore } from 'vuex'
import axios from '../utils/axios'

export default {
  name: 'Header',
  setup(){
    // const store=new useStore()
    const state=reactive({
        name:'标题',
        userinfo:'名字测试'
    })
    const router=useRouter()
    const pathmap=[
        {
            visitor:'访客信息登记',
            apartmentchange:'宿舍调整',
            apartmentout:'学生退宿',
            apartmentin:'学生入住',
            apartmentquery:'宿舍分配查询',
            apartmentallocation:'宿舍分配',
            fixinfo:'维修信息查看',
            apartmentinfo:'住宿情况查询',
            stuinfo:'学生信息查询',
            money:'缴费'
        },
        {
            fixinfo:'维修登记',
            apartmentout:'退宿申请',
            apartmentin:'入住登记',
            apartmentchoose:'宿舍选择',
            apartmentadjust:'调换宿舍申请',
            stuinfo:'信息补全',
            myinfo:'信息查询',
            money:'缴费'
        }
    ]
    const logout=async function(){
        localRemove('token')
        await axios.get('logintableout')
        router.push({ path: '/login' })
    }
    const getname=async function(){
        await axios.get('/getlogintable').then((res)=>{
            if(res.data.data[0].type){
                axios.post('/getusername',{
                    id:res.data.data[0].id
                }).then((res)=>{
                    state.userinfo=res.data.data[0].name
                })
            }else{
                state.userinfo=res.data.data[0].id
            }
        })

    }
    router.afterEach((to)=>{
        let path=to.fullPath.split('/')
        if(path[1]=='admin'){
            state.name=pathmap[0][path[2]]
        }else{
            state.name=pathmap[1][path[2]]
        }
    })
    onMounted(()=>{
        getname()
    })
    return {
        ...toRefs(state),
        pathmap,
        logout,
        getname
    }
  }
}
</script>
<style>
.header{
    position: relative;
    width: 100%;
    height: 100%;
    box-shadow: 0 2px 10px rgb(0 0 0/15%);
}
.clearfix::before,.clearfix::after{
    display: table;
    content: ' ';
    clear: both;
}
.head-left{
    float: left;
    width: 200px;
    height: 100px;
    font-size: 20px;
    line-height: 100px;
    color: #000;
}
.head-right{
    float: right;
    width: 200px;
    height: 100px;
    font-size: 16px;
    line-height: 100px;
}
.wordcolor{
    color: #fff;
}
</style>
