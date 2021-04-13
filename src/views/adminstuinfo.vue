<template>
  <el-card shadow="always">
    <el-form :inline="true" :model="info" class="form">
      <el-form-item label="学号" prop="id">
        <el-input  v-model="id"></el-input>
      </el-form-item>
      <el-form-item label="姓名" prop="name">
        <el-input  v-model="name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary"><span class="bottonword">确 定</span></el-button>
      </el-form-item>
    </el-form>
    <el-table :data="result" style="width: 100%">
        <el-table-column prop="date" label="时间"></el-table-column>
        <el-table-column prop="name" label="名字"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
    </el-table>
  </el-card>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
  name: 'stuinfo',
  setup(){
    const state=reactive({
      info:{
        id:'',
        name:''
      }
    })
    const result=reactive([
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }
    ])
    return{
      ...toRefs(state),
      result
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
