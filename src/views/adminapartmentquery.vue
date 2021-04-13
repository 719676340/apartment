<template>
    <el-card class="container" shadow="always">
        <el-form :inline="true" :model="info" class="infoform">
            <el-form-item label="学号" prop="id">
                <el-input  v-model="info.id"></el-input>
            </el-form-item>
            <el-form-item>
                 <el-button type="primary"><span class="bottonword">提交</span></el-button>
            </el-form-item>
        </el-form>
        <el-table :data="result" style="width: 100%">
            <el-table-column prop="date" label="时间"></el-table-column>
            <el-table-column prop="name" label="名字"></el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
        </el-table>
        <el-divider content-position="center">分割线</el-divider>
        <el-card>
            <template #header>
              <div class="card-header">
                <span>所有宿舍信息</span>
              </div>
            </template>
            <el-table :data="allroom" style="width: 100%">
                <el-table-column prop="date" label="时间"></el-table-column>
                <el-table-column prop="name" label="名字"></el-table-column>
                <el-table-column prop="address" label="地址"></el-table-column>
            </el-table>
        </el-card>
    </el-card>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
  name: '',
  setup(){
      const state=reactive({
          info:{
              id:''
          }
      })
      const result=reactive([
          {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }
      ])
      const allroom=reactive([
          {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }
      ])
      return {
          ...toRefs(state),
          result,
          allroom
      }
  }
}
</script>
<style>
.bottonword{
    color: #fff;
}
.infoform{
    display: flex;
    justify-items: left;
}
.card-header{
    display: flex;
    justify-items: left;
    font-size: 20px;
}
</style>
