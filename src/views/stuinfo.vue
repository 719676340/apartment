<!-- 这个应该修改成只能提交一次的 -->
<template>
    <el-card shadow="always">
        <el-form :model="info" :label-position="labelPosition">
            <el-form-item label="学号" prop="id">
                <el-input  v-model="info.id" :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="姓名" prop="name">
                <el-input  v-model="info.name"></el-input>
            </el-form-item>
            <el-form-item label="身份证号" prop="idcard">
                <el-input  v-model="info.idcard"></el-input>
            </el-form-item>
            <el-form-item label="学院" prop="college">
                <el-input  v-model="info.college"></el-input>
            </el-form-item>      
            <el-form-item label="专业" prop="major">
                <el-input  v-model="info.major"></el-input>
            </el-form-item>        
            <el-form-item label="宿舍号" prop="room">
                <el-input  v-model="info.room" :disabled="true"></el-input>
            </el-form-item>  
            <el-form-item label="是否在校" prop="livingword">
                <el-input  v-model="info.livingword" :disabled="true"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" :disabled='info.show'><span class="bottonword">确 定</span></el-button>
            </el-form-item>  
        </el-form>
    </el-card>
</template>

<script>
import { computed, onMounted, reactive, toRefs } from 'vue'
import axios from '../utils/axios';
// import { ElMessage } from 'element-plus'

export default {
  name: 'stuinfo',
  setup(){
      const state=reactive({
          info:{
              id:'',
              name:'',
              sex:'',
              idcard:'',
              college:'',
              major:'',
              room:[],
              living:'',
              livingword:computed(()=>{
                  return state.info.living==1?'是':'否'
              }),
              show:false

          },
        //   labelPosition:'left'
      })
    const getinfo=async function(){
        console.log(1111111111)
      await axios.get('/getlogintable').then((res)=>{
          return res.data.data[res.data.data.length-1].id
      }).then((id)=>{
          axios.post('/admin/getstubyid',{
              stuid:id
          }).then((res)=>{
              console.log(res)
              state.info.name=res.data.data[0].name
              state.info.id=res.data.data[0].stuid
              state.info.sex=res.data.data[0].sex
              state.info.idcard=res.data.data[0].idcart
              state.info.college=res.data.data[0].college
              state.info.major=res.data.data[0].major
              state.info.living=res.data.data[0].living
              state.info.room=[res.data.data[0].buildnum,res.data.data[0].floornum,res.data.data[0].roomnum]
              Object.keys(state.info).forEach(function(key){
                  if(state.info[key]==''){
                      state.info.show=true
                  }
              })
          })
      })
    }
    onMounted(()=>{
        getinfo()
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
