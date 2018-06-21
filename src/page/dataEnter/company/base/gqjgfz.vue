<template>
	<div class="gqjgfz">
		 <el-tabs v-model="activeName" @tab-click="handleClick">
			<el-tab-pane label="股权结构" name="first">
				<div>
					<el-card class="box-card">
						<div slot="header" class="clearfix">
							<div class="card-title">所有版本</div>
							<div class="card-right-wrap">
								<el-button class="save" type="primary" size="medium">保存</el-button>
							</div>
						</div>
						<div>
							
						</div>
					</el-card>
				</div>
			</el-tab-pane>
			<el-tab-pane label="企业图谱" name="second">企业图谱</el-tab-pane>
			<el-tab-pane label="组织架构" name="third">组织架构</el-tab-pane>
		</el-tabs>
	</div>
</template>

<script>
export default {
	data(){
		return{
			activeName:'first'
		}
	}
}
</script>

<style lang="scss" scoped>
.gqjgfz{
	background-color: #fff
}
.el-tabs__header{
	margin: 0;
	// padding:18px 20px;
}
.card-title{
	float: left;
}
.card-right-wrap{
	float: right;
}
</style>

