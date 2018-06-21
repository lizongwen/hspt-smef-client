<template>
	<div>
		<el-tabs v-model="activeName" @tab-click="handleClick">
			<el-tab-pane label="荣誉信息" name="first">
				<div>
					<el-card class="box-card">
						<div slot="header" class="clearfix">
							<div class="card-right-wrap">
								<el-button class="save" type="primary" size="medium">保存</el-button>
							</div>
							<div class="card-title">荣誉信息</div>
						</div>
						<!-- 表格容器 -->
						<div>
						</div>
					</el-card>
				</div>
			</el-tab-pane>
			<el-tab-pane label="行政许可" name="second">
				<div>
					<el-card class="box-card">
						<div slot="header" class="clearfix">
							<div class="card-right-wrap">
								<el-button class="save" type="primary" size="medium">保存</el-button>
							</div>
							<div class="card-title">行政许可</div>
						</div>
						<!-- 表格容器 -->
						<div>
						</div>
					</el-card>
				</div>
			</el-tab-pane>
			<el-tab-pane label="主要认证与资质" name="third">
				<div>
					<el-card class="box-card">
						<div slot="header" class="clearfix">
							<div class="card-right-wrap">
								<el-button class="save" type="primary" size="medium">保存</el-button>
							</div>
							<div class="card-title">主要认证与资质</div>
						</div>
						<!-- 表格容器 -->
						<div>
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
      activeName: "first"
    };
  },
  methods: {
    //点击标签页触发事件
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>
<style lang="scss" scoped>
.card-right-wrap {
  float: right;
  + .card-title {
    float: left;
  }
}
</style>

