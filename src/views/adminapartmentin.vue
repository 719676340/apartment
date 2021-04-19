<template>
  <el-card class="container" shadow="always">
    <el-form ref="infoform" :model="form">
          <el-form-item label="学号" prop="id" class="infoid">
              <el-input  v-model="form.id"></el-input>
          </el-form-item>
          <el-form-item >
              <el-button type="primary" class="formbotton" @click="checkroom" ><span class="bottonword">宿舍校验</span></el-button>
          </el-form-item>
          <el-form-item>
              <span>宿舍号{{roomname}}</span> 
              <el-button type="primary" class="formbotton" @click="randomchoose" :disabled=show><span class="bottonword">随机宿舍</span></el-button>
          </el-form-item>
          <el-form-item>
              <el-button type="primary" class="formbotton" @click="submit" :disabled=show><span class="bottonword">提交</span></el-button>
          </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
import {computed,reactive, toRefs } from 'vue'
import axios from '../utils/axios'
import { ElMessage } from 'element-plus'
export default {
  name: 'adminapartmentin',
  setup(){
    const state=reactive({
      form:{
        id:''
      },
      room:[],
      roomid:null,
      haveroom:false,
      freeroom:[],
      show:true
    })
    const checkroom=function(){
      let stuid=state.form.id
      axios.post('/admin/checkstu',{
        stuid
      }).then((res)=>{
        return res.data.data[0].apartmentid
      }).then((apartmentid)=>{
        if(apartmentid!=null){
          state.haveroom=true
        }else{
          ElMessage.warning({
            message:'该学生没有分配宿舍请随机宿舍'
          })
          state.room=[]
          state.show=false
        }
        return axios.post('/admin/checkapartmentbyid',{
          apartmentid
        })
      }).then((res)=>{    
        state.room=[res.data.data[0].buildnum,res.data.data[0].floornum,res.data.data[0].roomnum]

      }).then(()=>{
        ElMessage.success({
          message:'校验成功'
        })
      }).catch(()=>{
        ElMessage.warning({
          message:'校验失败'
        })
      })
      
    }
    const randomchoose=async function(){
      await axios.get('/admin/getfreeroom').then((res)=>{
        state.freeroom=res.data.data
      })
      let index=Math.floor(Math.random()*state.freeroom.length)
      state.room=[state.freeroom[index].buildnum,state.freeroom[index].floornum,state.freeroom[index].roomnum]
      state.roomid=state.freeroom[index].apartmentid
    }
    const submit=function(){
        axios.post('/admin/updateapartmentstu',{
          apartmentid:state.roomid,
          stuid:state.form.id
        }).then(()=>{
          ElMessage.success({
            message:'提交成功'
          })
          state.show=true
          state.room=[]
        }).catch(()=>{
          ElMessage.warning({
            message:'提交失败'
          })
        })
    }
    const roomname=computed(()=>{
        return state.room.join('/')
      })
    return {
      ...toRefs(state),
      roomname,
      checkroom,
      randomchoose,
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
