<template>
	<div>
		<el-card class="box-card">
			<div slot="header" class="clearfix">
				<div class="card-right-wrap">
					<el-button class="save" type="primary" size="medium">保存</el-button>
				</div>
				<div class="card-title">主要业务</div>
			</div>
			<div class="text-editor">
				<quill-editor :value="newsContent" :maxSize="10240" v-on:input="changInput"></quill-editor>
			</div>
		</el-card>
	</div>
</template>

<script>

import quillEditor from "@/components/form/quillEditor.vue";
export default {
  components: {
    "quill-editor": quillEditor
  },
  data() {
    return {
	  newsContent: "我是富文本的返回内容"
    };
  },
  mounted() {},
  methods:{
	  changInput(val){
		  console.log(val)
	  }
  }
};
</script>

<style>
.text-editor .ql-editor{
	height:300px;
}
</style>

