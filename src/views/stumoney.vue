<template>
  <el-card shadow="always">
    <el-table :data="result" style="width: 100%">
      <el-table-column prop="stuid" label="学号"></el-table-column>
      <el-table-column prop="money" label="金额"></el-table-column>
      <el-table-column prop="finish" label="缴费情况" :formatter="formatfinish"></el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        >
        <template #default="scope">
          <el-button  type="danger" size="small" :disabled="scope.row.finish" @click="setfinish(scope.row.stuid)"><span class="bottonword">缴费</span></el-button>
        </template>  
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
import { onMounted, reactive, toRefs } from 'vue'
import axios from '../utils/axios';
import { ElMessage } from 'element-plus'


export default {
  name: 'money',
  setup(){
    const state=reactive({
      result:[]
    })
    const getinfo=async function(){
      await axios.get('/getlogintable').then((res)=>{
        
        return res.data.data[res.data.data.length-1].id
      }).then((id)=>{
        return axios.post('/stu/getpay',{
          stuid:id
        })
      }).then((res)=>{
        state.result=res.data.data
      })
    }
    const formatfinish=function(row){
      return row.finish?'是':'否'
    }
    const setfinish=function(id){
      axios.post('/stu/changepay',{
        stuid:id
      }).then(()=>{
        ElMessage.success({
          message:'支付成功'
        })
        getinfo()
      }).catch(()=>{
        ElMessage.warning({
          message:'支付失败'
        })   
      })
    }
    onMounted(()=>{
      getinfo()
    })
    return {
      ...toRefs(state),
      formatfinish,
      setfinish
    }
  }
}
</script>
<style>
.bottonword{
    color: #fff;
}
</style>
