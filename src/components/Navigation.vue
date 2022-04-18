<template>
<el-row class="tac">
  <el-col :span="24">
    <el-menu default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-submenu v-for="item of menus" :key="item.index" :index="item.index">
        <template slot="title">
          <span class="el-top-title">{{item.title}}</span>
        </template>
        <el-menu-item-group v-for="child of item.child" :key="child.index">
          <el-menu-item :index="child.index">{{child.title}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <!-- <el-submenu index="1">
        <template slot="title">
          <span class="el-top-title">沪深A股</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">基础信息</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <span class="el-top-title">债券</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1">基础信息</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <span class="el-top-title">基金</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="3-1">基础信息</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <span class="el-top-title">指数</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="4-1">基础信息</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">
          <span class="el-top-title">期权</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="5-1">基础信息</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="6">
        <template slot="title">
          <span class="el-top-title">港股通</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="6-1">基础信息</el-menu-item>
        </el-menu-item-group>
      </el-submenu> -->
    </el-menu>
  </el-col>
</el-row>
</template>

<script>
  export default {
    data() {
      return {
        menus: [{
          title: '港股通',
          index: '1',
          child: [{
            title: '基础信息',
            index: '1-1'
          }]
        }]
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>
.el-top-title {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;

}

el-menu-item{
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  font-size:8px
}
</style>