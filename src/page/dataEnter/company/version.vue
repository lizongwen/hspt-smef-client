<template>
	<el-card class="box-card">
		<div slot="header" class="clearfix">
			<div class="card-title">所有版本</div>
			<div class="search-form">
				<el-form :inline="true" :model="searchForm" class="demo-form-inline">
					<el-form-item>
						<el-input v-model="searchForm.searchInput" placeholder="请输入内容">
							<el-button slot="append" type="primary" @click="onSubmit">查询</el-button>
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
				<el-table-column prop="updateBy" label="修改人">
				</el-table-column>
				<el-table-column prop="updateTime" label="修改时间">
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
    // console.log(this.$parent)
    //this.$parent.isAside=false;
    // console.log(this.$parent.isAside)
    this.$emit("child-side", false);
  },
  methods: {
    //初始化页面
    init() {
      //获取版本信息
      this.getVersion();
    },
    //查询版本
    onSubmit() {
      let searchInput = this.searchForm.searchInput;
      console.log(searchInput);
    },
    // 获取版本列表
    getVersion() {
      this.$http({
        method: "post",
        url: "/hspt-web-api/version/list",
        transformRequest: [
          function(data) {
            // 对 data 进行任意转换处理
            return Qs.stringify(data);
          }
        ],
        data: {
          token:"eyJhbGciOiJIUzI1NiJ9.eyJwcmluY2lwYWwiOiJhaXRpbWUiLCJleHAiOjE1MzU0NjQ2MzZ9.BG4w9PKt0CufJBrm6kK40nrvRI5kHjq61fxdwGWAM_k",
          creditCode: "123"
        }
      }).then(resp => {
        this.tableData = resp.data.resultData.data;
      });
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
