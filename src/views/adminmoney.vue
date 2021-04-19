<template>
  <el-card class="container" shadow="always">
    <div class="button-container" >
      <el-button :type="bottonstate[0]" @click="getallpay"><span class="bottonword">所有学生</span></el-button>
      <el-button :type="bottonstate[1]" @click="getallpay1"><span class="bottonword">已支付</span></el-button>
      <el-button :type="bottonstate[2]" @click="getallpay0"><span class="bottonword">未支付</span></el-button>
    </div>
    <el-table :data="payresult" style="width: 100%">
        <el-table-column prop="id" label="编号"></el-table-column>
        <el-table-column prop="stuid" label="学号"></el-table-column>
        <el-table-column prop="money" label="金额"></el-table-column>
        <el-table-column prop="finish" label="支付情况" :formatter="formatfinish"></el-table-column>
    </el-table>
  </el-card>
</template>

<script>
import { onMounted, reactive, toRefs} from 'vue'
import axios from '../utils/axios'
// import { ElMessage } from 'element-plus'
export default {
  name: 'money',
  setup(){
      const state=reactive({
        payresult:[],
        bottonstate:['primary','primary','primary']
      })
      const getallpay=function(){
        axios.get('/admin/getallpay').then((res)=>{
          state.payresult=res.data.data
          state.bottonstate=['primary','primary','primary']
          state.bottonstate[0]='success'
        })
      }
      const getallpay1=function(){
        axios.get('/admin/getallpay1').then((res)=>{
          state.payresult=res.data.data
          state.bottonstate=['primary','primary','primary']
          state.bottonstate[1]='success'
        })
      }
      const getallpay0=function(){
        axios.get('/admin/getallpay0').then((res)=>{
          state.payresult=res.data.data
          state.bottonstate=['primary','primary','primary']
          state.bottonstate[2]='success'
        })
      }
      const formatfinish=function(row){
        return row.finish?'是':'否'
      }
      
      onMounted(()=>{
        getallpay()
      })

      return {
          ...toRefs(state),
          getallpay,
          formatfinish,
          getallpay1,
          getallpay0
      }
  }
}
</script>
<style>
.bottonword{
    color: #fff;
}
.button-container{
  display: flex;
  align-items:flex-start;
}
</style>
