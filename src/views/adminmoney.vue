<template>
  <el-card class="container" shadow="always">
    <el-table :data="allfix" style="width: 100%">
        <el-table-column prop="date" label="时间"></el-table-column>
        <el-table-column prop="name" label="名字"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="100">
            <el-button  type="danger" size="small"><span class="bottonword">维修完成</span></el-button>  
        </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
import { reactive } from 'vue'
export default {
  name: 'money',
  setup(){
      const allfix=reactive([
        {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
        }
      ])
      return {
          allfix
      }
  }
}
</script>
<style>
.bottonword{
    color: #fff;
}
</style>
