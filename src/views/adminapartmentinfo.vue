<template>
    <el-card>
        <el-form :inline="true" class="form">
            <el-form-item label="房间号">
                <el-cascader
                    v-model="info"
                    :options="options"
                >
                </el-cascader>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="getstu"><span class="bottonword">提交</span></el-button>
            </el-form-item>
        </el-form>
        <el-table :data="infoarr" style="width: 100%">
            <el-table-column prop="stuid" label="学号"></el-table-column>
            <el-table-column prop="name" label="姓名"></el-table-column>
            <el-table-column prop="sex" label="性别"></el-table-column>
            <el-table-column prop="college" label="学院"></el-table-column>
            <el-table-column prop="major" label="专业"></el-table-column>
        </el-table>
    </el-card>
</template>

<script>
import { reactive, toRefs } from 'vue'
import axios from '../utils/axios'
// import { ElMessage } from 'element-plus'
export default {
  name: 'apartmentinfo',
  setup(){
      const state=reactive({
          info:[],
          infoarr:[],
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
      const result=reactive([
          {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }
      ])
      const getstu=function(){
          axios.post('/admin/getroommate',{
            buildnum:state.info[0],
            floornum:state.info[1],
            roomnum:state.info[2]
          }).then((res)=>{
              console.log(1)
              console.log(res.data)
              state.infoarr=res.data.data
          })
      }
      return{
          ...toRefs(state),
          result,
          getstu
      }
  }
}
</script>
<style>
.form{
    display: flex;
    justify-items: left;
}
.bottonword{
    color: #fff;
}
</style>
