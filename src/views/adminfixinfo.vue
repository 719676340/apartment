<template>
  <el-card class="container" shadow="always">
    <el-table :data="fixinfo" style="width: 100%">
        <el-table-column prop="id" label="序号"></el-table-column>
        <el-table-column prop="stuid" label="学号"></el-table-column>
        <el-table-column prop="buildnum" label="楼号"></el-table-column>
        <el-table-column prop="floornum" label="层号"></el-table-column>
        <el-table-column prop="roomnum" label="房号"></el-table-column>
        <el-table-column prop="content" label="内容"></el-table-column>
        <el-table-column prop="finish" label="完成" :formatter="formatfinish"></el-table-column>              
        <el-table-column
          fixed="right"
          label="操作"
          width="100">
          <template #default="scope">
            <el-button  type="danger" size="small" :disabled="scope.row.finish" @click="setfixstate(scope.row.id)"><span class="bottonword">维修完成</span></el-button>
          </template>  
        </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
import { onMounted, reactive, toRefs } from 'vue'
import axios from '../utils/axios'
import { ElMessage } from 'element-plus'
export default {
  name: 'fixinfo',
  setup(){
      const state=reactive({
        fixinfo:[]
      })
      const getallfix=function(){
        axios.get('/admin/getallfix').then((res)=>{
          state.fixinfo=res.data.data.reverse()
        })
      }
      const formatfinish=function(row){
        return row.finish?'是':'否'
      }
      const setfixstate=function(id){
        axios.post('/admin/setfixstate',{
          id
        }).then(()=>{
          ElMessage.success({
            message:'项目完成'
          })
          getallfix()

        }).catch(()=>{
          ElMessage.warning({
            message:'项目未完成'
          })         
        })
      }
      onMounted(()=>{
        getallfix()
      })
      return {
          ...toRefs(state),
          getallfix,
          formatfinish,
          setfixstate

      }

  }
}
</script>
<style>
.bottonword{
    color: #fff;
}
</style>
