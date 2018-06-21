<template>
	<div class="main-header">
		<el-breadcrumb separator="/">
			<el-breadcrumb-item v-for="item in currentPath" :key="item.name" :to="{ path:item.path}">{{item.title}}</el-breadcrumb-item>
		</el-breadcrumb>
		<div class="clearfix company-wrap">
			<div class="company-info-wrap">
				<div class="company-name"><router-link tag='div' to="/company/home">{{companyName}}</router-link></div>
				<div class="company-state">
					<div>
						<label>修改人：</label>
						<span>{{modifyName}}</span>
					</div>
					<div>
						<label>修改时间：</label>
						<span>{{modifyName}}</span>
					</div>
					<div>
						<label>报告填报进度：</label>
						<div class="progress-wrap">
							<el-progress :percentage="percent"></el-progress>
						</div>
					</div>
				</div>
			</div>
			<div class="company-credit-wrap">
				<div class="company-credit-item">
					<span class="company-credit-item-title">资信分数</span>
					<div class="credit-num">{{creditScore}}</div>
				</div>
				<div class="septal-line"></div>
				<div class="company-credit-item">
					<span class="company-credit-item-title">惠国评级</span>
					<div class="credit-num" :class="creditLevelColor">{{creditLevel}}</div>
				</div>
			</div>
		</div>
		<div class="clearfix company-toolbar">
			<ul class="fl">
				<li>
					<router-link to="/">查看报告</router-link>
				</li>
				<li>
					<router-link to="/company/version">版本管理</router-link>
				</li>
				<li>
					<router-link to="/">日志查询</router-link>
				</li>
			</ul>
			<div class="report-btn-wrap">
				<el-button type="primary">生成报告</el-button>
			</div>
		</div>
	</div>

</template>

<script>
import util from "@/utils/util.js";
export default {
  data() {
    return {
      creditScore: 56,
      creditLevel: "A-",
      companyName: "哇哈哈科技企业有限公司",
      modifyName: "CS00040",
      modifyTime: "2018/05/01 15:04",
      percent: 70
    };
  },
  computed: {
    currentPath() {
      return this.$store.state.app.currentPath; // 当前面包屑数组
    },
    creditLevelColor() {
      let currentClass;
      switch (this.creditLevel) {
        case "A+":
          currentClass = "credit-level-a";
          break;
        case "A-":
          currentClass = "credit-level-b";
          break;
        case "B-":
          currentClass = "credit-level-c";
          break;
      }
      return currentClass;
    }
  },
  methods: {
    init() {
      let pathArr = util.setCurrentPath(this, this.$route.name);
    }
  },
  mounted() {
    this.init();
  }
};
</script>

<style lang="scss" scoped>
.main-header {
  background-color: #fff;
  overflow: hidden;
  .company-wrap {
    margin: 0 30px 10px 30px;
    .company-info-wrap {
      float: left;
      .company-name {
        font-size: 22px;
        color: #000;
        margin-bottom: 9px;
      }
      .company-state {
        display: flex;
        color: #9b9b9b;
        > div {
          margin-right: 20px;
        }
        .progress-wrap {
          display: inline-block;
          width: 300px;
        }
      }
    }
    .company-credit-wrap {
      float: right;
      display: flex;
      min-width: 173px;
      justify-content: space-between;
      align-items: center;
      .company-credit-item {
        flex: 1;
        text-align: right;
        .company-credit-item-title {
          font-size: 16px;
          color: #9b9b9b;
        }
        .credit-num {
          font-size: 34px;
        }
        .credit-level-a {
          color: lightcoral;
        }
        .credit-level-b {
          color: lightblue;
        }
        .credit-level-c {
          color: greenyellow;
        }
      }
      .septal-line {
        height: 43px;
        width: 1px;
        margin: 0 30px;
        background-color: #ebebeb;
      }
    }
  }
  .company-toolbar {
    height: 72px;
    padding-left: 20px;
    border-top: 1px solid #ebebeb;
    ul {
      display: flex;
      li {
        height: 72px;
        line-height: 72px;
        text-align: center;
        a {
          display: block;
          padding: 0 15px;
        }
      }
	}
	.report-btn-wrap{
		float: right;
		margin-top: 15px;
		margin-right:30px;
	}
  }
}
</style>

