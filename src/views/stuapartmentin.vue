<template>
  <el-card shadow="always">
      <el-form ref="form" :model="content">
        <el-form-item label="学号" prop="stuid">
            <el-input  v-model="content.stuid" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="名字" prop="name">
            <el-input  v-model="content.name" :disabled="true"></el-input>
        </el-form-item>
        <!-- <el-form-item label="原因" prop="content">
            <el-input
              type="textarea"
              :autosize="{ minRows: 2, maxRows: 4}"
              placeholder="请输入内容"
              v-model="content.content">
            </el-input>
        </el-form-item> -->
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
            <el-button type="primary" @click="submit"><span class="bottonword">提交</span></el-button>
        </el-form-item>
      </el-form>
  </el-card>
</template>

<script>
import { onMounted, reactive, toRefs } from 'vue'
import axios from '../utils/axios';
import { ElMessage } from 'element-plus'
export default {
  name: 'apartmentin',
  setup(){
      const state=reactive({
          content:{
              stuid:'',
              name:'',
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
      const getinfo=async function(){
        await axios.get('/getlogintable').then((res)=>{
            return res.data.data[res.data.data.length-1].id
        }).then((id)=>{
            axios.post('/stu/getstuinfo',{
                id
            }).then((res)=>{
                state.content.name=res.data.data[0].name
                state.content.stuid=res.data.data[0].stuid
            })
        })
      }
      const submit=async function(){
        await axios.post('/admin/apartmentin',{
          stuid:state.content.stuid 
        }).then(()=>{
          ElMessage.success('提交成功')
        }).catch(()=>{
          ElMessage.warning('提交失败')
        })
      }
      onMounted(()=>{
        getinfo()
      })
      return {
          ...toRefs(state),
          disabledDate,
          shortcuts,
          submit
      }
  }
}
</script>
<style>
.bottonword{
    color: #fff;
}
</style>
