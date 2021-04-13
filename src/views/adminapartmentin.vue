<template>
  <el-card class="container" shadow="always">
    <el-form ref="form" :model="id">
          <el-form-item label="学号" prop="id" class="infoid">
              <el-input  v-model="id"></el-input>
          </el-form-item>
          <el-form-item>
              <span>宿舍号{{roomname}}</span>
              <el-button type="primary" class="formbotton"><span class="bottonword">随机宿舍</span></el-button>
          </el-form-item>
          <el-form-item>
              <el-button type="primary" class="formbotton"><span class="bottonword">确 定</span></el-button>
          </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
import {computed,reactive, toRefs } from 'vue'
export default {
  name: 'adminapartmentin',
  setup(){
    const state=reactive({
      id:'',
      room:[1,1,101],
    })
    const roomname=computed(()=>{
        return state.room.join('/')
      })
    return {
      ...toRefs(state),
      roomname
    }
  }
}
</script>
<style>
.bottonword{
  color: #fff;
}
</style>
