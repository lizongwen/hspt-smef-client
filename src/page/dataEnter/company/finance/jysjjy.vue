<template>
  <div>
  	<div class="clear">
							<div class="card-title">经营相关数据分析</div>
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
          <!--<el-table :data="tableData_1" v-loading.body="listLoading" border fit highlight-current-row
                    style="width: 100%">
            
            <el-table-column min-width="200px"  :label="tableData_1_columns.name">
              <template slot-scope="scope">
										<el-input class="edit-input cellItem el-form-item" v-model.number="scope.row.name" :class="Object.keys(tableData_1_columns)[1]" v-if="scope.row.edit" size="small"></el-input>
										<span v-else>{{ scope.row.name}}</span>
									</template>
            </el-table-column>
            <el-table-column min-width="300px" :label="tableData_1_columns.idNumber">
              <template slot-scope="scope">
										<el-input class="edit-input cellItem el-form-item" v-model.number="scope.row.idNumber" :class="Object.keys(tableData_1_columns)[1]" v-if="scope.row.edit" size="small"></el-input>
										<span v-else>{{ scope.row.idNumber}}</span>
									</template>
            </el-table-column>
            <el-table-column min-width="300px" :label="tableData_1_columns.phone">
                <template slot-scope="scope">
										<el-input class="edit-input cellItem el-form-item" v-model.number="scope.row.phone" :class="Object.keys(tableData_1_columns)[1]" v-if="scope.row.edit" size="small"></el-input>
										<span v-else>{{ scope.row.phone}}</span>
									</template>
            </el-table-column>
            <el-table-column align="center" label="操作" width="240">
              <template slot-scope="scope">
                <v-tableOperation :scope="scope" :tableData="tableData_1" v-on:verify="verify_1"
                                  v-on:acceptDelRow='acceptDelRow_1'></v-tableOperation>
              </template>
            </el-table-column>
          </el-table>-->
          
          <table lay-skin="line">
								<tr>
									<th>类别</th>
									<th>时间</th>
									<th>是否正常</th>
									<th>操作</th>
								</tr>
								<tr>
									<td>用水记录</td>
									<td>
										<span v-if="!edit1">-</span>
										<input v-else type="text" />
									</td>
									<td>
										<span v-if="!edit1">-</span>
										<input v-else type="text" />
									</td>
								  <td>
								  	<div v-if="!edit1">
								  		<el-button type="primary" class="button"  @click="editClick(1)">编辑</el-button>
								  	</div>
								  	<div v-if="edit1">
								  		<el-button type="primary" class="button">确定</el-button>
							        <el-button type="primary" class="button" @click="cancelClick(1)">取消</el-button>
								  	</div>
								  </td>
								</tr>
								<tr>
									<td>用天然气记录</td>
									<td>
										<span v-if="!edit2">-</span>
										<input v-else type="text" />
									</td>
									<td>
										<span v-if="!edit2">-</span>
										<input v-else type="text" />
									</td>
							 <td>
							<div v-if="!edit2">
								  		<el-button type="primary" class="button"  @click="editClick(2)">编辑</el-button>
								  	</div>
								  	<div v-if="edit2">
								  		<el-button type="primary" class="button">确定</el-button>
							        <el-button type="primary" class="button" @click="cancelClick(2)">取消</el-button>
								  	</div>
							 </td>
								</tr>
								<tr>
									<td>用电记录</td>
									<td>
										<span v-if="!edit3">-</span>
										<input v-else type="text" />
									</td>
									<td>
										<span v-if="!edit3">-</span>
										<input v-else type="text" />
									</td>
								 <td>
								 	<div v-if="!edit3">
								  		<el-button type="primary" class="button"  @click="editClick(3)">编辑</el-button>
								  	</div>
								  	<div v-if="edit3">
								  		<el-button type="primary" class="button">确定</el-button>
							        <el-button type="primary" class="button" @click="cancelClick(3)">取消</el-button>
								  	</div>
								 </td>
								</tr>
								
							</table>

 
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
// import tabelAddBtn from "@/components/table/table-add-btn.vue";
  import tableOperation from "@/components/table/table-operation.vue";
  import tableValidates from "@/utils/validateTable/tableValidates.js";
