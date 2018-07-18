<template>
  <div>
  	<div class="clear">
							<div class="card-title">纳税情况与分析</div>
						</div>
    <div style="margin-bottom: 20px;">
      <el-card class="box-card" shadow='nevner'>
        <div slot="header" class="clearfix">
          <div class="card-right-wrap">
            <el-button class="save" type="primary" size="medium" @click="setZrrdgd">保存</el-button>
          </div>
          <div class="card-title">公司能耗记录</div>
        </div>
        <div>
          <el-table :data="tableData_0" v-loading.body="listLoading" border fit highlight-current-row
                    style="width: 100%">
            
            <el-table-column min-width="200px" label="姓名">
              <template slot-scope="scope">
                <template v-if="scope.row.edit">
                  <el-form :model="scope.row" :rules="rules_zrrdgd" :id="'Name'+scope.$index"
                           :ref="'form_Name_'+scope.$index" :show-message="false">
                    <el-form-item prop="Name" class="td-form-item">
                      <el-input class="edit-input" size="small" v-model="scope.row.name"></el-input>
                    </el-form-item>
                  </el-form>
                </template>
                <span v-else>{{scope.row.name}}</span>
              </template>
            </el-table-column>
            <el-table-column min-width="300px" label="身份证号">
              <template slot-scope="scope">
                <template v-if="scope.row.edit">
                  <el-form :model="scope.row" :rules="rules_zrrdgd" :id="'identityNum'+scope.$index"
                           :ref="'form_identityNum_'+scope.$index" :show-message="false">
                    <el-form-item prop="identityNum" class="td-form-item">
                      <el-input class="edit-input" size="small" v-model="scope.row.idNumber"></el-input>
                    </el-form-item>
                  </el-form>
                </template>
                <span v-else>{{ scope.row.idNumber}}</span>
              </template>
            </el-table-column>
            <el-table-column min-width="300px" label="手机号码">
              <template slot-scope="scope">
                <template v-if="scope.row.edit">
                  <el-form :model="scope.row" :rules="rules_zrrdgd" :id="'phoneNum'+scope.$index"
                           :ref="'form_phoneNum_'+scope.$index" :show-message="false">
                    <el-form-item prop="phoneNum" class="td-form-item">
                      <el-input class="edit-input" size="small" v-model="scope.row.mobile"></el-input>
                    </el-form-item>
                  </el-form>
                </template>
                <span v-else>{{ scope.row.mobile}}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" label="操作" width="240">
              <template slot-scope="scope">
                <v-tableOperation :scope="scope" :tableData="tableData_0" v-on:verify="verify_0"
                                  v-on:acceptDelRow='acceptDelRow_0'></v-tableOperation>
              </template>
            </el-table-column>
          </el-table>
          <v-tabelAddBtn :tableData="tableData_0" :tableData_columns="tableData_0_columns"></v-tabelAddBtn>
        </div>
      </el-card>
    </div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
 <el-tab-pane label="电费与产值校验" name="first">
 		<div>
					<el-card class="box-card" shadow='nevner'>
						<div class="clear">
								<div slot="header" class="clearfix">
							<div class="card-right-wrap">
								<el-button type="default" size="medium">上传数据</el-button>
								
							</div>
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
			
 </el-tab-pane>
 <el-tab-pane label="电费与工资校验" name="second">
 			<div>
					<el-card class="box-card" shadow='nevner'>
						<div class="clear">
								<div slot="header" class="clearfix">
							<div class="card-right-wrap">
								<el-button type="default" size="medium">生成图表</el-button>
								
							</div>
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
		
 </el-tab-pane>
 <el-tab-pane label="工资与产值校验" name="third">
 			<div>
					<el-card class="box-card" shadow='nevner'>
						<div class="clear">
								<div slot="header" class="clearfix">
							<div class="card-right-wrap">
								<el-button type="default" size="medium">生成图表</el-button>
								
							</div>
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
		
 </el-tab-pane>
 <el-tab-pane label="产值与销售收入校验" name="four">
 	<div>
					<el-card class="box-card" shadow='nevner'>
						<div class="clear">
								<div slot="header" class="clearfix">
							<div class="card-right-wrap">
								<el-button type="default" size="medium">生成图表</el-button>
								
							</div>
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
		
 </el-tab-pane>
 <el-tab-pane label="利润表销售额与增值税申报销售额校验" name="five">
 	<div>
					<el-card class="box-card" shadow='nevner'>
						<div class="clear">
								<div slot="header" class="clearfix">
							<div class="card-right-wrap">
								<el-button type="default" size="medium">生成图表</el-button>
							</div>
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
		
 </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
 import tabelAddBtn from "@/components/table/table-add-btn.vue";
  import tableOperation from "@/components/table/table-operation.vue";
  import tableValidates from "@/utils/validateTable/tableValidates.js";
