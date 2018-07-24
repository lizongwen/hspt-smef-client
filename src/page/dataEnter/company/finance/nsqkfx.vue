<template>
	<div>
		        		<div class="clear">
							<div class="card-title">纳税情况与分析</div>
						</div>
        <el-card class="box-card" shadow='nevner'>
		          <div slot="header" class="clearfix">
							<div class="card-right-wrap">
								<el-button  type="primary" size="medium">保存</el-button>
							</div>
							<div class="card-title">
								<div class="text">
									目标公司2017年全年缴纳各项税款&nbsp;&nbsp;<el-input  placeholder="2000"></el-input>&nbsp;&nbsp;万元
								</div>
								<div class="text2">
									2016年全年为&nbsp;&nbsp;<el-input  placeholder="2000"></el-input>&nbsp;&nbsp;万元
								</div>
								<div class="text2">
									2015年全年为&nbsp;&nbsp;<el-input  placeholder="2000"></el-input>&nbsp;&nbsp;万元
								</div>		
							</div>
						</div>
						<!-- 表格容器 -->
						<div>
							
								<div slot="header" class="clearf">
							<div class="card-title">目标公司缴纳各项税款详细如下（单位：万元）</div>
						</div>
							  <!--el-table :data="tableData" border fit highlight-current-row show-summary :summary-method="getSummaries"    style="width: 100%;text-align: center;">
                                <el-table-column prop="project" :label="tableData_columns.project">
                                      <template slot-scope="scope">
                                      	<span>{{ scope.row.project1}}</span>
										<span>{{ scope.row.project2}}</span>
									</template>
                                </el-table-column>
       
                                <el-table-column prop="year1" :label="tableData_columns.year1">
                                    <template slot-scope="scope">
										<span>{{ scope.row.year1}}</span>
									</template>
                                </el-table-column>
                                <el-table-column prop="year2" :label="tableData_columns.year2">
                                	<template slot-scope="scope">
										<span>{{ scope.row.year2}}</span>
									</template>>
                                </el-table-column>
                                <el-table-column prop="year3" :label="tableData_columns.year3">
                                <template slot-scope="scope">
										<span>{{ scope.row.year3}}</span>
									</template>
                                </el-table-column>
                              </el-table-->
                              
                              
                              <!--<div class="el-table el-table--fit el-table--border el-table--enable-row-hover el-table--enable-row-transition" style="width: 100%; text-align: center;">
								  <div class="hidden-columns">
								    <div>--&gt;--&gt;</div>
								    <div></div>
								    <div></div>
								    <div></div>
								  </div>
								  <div class="el-table__header-wrapper">
								    <table cellspacing="0" cellpadding="0" border="0" class="el-table__header" style="width: 1280px;">
								      <colgroup>
								        <col name="el-table_3_column_9" width="320">
								          <col name="el-table_3_column_10" width="320">
								            <col name="el-table_3_column_11" width="320">
								              <col name="el-table_3_column_12" width="320">
								                <col name="gutter" width="0"></colgroup>
								      <thead class="has-gutter">
								        <tr class="">
								          <th colspan="1" rowspan="1" class="el-table_3_column_9     is-leaf">
								            <div class="cell">项目</div></th>
								          <th colspan="1" rowspan="1" class="el-table_3_column_10     is-leaf">
								            <div class="cell">2015</div></th>
								          <th colspan="1" rowspan="1" class="el-table_3_column_11     is-leaf">
								            <div class="cell">2016</div></th>
								          <th colspan="1" rowspan="1" class="el-table_3_column_12     is-leaf">
								            <div class="cell">2017</div></th>
								          <th class="gutter" style="width: 0px; display: none;"></th>
								        </tr>
								      </thead>
								    </table>
								  </div>
								  <div class="el-table__body-wrapper is-scrolling-none">
								    <table cellspacing="0" cellpadding="0" border="0" class="el-table__body" style="width: 1280px;">
								      <colgroup>
								        <col name="el-table_3_column_9" width="320">
								          <col name="el-table_3_column_10" width="320">
								            <col name="el-table_3_column_11" width="320">
								              <col name="el-table_3_column_12" width="320"></colgroup>
								      <tbody>
								        <tr class="el-table__row">
								          <td class="el-table_3_column_9  ">
								          	
								          	<table width="100%" border="0">
								          		<tr height="100">
								          			<td rowspan="2" height="100%">22</td>
								          			<td height="50%">33</td>
								          		</tr>
								          		
								          		<tr height="50%">
								          			<td>212</td>
								          		</tr>
								          	</table>
								           <div class="cell">增值税</div>
								          <div class="cell">实缴额</div>
								          </td>
								          <td class="el-table_3_column_10  ">
								            <div class="cell">
								              <span></span>
								            </div>
								          </td>
								          <td class="el-table_3_column_11  ">
								            <div class="cell"></div>
								          </td>
								          <td class="el-table_3_column_12  ">
								            <div class="cell"></div>
								          </td>
								        </tr>
								        <tr class="el-table__row">
								          <td class="el-table_3_column_9  ">
								          	<div class="cell">增值税</div>
								            <div class="cell">退税额</div>
								          </td>
								          <td class="el-table_3_column_10  ">
								            <div class="cell">
								              <span></span>
								            </div>
								          </td>
								          <td class="el-table_3_column_11  ">
								            <div class="cell"></div>
								          </td>
								          <td class="el-table_3_column_12  ">
								            <div class="cell"></div>
								          </td>
								        </tr>
								        <tr class="el-table__row">
								          <td class="el-table_3_column_9  ">
								            <div class="cell">企业所得税</div></td>
								          <td class="el-table_3_column_10  ">
								            <div class="cell">
								              <span></span>
								            </div>
								          </td>
								          <td class="el-table_3_column_11  ">
								            <div class="cell"></div>
								          </td>
								          <td class="el-table_3_column_12  ">
								            <div class="cell"></div>
								          </td>
								        </tr>
								        <tr class="el-table__row">
								          <td class="el-table_3_column_9  ">
								            <div class="cell">城建税</div></td>
								          <td class="el-table_3_column_10  ">
								            <div class="cell">
								              <span></span>
								            </div>
								          </td>
								          <td class="el-table_3_column_11  ">
								            <div class="cell"></div>
								          </td>
								          <td class="el-table_3_column_12  ">
								            <div class="cell"></div>
								          </td>
								        </tr>
								        <tr class="el-table__row">
								          <td class="el-table_3_column_9  ">
								            <div class="cell">土地使用税</div></td>
								          <td class="el-table_3_column_10  ">
								            <div class="cell">
								              <span></span>
								            </div>
								          </td>
								          <td class="el-table_3_column_11  ">
								            <div class="cell"></div>
								          </td>
								          <td class="el-table_3_column_12  ">
								            <div class="cell"></div>
								          </td>
								        </tr>
								        <tr class="el-table__row">
								          <td class="el-table_3_column_9  ">
								            <div class="cell">房产税</div></td>
								          <td class="el-table_3_column_10  ">
								            <div class="cell">
								              <span></span>
								            </div>
								          </td>
								          <td class="el-table_3_column_11  ">
								            <div class="cell"></div>
								          </td>
								          <td class="el-table_3_column_12  ">
								            <div class="cell"></div>
								          </td>
								        </tr>
								        <tr class="el-table__row">
								          <td class="el-table_3_column_9  ">
								            <div class="cell">印花税</div></td>
								          <td class="el-table_3_column_10  ">
								            <div class="cell">
								              <span></span>
								            </div>
								          </td>
								          <td class="el-table_3_column_11  ">
								            <div class="cell"></div>
								          </td>
								          <td class="el-table_3_column_12  ">
								            <div class="cell"></div>
								          </td>
								        </tr>
								        <tr class="el-table__row">
								          <td class="el-table_3_column_9  ">
								            <div class="cell">营业税</div></td>
								          <td class="el-table_3_column_10  ">
								            <div class="cell">
								              <span></span>
								            </div>
								          </td>
								          <td class="el-table_3_column_11  ">
								            <div class="cell"></div>
								          </td>
								          <td class="el-table_3_column_12  ">
								            <div class="cell"></div>
								          </td>
								        </tr>
								        <tr class="el-table__row">
								          <td class="el-table_3_column_9  ">
								            <div class="cell">教育费附加税</div></td>
								          <td class="el-table_3_column_10  ">
								            <div class="cell">
								              <span></span>
								            </div>
								          </td>
								          <td class="el-table_3_column_11  ">
								            <div class="cell"></div>
								          </td>
								          <td class="el-table_3_column_12  ">
								            <div class="cell"></div>
								          </td>
								        </tr>
								        <tr class="el-table__row">
								          <td class="el-table_3_column_9  ">
								            <div class="cell">地方教育费附加</div></td>
								          <td class="el-table_3_column_10  ">
								            <div class="cell">
								              <span></span>
								            </div>
								          </td>
								          <td class="el-table_3_column_11  ">
								            <div class="cell"></div>
								          </td>
								          <td class="el-table_3_column_12  ">
								            <div class="cell"></div>
								          </td>
								        </tr>
								        <tr class="el-table__row">
								          <td class="el-table_3_column_9  ">
								            <div class="cell">个人所得税</div></td>
								          <td class="el-table_3_column_10  ">
								            <div class="cell">
								              <span></span>
								            </div>
								          </td>
								          <td class="el-table_3_column_11  ">
								            <div class="cell"></div>
								          </td>
								          <td class="el-table_3_column_12  ">
								            <div class="cell"></div>
								          </td>
								        </tr>
								        <tr class="el-table__row">
								          <td class="el-table_3_column_9  ">
								            <div class="cell">水利基金</div></td>
								          <td class="el-table_3_column_10  ">
								            <div class="cell">
								              <span></span>
								            </div>
								          </td>
								          <td class="el-table_3_column_11  ">
								            <div class="cell"></div>
								          </td>
								          <td class="el-table_3_column_12  ">
								            <div class="cell"></div>
								          </td>
								        </tr>
								        <tr class="el-table__row">
								          <td class="el-table_3_column_9  ">
								            <div class="cell">其他税费</div></td>
								          <td class="el-table_3_column_10  ">
								            <div class="cell">
								              <span></span>
								            </div>
								          </td>
								          <td class="el-table_3_column_11  ">
								            <div class="cell"></div>
								          </td>
								          <td class="el-table_3_column_12  ">
								            <div class="cell"></div>
								          </td>
								        </tr>
								        </tbody>
								    </table>
								    
								    </div>
								  <div class="el-table__footer-wrapper">
								    <table cellspacing="0" cellpadding="0" border="0" class="el-table__footer" style="width: 1280px;">
								      <colgroup>
								        <col name="el-table_3_column_9" width="320">
								          <col name="el-table_3_column_10" width="320">
								            <col name="el-table_3_column_11" width="320">
								              <col name="el-table_3_column_12" width="320">
								                <col name="gutter" width="0"></colgroup>
								      <tbody class="has-gutter">
								        <tr>
								          <td colspan="1" rowspan="1" class="el-table_3_column_9 is-leaf">
								            <div class="cell">合计</div></td>
								          <td colspan="1" rowspan="1" class="el-table_3_column_10 is-leaf">
								            <div class="cell"></div>
								          </td>
								          <td colspan="1" rowspan="1" class="el-table_3_column_11 is-leaf">
								            <div class="cell"></div>
								          </td>
								          <td colspan="1" rowspan="1" class="el-table_3_column_12 is-leaf">
								            <div class="cell"></div>
								          </td>
								          <th class="gutter" style="width: 0px; display: none;"></th>
								        </tr>
								      </tbody>
								    </table>
								  </div>
								
								  <div class="el-table__column-resize-proxy" style="display: none;"></div>
								</div>-->
                              
                              <table border="1" cellspacing="0" cellpadding="0" style="text-align: center;">
                              	<tr>
                              		<th>项目</th>
                              		<th>2015年</th>
                              		<th>2016年</th>
                              		<th>2017年</th>
                              	</tr>
                             
                              	<tr>
                              		<td>企业所得税</td>
                              		<td>企业所得税</td>
                              		<td>企业所得税</td>
                              		<td>企业所得税</td>
                              		<td>企业所得税</td>
                              	</tr>
                              	<tr>
                              		<td>企业所得税</td>
                              		<td>企业所得税</td>
                              		<td>企业所得税</td>
                              		<td>企业所得税</td>
                              		<td>企业所得税</td>
                              	</tr>
                              	<tr>
                              		<td>企业所得税</td>
                              		<td>企业所得税</td>
                              		<td>企业所得税</td>
                              		<td>企业所得税</td>
                              	</tr>
                              </table>
                             
                            
						</div>
						
							<div>
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
</template>

