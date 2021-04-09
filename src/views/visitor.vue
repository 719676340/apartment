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
                <el-table-column prop="date" label="时间"></el-table-column>
                <el-table-column prop="name" label="名字"></el-table-column>
                <el-table-column prop="address" label="地址"></el-table-column>
                <!-- <el-table-column prop="date" label="时间"></el-table-column> -->
                <el-table-column fixed="right" label="操作" width="120">
                    <template #default>
                      <el-button
                        type="danger"   
                        size="small"
                        @click="sayhi"
                        >
                        <span class="bottonword">移除</span>
                      </el-button>
                      <!-- <el-button class="button cardbotton" type="primary" >新增访客</el-button> -->
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </el-card>
    <addvisitor ref="add"></addvisitor>
</template>

<script>
import { reactive, toRefs ,ref} from 'vue'
import addvisitor from '../components/addvisitor'
export default {
  name: 'visitor',
  components:{
    addvisitor
  },
  setup(){
      const add=ref(null)
      const state=reactive({
        tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
      })
      const sayhi=function(){
          console.log('hello')
      }
      const addvisitor=function(){
          add.value.open()
      }
      return {
          ...toRefs(state),
          add,
          sayhi,
          addvisitor
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
