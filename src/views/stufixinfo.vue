<template>
  <el-card shadow="always">
      <el-form ref="form" :model="content">
        <el-form-item label="宿舍号" prop="apartmentid">
            <el-input  v-model="content.apartmentid" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="学号" prop="stuid">
            <el-input  v-model="content.stuid" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="内容" prop="content">
            <el-input
              type="textarea"
              :autosize="{ minRows: 2, maxRows: 4}"
              placeholder="请输入内容"
              v-model="content.content">
            </el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary"><span class="bottonword">确 定</span></el-button>
        </el-form-item>
      </el-form>
  </el-card>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
  name: 'fixinfo',
  setup(){
      const state=reactive({
          content:{
              apartmentid:'1111',
              stuid:'11111',
              content:'',
          }
      })
      return {
          ...toRefs(state)
      }
  }
}
</script>
<style>
.bottonword{
    color: #fff;
}
</style>