<script>
	import quillEditor from "@/components/form/quillEditor.vue";
export default {
data() {
      return {
      	textEditorContent: "",
      	tableData: [
      	{
      		project:"实缴额",
      		
      	},
      	{
      		project:"退税额",
      		
      	},
      	{
      		project:"企业所得税"
      	},
      	{
      		project:"城建税"
      	},
      	{
      		project:"土地使用税"
      	},
      	{
      		project:"房产税"
      	},
      	{
      		project:"印花税"
      	},
      	{
      		project:"营业税"
      	},
      	{
      		project:"教育费附加税"
      	},
      	{
      		project:"地方教育费附加"
      	},
      	{
      		project:"个人所得税"
      	},
      	{
      		project:"水利基金"
      	},
      	{
      		project:"其他税费"
      	}
      	],
        tableData_columns: {
        project: "项目",
        year1:"2015",  
        year2:"2016",
        year3:"2017"    
      },
 
   }
    },
     mounted() {
    this.getNsqk();
  },
   methods: {
   	//合并列
// 	   arraySpanMethod({ row, column, rowIndex, columnIndex }) {
//      if (rowIndex % 2 === 0) {
//        if (columnIndex === 0) {
//          return [1, 2];
//        } else if (columnIndex === 1) {
//          return [0, 0];
//        }
//      }
//    },
// 	 objectSpanMethod({ row, column, rowIndex, columnIndex }) {
//      if (columnIndex === 0) {
//        if (rowIndex % 2 === 0) {
//          return {
//            rowspan: 2,
//            colspan: 1
//          };
//        } else {
//          return {
//            rowspan: 0,
//            colspan: 0
//          };
//        }
//      }
//    },
   



   	//获取纳税情况与分析
//// 	getNsqk:async function(){
//// 		let params = {
////      creditCode: sessionStorage.getItem("creditCode"),
////      token: sessionStorage.getItem("token")
////    };
////    const res = await this.$http.post(
////      "/hspt-web-api/data_entry/cwzk/nsqkyfx/nsqk/list",
////      params
////    );
////  console.log(res.data.resultData)
////  if (res.data.resultCode == "0") {
////       this.tableData=res.data.resultData.data.rows
////    }
//// 	},
// 	
   	
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
    "quill-editor": quillEditor
      }
    
}
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
$width:70px;
.el-input{
	width: $width;
}
$width:70px;
$height: 30px;
.el-input__inner {
	width: $width;
	height: $height;
}

.text{
	float: left;
}
.text2{
	float: left;
	margin-left: 70px;
}
table {
  width: 100%;
  background: #f4f3f3;
  border-collapse: collapse;
}
/*table tr {
  border-bottom: 1px solid #d8d8d8;
}*/
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
}
 /*.el-table th {
    border-bottom: 1px solid #ebeef5;
    text-align: center;
    background: #F4F3F3;
    color: black;
}
.el-table td{
	border-bottom: 1px solid #ebeef5;
    text-align: center;
    background: white;
    color: black;
}*/                                                                                                   
.clearfix{
	margin-top: 20px;
}
.text-editor {
	margin-top: 15px;
}
.text-editor .ql-editor {
  height: 200px;
}
.cell{
	/*border: 1px solid red;*/
}
</style>
