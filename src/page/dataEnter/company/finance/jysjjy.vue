<template>
  <div>
  	<div class="clear">
							<div class="card-title">纳税情况与分析</div>
						</div>
    <div style="margin-bottom: 20px;">
      <el-card class="box-card" shadow='nevner'>
        <div slot="header" class="clearfix">
          <div class="card-right-wrap">
            <el-button class="save" type="primary" size="medium" >保存</el-button>
          </div>
          <div class="card-title">公司能耗记录</div>
        </div>
        <div>
          <el-table :data="tableData_0" v-loading.body="listLoading" border fit highlight-current-row
                    style="width: 100%">
            
            <el-table-column min-width="200px" :label="tableData_0_columns.name">
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
            <el-table-column min-width="300px" :label="tableData_0_columns.idNumber">
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
            <el-table-column min-width="300px" :label="tableData_0_columns.phone">
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
    <el-tabs v-model="activeName">
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
          name: "姓名",
          idNumber: "身份证号",
          phone: "手机号",
          edit: false
        },

      };
    },
    
        mounted() {
      this.getZrrdgd();

    },
      methods: {
      
     getZrrdgd:async function(){
     	let params = {
        creditCode: sessionStorage.getItem("creditCode"),
        token: sessionStorage.getItem("token")
      };
      const res = await this.$http.post(
        "/hspt-web-api/data_entry/cwzk/jysjjy/gshnjl/list",
        params
      );
//  console.log(res.data.resultData)
      if (res.data.resultCode == "0") {
         this.tableData_0=res.data.resultData.data.rows
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
