<template>
  <el-card shadow="always">
    <el-form :inline="true" :model="info" class="form">
      <el-form-item label="学号" prop="id">
        <el-input  v-model="info.id"></el-input>
      </el-form-item>
      <el-form-item label="姓名" prop="name">
        <el-input  v-model="info.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="sumbit"><span class="bottonword">确 定</span></el-button>
      </el-form-item>
    </el-form>
    <el-table :data="result" style="width: 100%">
      <el-table-column prop="stuid" label="学号"></el-table-column>
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="sex" label="性别"></el-table-column>
      <el-table-column prop="buildnum" label="楼号"></el-table-column>
      <el-table-column prop="floornum" label="层号"></el-table-column>
      <el-table-column prop="roomnum" label="房间号"></el-table-column>     
      <el-table-column prop="college" label="学院"></el-table-column>
      <el-table-column prop="major" label="专业"></el-table-column>
    </el-table>
  </el-card>
</template>

<script>
import { reactive, toRefs } from 'vue'
import axios from '../utils/axios'
import { ElMessage } from 'element-plus'
export default {
  name: 'stuinfo',
  setup(){
    const state=reactive({
      info:{
        id:'',
        name:''
      },
      result:[]
    })
    const sumbit=function(){
        let stuid=state.info.id
        let name=state.info.name
        if(stuid!=''){
          axios.post('/admin/getstubyid',{
            stuid
          }).then((res)=>{
            state.result=res.data.data
          })
        }else if(stuid!=''){
          axios.post('/admin/getstubyname',{
            name
          }).then((res)=>{
            state.result=res.data.data
          })         
        }else{
          ElMessage.warning({
            message:'学号和姓名不能为空'
          })
        }
    }
    return{
      ...toRefs(state),
      sumbit
    }
  }
}
</script>
<style>
.form{
    display: flex;
    justify-items: left;
}
.bottonword{
    color: #fff;
}
</style>
