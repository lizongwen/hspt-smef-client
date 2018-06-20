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
						<el-table-column prop="date" label="日期" width="180">
						</el-table-column>
						<el-table-column prop="name" label="姓名" width="180">
						</el-table-column>
						<el-table-column prop="address" label="地址">
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
        searchInput: "",
      },
      tableData: [
        {
			id:'1-1',
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {id:'1-2',
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {id:'1-3',
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {id:'1-4',
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      currentPage: 1
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    handleClick(row) {
		console.log(row.id)
      this.$router.push({ path: "/company" });
    },
    onSubmit() {
      console.log("submit!");
	},
	addCompany(){
		alert('新增企业');
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
	.card-title{
		float: left;
		margin-top:8px;
	}
	.search-form{
		float: right;
		.el-form-item{
			.el-input{
				min-width:400px;
			}
			margin-bottom: 0
		}
	}
  }
}
</style>

