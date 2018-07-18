<template>
	<div>
		<div>
			<el-card class="box-card"  shadow='nevner'>
				<div slot="header" class="clearfix">
					<div class="card-title">财务状况综述</div>
					<div class="card-right-wrap">
						<el-button  type="primary" size="medium">保存</el-button>
					</div>
				</div>
				<div class="text-editor">
					<quill-editor :value="textEditorContent" :maxSize="10240"></quill-editor>
				</div>
			</el-card>
		</div>
	</div>
</template>

<script>
import quillEditor from "@/components/form/quillEditor.vue";
export default {
	 data(){
 	return {
textEditorContent: "",
 	}
 },
  components: {
    "quill-editor": quillEditor
  }
};
</script>

<style lang="scss">
	.card-title{
		width: 80%;
		float: left;
		margin-top: 1%;
		font-size: 15px;
		font-weight: bold;
	}
.text-editor .ql-editor {
  height: 300px;
}
</style>
