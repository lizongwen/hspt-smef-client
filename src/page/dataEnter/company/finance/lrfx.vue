<template>
	<div>
		<el-tabs v-model="activeName" @tab-click="handleClick">
			
			<el-tab-pane label="利润结构分析" name="first">
				<div>
					<el-card class="box-card" shadow='nevner'>
						<div class="clear">
								<div slot="header" class="clearfix">
							<div class="card-right-wrap">
								<el-button type="default" size="medium">生成图表</el-button>
								<el-button @click="saveXj" type="primary" size="medium">保存</el-button>
							</div>
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
								<el-button type="primary" size="medium" @click="setTdxx">保存</el-button>
							</div>
							<div class="card-title">小结</div>
							
						</div>
						<div class="text-editor">
					<quill-editor :value="textEditorContent" :maxSize="10240" v-on:changeInput="changeInput"></quill-editor>
				</div>
						</div>						
					</el-card>
				</div>	
			</el-tab-pane>
			
			<el-tab-pane label="收入构成分析" name="second">
				
				 <!-- 表格容器 -->
				 <div>
				 	
				 </div>
				
				<div>
					<el-card class="box-card" shadow='nevner'>
						<div class="clear">
								<div slot="header" class="clearfix">
							<div class="card-right-wrap">
								<el-button type="default" size="medium">生成图表</el-button>
								<el-button @click="saveXj" type="primary" size="medium">保存</el-button>
							</div>
							<div class="card-title">收入构成分析</div>
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
								<el-button type="primary" size="medium" @click="setTdxx">保存</el-button>
							</div>
							<div class="card-title">小结</div>
							
						</div>
						<div class="text-editor">
					<quill-editor :value="textEditorContent" :maxSize="10240" v-on:changeInput="changeInput"></quill-editor>
				</div>
						</div>						
					</el-card>
				</div>	
			</el-tab-pane>
			
		</el-tabs>
	</div>
</template>

<script>
	import quillEditor from "@/components/form/quillEditor.vue";
export default {
 		components: {
    "quill-editor": quillEditor
}

}
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
</style>
