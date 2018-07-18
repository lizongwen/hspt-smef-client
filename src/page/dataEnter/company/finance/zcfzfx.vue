<template>
	<div>
		<el-tabs v-model="activeName" @tab-click="handleClick">
			<el-tab-pane label="资产负债分析" name="first">
				<div>
					<el-card class="box-card" shadow='nevner'>
						<div class="clear">
								<div slot="header" class="clearfix">
							<div class="card-right-wrap">
								<el-button type="default" size="medium">生成图表</el-button>
								<el-button  type="primary" size="medium">保存</el-button>
							</div>
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
								<el-button type="primary" size="medium" @click="setScsb">保存</el-button>
							</div>
							<div class="card-title">账龄分析</div>
						</div>
						<!-- 表格容器 -->
						<div>
							<el-table :data="tableData_4" v-loading.body="listLoading" border fit highlight-current-row show-summary :summary-method="getSummaries" style="width: 100%">
								<el-table-column  :label="tableData_4_columns.zl">
									<template slot-scope="scope">
										<el-input class="edit-input cellItem el-form-item" v-model.number="scope.row.zl" :class="Object.keys(tableData_4_columns)[1]" v-if="scope.row.edit" size="small"></el-input>
										<span v-else>{{ scope.row.zl}}</span>
									</template>
								</el-table-column>
                             <el-table-column label="期末余额">
                             	<el-table-column :label="tableData_4_columns.je">
                             		<template slot-scope="scope">
										<el-input class="edit-input cellItem el-form-item" v-model.number="scope.row.je" :class="Object.keys(tableData_4_columns)[1]" v-if="scope.row.edit" size="small"></el-input>
										<span v-else>{{ scope.row.je}}</span>
									</template>
                             	</el-table-column>
                             	<el-table-column  :label="tableData_4_columns.zzebl">
                             			<template slot-scope="scope">
										<el-input class="edit-input cellItem el-form-item" v-model.number="scope.row.zzebl" :class="Object.keys(tableData_4_columns)[1]" v-if="scope.row.edit" size="small"></el-input>
										<span v-else>{{ scope.row.zzebl}}</span>
									</template>
                             	</el-table-column>
                             	<el-table-column  :label="tableData_4_columns.hzzb">
                             		<template slot-scope="scope">
										<el-input class="edit-input cellItem el-form-item" v-model.number="scope.row.hzzb" :class="Object.keys(tableData_4_columns)[1]" v-if="scope.row.edit" size="small"></el-input>
										<span v-else>{{ scope.row.hzzb}}</span>
									</template>
                             	</el-table-column>
                             </el-table-column>
                             <el-table-column  label="期初余额">
                             	<el-table-column :label="tableData_4_columns.je2">
                             		<template slot-scope="scope">
										<el-input class="edit-input cellItem el-form-item" v-model.number="scope.row.je2" :class="Object.keys(tableData_4_columns)[1]" v-if="scope.row.edit" size="small"></el-input>
										<span v-else>{{ scope.row.je2}}</span>
									</template>
                             	</el-table-column>
                             	<el-table-column  :label="tableData_4_columns.zzebl2">
                             			<template slot-scope="scope">
										<el-input class="edit-input cellItem el-form-item" v-model.number="scope.row.zzebl2" :class="Object.keys(tableData_4_columns)[1]" v-if="scope.row.edit" size="small"></el-input>
										<span v-else>{{ scope.row.zzebl2}}</span>
									</template>
                             	</el-table-column>
                             	<el-table-column  :label="tableData_4_columns.hzzb2">
                             		<template slot-scope="scope">
										<el-input class="edit-input cellItem el-form-item" v-model.number="scope.row.hzzb2" :class="Object.keys(tableData_4_columns)[1]" v-if="scope.row.edit" size="small"></el-input>
										<span v-else>{{ scope.row.hzzb2}}</span>
									</template>
                             	</el-table-column>
                             </el-table-column>
                             <el-table-column align="center" label="操作">
                             	<template slot-scope="scope">
										<v-tableOperation :scope="scope" :tableData="tableData_4" v-on:verify="verify_4" v-on:acceptDelRow='acceptDelRow_4'></v-tableOperation>
									</template>
                             </el-table-column>
                            </el-table>
						<v-tabelAddBtn :tableData="tableData_4" :tableData_columns="tableData_4_columns"></v-tabelAddBtn>
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
					<!--<quill-editor :value="textEditorContent" :maxSize="10240" v-on:changeInput="changeInput"></quill-editor>-->
				</div>
					</el-card>
				</div>
        	
				<div>
					<el-card class="box-card" shadow='nevner'>
						<div slot="header" class="clearfix">
							<div class="card-right-wrap">
								<el-button type="primary" size="medium" @click="setScsb">保存</el-button>
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
import axios from "axios";
export default {
  data() {
    return {
    	listLoading: false,
    	 tableData_4: [],
      deleteData_4: [],
      addData_4: [],
      updateData_4: [],
      tableData_4_columns: {
        zl: "账龄",
        je: "金额（万元）",
        zzebl: "占总额比例",
        hzzb: "坏账准备（万元）",
        je2: "金额（万元）",
        zzebl2: "占总额比例",
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
        zyszkbl:"占应收账款比例",
         hzzb:"坏账准备",
        bz:"备注",
        edit: false
      },
      activeName: "first",
      textEditorContent: "",
}
  },
  mounted() {
    this.getDeviceList();
  },
  methods: {
  	 //点击标签页触发事件
      handleClick(tab, event) {
        //   console.log(tab, event);
      },
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
    
    
     //获取车辆明细信息
    getCarList: async function() {
      let params = {
        creditCode: sessionStorage.getItem("creditCode"),
        token: sessionStorage.getItem("token")
      };
      const res = await this.$http.post(
        "/hspt-web-api/data_entry/gsyyxx/qyjyzy/clqkmx/list",
        params
      );
      if (res.data.resultCode == "0") {
        this.tableData_4 = res.data.resultData.data.rows;
      } else {
      }
    },
    //接口获取车辆明细
    getClmxIterfaceData: async function() {
      let params = {
        creditCode: sessionStorage.getItem("creditCode"),
        token: sessionStorage.getItem("token")
      };
      const res = await this.$http.post(
        "/hspt-web-api/data_entry/gsyyxx/qyjyzy/qyhgrclqkmx/getData",
        params
      );
      if (res.data.resultCode == "0") {
        this.$message({ message: res.data.resultMsg, type: "success" });
        this.tableData_4 = res.data.resultData.data.rows;
        this.deleteData_4 = [];
        this.updateData_4 = [];
        this.addData_4 = [];
        this.addData_4 = res.data.resultData.data.rows;
      } else {
        this.$message({ message: res.data.resultMsg, type: "warning" });
      }
    },

    //保存车辆明细数据
    setClmx: async function() {
      this.tableData_4.forEach((item, index) => {
        if (item.id == null) {
          this.addData_4.push(item);
        }
      });
      let params = {
        creditCode: sessionStorage.getItem("creditCode"),
        token: sessionStorage.getItem("token"),
        addedDataStr: JSON.stringify(this.addData_4),
        updatedDataStr: JSON.stringify(this.updateData_4),
        deletedDataStr: JSON.stringify(this.deleteData_4)
      };
      const res = await this.$http.post(
        "/hspt-web-api/data_entry/gsyyxx/qyjyzy/clqkmx/save",
        params
      );
      if (res.data.resultCode == "0") {
        this.$message({ message: res.data.resultMsg, type: "success" });
        this.deleteData_4 = [];
        this.updateData_4 = [];
        this.addData_4 = [];
      } else {
        this.$message({ message: res.data.resultMsg, type: "warning" });
      }
    },

},

  components: {
    "v-tabelAddBtn": tabelAddBtn,
    "v-tableOperation": tableOperation,
    "quill-editor": quillEditor
  }
};
</script>

<style>
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
