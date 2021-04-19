<template>
  <el-card class="container" shadow="always">
      <el-form ref="forminfo" :model="form" label-width="80px">
            <div class="info" >
                <el-form-item label="学号" prop="id" class="infoid">
                    <el-input  v-model="form.id"></el-input>
                </el-form-item>
                <el-form-item label="姓名" prop="name" class="infoname">
                    <el-input  v-model="form.name"></el-input>
                </el-form-item>
                <el-button type="primary" class="infobotton" @click="checkstu"><span class="bottonword">检验</span></el-button>
            </div>
            <div class="room">
                <el-form-item label="调换房间" prop="room" class="room">
                      <el-cascader v-model="form.room" :options="options"></el-cascader>
                </el-form-item>
                <el-button type="primary" class="roombotton" @click="checkroom"><span class="bottonword">检验</span></el-button>
            </div>
            <el-button type="primary" class="formbotton" @click="submit"><span class="bottonword">确 定</span></el-button>
      </el-form>
  </el-card>
</template>

<script>
import { reactive, toRefs } from 'vue'
import axios from '../utils/axios'
import { ElMessage } from 'element-plus'

export default {
  name: 'apartmentchange',
  setup(){
      const state=reactive({
          form:{
              id:'',
              name:'',
              room:[],
              preapartmentid:'',
              preapartmentnum:0,
              nowapartmentid:'',
              nowapartmentnum:0
          },
          options:[{
              value:'1',
              label:'一栋',
              children:[
                  {
                    value:'1',
                    label:'一楼',
                    children:[
                        {
                            value:'101',
                            label:'101',
                        },
                        {
                            value:'102',
                            label:'102',
                        },
                        {
                            value:'103',
                            label:'103',
                        },
                        {
                            value:'104',
                            label:'104',
                        },
                        {
                            value:'105',
                            label:'105',
                        },
                        {
                            value:'106',
                            label:'106',
                        },
                    ]
                  },
                  {
                    value:'2',
                    label:'二楼',
                    children:[
                        {
                            value:'201',
                            label:'201',
                        },
                        {
                            value:'202',
                            label:'202',
                        },
                        {
                            value:'203',
                            label:'203',
                        },
                        {
                            value:'204',
                            label:'204',
                        },
                        {
                            value:'205',
                            label:'205',
                        },
                        {
                            value:'206',
                            label:'206',
                        },
                    ]
                  },
                  {
                    value:'3',
                    label:'三楼',
                    children:[
                        {
                            value:'301',
                            label:'301',
                        },
                        {
                            value:'302',
                            label:'302',
                        },
                        {
                            value:'303',
                            label:'303',
                        },
                        {
                            value:'304',
                            label:'304',
                        },
                        {
                            value:'305',
                            label:'305',
                        },
                        {
                            value:'306',
                            label:'306',
                        },
                    ]
                  }
              ]
          }]
      })
      const checkstu=function(){
          axios.post('/admin/checkstu',{
              stuid:state.form.id
          }).then((res)=>{
              if(res.data.data[0].name!=state.form.name){
                  ElMessage.warning({
                      message:'姓名或学号错误'
                  })
              }else{
                    ElMessage.success({
                      message:'检验正确'
                  })
              }
          }).catch((err)=>{
              console.log(err)
          })
      }
      const checkroom=function(){
          let [buildnum,floornum,roomnum]=[state.form.room[0],state.form.room[1],state.form.room[2]]
          axios.post('/admin/getapartmentpeoplenum',{buildnum,floornum,roomnum}).then((res)=>{
              console.log(res.data.data[0].peoplenum)
              if(res.data.data[0].peoplenum>=4){
                ElMessage.warning({
                    message:'该宿舍已经满员'
                })
              }else{
                    ElMessage.success({
                      message:'检验正确'
                  })                 
              }
          })
      }
      const submit=async function(){
          let [stuid,buildnum,floornum,roomnum]=[state.form.id,state.form.room[0],state.form.room[1],state.form.room[2]]
          await axios.post('/admin/checkstu',{
              stuid:stuid
          }).then((res)=>{
              state.form.preapartmentid=res.data.data[0].apartmentid
          }).then(()=>{
              return axios.post('/admin/getapartmentpeoplenum',{
                  buildnum,floornum,roomnum
              })
          }).then((res)=>{
              state.form.nowapartmentid=res.data.data[0].apartmentid
              state.form.nowapartmentnum=res.data.data[0].peoplenum
          }).then(()=>{
              return axios.post('/admin/getapartment',{
                  apartmentid:state.form.preapartmentid
              })
          }).then((res)=>{
              state.form.preapartmentnum=res.data.data[0].peoplenum
          }).then(()=>{
              return Promise.all([
              axios.post('/admin/updateapartmentstu',{
                  apartmentid:state.form.nowapartmentid,
                  stuid:state.form.id
              }),
              axios.post('/admin/updateapartmentpeoplenumbyid',{
                  apartmentid:state.form.nowapartmentid,
                  num:state.form.nowapartmentnum+1
              }),
              axios.post('/admin/updateapartmentpeoplenumbyid',{
                  apartmentid:state.form.preapartmentid,
                  num:state.form.preapartmentnum-1  
              })
                ])
          }).then(()=>{
                ElMessage.success({
                      message:'调整成功'
                })
          }).catch(()=>{
                ElMessage.warning({
                      message:'调整失败'
                })
          })
      }

      return {
          ...toRefs(state),
          checkstu,
          checkroom,
          submit
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
.info{
    display: flex;
    justify-content:space-around;
}
.infobotton{
    height: 40px;
}
.room{
    display: flex;
    justify-content:space-around;
}
.roombotton{
    height: 40px;
}
.bottonword{
    color: #fff;
}
</style>
