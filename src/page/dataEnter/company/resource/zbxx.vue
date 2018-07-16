<template>
	<div>
		<el-card class="box-card" shadow='nevner'>
			<div slot="header" class="clearfix">
				<div class="card-right-wrap">
					<el-button type="default" size="medium" @click="retrieveRemoteData">获取数据</el-button>
					<el-button type="primary" size="medium" @click="saveZtbxx">保存</el-button>
				</div>
				<div class="card-title">招投标信息</div>
			</div>
			<!-- 表格容器 -->
			<div>
				<el-table :data="tableData" v-loading.body="listLoading" border fit highlight-current-row style="width: 100%">
					<el-table-column label="序号" type="index" width="50"></el-table-column>
					<el-table-column min-width="200px" :label="tableData_columns.xmmc">
						<template slot-scope="scope">
							<el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_columns)[1]" v-if="scope.row.edit" size="small" v-model.number="scope.row.xmmc"></el-input>
							<span v-else>{{ scope.row.xmmc}}</span>
						</template>
					</el-table-column>
					<el-table-column min-width="200px" :label="tableData_columns.cy">
						<template slot-scope="scope">
							<el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_columns)[2]" v-if="scope.row.edit" size="small" v-model="scope.row.cy"></el-input>
							<span v-else>{{ scope.row.cy}}</span>
						</template>
					</el-table-column>
					<el-table-column min-width="200px" :label="tableData_columns.qy">
						<template slot-scope="scope">
							<el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_columns)[3]" v-if="scope.row.edit" size="small" v-model="scope.row.qy"></el-input>
							<span v-else>{{ scope.row.qy}}</span>
						</template>
					</el-table-column>
					<el-table-column min-width="200px" :label="tableData_columns.lx">
						<template slot-scope="scope">
							<el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_columns)[4]" v-if="scope.row.edit" size="small" v-model.number="scope.row.lx"></el-input>
							<span v-else>{{ scope.row.lx}}</span>
						</template>
					</el-table-column>
					<el-table-column min-width="200px" :label="tableData_columns.fbsj">
						<template slot-scope="scope">
							<el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_columns)[5]" v-if="scope.row.edit" size="small" v-model="scope.row.fbsj"></el-input>
							<span v-else>{{ scope.row.fbsj}}</span>
						</template>
					</el-table-column>
					<el-table-column min-width="200px" :label="tableData_columns.xxxx">
						<template slot-scope="scope">
							<el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_columns)[6]" v-if="scope.row.edit" size="small" v-model="scope.row.xxxx"></el-input>
							<span v-else>{{ scope.row.xxxx}}</span>
						</template>
					</el-table-column>
					
					<el-table-column align="center" label="操作" width="240">
						<template slot-scope="scope">
							<v-tableOperation :scope="scope" :tableData="tableData" v-on:verify="verify" v-on:acceptDelRow='acceptDelRow'></v-tableOperation>
						</template>
					</el-table-column>
				</el-table>
				<v-tabelAddBtn :tableData="tableData" :tableData_columns="tableData_columns"></v-tabelAddBtn>
			</div>
		</el-card>
	</div>
</template>

<script>
import tableValidates from "@/utils/validateTable/tableValidates.js";
import tabelAddBtn from "@/components/table/table-add-btn.vue";
import tableOperation from "@/components/table/table-operation.vue";
export default {
  data() {
    return {
      listLoading: false,
      tableData: [],
	  addData:[],
	  updateData:[],
	  delRowData:[],
      tableData_columns: {
	    id:null,
        xmmc: "项目名称",
        cy: "产业",
        qy: "区域",
        lx: "类型",
		fbsj:"发布时间",
		xxxx:"详细信息",
        edit: false
      },
      //规则
      rules: {}
    };
  },
  computed:{},
  mounted() {
    this.getZtbxx();
  },
  methods: {
  
  getZtbxx: async function() {
      let params = {
        creditCode: sessionStorage.getItem("creditCode"),
        token: sessionStorage.getItem("token"),
        companyName: sessionStorage.getItem("companyName")
      };
      const res = await this.$http.post(
        "/hspt-web-api/data_entry/gsyyxx/ztbxx/listData",
        params
      );
      if (res.data.resultCode == "0") {
        this.tableData = res.data.resultData.data;
      }else{
	   this.$message({ message: res.data.resultMsg, type: "warning" });
	  }
  },
     //保存数据
    saveZtbxx: async function() {
      this.tableData.forEach((item, index) => {
        if (item.id == null) {
          this.addData.push(item);
        }
      });
      let params = {
        creditCode: sessionStorage.getItem("creditCode"),
        token: sessionStorage.getItem("token"),
        addData: JSON.stringify(this.addData),
        updateData: JSON.stringify(this.updateData),
        deleteData: JSON.stringify(this.delRowData)
      };
      const res = await this.$http.post(
        "/hspt-web-api/data_entry/gsyyxx/ztbxx/save",
        params
      );
      if (res.data.resultCode == "0") {
        this.$message({ message: res.data.resultMsg, type: "success" });
        this.delRowData = [];
        this.updateData = [];
        this.addData = [];
      }else{
	   this.$message({ message: res.data.resultMsg, type: "warning" });
	  }
    },
    //接受删除的数据
    acceptDelRow(val) {
      this.delRowData.push(val);
    },
    //验证数据
    verify(rowObj, rowIndex) {
      var isValid = tableValidates.validateByRow(
        rowObj,
        rowIndex,
        this.rules,
        this
      );
      if (rowObj.id) {
        this.updateData.push(rowObj);
      }
    },
	
	//获取远程接口数据
	retrieveRemoteData:async function() {
	  let params = {
        creditCode: sessionStorage.getItem("creditCode"),
        token: sessionStorage.getItem("token"),
        companyName: sessionStorage.getItem("companyName")
      };
      const res = await this.$http.post(
        "/hspt-web-api/data_entry/gsyyxx/ztbxx/remote",
        params
      );
      if (res.data.resultCode == "0") {
	    this.$message({ message: res.data.resultMsg, type: "success" });
        this.tableData = res.data.resultData.data;
        this.delRowData = [];
        this.updateData = [];
        this.addData = [];
        this.addData = res.data.resultData.data;
      }else{
	   this.$message({ message: res.data.resultMsg, type: "warning" });
	  }
	}
  },
  components: {
    "v-tabelAddBtn": tabelAddBtn,
    "v-tableOperation": tableOperation
  }
};
</script>

<style lang="scss" scoped>

</style>
