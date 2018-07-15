<template>
	<div>
		<el-tabs v-model="activeName" @tab-click="handleClick">
			<el-tab-pane label="市场风险分析" name="first">
				<div>
					<el-card class="box-card" shadow='nevner'>
						<div slot="header" class="clearfix">
							<div class="card-right-wrap">
								<el-button type="primary" size="medium" @click="saveScfx">保存</el-button>
							</div>
							<div class="card-title">市场风险分析</div>
						</div>
						<div class="text-editor">
							<quill-editor :value="scfxfx" :maxSize="10240" v-on:changeInput="changScfx"></quill-editor>
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
	scfxfx: "",
    };
  },
  mounted() {
	  this.getBdcxj();
  },
  methods: {
	//获取市场风险分析小结
    getBdcxj: async function() {
      let params = {
        creditCode: sessionStorage.getItem("creditCode"),
        token: sessionStorage.getItem("token")
      };
      const res = await this.$http.post(
        "/hspt-web-api/data_entry/hyscgk/scfxfx/index",
        params
      );
      if (res.data.resultCode == "0") {
		this.scfxfx = res.data.resultData.scfxfx;
      }
	},

	//修改市场风险分析小结
    changScfx(val) {
      this.scfxfx = val;
    },
    //保存市场风险分析小结
    saveScfx: async function() {
      let params = {
        creditCode: sessionStorage.getItem("creditCode"),
        token: sessionStorage.getItem("token"),
        scfxfx: this.scfxfx
      };
      const res = await this.$http.post(
        "/hspt-web-api/data_entry/hyscgk/scfxfx/save",
        params
      );
      if (res.data.resultCode == "0") {
        this.$message({ message: res.data.resultMsg, type: "success" });
      } else {
        this.$message({ message: res.data.resultMsg, type: "warning" });
      }
    },
  }
};
</script>

<style>
.text-editor .ql-editor {
  height: 300px;
}
</style>

