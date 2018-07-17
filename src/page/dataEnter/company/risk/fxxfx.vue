<template>
	<div>
		<el-tabs v-model="activeName" @tab-click="handleClick">
			<el-tab-pane label="风险性分析" name="first">
				<div>
					<el-card class="box-card" shadow='nevner'>
						<div slot="header" class="clearfix">
							<div class="card-right-wrap">
								<el-button class="save" type="primary" size="medium" @click="saveFxxfxtxtData">保存</el-button>
							</div>
							<div class="card-title">风险性分析</div>
						</div>
						<div class="text-editor">
							<quill-editor :value="fxxfxtxt" :maxSize="10240" v-on:changeInput="changeFxxfxtxt"></quill-editor>
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
  },
    data() {
    return {
      activeName: "first",
      fxxfxtxt: "" // 定义文本框值的变量
    };
  },
    mounted() {
    this.loadFxxfxtxtData();
  },
  methods: {
    //handleClick() {},
    // 改变小结输入值
    changeFxxfxtxt(val) {
      this.fxxfxtxt = val;
    },

    // 加载风险性分析小结数据
    loadFxxfxtxtData: async function() {
      let params = {
        creditCode: sessionStorage.getItem("creditCode"),
        token: sessionStorage.getItem("token")
      };
      // 请求后端加载风险性分析的url
      const res = await this.$http.post(
        "/hspt-web-api/data_entry/fxxfx/fxxfx/list", 
        params
      );

      if (res.data.resultCode == "0") {
        this.fxxfxtxt = res.data.resultData.fxxfx;
      }
    },

    // 新增风险性分析小结数据
    saveFxxfxtxtData: async function() {
      let params = {
        creditCode: sessionStorage.getItem("creditCode"),
        token: sessionStorage.getItem("token"),
        fxxfx: this.fxxfxtxt
      };
      // 请求后端保存风险性分析的url
      const res = await this.$http.post(
        "/hspt-web-api/data_entry/fxxfx/fxxfx/save",
        params
      );
      if (res.data.resultCode == "0") {
        this.$message({ message: res.data.resultMsg, type: "success" });
      } else {
        this.$message({ message: res.data.resultMsg, type: "warning" });
      }
    }
  }
}
</script>

<style>
.text-editor .ql-editor {
  height: 300px;
}
</style>
