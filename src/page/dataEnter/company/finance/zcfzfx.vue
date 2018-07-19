<template>
	<div>
		<el-tabs v-model="activeName" @tab-click="handleClick">
			<el-tab-pane label="资产负债分析" name="first">
				<div>
					<el-card class="box-card" shadow='nevner'>
						<div class="clear">
								<div slot="header" class="clearfix">
							<div class="card-title">资产负债结构分析</div>
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

        <el-tab-pane label="应收账款分析" name="second">
        	
        	    <div>
        	    	<el-card class="box-card" shadow='nevner'>
        	    			<div slot="header" class="clearfix">
							<div class="card-right-wrap">
								<el-button type="primary" size="medium">保存</el-button>
							</div>
							<div class="card-title">账龄分析</div>
						</div>
						<!-- 表格容器 -->
						<div>
							<el-table :data="tableData_1" v-loading.body="listLoading" border fit highlight-current-row show-summary :summary-method="getSummaries" style="width: 100%">
								<el-table-column  :label="tableData_1_columns.zl" width="103">
									<template slot-scope="scope">
										<el-input class="edit-input cellItem el-form-item" v-model.number="scope.row.zl" :class="Object.keys(tableData_1_columns)[1]" v-if="scope.row.edit" size="small"></el-input>
										<span v-else>{{ scope.row.zl}}</span>
									</template>
								</el-table-column>
                             <el-table-column label="期末余额" width="430">
                             	<el-table-column :label="tableData_1_columns.je" width='108'>
                             		<template slot-scope="scope">
										<el-input class="edit-input cellItem el-form-item" v-model.number="scope.row.je" :class="Object.keys(tableData_1_columns)[1]" v-if="scope.row.edit" size="small"></el-input>
										<span v-else>{{ scope.row.je}}</span>
									</template>
                             	</el-table-column>
                             	<el-table-column  :label="tableData_1_columns.zzebl" width='108'>
                             			<template slot-scope="scope">
										<el-input class="edit-input cellItem el-form-item" v-model.number="scope.row.zzebl" :class="Object.keys(tableData_1_columns)[1]" v-if="scope.row.edit" size="small"></el-input>
										<span v-else>{{ scope.row.zzebl}}</span>
									</template>
                             	</el-table-column>
                             	<el-table-column  :label="tableData_1_columns.hzzb" width='165'>
                             		<template slot-scope="scope">
										<el-input class="edit-input cellItem el-form-item" v-model.number="scope.row.hzzb" :class="Object.keys(tableData_1_columns)[1]" v-if="scope.row.edit" size="small"></el-input>
										<span v-else>{{ scope.row.hzzb}}</span>
									</template>
                             	</el-table-column>
                             </el-table-column>
                             <el-table-column  label="期初余额">
                             	<el-table-column :label="tableData_1_columns.je2" width='108'>
                             		<template slot-scope="scope">
										<el-input class="edit-input cellItem el-form-item" v-model.number="scope.row.je2" :class="Object.keys(tableData_1_columns)[1]" v-if="scope.row.edit" size="small"></el-input>
										<span v-else>{{ scope.row.je2}}</span>
									</template>
                             	</el-table-column>
                             	<el-table-column  :label="tableData_1_columns.zzebl2" width='108'>
                             			<template slot-scope="scope">
										<el-input class="edit-input cellItem el-form-item" v-model.number="scope.row.zzebl2" :class="Object.keys(tableData_1_columns)[1]" v-if="scope.row.edit" size="small"></el-input>
										<span v-else>{{ scope.row.zzebl2}}</span>
									</template>
                             	</el-table-column>
                             	<el-table-column  :label="tableData_1_columns.hzzb2" width='165'>
                             		<template slot-scope="scope">
										<el-input class="edit-input cellItem el-form-item" v-model.number="scope.row.hzzb2" :class="Object.keys(tableData_1_columns)[1]" v-if="scope.row.edit" size="small"></el-input>
										<span v-else>{{ scope.row.hzzb2}}</span>
									</template>
                             	</el-table-column>
                             </el-table-column>
                             <el-table-column align="center" label="操作">
                             	<template slot-scope="scope">
										<v-tableOperation :scope="scope" :tableData="tableData_1" v-on:verify="verify1"
                                      v-on:acceptDelRow='acceptDelRow1' ></v-tableOperation>
									</template>
                             </el-table-column>
                            </el-table>
						<v-tabelAddBtn :tableData="tableData_1" :tableData_columns="tableData_1_columns"></v-tabelAddBtn>
						</div>
        	    	</el-card>
        	    </div>
        	    <div>
					<el-card class="box-card" shadow='nevner'>		
					<div slot="header" class="clearfix">
							<div class="card-right-wrap">
								<el-button type="primary" size="medium" >保存</el-button>
							</div>
							<div class="card-title">小结</div>
							
						</div>
						<div class="text-editor">
					<quill-editor :value="textEditorContent" :maxSize="10240"></quill-editor>
				</div>
					</el-card>
				</div>
        	
				<div>
					<el-card class="box-card" shadow='nevner'>
						<div slot="header" class="clearfix">
							<div class="card-right-wrap">
								<el-button type="primary" size="medium">保存</el-button>
							</div>
							<div class="card-title">年末应收账款明细</div>
						</div>
						<!-- 表格容器 -->
						<div>
							<el-table :data="tableData_2" v-loading.body="listLoading" border fit highlight-current-row show-summary :summary-method="getSummaries" style="width: 100%">
								
								<el-table-column  :label="tableData_2_columns.dwmc">
									<template slot-scope="scope">
										<el-input class="edit-input cellItem el-form-item" v-model.number="scope.row.dwmc" :class="Object.keys(tableData_2_columns)[1]" v-if="scope.row.edit" size="small"></el-input>
										<span v-else>{{ scope.row.dwmc}}</span>
									</template>
								</el-table-column>
								<el-table-column  :label="tableData_2_columns.ye">
									<template slot-scope="scope">
										<el-input class="edit-input cellItem el-form-item" v-model.number="scope.row.ye" :class="Object.keys(tableData_2_columns)[2]" v-if="scope.row.edit" size="small"></el-input>
										<span v-else>{{ scope.row.ye}}</span>
									</template>
								</el-table-column>
								<el-table-column  :label="tableData_2_columns.zyszkbl">
									<template slot-scope="scope">
										<el-input class="edit-input cellItem el-form-item" v-model.number="scope.row.zyszkbl" :class="Object.keys(tableData_2_columns)[3]" v-if="scope.row.edit" size="small"></el-input>
										<span v-else>{{ scope.row.zyszkbl}}</span>
									</template>
								</el-table-column>
								<el-table-column  :label="tableData_2_columns.hzzb">
									<template slot-scope="scope">
										<el-input class="edit-input cellItem el-form-item" v-model.number="scope.row.hzzb" :class="Object.keys(tableData_2_columns)[4]" v-if="scope.row.edit" size="small"></el-input>
										<span v-else>{{ scope.row.hzzb}}</span>
									</template>
								</el-table-column>
								<el-table-column  :label="tableData_2_columns.bz">
									<template slot-scope="scope">
										<el-input class="edit-input cellItem el-form-item" v-model.number="scope.row.bz" :class="Object.keys(tableData_2_columns)[4]" v-if="scope.row.edit" size="small"></el-input>
										<span v-else>{{ scope.row.bz}}</span>
									</template>
								</el-table-column>
								<el-table-column align="center" label="操作">
									<template slot-scope="scope">
										<v-tableOperation :scope="scope" :tableData="tableData_2" v-on:verify="verify2"
                                      v-on:acceptDelRow='acceptDelRow2'></v-tableOperation>
									</template>
								</el-table-column>
							</el-table>
							<v-tabelAddBtn :tableData="tableData_2" :tableData_columns="tableData_2_columns"></v-tabelAddBtn>
						</div>
					</el-card>
				</div>
				<div>
					<el-card class="box-card" shadow='nevner'>		
					<div slot="header" class="clearfix">
							<div class="card-right-wrap">
								<el-button type="primary" size="medium" >保存</el-button>
							</div>
							<div class="card-title">小结</div>
							
						</div>
						<div class="text-editor">
					<quill-editor :value="textEditorContent" :maxSize="10240"></quill-editor>
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

