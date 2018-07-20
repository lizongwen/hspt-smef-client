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
							  <el-table :data="tableData" border fit highlight-current-row show-summary :summary-method="getSummaries" style="width: 100%;text-align: center;">
                                <el-table-column prop="project" :label="tableData_columns.project">
                                      <template slot-scope="scope">
										<span>{{ scope.row.project}}</span>
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
									</template>
                                </el-table-column>
                                <el-table-column prop="year3" :label="tableData_columns.year3">
                                <template slot-scope="scope">
										<span>{{ scope.row.year3}}</span>
									</template>
                                </el-table-column>
                              </el-table>
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
//    	tableData2:[
//    	{
//    		proj:'实缴额'
//    	},
//    	],
//    	
      	tableData: [],
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
   	
   	//获取纳税情况与分析
   	getNsqk:async function(){
   		let params = {
        creditCode: sessionStorage.getItem("creditCode"),
        token: sessionStorage.getItem("token")
      };
      const res = await this.$http.post(
        "/hspt-web-api/data_entry/cwzk/nsqkyfx/nsqk/list",
        params
      );
    console.log(res.data.resultData)
    if (res.data.resultCode == "0") {
         this.tableData=res.data.resultData.data.rows
      }
   	},
   	
   	
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
 .el-table th {
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
}
.clearfix{
	margin-top: 20px;
}
.text-editor {
	margin-top: 15px;
}
.text-editor .ql-editor {
  height: 200px;
}
</style>
