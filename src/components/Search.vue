<template>
  <el-row class="search_bar">
    <el-col :span="2" class="search-text">
      代码查找
    </el-col>
    <el-col :span="3">
      <el-input class="search-input" v-model="input" placeholder="请输入内容"></el-input>
    </el-col>
    <el-col :span="2">
      <el-button class="search-button" size="small">查找</el-button>
    </el-col>
  </el-row>
</template>
<script>
export default {
  data() {
    return {
      input: ''
    }
  }
}
</script>

<style>
.search_bar {
  height:40px
}

.search-text {
  font-size: 20px;
  text-align:center;
  margin:0 auto;
}

div > .el-input__inner {
  height:30px;
  margin:0 auto;
}
.search-button {
  margin:0 auto;
}
</style>