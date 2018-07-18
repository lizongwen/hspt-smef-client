<template>
	<div>
		<div class="clear">
			<div class="card-title">现金流量分析</div>
		</div>
		

				<div>
					<el-card class="box-card" shadow='nevner'>
						<div slot="header" class="clearfix">
							<div class="card-right-wrap">
								<el-button type="primary" size="medium" @click="setScsb">保存</el-button>
							</div>
							<div class="card-title">数据列表（单位：万元）</div>
						</div>
						<!-- 表格容器 -->
						<div>
							<el-table :data="tableData_2" v-loading.body="listLoading" border fit highlight-current-row show-summary :summary-method="getSummaries" style="width: 100%">
								
								<el-table-column  :label="tableData_2_columns.xm" width="100">
									<template slot-scope="scope">
										<el-input class="edit-input cellItem el-form-item" v-model.number="scope.row.xm" :class="Object.keys(tableData_2_columns)[1]" v-if="scope.row.edit" size="small"></el-input>
										<span v-else>{{ scope.row.xm}}</span>
									</template>
								</el-table-column>
								<el-table-column  :label="tableData_2_columns.year1" width="100">
									<template slot-scope="scope">
										<el-input class="edit-input cellItem el-form-item" v-model.number="scope.row.year1" :class="Object.keys(tableData_2_columns)[2]" v-if="scope.row.edit" size="small"></el-input>
										<span v-else>{{ scope.row.year1}}</span>
									</template>
								</el-table-column>
								<el-table-column  :label="tableData_2_columns.zb1" prop="zb1" width="100">
									<template slot-scope="scope">
										<el-input class="edit-input cellItem el-form-item" v-model.number="scope.row.zb1" :class="Object.keys(tableData_2_columns)[3]" v-if="scope.row.edit" size="small"></el-input>
										<span v-else>{{ scope.row.zb1}}</span>
									</template>
								</el-table-column>
								<el-table-column  :label="tableData_2_columns.year2" prop="year2" width="100">
									<template slot-scope="scope">
										<el-input class="edit-input cellItem el-form-item" v-model.number="scope.row.year2" :class="Object.keys(tableData_2_columns)[4]" v-if="scope.row.edit" size="small"></el-input>
										<span v-else>{{ scope.row.year2}}</span>
									</template>
								</el-table-column>
								<el-table-column  :label="tableData_2_columns.zb2" prop="zb2" width="100">
									<template slot-scope="scope">
										<el-input class="edit-input cellItem el-form-item" v-model.number="scope.row.zb2" :class="Object.keys(tableData_2_columns)[4]" v-if="scope.row.edit" size="small"></el-input>
										<span v-else>{{ scope.row.zb2}}</span>
									</template>
								</el-table-column>
								<el-table-column  :label="tableData_2_columns.year3" prop="year3" width="100">
									<template slot-scope="scope">
										<el-input class="edit-input cellItem el-form-item" v-model.number="scope.row.year3" :class="Object.keys(tableData_2_columns)[4]" v-if="scope.row.edit" size="small"></el-input>
										<span v-else>{{ scope.row.year3}}</span>
									</template>
								</el-table-column>
									<el-table-column  :label="tableData_2_columns.zb3" prop="zb3" width="100">
									<template slot-scope="scope">
										<el-input class="edit-input cellItem el-form-item" v-model.number="scope.row.zb3" :class="Object.keys(tableData_2_columns)[4]" v-if="scope.row.edit" size="small"></el-input>
										<span v-else>{{ scope.row.zb3}}</span>
									</template>
								</el-table-column>
									<el-table-column  :label="tableData_2_columns.year4" prop="year4" width="100">
									<template slot-scope="scope">
										<el-input class="edit-input cellItem el-form-item" v-model.number="scope.row.year4" :class="Object.keys(tableData_2_columns)[4]" v-if="scope.row.edit" size="small"></el-input>
										<span v-else>{{ scope.row.year4}}</span>
									</template>
								</el-table-column>
									<el-table-column  :label="tableData_2_columns.zb4" prop="zb4" width="100">
									<template slot-scope="scope">
										<el-input class="edit-input cellItem el-form-item" v-model.number="scope.row.zb4" :class="Object.keys(tableData_2_columns)[4]" v-if="scope.row.edit" size="small"></el-input>
										<span v-else>{{ scope.row.zb4}}</span>
									</template>
								</el-table-column>
								<el-table-column align="center" label="操作">
									<template slot-scope="scope">
										<v-tableOperation :scope="scope" :tableData="tableData_2" v-on:verify="verify_2" v-on:acceptDelRow='acceptDelRow_2'></v-tableOperation>
									</template>
								</el-table-column>
							</el-table>
							<v-tabelAddBtn :tableData="tableData_2" :tableData_columns="tableData_2_columns"></v-tabelAddBtn>
						</div>
					</el-card>
				</div>
				<div>
					<el-card class="box-card" shadow='nevner'>
						<div class="clear">
								<div slot="header" class="clearfix">
							<div class="card-title">图表视图</div>
						</div>
						<div>
							<div class="img">
								图片展示区域
							</div>
						</div>
						</div>					
						<div class="clear">
					<div slot="header" class="clearfix">
							<div class="card-right-wrap">
								<el-button type="primary" size="medium" >保存</el-button>
							</div>
							<div class="card-title">小结</div>
							
						</div>
						<div class="text-editor">
					<quill-editor :value="textEditorContent" :maxSize="10240"></quill-editor>
				</div>
						</div>	
					</el-card>
				</div>
			
		
	</div>
</template>

<script>
	import tableValidates from "@/utils/validateTable/tableValidates.js";
