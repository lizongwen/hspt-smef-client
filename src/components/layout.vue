<template>
	<el-container class="container">
		<el-header>
			<div class="logout">
				<i class="icon iconfont icon-poweroff"></i>
			</div>
			<div class="header-bar">
				<div class="logo"><img src="../image/logo.png" alt="" srcset=""></div>
				<div class="proj-name">中小企业征信平台</div>
			</div>
		</el-header>
		<el-main>
			<router-view/>
		</el-main>
		<!-- <el-footer>Footer</el-footer> -->
	</el-container>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  min-width: 1300px;
  .el-header {
    padding: 0;
    background-color: #2d2d2d;
    color: #fff;
    .header-bar {
      height: inherit;
      font-size: 0;
      .logo {
        display: inline-block;
        margin: 11px 15px 0 30px;
        vertical-align: top;
      }
      .proj-name {
        margin-top: 14px;
        padding-left: 15px;
        display: inline-block;
        line-height: 33px;
        border-left: 2px solid #fff;
        font-size: 18px;
      }
    }
    .logout {
      float: right;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 22px;
      height: inherit;
      .icon {
        cursor: pointer;
        &:hover {
          color: #1790ff;
        }
      }
    }
  }
  .el-main {
    padding: 0;
    background-color: #f7f6f5;
  }
}
</style>

