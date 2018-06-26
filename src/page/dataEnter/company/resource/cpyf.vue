<template>
	<div>
		<el-card class="box-card">
			<div slot="header" class="clearfix">
				<div class="card-right-wrap">
					<el-button class="save" type="primary" size="medium">保存</el-button>
				</div>
				<div class="card-title">产品技术研发情况</div>
			</div>
			<div>
				<el-form class="form clearfix" size="small" :label-position="labelPosition" label-width="250px" :model="form">
					<el-row>
						<el-col :offset="1" :span="10">
							<el-form-item label="研发机构或部门：">
								<el-input v-model="form.department" placeholder="研发机构或部门"></el-input>
							</el-form-item>
						</el-col>
						<el-col :offset="1" :span="10">
							<el-form-item label="研发及技术人员数量：">
								<el-input v-model="form.num" placeholder="研发及技术人员数量"></el-input>
							</el-form-item>
						</el-col>
					</el-row>
					<el-row>

						<el-col :offset="1" :span="10">
							<el-form-item label="上年度研发投入金额：">
								<el-input v-model="form.lastMoney" placeholder="上年度研发投入金额"></el-input>
							</el-form-item>
						</el-col>
						<el-col :offset="1" :span="10">
							<el-form-item label="上年度研发投入占营业收入比例：">
								<el-input v-model="form.lastRatio" placeholder="上年度研发投入占营业收入比例"></el-input>
							</el-form-item>
						</el-col>
					</el-row>
					<el-row>

						<el-col :offset="1" :span="10">
							<el-form-item label="本年度研发投入金额：">
								<el-input v-model="form.thisMoney" placeholder="本年度研发投入金额"></el-input>
							</el-form-item>
						</el-col>
						<el-col :offset="1" :span="10">
							<el-form-item label="本年度研发投入占营业收入比例：">
								<el-input v-model="form.thisRatio" placeholder="本年度研发投入占营业收入比例"></el-input>
							</el-form-item>
						</el-col>
					</el-row>
					<el-row>

						<el-col :offset="1" :span="10">
							<el-form-item label="主要研发合作机构：">
								<el-input v-model="form.org"></el-input>
							</el-form-item>
						</el-col>
					</el-row>
					<el-row>
						<el-col :offset="1" :span="21">
							<el-form-item label="主要研发成果：">
								<el-input type="textarea" :rows="5" v-model="form.result"></el-input>
							</el-form-item>
						</el-col>
					</el-row>
				</el-form>
			</div>
		</el-card>
		<el-card class="box-card">
			<div slot="header" class="clearfix">
				<div class="card-right-wrap">
					<el-button type="primary" size="medium">保存</el-button>
				</div>
				<div class="card-title">小结</div>

			</div>
			<div>
				<el-form class="form clearfix" size="small" :label-position="labelPosition" :model="summaryForm">
					<el-form-item>
						<el-input type="textarea" :rows="5" v-model="summaryForm.content"></el-input>
					</el-form-item>
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
        department: "",
        num: "",
        lastMoney: "",
        lastRatio: "",
        thisMoney: "",
        thisRatio: "",
        org: "",
        result: ""
      },
      summaryForm: {
        content: "111"
      }
    };
  },
  methods: {
    onSubmit() {
    //   console.log("submit!");
    }
  },
  components: {

  }
};
</script>

<style scoped lang="scss">
</style>