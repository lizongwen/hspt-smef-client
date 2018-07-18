<template>
	<div>
		<el-card class="box-card" shadow='nevner'>
			<div slot="header" class="clearfix">
				<div class="card-right-wrap">
					<el-button class="save" type="primary" size="medium" @click="saveCpyf">保存</el-button>
				</div>
				<div class="card-title">产品技术研发情况</div>
			</div>
			<div>
				<el-form class="form clearfix" size="small" :label-position="labelPosition" label-width="250px" :model="form">
					<el-row>
						<el-col :offset="1" :span="10">
							<el-form-item label="研发机构或部门：">
								<el-input v-model="form.yfjghbm" placeholder="研发机构或部门"></el-input>
							</el-form-item>
						</el-col>
						<el-col :offset="1" :span="10">
							<el-form-item label="研发及技术人员数量：">
								<el-input v-model="form.yfjjsrysl" placeholder="研发及技术人员数量"></el-input>
							</el-form-item>
						</el-col>
					</el-row>
					<el-row>
						<el-col :offset="1" :span="10">
							<el-form-item label="上年度研发投入金额：">
								<el-input v-model="form.sndyftrje" placeholder="上年度研发投入金额"></el-input>
							</el-form-item>
						</el-col>
						<el-col :offset="1" :span="10">
							<el-form-item label="上年度研发投入占营业收入比例：">
								<el-input v-model="form.sndyftrzyysrbl" placeholder="上年度研发投入占营业收入比例"></el-input>
							</el-form-item>
						</el-col>
					</el-row>
					<el-row>

						<el-col :offset="1" :span="10">
							<el-form-item label="本年度研发投入金额：">
								<el-input v-model="form.bndyftrje" placeholder="本年度研发投入金额"></el-input>
							</el-form-item>
						</el-col>
						<el-col :offset="1" :span="10">
							<el-form-item label="本年度研发投入占营业收入比例：">
								<el-input v-model="form.bndyftrzyysrbl" placeholder="本年度研发投入占营业收入比例"></el-input>
							</el-form-item>
						</el-col>
					</el-row>
					<el-row>

						<el-col :offset="1" :span="10">
							<el-form-item label="主要研发合作机构：">
								<el-input v-model="form.zyyfhzjg"></el-input>
							</el-form-item>
						</el-col>
					</el-row>
					<el-row>
						<el-col :offset="1" :span="21">
							<el-form-item label="主要研发成果：">
								<el-input type="textarea" :rows="5" v-model="form.zyyfcg"></el-input>
							</el-form-item>
						</el-col>
					</el-row>
				</el-form>
			</div>
		</el-card>
		<el-card class="box-card" shadow='nevner'>
			<div slot="header" class="clearfix">
				<div class="card-right-wrap">
					<el-button type="primary" size="medium" @click="saveCpyfXj">保存</el-button>
				</div>
				<div class="card-title">小结</div>

			</div>
			<div>
				<!-- <el-form class="form clearfix" size="small" :label-position="labelPosition" :model="summaryForm">
					<el-form-item>
						<el-input type="textarea" :rows="5" v-model="summaryForm.content"></el-input>
					</el-form-item>
				</el-form> -->
				<div class="text-editor">
					<quill-editor :value="cpxj" :maxSize="10240" v-on:changeInput="changCpxj"></quill-editor>
				</div>
			</div>
		</el-card>
	</div>
</template>

<script>
import quillEditor from "@/components/form/quillEditor.vue";
export default {
  data() {
    return {
      cpxj: "",
      form: {
        id: "",
        yfjghbm: "", //研发机构或部门
        yfjjsrysl: "", //研发及技术人员数量
        sndyftrje: "", //上年度研发投入金额
        sndyftrzyysrbl: "", //上年度研发投入占营业收入比例
        bndyftrje: "", //本年度研发投入金额
        bndyftrzyysrbl: "", //本年度研发投入占营业收入比例
        zyyfhzjg: "", //主要研发合作机构
        zyyfcg: "" //主要研发成果
      }
    };
  },
  mounted() {
    this.getCpyf();
	this.getCpyfxj();
  },
  methods: {
    //获取产品研发信息
    getCpyf: async function() {
      let params = {
        creditCode: sessionStorage.getItem("creditCode"),
        token: sessionStorage.getItem("token")
      };
      const res = await this.$http.post(
        "/hspt-web-api/data_entry/gsyyxx/cpyfjsqk/list",
        params
      );
	  this.form.id = res.data.resultData.data.id;
      this.form.yfjghbm = res.data.resultData.data.yfjghbm;
      this.form.yfjjsrysl = res.data.resultData.data.yfjjsrysl;
      this.form.sndyftrje = res.data.resultData.data.sndyftrje;
      this.form.sndyftrzyysrbl = res.data.resultData.data.sndyftrzyysrbl;
      this.form.bndyftrje = res.data.resultData.data.bndyftrje;
      this.form.bndyftrzyysrbl = res.data.resultData.data.bndyftrzyysrbl;
      this.form.zyyfhzjg = res.data.resultData.data.zyyfhzjg;
      this.form.zyyfcg = res.data.resultData.data.zyyfcg;
    },
	  //保存产品研发信息
	saveCpyf: async function() {
		let params = {
			creditCode: sessionStorage.getItem("creditCode"),
			token: sessionStorage.getItem("token"),
			data: JSON.stringify(this.form)
		  };
		  const res = await this.$http.post(
			"/hspt-web-api/data_entry/gsyyxx/cpyfjsqk/save",
			params
		  );
		  if(res.data.resultCode=="0"){
			this.$message({ message: res.data.resultMsg, type: "success" });
			this.getCpyf();
		  }else{
			this.$message({ message: res.data.resultMsg, type: "warning" });
		  }
	},
	///////////////////////////////////////////////////////////////////小结

	getCpyfxj: async function() {
      let params = {
        creditCode: sessionStorage.getItem("creditCode"),
        token: sessionStorage.getItem("token")
      };
      const res = await this.$http.post(
        "/hspt-web-api/data_entry/gsyyxx/cpyfjsqkxj/list",
        params
      );
     if (res.data.resultCode == "0") {
        this.cpxj = res.data.resultData.data.xj;
      }
    },

    //保存小结
    saveCpyfXj : async function() {
       let params = {
        creditCode: sessionStorage.getItem("creditCode"),
        token: sessionStorage.getItem("token"),
		cpyfjsqkxj:this.cpxj
      };
      const res = await this.$http.post(
        "/hspt-web-api/data_entry/gsyyxx/cpyfjsqkxj/save",
        params
      );
	  if(res.data.resultCode=="0"){
	    this.$message({ message: res.data.resultMsg, type: "success" });
	  }else{
	    this.$message({ message: res.data.resultMsg, type: "warning" });
	  }
    },
    //改变小结内容
    changCpxj(val) {
      this.cpxj = val;
    },
    onSubmit() {
      //   console.log("submit!");
    }
  },
   components: {
    "quill-editor": quillEditor
  }
};
</script>

<style lang="scss">
.text-editor .ql-editor {
  height: 300px;
}
</style>
