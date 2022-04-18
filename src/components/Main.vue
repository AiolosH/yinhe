<template>
  <div>
    <el-row>
      <el-col>
        <div>
          <Search></Search>
        </div>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="3">
        <Navigation></Navigation>
      </el-col>
      <el-col :span="21">
        <TableUI></TableUI>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Search from "./Search.vue";
import Navigation from "./Navigation.vue";
import TableUI from "./TableUI.vue";

export default {
  components: {
    Navigation: Navigation,
    Search: Search,
    TableUI: TableUI,
  },
  data() {
    return {
      input: "",
    };
  },
};
</script>

<style>
</style>