<template>
	<div>
		<el-tabs v-model="activeName" @tab-click="handleClick">
			
			<el-tab-pane label="利润结构分析" name="first">
				<div>
					<el-card class="box-card" shadow='nevner'>
						<div class="clear">
								<div slot="header" class="clearfix">
							<div class="card-title">利润结构分析</div>
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
			</el-tab-pane>
			
           <el-tab-pane label="收入构成分析" name="second">
				<div>
					<el-card class="box-card" shadow='nevner'>
						<div slot="header" class="clearfix">
							<div class="card-right-wrap">
								<el-button type="primary" size="medium">保存</el-button>
							</div>
							<div class="card-title">数据列表</div>
						</div>
						<!-- 表格容器 -->
						<div>
							<el-table :data="tableData_1" v-loading.body="listLoading" border fit highlight-current-row show-summary :summary-method="getSummaries" style="width: 100%">
								
								<el-table-column  :label="tableData_1_columns.sbmc" width="127">
									<template slot-scope="scope">
										<el-input class="edit-input cellItem el-form-item" v-model.number="scope.row.sbmc" :class="Object.keys(tableData_1_columns)[1]" v-if="scope.row.edit" size="small"></el-input>
										<span v-else>{{ scope.row.sbmc}}</span>
									</template>
								</el-table-column>
								<el-table-column  :label="tableData_1_columns.year1" prop="year1" width="127">
									<template slot-scope="scope">
										<el-input class="edit-input cellItem el-form-item" v-model.number="scope.row.year1" :class="Object.keys(tableData_1_columns)[2]" v-if="scope.row.edit" size="small"></el-input>
										<span v-else>{{ scope.row.year1}}</span>
									</template>
								</el-table-column>
								<el-table-column  :label="tableData_1_columns.zb1" prop="zb1" width="127">
									<template slot-scope="scope">
										<el-input class="edit-input cellItem el-form-item" v-model.number="scope.row.zb1" :class="Object.keys(tableData_1_columns)[3]" v-if="scope.row.edit" size="small"></el-input>
										<span v-else>{{ scope.row.zb1}}</span>
									</template>
								</el-table-column>
								<el-table-column  :label="tableData_1_columns.year2" prop="year2" width="127">
									<template slot-scope="scope">
										<el-input class="edit-input cellItem el-form-item" v-model.number="scope.row.year2" :class="Object.keys(tableData_1_columns)[4]" v-if="scope.row.edit" size="small"></el-input>
										<span v-else>{{ scope.row.year2}}</span>
									</template>
								</el-table-column>
								<el-table-column  :label="tableData_1_columns.zb2" prop="zb2" width="127">
									<template slot-scope="scope">
										<el-input class="edit-input cellItem el-form-item" v-model.number="scope.row.zb2" :class="Object.keys(tableData_1_columns)[4]" v-if="scope.row.edit" size="small"></el-input>
										<span v-else>{{ scope.row.zb2}}</span>
									</template>
								</el-table-column>
								<el-table-column  :label="tableData_1_columns.year3" prop="year3" width="127">
									<template slot-scope="scope">
										<el-input class="edit-input cellItem el-form-item" v-model.number="scope.row.year3" :class="Object.keys(tableData_1_columns)[4]" v-if="scope.row.edit" size="small"></el-input>
										<span v-else>{{ scope.row.year3}}</span>
									</template>
								</el-table-column>
									<el-table-column  :label="tableData_1_columns.zb3" prop="zb3" width="127">
									<template slot-scope="scope">
										<el-input class="edit-input cellItem el-form-item" v-model.number="scope.row.zb3" :class="Object.keys(tableData_1_columns)[4]" v-if="scope.row.edit" size="small"></el-input>
										<span v-else>{{ scope.row.zb3}}</span>
									</template>
								</el-table-column>
								<el-table-column align="center" label="操作">
									<template slot-scope="scope">
										<v-tableOperation :scope="scope" :tableData="tableData_1" v-on:verify="verify1" v-on:acceptDelRow='acceptDelRow1'></v-tableOperation>
									</template>
								</el-table-column>
							</el-table>
							<v-tabelAddBtn :tableData="tableData_1" :tableData_columns="tableData_1_columns"></v-tabelAddBtn>
						</div>
					</el-card>
				</div>
				<div>
					<el-card class="box-card" shadow='nevner'>
						<div class="clear">
								<div slot="header" class="clearfix">
							<div class="card-title">利润结构分析</div>
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
			</el-tab-pane>
			
		</el-tabs>
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
    	listLoading: false,
      tableData_1: [],
      deleteData_1: [],
      addData_1: [],
      updateData_1: [],
      tableData_1_columns: {
        sbmc: "收入类别",
        year1:"2014",
        zb1:"占比",
         year2:"2015",
        zb2:"占比",
         year3:"2015",
        zb3:"占比",
        edit: false
      },
      activeName: "first",
      textEditorContent: "",
      
             //验证规则
      rules:{
      	sbmc:[
      	{ required: true, message: "不能为空" }
      	],
      	year1:[
      	{ required: true, message: "不能为空" }
      	],
      	zb1:[
      	{ required: true, message: "不能为空" }
      	],
      	year2:[
      	{ required: true, message: "不能为空" }
      	],
      	zb2:[
      	{ required: true, message: "不能为空" }
      	],
      	year3:[
      	{ required: true, message: "不能为空" }
      	],
      	zb3:[
      	{ required: true, message: "不能为空" }
      	],
      },
}
  },
  mounted() {
//  this.getDeviceList();
  },
  methods: {
  
   acceptDelRow1(val) {
        this.deleteData_1.push(val);
      },
      verify1(rowObj, rowIndex) {
        tableValidates.validateByRow(rowObj, rowIndex, this.rules, this);
        if (rowObj.id) {
          this.updateData_1.push(rowObj);
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
          if (column.property == "year1" || column.property == "year2"|| column.property == "year3") {
            sums[index] += "";
          } else if (column.property == "zb1" || column.property == "zb2"|| column.property == "zb3") {
            sums[index] += "%";
          }
        } else {
          sums[index] = "";
        }
      });
      return sums;
    },

  //点击标签页触发事件
      handleClick(tab, event) {
        //   console.log(tab, event);
      }
},

  components: {
    "v-tabelAddBtn": tabelAddBtn,
    "v-tableOperation": tableOperation,
    "quill-editor": quillEditor
  }
};

 	
</script>

<style lang="scss" scoped>
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
	margin-left: 5px;
}
.el-table .el-button+.el-button{
	padding: 8px;
	margin-left: 5px;
}
/*.el-table .cell, .el-table th div, .el-table--border td:first-child .cell, .el-table--border th:first-child .cell{
	padding-left: 0px;
}*/
</style>
