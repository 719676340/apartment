<template>
    <el-card shadow="always">
        <el-table :data="result" style="width: 100%">
            <el-table-column prop="date" label="时间"></el-table-column>
            <el-table-column prop="name" label="名字"></el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
        </el-table>
        <el-button type="primary"><span class="bottonword">缴费</span></el-button>
    </el-card>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
  name: 'money',
  setup(){
      const state=reactive({
          money:{
              stuid:'',
              sum:'',
              finish:''
          }
      })
      const result=reactive([
          {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }
      ])
      return {
          ...toRefs(state),
          result
      }
  }
}
</script>
<style>
.bottonword{
    color: #fff;
}
</style>
