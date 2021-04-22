<template>
  <el-card shadow="always">
    <el-form :model="info">
      <el-form-item label="学号" prop="id">
          <el-input  v-model="info.id" :disabled="true"></el-input>
      </el-form-item>
      <el-form-item label="姓名" prop="name" >
          <el-input  v-model="info.name" :disabled="true"></el-input>
      </el-form-item>
      <el-form-item label="选择房间" prop="room" class="room">
          <span>{{info.room}}</span>
          <el-cascader v-model="info.room" :options="options" :disabled="change"></el-cascader>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" :disabled="change" @click="submit"><span class="bottonword">确 定</span></el-button>
      </el-form-item>

    </el-form>
  </el-card>
</template>

<script>
import { onMounted, reactive, toRefs } from 'vue'
import axios from '../utils/axios';
import { ElMessage } from 'element-plus'

export default {
  name: 'apartmentchoose',
  setup(){
    const state=reactive({
      info:{
        id:'',
        name:'',
        room:[]
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
      }],
      change:false
    })
    const getinfo=async function(){
      await axios.get('/getlogintable').then((res)=>{
          return res.data.data[res.data.data.length-1].id
      }).then((id)=>{
          axios.post('/admin/getstubyid',{
              stuid:id
          }).then((res)=>{
              state.info.name=res.data.data[0].name
              state.info.id=res.data.data[0].stuid
              state.info.room=[res.data.data[0].buildnum,res.data.data[0].floornum,res.data.data[0].roomnum]
              if(state.info.room.length!=0 && state.info.room[0]&& state.info.room[1]&& state.info.room[2]){
                state.change=true
              }else{
                state.change=false
              }
          })
      })
    }
    const submit=async function(){
      if(state.info.room.length!=3){
        ElMessage.warning('未选择宿舍')
      }else{
        await axios.post('/admin/getapartmentpeoplenum',{
          buildnum:state.info.room[0],
          floornum:state.info.room[1],
          roomnum:state.info.room[2]
        }).then((res)=>{
          let apartmentid=res.data.data[0].apartmentid
          let peoplenum=res.data.data[0].peoplenum
          if(peoplenum>=4){
            ElMessage.warning('超过人数上限')
            throw(new Error('超过人数上线'))
          }else{
            return axios.post('/admin/updateapartmentstu',{
              apartmentid:apartmentid,
              stuid:state.info.id
            }).then(()=>{
              axios.post('/admin/updateapartmentpeoplenumbyid',{
                apartmentid,
                num:peoplenum+1
              })
            })
          }
        }).then(()=>{
          ElMessage.success('提交成功')
          getinfo()
        }).catch(()=>{
          ElMessage.warning('提交失败')
        })
      }
    }
    onMounted(()=>{
      getinfo()
    })
    return{
      ...toRefs(state),
      getinfo,
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
