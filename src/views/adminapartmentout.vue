<template>
  <el-card class="container" shadow="always">
      <el-form ref="form" :model="id">
            <el-form-item label="学号" prop="id" class="infoid">
                <el-input  v-model="id"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" class="formbotton"><span class="bottonword">确 定</span></el-button>
            </el-form-item>
      </el-form>
  </el-card>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
  name: 'adminapartmentout',
  setup(){
      const state=reactive({
          id:''
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
