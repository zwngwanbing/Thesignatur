<template>
  <div id="register">
    <div class="a">
      <img width="100%" height="200px" src="../../assets/imgs/mu mu yun@2x.png" alt />
      <div class="backdrop">
        <div class="n">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
            <p style="width:280px; text-align: center;font-weight: 600">登录</p>
            <el-form-item label prop="name">
              <div class="import">
                <img
                  width="15px"
                  height="15px"
                  style=" margin: 0 10px"
                  src="../../assets/imgs/my.png"
                  alt
                />
                <el-input v-model="ruleForm.name" placeholder="请输入您的手机号"></el-input>
              </div>
            </el-form-item>
            <el-form-item prop="pass">
              <div class="import">
                <img
                  width="15px"
                  height="15px"
                  style=" margin: 0 10px"
                  src="../../assets/imgs/my.png"
                  alt
                />
                <el-input type="password" v-model="ruleForm.pass" placeholder="请输入您的密码"></el-input>
              </div>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" style="width:280px;" @click="submitForm('ruleForm')">登录</el-button>
            </el-form-item>
            <p class="Existing">
              已有账号
              <span style="color:#5876F0">点击登录</span>
            </p>
          </el-form>
        </div>
  
      </div>
      <!-- <img src alt /> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    //用户名
    var validatePass = (rule, value, callback) => {
      var reg = /^\w{11}$/;
      //   console.log(reg.test(value))
      if (reg.test(value)) {
        callback(); //验证通过
      } else callback(new Error("用户名只能是11位数")); //验证失败
    };
    //密码验证规则
    var validatePwd = (rule, value, callback) => {
      var reg = /^\w{6,10}$/;
      if (reg.test(value)) {
        callback(); //验证通过
      } else callback(new Error("密码只能是6-10位数字字母下划线")); //验证失败
    };

    return {
      // checked:"",
      ruleForm: {
        name: "",
        pass:"",
        // pass: '',
        // checkPass: '',
      },
      rules: {
        name: [
          { validator: validatePass, trigger: "blur" }
        ],
         pass: [{ validator: validatePwd, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
            this.$router.push('/supersignature')
        } else {
          alert("用户名或密码不正确")
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style lang="less" scoped>
#register {
   width:100%;
   height:100%;
  .a {
    width:100%;
    height:100%;
    background: #fff;
    
   
  }
  .backdrop {
    position: fixed;
    top: 100px;
    left: 50%;
    margin-left: -600px;
    height: 800px;
    width: 1200px;
    background-image: url("../../assets/imgs/card.png");
    background-size:1200px;
    background-repeat: no-repeat;
  }
  .import {
    display: flex;
    align-items: center;
  }
  .n{
    width: 400px;
    background: #fff;
    border-radius: 4%;
    margin: 150px 400px;
    display: flex;
     justify-content: center;
     align-items: center;
      box-shadow: 0px 0px 5px #ccc;
  }
  .demo-ruleForm {
    width: 280px;
    height: 370px;
    margin-top:50px 
    // display: flex;
    // justify-content: center;
    // align-items: center;
  }
  .read {
    width: 280px;
    font-size: 10px;
    margin-left: 10px;
  }
  .el-form-item {
    margin-bottom: 15px;
  }
  .Existing {
    font-size: 10px;
    width: 280px;
    text-align: center;
    margin: 0;
  }
  .bb {
    margin: 0 !important;
  }
  .el-form-item__error {
    font-size: 8px;
  }
}
</style>