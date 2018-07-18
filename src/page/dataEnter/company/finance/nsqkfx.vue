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
							  <el-table :data="tableData" border style="width: 100%;text-align: center;">
                                <el-table-column prop="project" label="项目">

                                </el-table-column>
                                <el-table-column prop="year" label="2015年">
                                	
                                </el-table-column>
                                <el-table-column prop="year" label="2016年">
                                	
                                </el-table-column>
                                <el-table-column prop="year" label="2017年">
                                
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
        tableData: [{ 
          project: '实缴额',
      },
         {
          project: '退税额'
       },
        {
          project: '企业所得税',
        },
        {
          project: '城建税',
        },
        {
          project: '土地使用税',
        },
        {
          project: '房产税',
        },
        {
          project: '印花税',
        },
        {
          project: '营业税',
        },
        {
          project: '教育费附加税',
        },
        {
          project: '地方教育附加',
        },
        {
          project: '个人所得税',
        },
        {
          project: '水利基金',
        },
        {
          project: '其他税费',
        },
         {
          project: '合计',
        }],
     
   }
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

.el-input{
	width: 70px;
}
.el-input__inner {
	width: 70px;
	height: 30px;
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
