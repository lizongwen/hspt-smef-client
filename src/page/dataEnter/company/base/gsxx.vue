<template>
	<div>
		<el-card class="box-card">
			<div slot="header" class="clearfix">
				<div class="card-right-wrap">
					<el-button type="primary" size="medium" @click="save">保存</el-button>
				</div>
				<div class="card-title">工商基本信息</div>
			</div>
			<div>
				<el-form class="form clearfix" size="small" :label-position="labelPosition" label-width="100px" :model="form">
					<el-row>
						<el-col :offset="1" :span="10">
							<el-form-item label="注册日期:">
								<el-date-picker size="small" v-model="form.zcrq" type="date" placeholder="选择日期" :editable='false' value-format="yyyy-MM-dd"></el-date-picker>
							</el-form-item>
						</el-col>
						<el-col :offset="1" :span="10">
							<el-form-item label="注册机关:">
								<el-input v-model="form.zcjg"></el-input>
							</el-form-item>
						</el-col>
					</el-row>
					<el-row>
						<el-col :offset="1" :span="10">
							<el-form-item label="社会信用代码:">
								<el-input :disabled="true" v-model="form.creditCode"></el-input>
							</el-form-item>
						</el-col>
						<el-col :offset="1" :span="10">
							<el-form-item label="组织机构代码:">
								<el-input v-model="form.zzjgdm"></el-input>
							</el-form-item>
						</el-col>
					</el-row>
					<el-row>
						<el-col :offset="1" :span="10">
							<el-form-item label="注册号:">
								<el-input v-model="form.zch"></el-input>
							</el-form-item>
						</el-col>
						<el-col :offset="1" :span="10">
							<el-form-item label="注册资本:">
								<el-input v-model="form.zczb"></el-input>
							</el-form-item>
						</el-col>
					</el-row>
					<el-row>
						<el-col :offset="1" :span="10">
							<el-form-item label="企业类型:">
								<el-input v-model="form.qylx"></el-input>
							</el-form-item>
						</el-col>
						<el-col :offset="1" :span="10">
							<el-form-item label="成立年份:">
								<el-date-picker size="small" v-model="form.clnf" type="year" placeholder="选择日期" value-format="yyyy" format="yyyy">
								</el-date-picker>
							</el-form-item>
						</el-col>
					</el-row>
					<el-row>
						<el-col :offset="1" :span="10">
							<el-form-item label="营业期限:">
								<el-input v-model="form.yyqx"></el-input>
							</el-form-item>
						</el-col>
						<el-col :offset="1" :span="10">
							<el-form-item label="注册地址:">
								<el-input v-model="form.zcdz"></el-input>
							</el-form-item>
						</el-col>
					</el-row>
					<el-row>
						<el-col :offset="1" :span="10">
							<el-form-item label="法人代表:">
								<el-input v-model="form.frdb"></el-input>
							</el-form-item>
						</el-col>
						<el-col :offset="1" :span="10">
							<el-form-item label="电话:">
								<el-input v-model="form.dh"></el-input>
							</el-form-item>
						</el-col>
					</el-row>
					<el-row>
						<el-col :offset="1" :span="10">
							<el-form-item label="传真:">
								<el-input v-model="form.cz"></el-input>
							</el-form-item>
						</el-col>
						<el-col :offset="1" :span="10">
							<el-form-item label="网站:">
								<el-input v-model="form.wz"></el-input>
							</el-form-item>
						</el-col>
					</el-row>
					<el-row>
						<el-col :offset="1" :span="10">
							<el-form-item label="公司人数:">
								<el-input v-model="form.gsrs"></el-input>
							</el-form-item>
						</el-col>
						<el-col :offset="1" :span="10">
							<el-form-item label="销售收入:">
								<el-input v-model="form.xssr"></el-input>
							</el-form-item>
						</el-col>
					</el-row>
					<el-row>
						<el-col :offset="1" :span="10">
							<el-form-item label="净资产:">
								<el-input v-model="form.jzc"></el-input>
							</el-form-item>
						</el-col>
					</el-row>
					<el-row>
						<el-col :offset="1" :span="21">
							<el-form-item label="经营范围:">
								<el-input type="textarea" v-model="form.jyfw" :rows="5"></el-input>
							</el-form-item>
						</el-col>
					</el-row>
				</el-form>
			</div>
		</el-card>
	</div>
</template>

<script>
export default {
  data() {
    return {
      // tty:'2018-06-02',
      labelPosition: "right",
      // timeDefaultShow:new Date("October 13, 1975 11:13:00"),
      form: {
        regDate: "",
        user: "",
        creditCode: "",
        orgCode: "",
        regNum: "",
        regAsset: "",
        companyType: "",
        foundedYear: "",
        operationTerm: "",
        address: "",
        legalRepresentative: "",
        phoneNum: "",
        faxNum: "",
        website: "",
        staffNum: "",
        saleRevenue: "",
        netAsset: "",
        businessScope: ""
      }
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.getGsjbxx();
    },
    //获取工商基本信息
    getGsjbxx: async function() {
      let params = {
        creditCode: sessionStorage.getItem("creditCode"),
        token: sessionStorage.getItem("token")
      };
      const res = await this.$http.post(
        "/hspt-web-api/data_entry/qyjbxx/gsjbxx/list",
        params
      );
      this.form.zcrq = res.data.resultData.data.zcrq;
      this.form.zcjg = res.data.resultData.data.zcjg;
      this.form.creditCode = res.data.resultData.data.creditCode;
      this.form.zzjgdm = res.data.resultData.data.zzjgdm;
      this.form.zch = res.data.resultData.data.zch;
      this.form.zczb = res.data.resultData.data.zczb;
      this.form.qylx = res.data.resultData.data.qylx;
      this.form.clnf = res.data.resultData.data.clnf;
      this.form.yyqx = res.data.resultData.data.yyqx;
      this.form.zcdz = res.data.resultData.data.zcdz;
      this.form.frdb = res.data.resultData.data.frdb;
      this.form.dh = res.data.resultData.data.dh;
      this.form.cz = res.data.resultData.data.cz;
      this.form.wz = res.data.resultData.data.wz;
      this.form.gsrs = res.data.resultData.data.gsrs;
      this.form.xssr = res.data.resultData.data.xssr;
      this.form.jzc = res.data.resultData.data.jzc;
      this.form.jyfw = res.data.resultData.data.jyfw;
	},
	//保存工商基本信息
    save: async function() {
      console.log(this.form);
      let params = {
        creditCode: sessionStorage.getItem("creditCode"),
        token: sessionStorage.getItem("token"),
        gsjbxx: JSON.stringify(this.form)
      };
      const res = await this.$http.post(
        "/hspt-web-api/data_entry/qyjbxx/gsjbxx/modify",
        params
      );
      if (res.data.resultCode == "0") {
        this.$message({ message: res.data.resultMsg, type: 'success' });
      }
      console.log(res.data);
      // console.log("submit!");
    }
  },
  components: {}
};
</script>

<style scoped lang="scss">
@import "@/style/commonStyle.scss";

.el-date-editor.el-input,
.el-date-editor.el-input__inner {
  width: 100%;
}
</style>









