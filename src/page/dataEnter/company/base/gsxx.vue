<template>
	<div>
		<el-card class="box-card">
			<div slot="header" class="clearfix">
				<div class="card-right-wrap">
					<el-button class="save" type="primary" size="medium">保存</el-button>
				</div>
				<div class="card-title">工商基本信息</div>
			</div>
			<div>
				<el-form class="form clearfix" size="small" :label-position="labelPosition" label-width="100px" :model="form">
					<el-row>
						<el-col :offset="1" :span="10">
							<el-form-item label="注册日期:">
								<el-date-picker size="small" v-model="form.regDate" type="date" placeholder="选择日期">
								</el-date-picker>
							</el-form-item>
						</el-col>
						<el-col :offset="1" :span="10">
							<el-form-item label="注册机关:">
								<el-input v-model="form.user"></el-input>
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
								<el-input v-model="form.orgCode"></el-input>
							</el-form-item>
						</el-col>
					</el-row>
					<el-row>
						<el-col :offset="1" :span="10">
							<el-form-item label="注册号:">
								<el-input v-model="form.regNum"></el-input>
							</el-form-item>
						</el-col>
						<el-col :offset="1" :span="10">
							<el-form-item label="注册资本:">
								<el-input v-model="form.regAsset"></el-input>
							</el-form-item>
						</el-col>
					</el-row>
					<el-row>
						<el-col :offset="1" :span="10">
							<el-form-item label="企业类型:">
								<el-input v-model="form.companyType"></el-input>
							</el-form-item>
						</el-col>
						<el-col :offset="1" :span="10">
							<el-form-item label="成立年份:">
								<el-date-picker size="small" v-model="form.foundedYear" type="date" placeholder="选择日期">
								</el-date-picker>
							</el-form-item>
						</el-col>
					</el-row>
					<el-row>
						<el-col :offset="1" :span="10">
							<el-form-item label="营业期限:">
								<el-input v-model="form.operationTerm"></el-input>
							</el-form-item>
						</el-col>
						<el-col :offset="1" :span="10">
							<el-form-item label="注册地址:">
								<el-input v-model="form.address"></el-input>
							</el-form-item>
						</el-col>
					</el-row>
					<el-row>
						<el-col :offset="1" :span="10">
							<el-form-item label="法人代表:">
								<el-input v-model="form.legalRepresentative"></el-input>
							</el-form-item>
						</el-col>
						<el-col :offset="1" :span="10">
							<el-form-item label="电话:">
								<el-input v-model="form.phoneNum"></el-input>
							</el-form-item>
						</el-col>
					</el-row>
					<el-row>
						<el-col :offset="1" :span="10">
							<el-form-item label="传真:">
								<el-input v-model="form.faxNum"></el-input>
							</el-form-item>
						</el-col>
						<el-col :offset="1" :span="10">
							<el-form-item label="网站:">
								<el-input v-model="form.website"></el-input>
							</el-form-item>
						</el-col>
					</el-row>
					<el-row>
						<el-col :offset="1" :span="10">
							<el-form-item label="公司人数:">
								<el-input v-model="form.staffNum"></el-input>
							</el-form-item>
						</el-col>
						<el-col :offset="1" :span="10">
							<el-form-item label="销售收入:">
								<el-input v-model="form.saleRevenue"></el-input>
							</el-form-item>
						</el-col>
					</el-row>
					<el-row>
						<el-col :offset="1" :span="10">
							<el-form-item label="净资产:">
								<el-input v-model="form.netAsset"></el-input>
							</el-form-item>
						</el-col>
					</el-row>
					<el-row>
						<el-col :offset="1" :span="21">
							<el-form-item label="经营范围:">
								<el-input type="textarea" v-model="form.businessScope" :rows="5"></el-input>
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
      labelPosition: "right",
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
      const res = await this.$http.post('/hspt-web-api/data_entry/qyjbxx/gsjbxx/list', params);
      //this.form.regData=new Date("2018-06-28");
      this.form.user=res.data.resultData.data.zcjg;
      this.form.creditCode=res.data.resultData.data.creditCode;
      this.form.orgCode=res.data.resultData.data.zzjgdm;
      this.form.regNum=res.data.resultData.data.zch;
      this.form.regAsset=res.data.resultData.data.zczb;
      this.form.companyType=res.data.resultData.data.qylx;
      //this.form.foundedYear=res.data.resultData.data.clnf;
      this.form.operationTerm=res.data.resultData.data.yyqx;
      this.form.address=res.data.resultData.data.zcdz;
      this.form.legalRepresentative=res.data.resultData.data.frdb;
      this.form.phoneNum=res.data.resultData.data.dh;
      this.form.faxNum=res.data.resultData.data.cz;
      this.form.website=res.data.resultData.data.wz;
      this.form.staffNum=res.data.resultData.data.gsrs;
      this.form.saleRevenue=res.data.resultData.data.xssr;
      this.form.netAsset=res.data.resultData.data.jzc;
      this.form.businessScope=res.data.resultData.data.jyfw;
    },
    onSubmit() {
      //console.log("submit!");
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









