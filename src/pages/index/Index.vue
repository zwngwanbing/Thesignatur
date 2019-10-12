<template>
  <div id="index">
    <!-- 导航栏 -->
    <div class="navigation">
      <el-row :gutter="10">
        <div class="grid-content bg-purple">
          <img width="166px" height="42px" src="../../assets/imgs/logo@2x.png" alt />
        </div>
        <div class="grid-content bg-purple-light">
          <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            router
          >
            <el-menu-item index="/supersignature">超级签名</el-menu-item>
            <el-menu-item index="/corporatesignature">企业签名</el-menu-item>
            <el-menu-item index="/appwrapping">应用封装</el-menu-item>
            <el-menu-item index="/inside">内侧分发</el-menu-item>
            <!-- <el-menu-item index="/development">开发论坛</el-menu-item> -->
            <el-menu-item index="/tool">工具箱</el-menu-item>
            <el-menu-item index="/aso">ASO</el-menu-item>
            <el-menu-item index="/document">文档价格</el-menu-item>
            <el-menu-item index="/forum">论坛</el-menu-item>
          </el-menu>
        </div>

        <div class="grid-content bg-purple-light">
          <div class="portrait">
            <span style="color:#666；fontSize:14px; margin-right:20px">1234567</span>
            <img width="40px" height="40px" src="../../assets/imgs/my1.png" alt />
            <div style="margin-left:10px;">
              <router-link to="/" style="color:#5876f0;fontSize:14px">登录/</router-link>
              <router-link to style="color:#5876f0;margin-left:10px;fontSize:14px">注册</router-link>
            </div>
          </div>
        </div>
      </el-row>
    </div>
    <!-- 超级签名和总览 -->
      <!-- 路由出口 -->
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
import "element-ui/lib/theme-chalk/display.css";
import "../components/Components.css";
export default {
  data() {
    return {
     activeIndex: "/supersignature",
    };
  },
};
</script>

<style lang="less" scoped>
#index {
  min-width: 1200px;
  height: 700px;
  margin: 0 auto;
  .navigation {
    // min-width:1200px;
    height: 70px;
    background: #fff;
    display: flex;
    justify-content: center;
  }

  .el-row {
   
    width: 1250px;
    height: 70px;
    margin: 0 auto;
    // margin: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  // .el-menu-item {
  //   height: 30px !important;
  //   line-height: 30px !important;
  //   font-size: 14px;
  //   color: #5876f0;
  // }
  .el-menu.el-menu--horizontal {
    border: none;
  }
  .portrait {
    display: flex;
    align-items: center;
  }
  // .menu {
  //   width: 1200px;
  //   display: flex;
  //   margin: 0 auto;
  // }
  .content {
    width: 1200px;
     height: 500px;
    // background: #fff;
    margin: 0 auto;
    // margin-top:20px; 
    display: flex;
    justify-content: space-between;
  }
}
</style>