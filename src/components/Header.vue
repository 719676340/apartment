<template>
  <div class='header clearfix'>
      <div class="head-left">
          {{name}}
      </div>
      <div class="head-right">
          <div class="info">
              <span><i class="iconfont  icon-touxiang"></i></span>
              <span class="infoname">{{userinfo}}</span>
          </div>
      </div>
  </div>    
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
  name: 'Header',
  setup(){
    const state=reactive({
        name:'标题',
        userinfo:'名字测试'
    })
    return {
        ...toRefs(state)
    }
  }
}
</script>
<style>
.header{
    position: relative;
    width: 100%;
    height: 100%;
    box-shadow: 0 2px 10px rgb(0 0 0/15%);
}
.clearfix::before,.clearfix::after{
    display: table;
    content: ' ';
    clear: both;
}
.head-left{
    float: left;
    width: 200px;
    height: 100px;
    font-size: 20px;
    line-height: 100px;
    color: #000;
}
.head-right{
    float: right;
    width: 200px;
    height: 100px;
    font-size: 16px;
    line-height: 100px;
}
</style>
