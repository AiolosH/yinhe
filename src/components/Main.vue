<template>
  <div>
    <el-row>
      <el-col>
        <Search :smsg="msg"></Search>
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
  created() {
    this.$eventBus.$on("SearchCode", (data) => {
      console.log("from search vue。", data)
      this.SearchCode()
    });
  },
  methods: {
    SearchCode(data) {
      console.log("mainview search_code")
      console.log(data);
      alert(data)
    },
  },
};
</script>

<style>
</style>