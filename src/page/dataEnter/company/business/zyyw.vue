<template>
	<div>主要业务

		<div>
			<el-form >
				<el-form-item label="内容">
					<quill-editor v-model="newsContent"></quill-editor>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script>
// import quillEditor from "@/components/form/quillEditor.vue";
import quillEditor from "@/components/form/quillEditor.vue";
export default {
  components: {
    'quill-editor':quillEditor
  },
  data() {
    return {
      newsContent: ""
    };
  },
  mounted() {}
};
</script>

<style>

</style>
