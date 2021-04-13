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
                <el-button type="primary" class="infobotton"><span class="bottonword">检验</span></el-button>
            </div>
            <div class="room">
                <el-form-item label="调换房间" prop="room" class="room">
                      <el-cascader v-model="form.room" :options="options" @change="handleChange"></el-cascader>
                </el-form-item>
                <el-button type="primary" class="roombotton"><span class="bottonword">检验</span></el-button>
            </div>
            <el-button type="primary" class="formbotton"><span class="bottonword">确 定</span></el-button>
      </el-form>
  </el-card>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
  name: 'apartmentchange',
  setup(){
      const state=reactive({
          form:{
              id:'',
              name:'',
              room:''
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
      return {
          ...toRefs(state)
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