import quillEditor from "@/components/form/quillEditor.vue";
import tabelAddBtn from "@/components/table/table-add-btn.vue";
import tableOperation from "@/components/table/table-operation.vue";
import axios from "axios";
export default {
  data() {
    return {
    	textEditorContent: "",
    	listLoading: false,
      tableData_2: [],
      deleteData_2: [],
      addData_2: [],
      updateData_2: [],
      tableData_2_columns: {
        xm: "项目",
        year1:"2014",
        zb1:"变化",
         year2:"2015",
        zb2:"变化",
         year3:"2016",
        zb3:"变化",
         year4:"2017",
        zb4:"变化",
        edit: false
      },
}
  },
  mounted() {
    this.getDeviceList();
  },
  methods: {
    //---------------------------------------企业主要生产设备--------------------------------------------------------------//
    // 获取企业主要生产设备
    getDeviceList: async function() {
      let params = {
        creditCode: sessionStorage.getItem("creditCode"),
        token: sessionStorage.getItem("token")
      };
      const res = await this.$http.post(
        "/hspt-web-api/data_entry/gsyyxx/qyjyzy/scsb/list",
        params
      );
      if (res.data.resultCode == "0") {
        this.tableData_2 = res.data.resultData.data.rows;
      } 
    },
    //保存主要生产设备数据
    setScsb: async function() {
      this.tableData_2.forEach((item, index) => {
        if (item.id == null) {
          this.addData_2.push(item);
        }
      });
      let params = {
        creditCode: sessionStorage.getItem("creditCode"),
        token: sessionStorage.getItem("token"),
        addedDataStr: JSON.stringify(this.addData_2),
        updatedDataStr: JSON.stringify(this.updateData_2),
        deletedDataStr: JSON.stringify(this.deleteData_2)
      };
      const res = await this.$http.post(
        "/hspt-web-api/data_entry/gsyyxx/qyjyzy/scsb/save",
        params
      );
      if (res.data.resultCode == "0") {
        this.$message({ message: res.data.resultMsg, type: "success" });
        this.deleteData_2 = [];
        this.updateData_2 = [];
        this.addData_2 = [];
      } else {
        this.$message({ message: res.data.resultMsg, type: "warning" });
      }
    },
    //接受主要生产设备删除的数据
    acceptDelRow_2(val) {
      this.deleteData_2.push(val);
    },
    //验证主要生产设备数据
    verify_2(rowObj, rowIndex) {
      var isValid = tableValidates.validateByRow(
        rowObj,
        rowIndex,
        this.rules_scsb,
        this
      );
      console.log(isValid);
      if (rowObj.id) {
        this.updateData_2.push(rowObj);
      }
    },

    //获取主要生产设备小结
    getZysbxj: async function() {
      let params = {
        creditCode: sessionStorage.getItem("creditCode"),
        token: sessionStorage.getItem("token")
      };
      const res = await this.$http.post(
        "/hspt-web-api/data_entry/gsyyxx/qyjyzy/scsb/initQyzyscsbxj",
        params
      );
      if (res.data.resultCode == "0") {
        this.zysbxj = res.data.resultData.data.xj;
      }
    },
    //修改主要生产设备小结
    changZysbxj(val) {
      this.zysbxj = val;
    },
    //保存主要生产设备小结
    setZysbXj: async function() {
      let params = {
        creditCode: sessionStorage.getItem("creditCode"),
        token: sessionStorage.getItem("token"),
        xj: this.zysbxj
      };
      const res = await this.$http.post(
        "/hspt-web-api/data_entry/gsyyxx/qyjyzy/scsb/saveQyzyscsbxj",
        params
      );
      if (res.data.resultCode == "0") {
        this.$message({ message: res.data.resultMsg, type: "success" });
      } else {
        this.$message({ message: res.data.resultMsg, type: "warning" });
      }
    },

    


    //主要生产设备合计
    getSummaries(param) {
      const { columns, data } = param;
      const sums = [];
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = "合计";
          return;
        }
        const values = data.map(item => Number(item[column.property]));
        if (!values.every(value => isNaN(value))) {
          sums[index] = values.reduce((prev, curr) => {
            const value = Number(curr);
            if (!isNaN(value)) {
              return prev + curr;
            } else {
              return prev;
            }
          }, 0);
          //根据列名不同，确定不同的合计单位
          if (column.property == "sbmc" || column.property == "sbxh") {
            sums[index] += "";
          } else if (column.property == "yz" || column.property == "jz") {
            sums[index] += " 万元";
          }
        } else {
          sums[index] = "";
        }
      });
      return sums;
    },

},

  components: {
    "v-tabelAddBtn": tabelAddBtn,
    "v-tableOperation": tableOperation,
    "quill-editor": quillEditor
  }
};
</script>

<style lang="scss">
	.clear{
		width: 100%;
		background: white;
		padding: 20px;
	}
	/*.clearf{
		padding-bottom: 20px;
	}*/
.card-title{
	font-size: 15px;
	font-weight: bolder;
}
.card-title{
	font-size: 15px;
}
.img{
	width: 100%;
	height: 200px;
	background: #EEF9FF;
	margin-top: 20px;
	margin-bottom: 20px;
	text-align: center;
	line-height:200px;
}
.text-editor {
	margin-top: 15px;
}
.text-editor .ql-editor {
  height: 200px;
}
.el-table th {
    border-bottom: 1px solid #ebeef5;
    text-align: center;
    background: #F4F3F3;
    color: black;
}
.el-table .el-button{
	float: left;
	padding: 8px;
}
.el-table .el-button+.el-button{
	padding: 8px;
}
</style>
