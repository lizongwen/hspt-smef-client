<template>
	<div>
        <el-card class="box-card" shadow='nevner'>
        		<div slot="header" class="clearfix">
							<div class="card-title">纳税情况雨分析</div>
						</div>
        </el-card>
            <el-card class="box-card" shadow='nevner'>	
						<div slot="header" class="clearfix">
							<div class="card-right-wrap">
								<el-button @click="saveXj" type="primary" size="medium">保存</el-button>
							</div>
							<div class="card-title">
								目标公司2017年全年缴纳各项税款<el-input v-model="input" placeholder="2000"></el-input>万元
							</div>
						</div>
        </el-card>
	</div>
</template>

<script>
export default {

}
</script>

<style>
.card-title{
	font-size: 15px;
}
.el-input{
	width: 70px;
}
.el-input__inner {
	width: 70px;
	height: 30px;
}
</style>
