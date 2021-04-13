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
              <el-button type="primary"><span class="bottonword">确 定</span></el-button>
            </el-form-item>
        </el-form>
    </el-card>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
  name: 'apartmentadjust',
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
      })
      return {
          ...toRefs(state)
      }
  }
}
</script>
<style>
</style>
