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
											<el-select v-model="value" placeholder="请选择" style="width:100%">
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
											<el-select v-model="value" placeholder="请选择"  style="width:100%">
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
											<el-select v-model="value" placeholder="请选择" style="width:100%">
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
											<el-date-picker v-model="form.birth" type="date" placeholder="选择日期" style="width:100%"></el-date-picker>
										</el-form-item>
									</el-col>
								</el-row>
								<el-row>
									<el-col :offset="1" :span="10">
										<el-form-item label="相关工作年限:">
											<el-input v-model="form.post"></el-input>
										</el-form-item>
									</el-col>
									<el-col :offset="1" :span="10">
										<el-form-item label="婚姻状况:">
											<el-select v-model="value" placeholder="请选择"  style="width:100%">
												<el-option label="未婚" value="1">
												</el-option>
												<el-option label="已婚" value="0">
												</el-option>
											</el-select>
										</el-form-item>
									</el-col>
								</el-row>
								<el-row>
									<el-col :offset="1" :span="10">
										<el-form-item label="任务性质:">
											<el-input v-model="form.post"></el-input>
										</el-form-item>
									</el-col>
								</el-row>
								<el-row>
									<el-col :offset="1" :span="21">
										<el-form-item label="工作履历:">
											<el-input type="textarea" v-model="form.workExperience"></el-input>
										</el-form-item>
									</el-col>
								</el-row>
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
		birth:"",//出生年月
		workExperience:"",//工作经历
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