import quillEditor from "@/components/form/quillEditor.vue";
  export default {
  	   data() {
      return {
        activeName: "first",
        listLoading: false,
        textEditorContent: "",
        idNumber: [],
        tableData_0: [], //表格数据
        deleteData_0: [],
        addData_0: [],
        updateData_0: [],
        tableData_0_columns: {
          name: "类别",
          idNumber: "时间",
          mobile: "是否正常",
          edit: false
        },

      };
    },
    
        mounted() {
      this.getZrrdgd();

    },
      methods: {
      //-------------------------------------------------自然人大股东-------------------------------------------------
      //获取自然人大股东信息
      getZrrdgd: async function () {
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token")
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/qyfxgk/qyfxgkZrrdgdfxxx/loadBaseInfoData",
          params
        );
        if (res.data.resultCode == "0") {
          this.tableData_0 = res.data.resultData.data;

          //遍历获取自然人大股东信息 idNumber
          for (var i = 0; i < this.tableData_0.length; i++) {
            this.idNumber.push(this.tableData_0[i].idNumber);
          }
        }
      },

      //保存自然人大股东信息
      setZrrdgd: async function () {
        this.tableData_0.forEach((item, index) => {
          if (item.id == null) {
            this.addData_0.push(item);
          }
        });
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token"),
          addData: JSON.stringify(this.addData_0),
          updateData: JSON.stringify(this.updateData_0),
          deleteData: JSON.stringify(this.deleteData_0)
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/qyfxgk/qyfxgkZrrdgdfxxx/saveBaseInfoData",
          params
        );
        if (res.data.resultCode == "0") {
          this.$message({message: res.data.resultMsg, type: "success"});
          this.deleteData_0 = [];
          this.updateData_0 = [];
          this.addData_0 = [];
        } else {
          this.$message({message: res.data.resultMsg, type: "warning"});
        }
      },
      //接受自然人大股东信息删除的数据
      acceptDelRow_0(val) {
        this.deleteData_0.push(val);
      },
      //验证自然人大股东信息数据
      verify_0(rowObj, rowIndex) {
        var isValid = tableValidates.validateByRow(
          rowObj,
          rowIndex,
          this.rules_zrrdgd,
          this
        );
        if (rowObj.id) {
          this.updateData_0.push(rowObj);
        }
      },

      //-------------------------------------------------央行报告信息-----------------------------------------------
      //获取自然人大股东央行报告信息
      getYhbg: async function () {
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token")
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/qyfxgk/qyfxgkZrrdgdYhbg/loadData",
          params
        );
        if (res.data.resultCode == "0") {
          this.tableData = res.data.resultData.data.rows;
        }
      },
      //保存自然人大股东央行报告信息
      setYhbg: async function () {
        this.tableData.forEach((item, index) => {
          if (item.id == null) {
            this.addData.push(item);
          }
        });
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token"),
          updateData: JSON.stringify(this.updateData)
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/qyfxgk/qyfxgkZrrdgdYhbg/update",
          params
        );
        if (res.data.resultCode == "0") {
          this.$message({message: res.data.resultMsg, type: "success"});
          this.deleteData = [];
          this.updateData = [];
          this.addData = [];
        } else {
          this.$message({message: res.data.resultMsg, type: "warning"});
        }
      },
      //验证自然人大股东央行报告信息数据
      verify(rowObj, rowIndex) {
        var isValid = tableValidates.validateByRow(
          rowObj,
          rowIndex,
          this.rules_yhbg,
          this
        );
        if (rowObj.id) {
          this.updateData.push(rowObj);
        }
      },

      //接受自然人大股东央行报告信息删除的数据
      acceptDelRow(val) {
        this.deleteData.push(val);
      },

      handleClick(tab, event) {
        console.log(tab, event);
      }
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
	.clearf{
		padding-bottom: 20px;
	}
.card-title{
	font-size: 15px;
	font-weight: bolder;
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
</style>
