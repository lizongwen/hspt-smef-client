<template>
	<div>
		<el-tabs v-model="activeName" @tab-click="handleClick">
			<el-tab-pane label="经营管理团队分析" name="first">
				<div>
					<el-card class="box-card">
						<div slot="header" class="clearfix">
							<div class="card-right-wrap">
								<el-button class="save" type="primary" size="medium">保存</el-button>
							</div>
							<div class="card-title">团队成员</div>
						</div>
						<!-- 表单容器 -->
						<div>
							<el-form class="form clearfix" size="small" :label-position="labelPosition" label-width="130px" :model="form">
								<el-row>
									<el-col :offset="1" :span="10">
										<el-form-item label="职务:">
											<el-input v-model="form.post"></el-input>
										</el-form-item>
									</el-col>
									<el-col :offset="1" :span="10">
										<el-form-item label="是否参与日常运营:">
											<el-select v-model="value" placeholder="请选择">
												<el-option label="是" value="1"></el-option>
												<el-option label="否" value="0"></el-option>
											</el-select>
										</el-form-item>
									</el-col>
								</el-row>
								<el-row>
									<el-col :offset="1" :span="10">
										<el-form-item label="姓名:">
											<el-input v-model="form.post"></el-input>
										</el-form-item>
									</el-col>
									<el-col :offset="1" :span="10">
										<el-form-item label="性别:">
											<el-select v-model="value" placeholder="请选择">
												<el-option label="男" value="1">
												</el-option>
												<el-option label="女" value="0">
												</el-option>
											</el-select>
										</el-form-item>
									</el-col>
								</el-row>
								<el-row>
									<el-col :offset="1" :span="10">
										<el-form-item label="文化程度:">
											<el-select v-model="value" placeholder="请选择">
												<el-option label="小学" value="1"></el-option>
												<el-option label="初中" value="2"></el-option>
												<el-option label="高中" value="3"></el-option>
												<el-option label="大专" value="4"></el-option>
												<el-option label="本科" value="5"></el-option>
												<el-option label="研究生" value="6"></el-option>
												<el-option label="博士生" value="7"></el-option>
											</el-select>
										</el-form-item>
									</el-col>
									<el-col :offset="1" :span="10">
										<el-form-item label="出生年月:">
											<el-date-picker v-model="form.birth" type="date" placeholder="选择日期">
											</el-date-picker>
										</el-form-item>
									</el-col>
								</el-row>
								<!-- <el-row>
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
											<el-input v-model="form.foundedYear"></el-input>
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
											<el-input type="textarea" v-model="form.businessScope"></el-input>
										</el-form-item>
									</el-col>
								</el-row> -->
							</el-form>
						</div>
					</el-card>
				</div>
				<div>
					<el-card class="box-card">
						<div slot="header" class="clearfix">
							<div class="card-right-wrap">
								<el-button class="save" type="primary" size="medium">保存</el-button>
							</div>
							<div class="card-title">小结</div>
						</div>
						<div>
							<el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea"></el-input>
						</div>
					</el-card>
				</div>
			</el-tab-pane>
			<el-tab-pane label="员工分析" name="second">
				<div>
					<el-card class="box-card">
						<div slot="header" class="clearfix">
							<div class="card-right-wrap">
								<el-button class="save" type="primary" size="medium">保存</el-button>
							</div>
							<div class="card-title">公司员工分析</div>
						</div>
						<!-- 表格容器 -->
						<div>
						</div>
					</el-card>
				</div>
				<div>
					<el-card class="box-card">
						<div slot="header" class="clearfix">
							<div class="card-right-wrap">
								<el-button class="save" type="primary" size="medium">保存</el-button>
							</div>
							<div class="card-title">小结</div>
						</div>
						<div>
							<el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea"></el-input>
						</div>
					</el-card>
				</div>
			</el-tab-pane>
		</el-tabs>
	</div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "first",
      textarea: "",
      form: {
        post: "",//职位
		isJoin: "",
		birth:""//出生年月
      }
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>

<style>
</style>
