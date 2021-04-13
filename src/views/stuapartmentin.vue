<template>
  <el-card shadow="always">
      <el-form ref="form" :model="content">
        <el-form-item label="学号" prop="stuid">
            <el-input  v-model="content.stuid" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="名字" prop="name">
            <el-input  v-model="content.name" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="原因" prop="content">
            <el-input
              type="textarea"
              :autosize="{ minRows: 2, maxRows: 4}"
              placeholder="请输入内容"
              v-model="content.content">
            </el-input>
        </el-form-item>
        <el-form-item label="入校时间" prop="time">
            <el-date-picker
              v-model="content.time"
              align="right"
              type="date"
              placeholder="选择日期"
              :disabled-date="disabledDate"
              :shortcuts="shortcuts"
            >
            </el-date-picker>
        </el-form-item>
        <el-form-item>
            <el-button type="primary"><span class="bottonword">提交</span></el-button>
        </el-form-item>
      </el-form>
  </el-card>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
  name: 'apartmentin',
  setup(){
      const state=reactive({
          content:{
              stuid:'11111',
              name:'11111',
              content:'',
              time:''
          }
      })
        const disabledDate=function(time){
          return time.getTime() > Date.now()
        }
        const shortcuts=reactive([{
          text: '今天',
          value: new Date(),
        }, {
          text: '明天',
          value: (() => {
            const date = new Date()
            date.setTime(date.getTime() + 3600 * 1000 * 24)
            return date
          })(),
        }, {
          text: '一周后',
          value: (() => {
            const date = new Date()
            date.setTime(date.getTime() + 3600 * 1000 * 24 * 7)
            return date
          })(),
        }])
      return {
          ...toRefs(state),
          disabledDate,
          shortcuts
      }
  }
}
</script>
<style>
.bottonword{
    color: #fff;
}
</style>
