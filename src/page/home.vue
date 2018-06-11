<template>
	<layout>
		<div class="main-header">
			<el-breadcrumb separator="/">
				<el-breadcrumb-item>首页</el-breadcrumb-item>
			</el-breadcrumb>
			<div>
				<div class="proj-num-wrap">
					<ul>
						<li>
1
						</li>
						<li>
2
						</li>
					</ul>
				</div>
				<div class="user-wrap">

				</div>
			</div>
		</div>
	</layout>
	
</template>

<script>
import layout from "@/components/layout.vue";
export default {
  components: {
    layout
  }
};
</script>

<style lang="scss" scoped>
.container {
  .el-main {
    .main-header {
      height: 134px;
    }
  }
}
</style>

