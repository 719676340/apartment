<template>
  <div class='login'>
      <div class="login-content">
          <div class="title">
              <span class="word">宿舍信息管理系统</span>
          </div>
          <el-form class="loginform" :model="info" :rules="rules" ref="loginform" label-position="left" >
              <el-form-item label="账号" class="loginformitem" prop="username">
                  <el-input type="text" v-model="info.username" placeholder="请输入内容"></el-input>
              </el-form-item>
              <el-form-item label="密码" class="loginformitem" prop="password"> 
                  <el-input type="password" v-model="info.password" placeholder="请输入内容"></el-input>
              </el-form-item>
              <el-form-item  class="loginformitem">
                    <el-radio v-model="info.type" label="1">学生</el-radio>
                    <el-radio v-model="info.type" label="0">管理员</el-radio>
              </el-form-item>
              <el-form-item class="loginformitem">
                  <el-button type="primary" @click="submitForm"><span class="wordcolor">提交</span></el-button>
              </el-form-item>
          </el-form>
      </div>
  </div>    
</template>

<script>
import { reactive, ref, toRefs } from 'vue'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'
import axios from '../utils/axios'
import {localSet} from '../utils/index'
import { useStore } from 'vuex'
export default {
  name: 'login',
  setup(){ 
    const store=new useStore()
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
    const state=reactive({
        info:{
            username:'',
            password:'',
            type:''

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
                axios.post('/login',{
                    id:state.info.username,
                    password:state.info.password,
                    type:state.info.type
                }).then((res)=>{
                    if(res.data.code==500){
                        ElMessage.error({
                            message:'账号或密码错误'
                        })
                        throw(new Error('账号或密码错误'))
                    }else if(res.data.code==200){
                        ElMessage.success({
                            message:'登入成功' 
                        })
                        localSet('token', res.data.data.token)
                        store.dispatch('changeId',state.info.username)
                        store.dispatch('changeType',state.info.type)
                        if(state.info.type==0){
                            router.push({path:'/admin/'})
                        }else{
                            router.push({path:'/stu/'})
                        }
                        return {
                            flag:true,
                            id:state.info.username,
                            type:state.info.type
                        }
                    }else{
                        ElMessage.error({
                            message:'未知错误'
                        })
                        throw(new Error('未知错误'))
                    }
                }).then((data)=>{
                    if(data.flag){
                        axios.post('/logintablein',{
                            id:data.id,
                            type:data.type
                        })
                    }
                }).catch((err)=>{
                    console.log(22222222)
                    console.log(err)
                })
            }else{      
                ElMessage('密码或账号不能为空') 
            }   
        })
    }
    return {
        //保持
        ...toRefs(state),
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
    height: 550px;
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
.wordcolor{
    color: #fff;
}
</style>