export default {
  data() {
    return {
    	listLoading: false,
    	
    	 tableData_1: [],
      deleteData_1: [],
      addData_1: [],
      updateData_1: [],
      tableData_1_columns: {
        zl: "账龄",
        je: "金额（万元）",
        zzebl: "占总额比例(%)",
        hzzb: "坏账准备（万元）",
        je2: "金额（万元）",
        zzebl2: "占总额比例(%)",
        hzzb2: "坏账准备（万元）",
        edit: false
      },
    	
    	
      tableData_2: [],
      deleteData_2: [],
      addData_2: [],
      updateData_2: [],
      tableData_2_columns: {
        dwmc: "单位名称",
        ye:"余额",
        zyszkbl:"占应收账款比例(%)",
         hzzb:"坏账准备",
        bz:"备注",
        edit: false
      },
      activeName: "first",
      textEditorContent: "",
      
          //验证规则
      rules:{
      	zl:[
      	{ required: true, message: "不能为空" }
      	],
      	je:[
      	{ required: true, message: "不能为空" }
      	],
      	zzebl:[
      	{ required: true, message: "不能为空" }
      	],
      	hzzb:[
      	{ required: true, message: "不能为空" }
      	],
      	je2:[
      	{ required: true, message: "不能为空" }
      	],
      	zzebl2:[
      	{ required: true, message: "不能为空" }
      	],
      	hzzb2:[
      	{ required: true, message: "不能为空" }
      	],
      },
      rules2:{
      	dwmc:[
      	{ required: true, message: "不能为空" }
      	],
      	ye:[
      	{ required: true, message: "不能为空" }
      	],
      	zyszkbl:[
      	{ required: true, message: "不能为空" }
      	],
      	hzzb:[
      	{ required: true, message: "不能为空" }
      	],
      	bz:[
      	{ required: true, message: "不能为空" }
      	]
      }
}
  },
  mounted() {
    this.getZlfx();
    this.getNmzk();
  },
  methods: {
  	 //点击标签页触发事件
      handleClick(tab, event) {
//           console.log(tab, event);
      },
      
  
      
//////////////////////////////////////////////////获取账龄分析
         getZlfx:async function(){
         	let params = {
        creditCode: sessionStorage.getItem("creditCode"),
        token: sessionStorage.getItem("token")
      };
      const res = await this.$http.post(
        "/hspt-web-api/data_entry/cwzk/zcfzfx/zlfx/list",
        params
      );
    console.log(res.data.resultData)
      if (res.data.resultCode == "0") {
         this.tableData_1=res.data.resultData.data.rows
      }
   },

     getNmzk:async function(){
     	let params = {
        creditCode: sessionStorage.getItem("creditCode"),
        token: sessionStorage.getItem("token")
      };
      const res = await this.$http.post(
        "/hspt-web-api/data_entry/cwzk/zcfzfx/nmzk/list",
        params
      );
      console.log(res.data.resultData)
      if (res.data.resultCode == "0") {
         this.tableData_2=res.data.resultData.data.rows
      }
     },
     
      acceptDelRow1(val) {
        this.deleteData_1.push(val);
      },
      verify1(rowObj, rowIndex) {
        tableValidates.validateByRow(rowObj, rowIndex, this.rules, this);
        if (rowObj.id) {
          this.updateData_1.push(rowObj);
        }
      },
      acceptDelRow2(val) {
        this.deleteData_2.push(val);
      },
      verify2(rowObj, rowIndex) {
        tableValidates.validateByRow(rowObj, rowIndex, this.rules, this);
        if (rowObj.id) {
          this.updateData_2.push(rowObj);
        }
      },
    //应收账款合计
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
          if (column.property == "zyszkbl") {
            sums[index] += "%";
          } else if (column.property == "ye" || column.property == "hzzb") {
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
