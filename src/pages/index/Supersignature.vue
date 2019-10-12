<template>
  <div id="signature">
    <!-- 超级签名和总览 -->
    <div class="menu">
      <div style="width:78px height:8px ;margin:10px 0">
        <span style="fontSize:12px;color:#333333">超级签名></span>
        <span style="fontSize:12px">总览</span>
      </div>
    </div>
    <!-- 内容 -->
    <div class="content">
      <!-- 左 -->
      <div class="left">
        <!-- 搜索栏 -->
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
        <!-- 表格 -->
        <div>
          <!--  @cell-click="drawer = true"抽屉点击事件 -->
          <el-table
            @cell-click="drawer = true"
            header-align="center"
            :data="tableData"
            stripe
            style="width: 100%;margin-top:20px;font-size:12px"
            :header-cell-style="{background:'#E5EAFF',color:'#333',fontSize:'10px'}"
          >
            <el-table-column prop="icon" label="应用图标" align="center" width="65px">
              <template slot-scope="scope">
                <i class="el-icon-menu"></i>
                {{scope.row.phone}}
              </template>
            </el-table-column>
            <el-table-column prop="name" label="应用名称" align="center" width="100px"></el-table-column>
            <el-table-column prop="versions" label="版本" align="center" width="80px"></el-table-column>
            <el-table-column prop="quantity" label="下载量" align="center" width="80px"></el-table-column>
            <el-table-column prop="consume" label="消耗次数" align="center" width="80px"></el-table-column>
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

          <!-- 抽屉 -->
          <el-radio-group v-model="direction"></el-radio-group>
          <el-drawer
            style="height: 86%;margin-top:55px;margin-right:170px"
            size="75%"
            :modal="false"
            :visible.sync="drawer"
            :direction="direction"
            :before-close="handleClose"
          >
            <el-menu
              :default-active="activeIndex"
              class="el-menu-demo"
              mode="horizontal"
              @select="handleSelect"
            >
              <el-menu-item index="1">应用概况</el-menu-item>
              <el-menu-item index="2">统计信息</el-menu-item>
              <el-menu-item index="3">版本记录</el-menu-item>
              <el-menu-item index="4">下载记录</el-menu-item>
              <el-menu-item index="5">消息推送</el-menu-item>
              <el-menu-item index="6">异常报警</el-menu-item>
              <el-menu-item index="7">消费记录</el-menu-item>
              <!-- <el-menu-item index="8">其他</el-menu-item> -->
            </el-menu>
            <div>
              <router-view></router-view>
            </div>
          </el-drawer>
        </div>
      </div>
      <!-- 右 -->
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
          <el-button type="danger" plain style="font-size:12px">
            <i class="el-icon-tickets" style="width:15px"></i>
            账单管理
          </el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //  active:"",
      //抽屉
      activeIndex: "1",
      drawer: false,
      direction: "rtl",
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        }
      ],
      tableData: [
        {
          icon: "", //应用图标
          name: "公务员考试", //应用名称
          versions: "1.1.0", //b版本
          quantity: "1000", //下载量
          consume: "1000", //x消耗次数
          time: "2019-10-09 18:50:00", //更新时间
          site: "https://project/iosApp/down" //下载地址
          // status: '',//上架状态
        },
        {
          icon: "", //应用图标
          name: "公务员考试", //应用名称
          versions: "1.1.0", //b版本
          quantity: "1000", //下载量
          consume: "1000", //x消耗次数
          time: "2019-10-09 18:50:00", //更新时间
          site: "https://project/iosApp/down" //下载地址
          // status: '',//上架状态
        },
        {
          icon: "", //应用图标
          name: "公务员考试", //应用名称
          versions: "1.1.0", //b版本
          quantity: "1000", //下载量
          consume: "1000", //x消耗次数
          time: "2019-10-09 18:50:00", //更新时间
          site: "https://project/iosApp/down" //下载地址
          // status: '',//上架状态
        },
        {
          icon: "", //应用图标
          name: "公务员考试", //应用名称
          versions: "1.1.0", //b版本
          quantity: "1000", //下载量
          consume: "1000", //x消耗次数
          time: "2019-10-09 18:50:00", //更新时间
          site: "https://project/iosApp/down" //下载地址
          // status: '',//上架状态
        }
      ],
      value4: "",
      activeIndex: "/supersignature",
      input21: ""
    };
  },
  methods: {
    // 抽屉事件
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    //导航
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="less" scoped>
#signature {
  .el-menu-item {
    height: 30px !important;
    line-height: 30px !important;
    font-size: 14px;
    color: #5876f0;
  }

  .menu {
    width: 1200px;
    display: flex;
    margin: 0 auto;
  }
  .content {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  .left {
    padding: 13px 9px;
    width: 970px;
    height: 500px;
    background: #fff;
  }
  .right {
    padding: 13px 9px;
    width: 180px;
    height: 500px;
    background: #fff;
  }

  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    // min-height: 36px;
    background: #fff;
  }
  .search {
    display: flex;
    justify-content: space-between;
  }
  // .el-input{
  //   height: 20px!important;
  // }
  .el-table .cell {
    font-size: 10px !important;
  }
  .v-button {
    .el-button {
      width: 150px;
      height: 28px;
      margin: 0 auto;

      line-height: 28px;
      display: flex;
      justify-content: center;
      padding: 0;
      background: #ff6984;
      border: none;
    }
  }
  .purchase {
    .el-button {
      width: 150px;
      height: 35px;
      margin: 0 auto;
      line-height: 35px;
      font-size: "6px";
      display: flex;
      justify-content: center;
      padding: 0;
      margin: 10px 15px;
    }
  }
  .time {
    font-size: 12px;
    margin: 50px 15px;
  }
  .el-drawer__header{
    margin: 0!important
  }
}
</style>