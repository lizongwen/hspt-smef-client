<template>
	<div>
		<el-tabs v-model="activeName" @tab-click="handleClick">
			<el-tab-pane label="主要产品" name="first">
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
			</el-tab-pane>
			<!-- <el-tab-pane label="商业模式" name="second">
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
			</el-tab-pane>
			<el-tab-pane label="未来计划" name="third">
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
			</el-tab-pane> -->
		</el-tabs>

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
		activeName: "first",
      newsContent: "我是富文本的返回内容"
    };
  },
  mounted() {},
  methods: {
    changInput(val) {
      console.log(val);
	},
	handleClick(){

	}
  }
};
</script>

<style>
.text-editor .ql-editor {
  height: 300px;
}
</style>

