<template>
  <div class=''>
      <el-dialog title="新增访客信息" v-model="visible" width="400px" ref="infoform">
        <el-form :model="info">
            <el-form-item label="姓名" prop="name">
                <el-input  v-model="info.name"></el-input>
            </el-form-item>
            <el-form-item label="身份证号" prop="name">
                <el-input  v-model="info.idcard"></el-input>
            </el-form-item>
            <el-form-item label="拜访目的" prop="name">
                <el-input  v-model="info.content"></el-input>
            </el-form-item>
        </el-form>
        <template #footer>
          <span class="dialog-footer">
            <el-button type="danger" @click="close"><span class="bottonword">取消</span></el-button>
            <el-button type="primary" @click="addguest"><span class="bottonword">确 定</span></el-button>
          </span>
        </template>
      </el-dialog>
  </div>
</template>

<script>
import { reactive, ref, toRefs } from 'vue'
import axios from '../utils/axios'
import { ElMessage } from 'element-plus'
export default {
  name: 'addvisitor',
  props: {
    reload: Function
  },
  setup(props){
      const infoform=ref(null)
      const state=reactive({
          visible:false,
          info:{
              name:'',
              idcard:'',
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
      const addguest=function(){
          if(state.info.name==''||state.info.content==''||state.info.idcard==''){
              ElMessage.error("表格内容不能为空")
          }else{
              axios.post('/admin/addguest',{
                  name:state.info.name,
                  idcard:state.info.idcard,
                  content:state.info.content
              }).then(()=>{
                  ElMessage.success('添加成功')
                  state.visible=false
                  props.reload()
              })
          }
      }

    
      return{
          ...toRefs(state),
          infoform,
          open,
          close,
          addguest
      }
  }
}
</script>
<style>
.bottonword{
    color: #fff;
}   
</style>
