 <template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="code" label="代码" width="180"> </el-table-column>
    <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
    <el-table-column prop="market" label="市场" width="180"> </el-table-column>
    <el-table-column prop="industry" label="行业"> </el-table-column>
  </el-table>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      tableData: null,
    };
  },
  mounted() {
    this.handleUserList();
  },
  methods: {
    handleSizeChange: function (size) {
      this.pagesize = size;
      console.log(this.pagesize);
    },
    handleCurrentChange: function (currentPage) {
      this.currentPage = currentPage;
      this.handleUserList(currentPage);
    },
    handleUserList(page = 1) {
      console.log(page);
      Axios.get("http://localhost:8080/TestSelectStockBaseData", {
          params: {
            limit: 20,
            offset: (page - 1) * 20,
          },
        })
        .then((res) => {
          console.log(res.data.data);
          this.tableData = res.data.data;
          console.log(this.tableData)
        });
    },
  },
};
</script>