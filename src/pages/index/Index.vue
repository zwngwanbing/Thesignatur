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
              <router-link to="/ligon" style="color:#5876f0;fontSize:14px">登录/</router-link>
              <router-link to style="color:#5876f0;margin-left:10px;fontSize:14px">注册</router-link>
            </div>
          </div>
        </div>
      </el-row>
    </div>
    <!-- 超级签名和总览 -->

    <!-- <div class="menu">
      <div style="width:78px height:8px ;margin:10px 0">
        <span style="fontSize:12px;color:#333333">超级签名></span>
        <span style="fontSize:12px">总览</span>
      </div>
    </div> -->
    
    <!-- 内容 -->
      <!-- 左 -->
        <!-- 搜索栏 -->
        
    <!-- <div class="content">
      <div class="left">
        <div class="search">
          <el-input
            placeholder="请输入内容"
            style="width:120px;"
            size="mini"
            suffix-icon="el-icon-search"
            v-model="input21"
          ></el-input>
          <div>
            <span style="font-size:12px;margin-right:15px">状态 ：</span>
            <el-select
              v-model="value4"
              clearable
              size="mini"
              placeholder="请选择"
              style="width:120px;"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
        </div>

        <div>
          <el-table
            header-align="center"
            :data="tableData"
            stripe
            style="width: 100%;margin-top:20px;font-size:12px"
            :header-cell-style="{background:'#E5EAFF',color:'#333',fontSize:'10px'}"
          >
            <el-table-column prop="icon" label="应用图标" align="center"  width="65px">
              <template slot-scope="scope">
                <i class="el-icon-menu"></i>
                {{scope.row.phone}}
              </template>
            </el-table-column>
            <el-table-column prop="name" label="应用名称" align="center"  width="100px"></el-table-column>
            <el-table-column prop="versions" label="版本" align="center"  width="80px"></el-table-column>
            <el-table-column prop="quantity" label="下载量" align="center"  width="80px"></el-table-column>
            <el-table-column prop="consume" label="消耗次数" align="center"  width="80px"></el-table-column>
            <el-table-column prop="time" label="更新时间" align="center"></el-table-column>
            <el-table-column prop="site" label="下载地址" align="center"></el-table-column>
            <el-table-column prop="status" label="上架状态" align="center" width="80px">
              <template slot-scope="scope">
                <el-switch
                  active-color="#5876F0"
                  inactive-color="#DCDCDC"
                  v-model="scope.row.status"
                ></el-switch>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    
      <div class="right">
        <div class="v-button">
          <el-button type="primary" class="button" style="font-size:14px">主要按钮</el-button>
        </div>
        <div class="time">
          <p>剩余超级签名次数：</p>
          <p>1000000</p>
        </div>
        <div class="time">
          <p>已使用超级签名次数：</p>
          <p>1000000</p>
        </div>
        <div class="time">
          <p>应用数</p>
          <p>10个</p>
        </div>
        <div class="purchase">
          <el-button type="primary" plain style="font-size:12px;">
            <i class="el-icon-goods" style="width:15px"></i>
          购买超级签名次数
          </el-button>     
            <el-button type="danger"  plain style="font-size:12px">
              <i class="el-icon-tickets" style="width:15px"></i>
              账单管理
            </el-button>
        </div>
      </div>
    </div> -->

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