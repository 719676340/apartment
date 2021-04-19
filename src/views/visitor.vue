<!-- 访客登记表 两个部分 一个是信息的登记form 改成按钮弹出小框登记的  一个是信息的展示table
  -->
<template>
    <el-card class="container" shadow="always">
        <template #header>
          <div class="card-header clearfix">
            <el-button class="button cardbotton" type="primary" @click="addvisitor"><span class="bottonword">新增访客</span></el-button>
          </div>    
        </template>
        <div class="contenttable">
            <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="name" label="名字"></el-table-column>
                <el-table-column prop="idcard" label="身份证号"></el-table-column>
                <el-table-column prop="content" label="内容"></el-table-column>
                <el-table-column prop="time" label="访问时间" :formatter="formattime"></el-table-column>
                <!-- <el-table-column prop="date" label="时间"></el-table-column> -->
                <el-table-column fixed="right" label="操作" width="120">
                    <template #default="scope">
                      <el-button
                        type="danger"   
                        size="small"
                        @click="delguest(scope.row.uid)"
                        >
                        <span class="bottonword">移除</span>
                      </el-button>
                      <!-- <el-button class="button cardbotton" type="primary" >新增访客</el-button> -->
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </el-card>
    <addvisitor ref="add" :reload="getvisior"></addvisitor>
</template>

<script>
import {reactive, toRefs ,ref, onMounted} from 'vue'
import addvisitor from '../components/addvisitor'
import dayjs from 'dayjs'
// import {useRoute} from 'vue-router'
import axios from '../utils/axios'
export default {
  name: 'visitor',
  components:{
    addvisitor
  },
  setup(){
      const add=ref(null)
      const state=reactive({
        tableData: []
      })
      const formattime=function(row){
        return row.time=dayjs(row.time).format('YYYY-MM-DD HH:mm:ss')
      }
      const delguest=function(id){
        axios.post('/admin/delguest',{
          uid:id
        }).then((res)=>{
          console.log(res)
          getvisior()
        })
      }
      const sayhi=function(res){
          console.log(res.uid)
      }
      const addvisitor=function(){
          add.value.open()
      }
      const getvisior=()=>{
        axios.get('/admin/getguest').then((res)=>{
          state.tableData=res.data
        })
      }
      onMounted(()=>{
        getvisior()
      })
      return {
          ...toRefs(state),
          add,
          sayhi,
          addvisitor,
          getvisior,
          formattime,
          delguest
      }
  }
}
</script>
<style>
.clearfix::before,.clearfix::after{
    display: table;
    content: ' ';
    clear: both;
}
.container{
    position: relative;
    overflow: hidden;
}
.cardbotton{
    float: left;
}
.bottonword{
    color: #fff;
}   
</style>
