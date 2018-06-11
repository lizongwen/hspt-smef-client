<template>
	<div>
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
					<div class="user-name">您好，<span>哇哈哈</span></div>
					<div class="user-post-wrap">
						<span class="post-name">{{postName}}</span>
						<span>惠国征信-金融服务中心</span>
					</div>
				</div>
			</div>
		</div>
		<div class="main-content">
			<el-row :gutter="20">
				<el-col :span="18">
					<div class="grid-content">
						<el-card class="box-card">
							<div slot="header" class="clearfix">
								<span class="card-title">进行中的项目</span>
								<el-button style="float: right; padding: 3px 0" type="text">全部项目</el-button>
							</div>
							<ul class="proj-list">
								<li class="proj-list-item">
									<div class="proj-name">企业名称最多显示12个字</div>
									<div class="proj-progress-wrap">
										<p>报告填报进度</p>
										<el-progress :percentage="70"></el-progress>
									</div>
									<div class="proj-state">
										<div class="modify-name">修改人：<span>{{modifyName}}</span></div>
										<div class="modify-time">修改时间：<span>{{modifyName}}</span></div>
									</div>
								</li>
								<li class="proj-list-item"></li>
								<li class="proj-list-item"></li>
								<li class="proj-list-item"></li>
								<li class="proj-list-item"></li>
								<li class="proj-list-item"></li>
							</ul>
						</el-card>
					</div>
				</el-col>
				<el-col :span="6">
					<div class="grid-content">
						<el-card class="box-card">
							<div slot="header" class="clearfix">
								<span class="card-title">项目组成员</span>
							</div>
							<ul class="member-list">
								<li class="member-list-item">
									<img src="" alt="" srcset=""><span class="member-name">总监 - 哇哈哈</span>
								</li>
								<li class="member-list-item"></li>
								<li class="member-list-item"></li>
								<li class="member-list-item"></li>
								<li class="member-list-item"></li>
							</ul>
							<div class="member-foot text-center">
								<el-button class="w-pct100" type="primary">添加成员</el-button>
							</div>
						</el-card>
					</div>
				</el-col>
			</el-row>
		</div>
	</div>
</template>

<script>
export default {
  data() {
    return {
      projNum: 56,
      finishNum: 33,
	  postName: "项目经理",
	  modifyName:'CS00040',
	  modifyTime:'2018/05/01 15:04'
    };
  }
};
</script>

<style lang="scss" scoped>
.container {
  .el-main {
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
    .main-content {
      padding: 20px;
      .proj-list {
        display: flex;
        flex-wrap: wrap;
        .proj-list-item {
          width: 33.33%;
		  height: 140px;
		  padding:20px;
          border-style: solid;
          border-color: #ebebeb;
          border-width: 0 1px 1px 0;
          &:nth-of-type(3),
          &:nth-of-type(6) {
            border-right-width: 0;
          }
          &:nth-of-type(4),
          &:nth-of-type(5),
          &:nth-of-type(6) {
            border-bottom-width: 0;
		  }
		  >div{
			  margin-bottom: 14px;
		  }
		  .proj-name{
			  font-size: 16px;
			  color:#000;
		  }
		  .proj-progress-wrap{
			  p{
				  color:#4a4a4a;
			  }
		  }
		  .proj-state{
			  display: flex;
			  
			  color:#9B9B9B;
			  .modify-name{
				  margin-right:20px;
			  }
		  }
        }
      }
      .member-list {
		padding-left: 16px;
		padding-right:15px;
		color:#000;
		.member-list-item{
			padding:24px;
			border-bottom:1px solid #ebebeb;
			&:last-child{
				border:none;
			}
			.member-name{
				margin-left: 20px;
			}
		}
	  }
	  .member-foot{
		  padding:20px;
		  border-top:1px solid #ebebeb;
	  }
    }
  }
}
</style>

