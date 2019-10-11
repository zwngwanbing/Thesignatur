<template>
  <div id="register">
    <div class="a">
      <img width="1000px" height="140px" src="../../assets/imgs/mu mu yun@2x.png" alt />
      <div class="backdrop">
        <div class="bb">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          class="demo-ruleForm"
        >
          <p style="width:280px; text-align: center;font-weight: 600">登录</p>
          <el-form-item label prop="name">
            <div class="import">
              <img width="15px"  height="15px" style=" margin: 0 10px" src="../../assets/imgs/my.png" alt/>
              <el-input v-model="ruleForm.name" placeholder="请输入您的用户名"></el-input>
            </div>
          </el-form-item>
           <el-form-item label prop="phone">
            <div class="import">
              <img width="15px"  height="15px" style=" margin: 0 10px" src="../../assets/imgs/phone.png" alt/>
              <el-input v-model="ruleForm.phone" placeholder="请输入手机号"></el-input>
            </div>
          </el-form-item>
            <el-form-item label prop="verify">
            <div class="import">
              <img width="15px"  height="10px" style=" margin: 0 10px" src="../../assets/imgs/xinxi.png" alt/>              
              <el-input v-model="ruleForm.verify" placeholder="请输入短信验证码"></el-input>
            </div>
          </el-form-item>

            <el-form-item label prop="pass">
            <div class="import">
              <img width="15px"  height="15px" style=" margin: 0 10px" src="../../assets/imgs/mima.png" alt/>   
               <el-input type="password" v-model="ruleForm.pass" auto-complete="off" placeholder="请输入密码，不少于6位"></el-input>           
              <!-- <el-input v-model="ruleForm.password" placeholder="请输入密码，不少于6位"></el-input> -->
            </div>
            <div class="read">
               <el-checkbox></el-checkbox>我已阅读并同意 <span style="color:#5876F0">《服务协议》</span>及<span style="color:#5876F0">《隐私政策》</span>
            </div>
          </el-form-item>
          <el-form-item >
            <el-button type="primary" style="width:280px;" @click="submitForm('ruleForm')">注册</el-button>
          </el-form-item>   
          <p class="Existing">已有账号 <span style="color:#5876F0">点击注册</span> </p>       
        </el-form>
         </div>
      </div>
      <img src alt />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // checked:"",
      ruleForm: {
        name: "",
        pass: '',
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
         pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
      }
    };
    var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
#register {
  .a {
    width: 1000px;
    height: 600px;
    background: #fff;
    margin: 0 auto;
  }
  .backdrop {
    display: flex;
    justify-content: center;
    height: 420px;
    width: 800px;
    background-image: url("../../assets/imgs/card.png");
    background-size: 800px;
    background-repeat: no-repeat;
  }
  .import {
    display: flex;
    align-items: center;
  }
  .demo-ruleForm{
    margin: 0 auto;
     width: 280px;
     height: 370px;
     background: #fff;
     border-radius:4% ;
     margin-top:30px 
     
  }
  .read{
    width: 280px;
    font-size:10px;
    margin-left:10px 
  }
  .el-form-item{
    margin-bottom:15px
  }
  .Existing{
    font-size: 10px;
    width: 280px;
    text-align:center;
    margin: 0;
  }
  .bb{
    margin: 0!important;
  }
  .el-form-item__error{
    font-size: 8px;
  }
}
</style>