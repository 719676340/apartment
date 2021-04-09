<template>
  <div class='login'>
      <div class="login-content">
          <div class="title">
              <span class="word">宿舍信息管理系统</span>
          </div>
          <el-form class="loginform" :model="ruleForm" :rules="rules" ref="loginform" label-position="left" >
              <el-form-item label="账号" class="loginformitem" prop="username">
                  <el-input type="text" v-model="ruleForm.username" placeholder="请输入内容"></el-input>
              </el-form-item>
              <el-form-item label="密码" class="loginformitem" prop="password">
                  <el-input type="password" v-model="ruleForm.password" placeholder="请输入内容"></el-input>
              </el-form-item>
              <el-form-item class="loginformitem">
                  <el-button type="primary" @click="submitForm">提交</el-button>
              </el-form-item>
          </el-form>
      </div>
  </div>    
</template>

<script>
import { reactive, ref, toRefs } from 'vue'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'
export default {
  name: 'login',
  setup(){ 
    const router=new useRouter()
    const loginform=ref(null)
    // 不知道为什么可以不用加status
    const checkname=function(rule, value, callback){
        if(value===''){
            ElMessage('账户不能为空')   
            callback(new Error('账户不能为空'))
        }else{
            callback()
        }
    }
    const checkpassword=function(rule,value,callback){
        if(value===''){
            ElMessage('密码不能为空')
            callback(new Error('密码不能为空'))
        }else{
            callback()
        }
    }
    const status=reactive({
        ruleForm:{
            username:'',
            password:''
        },
        rules:{
            username:[
                {validator: checkname, trigger: 'blur' }
            ],
            password:[
                {validator: checkpassword, trigger: 'blur'}
            ]   
        }
    })
    const submitForm = async ()=>{
        loginform.value.validate((valid)=>{
            if(valid){
                console.log(valid)
                router.push({path:'/introduce'})
            }else{      
                ElMessage('密码或账号不能为空') 
            }   
        })
    }
    return {
        //保持
        ...toRefs(status),
        submitForm,
        loginform,
    }
  }
}
</script>
<style>
.login{
    position: relative;
    width: 100%;
    height: 100%;
    margin-top: 20vh;
}
.login-content{
    position: relative;
    width: 420px;
    height: 500px;
    margin: auto;
    box-shadow: 0px 2px 10px rgb(0 0 0/15%);
}
.title{
    width: 100%;
    height: 100px;
    box-sizing: border-box;
    border: 2px solid;
    border-color: transparent transparent rgb(0 0 0/15%) transparent ;
}
.title .word{
    font-size: 40px;
    line-height: 100px;
}
.loginform{
    position: relative;
    width: 100%;
    height: 400px;
    box-sizing: border-box;
    padding: 50px 20px 0;
    /* background-color: sandybrown; */
}
.loginformitem{
    display: block;
    margin-bottom: 40px;
}
</style>
