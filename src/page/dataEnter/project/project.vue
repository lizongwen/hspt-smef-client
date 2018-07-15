<template>
	<div>
		<main-header></main-header>
		<div class="main-content">
			<el-card class="box-card" shadow='nevner'>
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
								<el-button type="primary" @click="addCompanyForm">新增企业</el-button>
							</el-form-item>
						</el-form>
					</div>
				</div>
				<div>
					<el-table :data="tableData" style="width: 100%">
						<el-table-column prop="companyName" label="企业名称" min-width="180">
						</el-table-column>
						<el-table-column prop="tbjdbfb" label="报告进度" width="180">
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
		<el-dialog title="新增企业" :visible.sync="dialogFormVisible" width="600px">
			<el-form :model="addForm">
				<el-form-item label="公司名称" label-width="120px">
					<el-input v-model="addForm.companyName" auto-complete="off" placeholder="公司名称" style="width:370px"></el-input>
				</el-form-item>
				<el-form-item label="信用代码" label-width="120px">
					<el-input v-model="addForm.creditCode" auto-complete="off" placeholder="信用代码" style="width:370px"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="dialogFormVisible = false">取 消</el-button>
				<el-button type="primary" @click="addCompanyProject">确 定</el-button>
			</div>
		</el-dialog>
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
      addForm: {
        companyName: "",
        creditCode: ""
      },
      tableData: [],
      currentPage: 1,
      dialogFormVisible: false
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
      //   console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      //   console.log(`当前页: ${val}`);
    },
    handleClick(row) {
      sessionStorage.setItem("creditCode", row.creditCode);
      this.$router.push({
        path: "/company",
        query: { creditCode: row.creditCode}
      });
    },
    onSubmit() {
      this.getProject(this.searchForm.searchInput);
    },
	//显示新增企业项目弹框
    addCompanyForm: async function() {
      this.dialogFormVisible = true;
    },
	//新增企业项目内容
	addCompanyProject:async function() {
	   let params = {
        token: sessionStorage.getItem("token"),
        companyName: this.addForm.companyName,
		creditCode:this.addForm.creditCode
      };
	   const res = await this.$http.post("/hspt-web-api/company/addNewProject", params);
	  if (res.data.resultCode == "0") {
	    this.dialogFormVisible = false;
      this.$message({ message: res.data.resultMsg, type: "success" });
      this.getProject();
	  }else{
	    this.$message({ message: res.data.resultMsg, type: "warning" });
	  }
	},
	
	//获取项目列表
    getProject: async function() {
      let params = {
        token: sessionStorage.getItem("token"),
        pageNo: 1,
        pageSize: 10,
        username: sessionStorage.getItem("username"),
        parentIds: "0",
        queryKey: this.searchForm.searchInput
      };
      const res = await this.$http.post("/hspt-web-api/project/list", params);
      this.tableData = res.data.resultData.records;
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

