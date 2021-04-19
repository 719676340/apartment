<template>
    <el-card class="container" shadow="always">
        <el-form :inline="true" :model="info" class="infoform">
            <el-form-item label="学号" prop="id">
                <el-input  v-model="info.id"></el-input>
            </el-form-item>
            <el-form-item>
                 <el-button type="primary" @click="getapartmentbystuid"><span class="bottonword">提交</span></el-button>
            </el-form-item>
        </el-form>
        <el-table :data="result" style="width: 100%">
            <el-table-column prop="buildnum" label="楼号"></el-table-column>
            <el-table-column prop="floornum" label="层数"></el-table-column>
            <el-table-column prop="roomnum" label="房间号"></el-table-column>
            <el-table-column prop="peoplenum" label="人数"></el-table-column>
        </el-table>
        <el-divider content-position="center">分割线</el-divider>
        <el-card>
            <template #header>
              <div class="card-header">
                <span>所有宿舍信息</span>
              </div>
            </template>
            <el-table :data="allroom" style="width: 100%">
                <el-table-column prop="buildnum" label="楼号"></el-table-column>
                <el-table-column prop="floornum" label="层数"></el-table-column>
                <el-table-column prop="roomnum" label="房间号"></el-table-column>
                <el-table-column prop="peoplenum" label="人数"></el-table-column>
            </el-table>
            <el-pagination
                layout="prev, pager, next"
                :total="50">
            </el-pagination>
        </el-card>
    </el-card>
</template>

<script>
import { reactive, toRefs,onMounted } from 'vue'
import axios from '../utils/axios'
// import { ElMessage } from 'element-plus'
export default {
  name: '',
  setup(){
      const state=reactive({
          info:{
              id:''
          },
          result:[],
          allroom:[]
      })
      onMounted(()=>{
        getallapartment()
      })
      const getallapartment=function(){
          axios.get('/admin/getallapartment').then((res)=>{
              state.allroom=res.data.data
          })
      }
      const getapartmentbystuid=function(){
          axios.post('/admin/checkstu',{
              stuid:state.info.id
          }).then((res)=>{
              console.log(res.data.data[0].apartmentid)
              return res.data.data[0].apartmentid
          }).then((apartmentid)=>{
              return axios.post('/admin/checkapartmentbyid',{
                  apartmentid
              })
          }).then((res)=>{
              state.result=res.data.data
          })
      }
      return {
          ...toRefs(state),
          getallapartment,
          getapartmentbystuid
      }
  }
}
</script>
<style>
.bottonword{
    color: #fff;
}
.infoform{
    display: flex;
    justify-items: left;
}
.card-header{
    display: flex;
    justify-items: left;
    font-size: 20px;
}
</style>
