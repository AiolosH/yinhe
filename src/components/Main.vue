<template>
  <div>
    <el-row>
      <el-col>
        <Tool> </Tool>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <Search :smsg="msg"></Search>
      </el-col>
    </el-row>
    <el-row>
      <el-container>
        <el-aside class="Navi" width="240px">
          <Navigation></Navigation>
        </el-aside>
        <el-main>
          <TableUI></TableUI>
        </el-main>
      </el-container>  
    </el-row>
  </div>
</template>
<script>
import Search from "./Search.vue";
import Navigation from "./Navigation.vue";
import TableUI from "./TableUI.vue";
import Tool from "./Tool.vue";

export default {
  components: {
    Navigation: Navigation,
    Search: Search,
    TableUI: TableUI,
    Tool: Tool,
  },
  data() {
    return {
      msg: "hello vue",
    };
  },
  mounted() {
    // 打包需要打开，本地调试不需要
    // window.open("http://20.205.119.14/#/index")
  },
  created() {
    
  },
  methods: {
    
  },
};
</script>

<style>
</style>