<template>
	<div>
		<el-table :data="tableData" style="width: 100%">
			<el-table-column prop="date" label="日期" width="180">
			</el-table-column>
			<el-table-column prop="name" label="姓名" width="180">
			</el-table-column>
			<el-table-column prop="address" label="地址">
			</el-table-column>
		</el-table>

	</div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    //初始化页面
    init() {
      //获取版本信息
      this.getVersion();
    },
    // 获取版本列表
    getVersion() {
      this.$http({
        method: "get",
		url: "/hspt-web-api/version/list",
		// headers: {'X-Requested-With': },
		data:{
			token:'',
			creditCode:''
		}
      }).then(resp => {
        console.log(resp.data);
        //this.tableData = resp.data;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
