<template>
	<div>
		<el-tabs v-model="activeName" @tab-click="handleClick">
			<el-tab-pane label="竞争态势和市场机遇" name="first">
				<div>
					<el-card class="box-card" shadow='nevner'>
						<div slot="header" class="clearfix">
							<div class="card-right-wrap">
								<el-button class="save" type="primary" size="medium" @click="saveJztsjscjyData">保存</el-button>
							</div>
							<div class="card-title">竞争态势和市场机遇</div>
						</div>
						<div class="text-editor">
							<quill-editor :value="jztsjscjy" :maxSize="10240" v-on:changeInput="changeJztsjscjy"></quill-editor>
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
      jztsjscjy: "" // 定义文本框值的变量
    };
  },
  mounted() {
    this.loadJztsjscjyData();
  },
  methods: {
    //handleClick() {},
    // 改变小结输入值
    changeJztsjscjy(val) {
      this.jztsjscjy = val;
    },

    // 加载竞争态势及市场机遇小结数据
    loadJztsjscjyData: async function() {
      let params = {
        creditCode: sessionStorage.getItem("creditCode"),
        token: sessionStorage.getItem("token")
      };

      // 请求后端加载竞争态势及市场机遇的url
      const res = await this.$http.post(
        "/hspt-web-api/data_entry/hyscgk/jztsjscjy/index",
        params
      );

      if (res.data.resultCode == "0") {
        this.jztsjscjy = res.data.resultData.jztsjscjy;
      }
    },

    // 新增竞争态势及市场机遇小结数据
    saveJztsjscjyData: async function() {
      let params = {
        creditCode: sessionStorage.getItem("creditCode"),
        token: sessionStorage.getItem("token"),
        jztsjscjy: this.jztsjscjy
      };
      // 请求后端保存竞争态势及市场机遇的url
      const res = await this.$http.post(
        "/hspt-web-api/data_entry/hyscgk/jztsjscjy/save",
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

