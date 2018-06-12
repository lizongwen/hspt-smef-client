<template>
	<div class="main-header">
		<el-breadcrumb separator="/">
			<el-breadcrumb-item>首页</el-breadcrumb-item>
		</el-breadcrumb>
		<div class="clearfix">
			<div class="proj-num-wrap">
				<div class="proj-num-item">
					<span class="proj-num-item-title">项目数量</span>
					<div class="proj-num">{{projNum}}</div>
				</div>
				<div class="septal-line"></div>
				<div class="proj-num-item">
					<span class="proj-num-item-title">完成数量</span>
					<div class="proj-num">{{finishNum}}</div>
				</div>
			</div>
			<div class="user-wrap">
				<div class="user-name">您好，
					<span>哇哈哈</span>
				</div>
				<div class="user-post-wrap">
					<span class="post-name">{{postName}}</span>
					<span>惠国征信-金融服务中心</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  data() {
    return {
      projNum: 56,
      finishNum: 33,
      postName: "项目经理"
    };
  }
};
</script>

<style lang="scss" scoped>
.main-header {
  height: 134px;
  padding: 20px 30px;
  background-color: #fff;
  .proj-num-wrap {
    float: left;
    display: flex;
    min-width: 173px;
    justify-content: space-between;
    align-items: center;
    .proj-num-item {
      flex: 1;
      text-align: right;
      .proj-num-item-title {
        color: #9b9b9b;
      }
      .proj-num {
        font-size: 34px;
      }
    }
    .septal-line {
      height: 43px;
      width: 1px;
      margin: 0 30px;
      background-color: #ebebeb;
    }
  }
  .user-wrap {
    float: right;
    .user-name {
      font-size: 22px;
    }
    .user-post-wrap {
      margin-top: 9px;
      color: #9b9b9b;
      .post-name {
        position: relative;
        margin-right: 21px;
        &::after {
          content: "";
          position: absolute;
          top: 1px;
          right: -13px;
          height: 12px;
          border: 1px solid #ebebeb;
        }
      }
    }
  }
}
</style>

