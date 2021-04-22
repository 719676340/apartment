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
            <el-button type="primary" @click="submit"><span class="bottonword">确 定</span></el-button>
        </el-form-item>
      </el-form>
  </el-card>
</template>

<script>
import { onMounted, reactive, toRefs } from 'vue'
import axios from '../utils/axios';
import { ElMessage } from 'element-plus'
export default {
  name: 'fixinfo',
  setup(){
      const state=reactive({
          content:{
              apartmentid:'',
              stuid:'',
              content:'',
          }
      })
      const getinfo=async function(){
        await axios.get('/getlogintable').then((res)=>{
            return res.data.data[res.data.data.length-1].id
        }).then((id)=>{
            axios.post('/stu/getstuinfo',{
                id
            }).then((res)=>{
                state.content.apartmentid=res.data.data[res.data.data.length-1].apartmentid
                state.content.stuid=res.data.data[res.data.data.length-1].stuid
            })
        })
      }
      const submit=function(){
          axios.post('/admin/getapartment',{
              apartmentid:state.content.apartmentid
          }).then((res)=>{
              let buildnum=res.data.data[res.data.data.length-1].buildnum
              let floornum=res.data.data[res.data.data.length-1].floornum
              let roomnum=res.data.data[res.data.data.length-1].roomnum
              axios.post('/stu/insertfix',{
                  content:state.content.content,
                  stuid:state.content.stuid,
                  buildnum,
                  floornum,
                  roomnum
              }).then(()=>{
                  ElMessage.success('提交成功')
                  state.content.content=''
              }).catch(()=>{
                  ElMessage.warning('提交失败')
              })
          })
      }
      onMounted(()=>{
        getinfo()
      })
      return {
          ...toRefs(state),
          getinfo,
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
