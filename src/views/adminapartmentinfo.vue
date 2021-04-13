<template>
    <el-card>
        <el-form :inline="true" class="form">
            <el-form-item label="房间号">
                <el-cascader
                    v-model="infoarr"
                    :options="options"
                >
                </el-cascader>
            </el-form-item>
            <el-form-item>
                <el-button type="primary"><span class="bottonword">提交</span></el-button>
            </el-form-item>
        </el-form>
        <el-table :data="result" style="width: 100%">
            <el-table-column prop="date" label="时间"></el-table-column>
            <el-table-column prop="name" label="名字"></el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
        </el-table>
    </el-card>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
  name: 'apartmentinfo',
  setup(){
      const state=reactive({
          info:{
            buildnum:'',
            floornum:'',
            roomnum:''
          },
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
      return{
          ...toRefs(state),
          result
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
