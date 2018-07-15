<template>
	<div>
		<el-tabs v-model="activeName" @tab-click="handleClick">
			<el-tab-pane label="行业及市场发展趋势" name="first">
				<div>
					<el-card class="box-card" shadow='nevner'>
						<div slot="header" class="clearfix">
							<div class="card-right-wrap">
								<el-button class="save" type="primary" size="medium" @click="saveHyjscfzqsData">保存</el-button>
							</div>
							<div class="card-title">行业及市场发展趋势</div>
						</div>
						<div class="text-editor">
							<quill-editor :value="hyjscfzqs" :maxSize="10240" v-on:changeInput="changeHyjscfzqs"></quill-editor>
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
      hyjscfzqs: "" // 定义文本框值的变量
    };
  },
  mounted() {
    this.loadHyjscfzqsData();
  },
  methods: {
    //handleClick() {},
    // 改变小结输入值
    changeHyjscfzqs(val) {
      this.hyjscfzqs = val;
    },

    // 加载行业及市场发展趋势小结数据
    loadHyjscfzqsData: async function() {
      let params = {
        creditCode: sessionStorage.getItem("creditCode"),
        token: sessionStorage.getItem("token")
      };
      // 请求后端加载主要竞争对手分析的url
      const res = await this.$http.post(
        "/hspt-web-api/data_entry/hyscgk/fzqs/index",
        params
      );

      if (res.data.resultCode == "0") {
        this.hyjscfzqs = res.data.resultData.hyjscfzqs;
      }
    },

    // 新增行业及市场发展趋势小结数据
    saveHyjscfzqsData: async function() {
      let params = {
        creditCode: sessionStorage.getItem("creditCode"),
        token: sessionStorage.getItem("token"),
        fzqs: this.hyjscfzqs
      };
      // 请求后端保存主要竞争对手分析的url
      const res = await this.$http.post(
        "/hspt-web-api/data_entry/hyscgk/fzqs/save",
        params
      );
      if (res.data.resultCode == "0") {
        this.$message({ message: res.data.resultMsg, type: "success" });
      } else {
        this.$message({ message: res.data.resultMsg, type: "warning" });
      }
    }
  }
};
</script>

<style>
.text-editor .ql-editor {
  height: 300px;
}
</style>
