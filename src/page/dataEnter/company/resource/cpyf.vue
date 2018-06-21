<template>
	<div>
		<el-card class="box-card">
			<div slot="header" class="clearfix">
				<div class="card-title">产品技术研发情况</div>
				<div class="card-right-wrap">
					<el-button class="save" type="primary" size="medium">保存</el-button>
				</div>
			</div>
			<div class="contentWrap">
				<el-form class="form clearfix" size="small" :label-position="labelPosition" label-width="250px" :model="form">

					<el-row>
						<el-col :offset="1" :span="10">
							<el-form-item label="研发机构或部门：">
								<el-input v-model="form.department"></el-input>
							</el-form-item>
						</el-col>
						<el-col :offset="1" :span="10">
							<el-form-item label="研发及技术人员数量：">
								<el-input v-model="form.regNum"></el-input>
							</el-form-item>
						</el-col>
					</el-row>
					<el-row>

						<el-col :offset="1" :span="10">
							<el-form-item label="上年度研发投入金额：">
								<el-input v-model="form.regAsset"></el-input>
							</el-form-item>
						</el-col>
						<el-col :offset="1" :span="10">
							<el-form-item label="上年度研发投入占营业收入比例：">
								<el-input v-model="form.operating"></el-input>
							</el-form-item>
						</el-col>
					</el-row>
					<el-row>

						<el-col :offset="1" :span="10">
							<el-form-item label="本年度研发投入金额：">
								<el-input v-model="form.money"></el-input>
							</el-form-item>
						</el-col>
						<el-col :offset="1" :span="10">
							<el-form-item label="本年度研发投入占营业收入比例：">
								<el-input v-model="form.operationTerm"></el-input>
							</el-form-item>
						</el-col>
					</el-row>
					<el-row>

						<el-col :offset="1" :span="10">
							<el-form-item label="主要研发合作机构：">
								<el-input v-model="form.operatingAgency"></el-input>
							</el-form-item>
						</el-col>
					</el-row>
					<el-row>
						<el-col :offset="1" :span="21">
							<el-form-item label="主要研发成果：">
								<el-input type="textarea" v-model="form.developmentResult"></el-input>
							</el-form-item>
						</el-col>
					</el-row>
				</el-form>
			</div>
		</el-card>
		<el-card class="box-card">
			<div slot="header" class="clearfix">
				<div class="card-title">小结</div>
				<div class="card-right-wrap">
					<el-button class="save" type="primary" size="medium">保存</el-button>
				</div>
			</div>
			<div class="summary-content">
			</div>
		</el-card>
	</div>
</template>

<script>
	import getAndSaveData from '@/components/dataEnter/getAndSaveData.vue';
	export default {
		components: {
			'v-getAndSaveData': getAndSaveData
		},
		data() {
			return {
				labelPosition: 'right',
				form: {
					department: '',
					regNum: '',
					regAsset: '',
					operating: '',
					money: '',
					operationTerm: '',
					operatingAgency: '',
					developmentResult: ''
				}

			}
		},
		methods: {
			onSubmit() {
				console.log('submit!');
			}
		}
	}
</script>

<style scoped lang="scss">
	@import "@/style/commonStyle.scss";
	.el-date-editor.el-input,
	.el-date-editor.el-input__inner {
		width: 100%;
	}
	
	.gqjgfz {
		background-color: #fff;
	}
	
	.el-tabs__header {
		margin: 0;
		padding: 18px 20px;
	}
	
	.card-title {
		margin-top: 8px;
		float: left;
	}
	
	.card-right-wrap {
		float: right;
	}
	
	.summary-content {
		margin: 0 15px;
		height: 150px;
		border: 1px solid #CCCCCC;
	}
</style>