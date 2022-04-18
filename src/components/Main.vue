<template>
  <div>
    <el-row>
      <el-col>
        <Search @SearchCode="search_code" :smsg="msg"></Search>
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
      msg:"hello vue"
    };
  },
  methods: {
    search_code(data) {
      console.log(data);
    },
  },
};
</script>

<style>
</style>