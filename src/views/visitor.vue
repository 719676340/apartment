<!-- 访客登记表 两个部分 一个是信息的登记form 改成按钮弹出小框登记的  一个是信息的展示table
  -->
<template>
    <el-card class="container">
        <template #header>
          <div class="card-header">
            <el-button class="button" type="text">操作按钮</el-button>
            <el-button class="button" type="text">操作按钮</el-button>
          </div>    
        </template>
    </el-card>
</template>

<script>
export default {
  name: 'visitor',
}
</script>
<style>
.container{
}
.card-header{
    
}
</style>
