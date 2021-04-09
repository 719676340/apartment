<template>
  <div class=''>
      <el-dialog title="新增访客信息" v-model="visible" width="400px" ref="infoform">
        <el-form :model="info">
            <el-form-item label="姓名" prop="name">
                <el-input  v-model="info.name"></el-input>
            </el-form-item>
            <el-form-item label="身份证号" prop="name">
                <el-input  v-model="info.idcart"></el-input>
            </el-form-item>
            <el-form-item label="拜访目的" prop="name">
                <el-input  v-model="info.content"></el-input>
            </el-form-item>
        </el-form>
        <template #footer>
          <span class="dialog-footer">
            <el-button type="danger" @click="close"><span class="bottonword">取消</span></el-button>
            <el-button type="primary"><span class="bottonword">确 定</span></el-button>
          </span>
        </template>
      </el-dialog>
  </div>
</template>

<script>
import { reactive, ref, toRefs } from 'vue'
export default {
  name: 'addvisitor',
  setup(){
      const infoform=ref(null)
      const state=reactive({
          visible:false,
          info:{
              name:'',
              idcart:'',
              content:''
          }
      })
      const open=function(){
          state.visible=true
          state.info=reactive({
              name:'',
              idcart:'',
              content:''
          })
      }
      const close=function(){
          state.visible=false
      }

    
      return{
          ...toRefs(state),
          infoform,
          open,
          close
      }
  }
}
</script>
<style>
.bottonword{
    color: #fff;
}   
</style>
