<template>
  <div class='header clearfix'>
      <div class="head-left">
          {{name}}
      </div>
      <div class="head-right">
          <div class="info">
              <span><i class="iconfont  icon-touxiang"></i></span>
              <span class="infoname">{{userinfo}}</span>
          </div>
      </div>
  </div>    
</template>

<script>
import {reactive, toRefs } from 'vue'
import {useRouter} from 'vue-router'
export default {
  name: 'Header',
  setup(){
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
    router.afterEach((to)=>{
        let path=to.fullPath.split('/')
        if(path[1]=='admin'){
            state.name=pathmap[0][path[2]]
        }else{
            state.name=pathmap[1][path[2]]
        }
        console.log(state.name)
    })
    return {
        ...toRefs(state),
        pathmap
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
</style>
