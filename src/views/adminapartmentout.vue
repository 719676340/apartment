<template>
  <el-card class="container" shadow="always">
      <el-form ref="form" :model="id">
            <el-form-item label="学号" prop="id" class="infoid">
                <el-input  v-model="id"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" class="formbotton" @click="submit"><span class="bottonword">确 定</span></el-button>
            </el-form-item>
      </el-form>
  </el-card>
</template>

<script>
import { reactive, toRefs } from 'vue'
import axios from '../utils/axios'
import { ElMessage } from 'element-plus'

export default {
  name: 'adminapartmentout',
  setup(){
      const state=reactive({
          id:''
      })
      const submit=function(){
          let stuid=state.id
          axios.post('/admin/apartmentout',{
              stuid
          }).then(()=>{
              ElMessage.success({
                  message:'退宿成功'
              })
          }).catch(()=>{
              ElMessage.warning({
                  message:'退宿失败'
              })
          })
      }
      return {
          ...toRefs(state),
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
