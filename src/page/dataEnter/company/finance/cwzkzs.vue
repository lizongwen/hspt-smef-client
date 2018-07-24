<template>
	<div>
		<div>
			<el-card class="box-card"  shadow='nevner'>
				<div slot="header" class="clearfix">
					<div class="card-title">财务状况综述</div>
					<div class="card-right-wrap">
						<el-button  type="primary" size="medium" @click="setCwzkzs">保存</el-button>
					</div>
				</div>
				<div class="text-editor">
					<quill-editor :value="textEditorContent" :maxSize="10240" v-on:changeInput="changCwzkzs"></quill-editor>
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
  mounted() {
    this.getCwzkzs();
  },
  methods:{
    //----------------------------------------财务状况综述-------------------------------
    getCwzkzs: async function () {
      let params = {
        creditCode: sessionStorage.getItem("creditCode"),
        token: sessionStorage.getItem("token")
      };
      const res = await this.$http.post(
        "/hspt-web-api/data_entry/cwzk/cwzkCwzkzs/init",
        params
      );

      if (res.data.resultCode == "0") {
        this.textEditorContent = res.data.resultData.data;
      }
    },
    //修改资产负债分析小结
    changCwzkzs(val) {
      this.textEditorContent = val;
    },
    //保存修改资产负债分析小结
    setCwzkzs: async function () {
      let params = {
        creditCode: sessionStorage.getItem("creditCode"),
        token: sessionStorage.getItem("token"),
        cwzkCwzkzs: this.textEditorContent
      };
      const res = await this.$http.post(
        "/hspt-web-api/data_entry/cwzk/cwzkCwzkzs/save",
        params
      );
      if (res.data.resultCode == "0") {
        this.$message({message: res.data.resultMsg, type: "success"});
        this.getCwzkzs();
      } else {
        this.$message({message: res.data.resultMsg, type: "warning"});
      }
    },
  },
  components: {
    "quill-editor": quillEditor
  }
};
</script>

<style lang="scss">
	/*$width: 80%;
		$float: left;
		$margin-top: 1%;
		$font-size: 15px;
		$font-weight: bold;
	.card-title{
		width: $width;
		float: $float;
		margin-top: $margin-top;
		font-size: $font-size;
		font-weight: $font-weight;
	}*/
.text-editor .ql-editor {
  height: 300px;
}
</style>
