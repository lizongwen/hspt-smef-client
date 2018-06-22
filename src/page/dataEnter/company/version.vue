<template>
	<el-card class="box-card">
		<div slot="header" class="clearfix">
			<div class="card-title">所有版本</div>
			<div class="search-form">
				<el-form :inline="true" :model="searchForm" class="demo-form-inline">
					<el-form-item>
						<el-input v-model="searchForm.searchInput" placeholder="请输入内容">
							<el-button slot="append" type="primary" @click="searchBatch">查询</el-button>
						</el-input>
					</el-form-item>
				</el-form>
			</div>
		</div>
		<div>
			<el-table :data="tableData" style="width: 100%">
				<el-table-column prop="batchNo" label="版本号" width="180">
				</el-table-column>
				<el-table-column prop="version" label="报告编号" width="180">
				</el-table-column>
				<el-table-column prop="updateBy" label="修改人" width="180">
				</el-table-column>
				<el-table-column prop="updateTime" label="修改时间" width="180">
				</el-table-column>
			</el-table>
		</div>
	</el-card>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      searchForm: {
        searchInput: ""
      }
    };
  },
  mounted() {
    this.init();
    this.$store.commit("changeSide", false);
  },
  methods: {
    //初始化页面
    init() {
      //获取版本信息
      this.getVersion();
    },
    // 获取版本列表
    getVersion: async function() {
      let params = {
        token: sessionStorage.getItem("token"),
        username: sessionStorage.getItem("username"),
        creditCode: 123
      };
      const res = await this.$http.post(this.$api.getVersion, params);
      this.tableData = res.data.resultData.data;
    },
    //搜索版本
    searchBatch: async function() {
      let params = {
        token: sessionStorage.getItem("token"),
        username: sessionStorage.getItem("username"),
		creditCode: 123,
		batchNo:this.searchForm.searchInput
      };
      const res = await this.$http.post(this.$api.getBatch, params);
      this.tableData = res.data.resultData.data;
    }
  }
};
</script>

<style lang="scss" scoped>
.el-main {
  .main-content {
    padding: 20px;
    .card-title {
      float: left;
      margin-top: 8px;
    }
    .search-form {
      float: right;
      .el-form-item {
        .el-input {
          min-width: 400px;
        }
        margin-bottom: 0;
      }
    }
  }
}
</style>
