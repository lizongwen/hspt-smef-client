<template>
	<div>
		<main-header></main-header>
		<div class="main-content">
			<el-card class="box-card">
				<div slot="header" class="clearfix">
					<div class="card-title">全部项目</div>
					<div class="search-form">
						<el-form :inline="true" :model="searchForm" class="demo-form-inline">
							<el-form-item>
								<el-input v-model="searchForm.searchInput" placeholder="请输入内容">
									<el-button slot="append" type="primary" @click="onSubmit">查询</el-button>
								</el-input>
							</el-form-item>
							<el-form-item>
								<el-button type="primary" @click="addCompany">新增企业</el-button>
							</el-form-item>
						</el-form>
					</div>
				</div>
				<div>
					<el-table :data="tableData" style="width: 100%">
						<el-table-column prop="companyName" label="企业名称" min-width="180">
						</el-table-column>
						<el-table-column prop="" label="报告进度" width="180">
						</el-table-column>
						<el-table-column prop="updateBy" label="修改人">
						</el-table-column>
						<el-table-column prop="updateTime" label="修改时间">
						</el-table-column>
						<el-table-column fixed="right" label="操作" width="100">
							<template slot-scope="scope">
								<el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
							</template>
						</el-table-column>
					</el-table>
					<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[100, 200, 300, 400]" :page-size="10" layout="total, sizes, prev, pager, next, jumper" :total="400">
					</el-pagination>
				</div>
			</el-card>
		</div>
	</div>
</template>

<script>
import mainHeader from "@/components/dataEnter/mainHeader.vue";
export default {
  data() {
    return {
      searchForm: {
        searchInput: ""
      },
      tableData: [],
      currentPage: 1
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.getProject();
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    handleClick(row) {
      console.log(row.creditCode);
    
      this.$router.push({
        path: "/company",
        query: { creditCode: row.creditCode }
      });
    },
    onSubmit() {
      console.log("submit!");
    },
    addCompany() {
      alert("新增企业");
    },
    getProject: async function() {
      let params = {
        token: sessionStorage.getItem("token"),
        pageNo: 1,
        pageSize: 10,
        loginName: sessionStorage.getItem("username")
      };
      const res = await this.$http.post(this.$api.projectList, params);
      console.log(res);
      this.tableData = res.data.resultData;
    }
  },
  components: {
    mainHeader
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

