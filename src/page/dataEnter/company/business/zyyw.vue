<template>
	<div>
		<el-tabs v-model="activeName" @tab-click="handleClick">
			<el-tab-pane label="主营产品" name="first">
				<div>
					<el-card class="box-card" shadow='nevner'>
						<div slot="header" class="clearfix">
							<div class="card-right-wrap">
								<el-button class="save" type="primary" size="medium" @click="saveZycpData">保存</el-button>
							</div>
							<div class="card-title">主营产品</div>
						</div>
						<div class="text-editor">
							<quill-editor :value="zycp" :maxSize="10240" v-on:changeInput="changZycp"></quill-editor>
						</div>
					</el-card>
				</div>
			</el-tab-pane>
<!--商业模式-->
<el-tab-pane label="商业模式" name="second">
				<div>
					<el-card class="box-card" shadow='nevner'>
						<div slot="header" class="clearfix">
							<div class="card-right-wrap">
								<el-button class="save" type="primary" size="medium" @click="saveSymsData">保存</el-button>
							</div>
							<div class="card-title">商业模式</div>
						</div>
						<div class="text-editor">
							<quill-editor :value="syms" :maxSize="10240" v-on:changeInput="changSyms"></quill-editor>
						</div>
					</el-card>
				</div>
			</el-tab-pane>

<!--未来计划-->

      <el-tab-pane label="未来计划" name="third">
				<div>
					<el-card class="box-card" shadow='nevner'>
						<div slot="header" class="clearfix">
							<div class="card-right-wrap">
								<el-button class="save" type="primary" size="medium" @click="saveWljsData">保存</el-button>
							</div>
							<div class="card-title">未来计划</div>
						</div>
						<div class="text-editor">
							<quill-editor :value="wljh" :maxSize="10240" v-on:changeInput="changWljh"></quill-editor>
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
      zycp: "", // 定义文本框值的变量
      syms: "", // 定义文本框值的变量
      wljh: "" // 定义文本框值的变量
    };
  },
  mounted() {
    this.loadlistAllData();
  },
  methods: {
    //handleClick() {},

    // 改变小结内容
    changZycp(val) {
      this.zycp = val;
    },
    changWljh(val) {
      this.wljh = val;
    },
    changSyms(val) {
      this.syms = val;
    },

    // 加载小结内容数据
    loadlistAllData: async function() {
      let params = {
        creditCode: sessionStorage.getItem("creditCode"),
        token: sessionStorage.getItem("token")
      };
      const res = await this.$http.post(
        "/hspt-web-api/data_entry/gsyyxx/ywjs/listAllData",
        params
      );
      if (res.data.resultCode == "0") {
        this.zycp = res.data.resultData.data.zycp;
        this.wljh = res.data.resultData.data.wljh;
        this.syms = res.data.resultData.data.syms;
      }
    },

    // 新增主营产品小结内容数据
    saveZycpData: async function() {
      let params = {
        creditCode: sessionStorage.getItem("creditCode"),
        token: sessionStorage.getItem("token"),
        zycp: this.zycp
      };
      const res = await this.$http.post(
        "/hspt-web-api/data_entry/gsyyxx/ywjs/zycp/save",
        params
      );
      if (res.data.resultCode == "0") {
        this.$message({ message: res.data.resultMsg, type: "success" });
      } else {
        this.$message({ message: res.data.resultMsg, type: "warning" });
      }
    },

  // 新增商业模式小结数据
    saveSymsData: async function() {
      let params = {
        creditCode: sessionStorage.getItem("creditCode"),
        token: sessionStorage.getItem("token"),
        syms: this.syms
      };
      const res = await this.$http.post(
        "/hspt-web-api/data_entry/gsyyxx/ywjs/syms/save",
        params
      );
      if (res.data.resultCode == "0") {
        this.$message({ message: res.data.resultMsg, type: "success" });
      } else {
        this.$message({ message: res.data.resultMsg, type: "warning" });
      }
    },

    // 新增未来计划小结数据
    saveWljsData: async function() {
      let params = {
        creditCode: sessionStorage.getItem("creditCode"),
        token: sessionStorage.getItem("token"),
        wljh: this.wljh
      };
      const res = await this.$http.post(
        "/hspt-web-api/data_entry/gsyyxx/ywjs/wljh/save",
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