import quillEditor from "@/components/form/quillEditor.vue";
  export default {
  	   data() {
      return {
        activeName: "first",
        listLoading: false,
        textEditorContent: "",
        edit1: false,
        edit2: false,
        edit3: false,
        attr:0
//      tableData_1: [], //表格数据
//      deleteData_1: [],
//      addData_1: [],
//      updateData_1: [],
//      tableData_1_columns: {
//        name: "类别",
//        idNumber: "时间",
//        phone: "是否正常",
//        edit: false
//      },

      };
    },
    
        mounted() {
      this.getZrrdgd();
//       this.editClick();
    },
      methods: {
      //修改
      editClick:async function(attr){
     if(attr==1){
     	this.edit1= true
     }else if(attr==2){
     	this.edit2= true
     }else if(attr==3){
     	this.edit3= true
     }	
      },
       //取消
      cancelClick:async function(attr){
						 if(attr==1){
						     	this.edit1= false
						     }else if(attr==2){
						     	this.edit2= false
						     }else if(attr==3){
						     	this.edit3= false
						     }
      },
      
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
         this.tableData_1=res.data.resultData.data.rows
      }
     },
     
      //接受自然人大股东信息删除的数据
      acceptDelRow_1(val) {
        this.deleteData_1.push(val);
      },
      //验证自然人大股东信息数据
      verify_1(rowObj, rowIndex) {
        var isValid = tableValidates.validateByRow(
          rowObj,
          rowIndex,
          this.rules_zrrdgd,
          this
        );
        if (rowObj.id) {
          this.updateData_1.push(rowObj);
        }
      },


    },
      components: {
//    "v-tabelAddBtn": tabelAddBtn,
      "v-tableOperation": tableOperation,
       "quill-editor": quillEditor
    }
  };
</script>

<style lang="scss">
	$width: 100%;
		$background: white;
		$padding: 20px;
		.clear{
		width: $width;
		background: $background;
		padding: $padding;
	}
	$padding-bottom: 20px;
	.clearf{
		padding-bottom: $padding-bottom;
	}
	$font-size: 15px;
	$font-weight: bolder;
.card-title{
	font-size: $font-size;
	font-weight: $font-weight;
}
$width: 100%;
	$height: 200px;
	$background: #EEF9FF;
	$margin-top: 20px;
	$margin-bottom: 20px;
	$text-align: center;
	$line-height:200px;
.img{
	width: $width;
	height: $height;
	background: $background;
	margin-top: $margin-top;
	margin-bottom: $margin-bottom;
	text-align: $text-align;
	line-height:$line-height;
}
/*table {
  width: 100%;
  background: #f4f3f3;
  border-collapse: collapse;
}
table tr {
  border-bottom: 1px solid #d8d8d8;
}
table tr th {
  height: 40px;
  text-align: left;
  padding-left: 20px;
}
table tr td {
  height: 40px;
  text-align: left;
  padding-left: 20px;
  background: white;
}*/
$width: 100%;
  $background: #f4f3f3;
  $border-collapse: collapse;
table {
  width: $width;
  background: $background;
  border-collapse: $border-collapse;
}
$border-bottom: 1px solid #d8d8d8;
table tr {
  border-bottom: $border-bottom;
}
 $height: 40px;
  $text-align: left;
  $padding-left: 20px;
table tr th {
  height: $height;
  text-align: $text-align;
  padding-left: $padding-left;
}
$height: 40px;
  $text-align: left;
  $padding-left: 20px;
  $background: white;
table tr td {
  height: $height;
  text-align: $text-align;
  padding-left: $padding-left;
  background: $background;
}
$height: 35px;
	$line-height: 0;
.el-button{
	height: $height;
	line-height:$line-height;
}
</style>
