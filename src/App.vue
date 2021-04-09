<template>
  <div class="layout">
    <el-container v-if="showmain" class="container">
      <el-aside class="aside" width="160px">
        <div class="logo">
          <div class="logoword">
            <span class="logotext">宿舍管理系统</span>
          </div>
        </div>
        <el-menu v-if="showtype" 
          :default-openeds="defaultOpen"
          :router="true"
          :default-active="currentPath"
          class="asidemenu">
          <el-submenu index="1">
            <template #title>
              <span>日常管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/admin/visitor" class="menuitem">访客信息登记</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template #title>
              <span>宿舍管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/admin/apartmentchange">宿舍调整</el-menu-item>
              <el-menu-item index="/admin/apartmentout">学生退宿</el-menu-item>
              <el-menu-item index="/admin/apartmentin">学生入住</el-menu-item>
              <el-menu-item index="/admin/apartmentquery">宿舍分配查询</el-menu-item>
              <el-menu-item index="/admin/apartmentallocation">宿舍分配</el-menu-item>
              <el-menu-item index="/admin/fixinfo">维修信息查看</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template #title>
              <span>信息查询</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/admin/apartmentinfo">住宿情况查询</el-menu-item>
              <el-menu-item index="/admin/stuinfo">学生信息查询</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
            <template #title>
              <span>缴费</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/admin/money">缴费</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
        <el-menu v-else
          :default-openeds="defaultOpen"
          :router="true"
          :default-active="currentPath"
        >
          <el-submenu index="1">
            <template #title>
              <span>日常功能</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/stu/fixinfo" class="menuitem">维修登记</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template #title>
              <span>宿舍管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/stu/apartmentout">退宿申请</el-menu-item>
              <el-menu-item index="/stu/apartmentin">入住登记</el-menu-item>
              <el-menu-item index="/stu/apartmentchoose">宿舍选择</el-menu-item>
              <el-menu-item index="/stu/apartmentadjust">调换宿舍申请</el-menu-item>
              <el-menu-item index="/stu/stuinfo">信息补全</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template #title>
              <span>个人信息查询</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/stu/myinfo">信息查询</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
            <template #title>
              <span>缴费</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/stu/money">缴费</el-menu-item>
            </el-menu-item-group>
          </el-submenu>          
        </el-menu>
      </el-aside>
      <el-container class="maincontainer">
        <el-main class="maincontent">
          <Header class="container-header"></Header>
          Main
          <router-view />
        </el-main>
      </el-container>
    </el-container>
    <el-container v-else><router-view /></el-container>
  </div>
</template>

<script>
import { reactive } from 'vue'
import Header from './components/Header'

export default {
  name: 'App',
  components:{
    Header
  },
  setup() {
    const state=reactive({
      showmain:true,
      showtype:true,
      defaultOpen:['1','2','3','4'],
      currentPath:'/'

    })
    return state
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.layout{
  /* vh视图单位 */
  /* min-height: 100vh; */
  height: 100%;
  width: 100%;
}
.container{
  width: 100%;
  /* height: 100%; */
  /* background-color: turquoise; */
}
.el-main{
  padding: 0;
}
.el-aside{
  background-color: #222832;
  color: #fff;
}
.el-header{
  background-color: #99cccc;
}
.el-menu{
  border-right: none;
}
.container-header{
  height: 100px;
}
.aside{
  width: 160px;
  min-height: 100vh;
  overflow: hidden;
  text-align:left;
  background-color: #fff;
  border: solid 1px #e6e6e6;
}
.aside .logo{
  position: relative;
  width: 160px;
  height: 100px;
  color: #fff;
  box-sizing: border-box;
  background-color: #222832;
  border: 2px solid;
  border-color: transparent transparent rgb(0 0 0/50%) transparent;
}
.aside .logoword{
  position: absolute;
  top: 50%;
  left:50%;
  transform:translate(-50%,-50%);
  font-size: 18px;
}
.aside .logotext{
  color: #fff;
}

.aside .asidemenu{
  border-right:none;
}
</style>
