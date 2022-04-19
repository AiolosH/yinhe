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
    </el-menu>
  </el-col>
</el-row>
</template>

<script>
  export default {
    data() {
      return {
        // todo 后续menu从client来就行了
        menus: [{
          title: '沪深A股',
          index: '1',
          child: [{
            title: '基础信息',
            index: '1-1'
          }]
        },
        {
          title: '债券',
          index: '2',
          child: [{
            title: '基础信息',
            index: '2-1'
          }]
        },
        {
          title: '基金',
          index: '3',
          child: [{
            title: '基础信息',
            index: '3-1'
          }]
        },
        {
          title: '指数',
          index: '4',
          child: [{
            title: '基础信息',
            index: '4-1'
          }]
        },
        {
          title: '期权',
          index: '5',
          child: [{
            title: '基础信息',
            index: '5-1'
          }]
        },
        {
          title: '港股通',
          index: '6',
          child: [{
            title: '基础信息',
            index: '6-1'
          }]
        }
        ]
      }
    },
    mounted() {
      // todo get menus
      // menus = 
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