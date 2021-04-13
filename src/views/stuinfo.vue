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
            <el-form-item label="宿舍号" prop="apartmentid">
                <el-input  v-model="info.apartmentid" :disabled="true"></el-input>
            </el-form-item>  
            <el-form-item label="是否在校" prop="living">
                <el-input  v-model="info.living" :disabled="true"></el-input>
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
  name: 'stuinfo',
  setup(){
      const state=reactive({
          info:{
              name:'',
              sex:'',
              idcard:'',
              college:'',
              major:'',
              apartmentid:'',
              living:''
          },
        //   labelPosition:'left'
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
