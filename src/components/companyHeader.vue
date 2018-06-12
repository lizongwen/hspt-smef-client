<template>
	<div class="main-header">
		<el-breadcrumb separator="/">
			<el-breadcrumb-item v-for="item in currentPath" :key="item.name" :to="{ path:item.path}">{{item.title}}</el-breadcrumb-item>
		</el-breadcrumb>
		<div class="clearfix">
			<div class="company-wrap">
				<div class="company-name">{{companyName}}</div>
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
			<div class="company-info-wrap">
				<div class="company-info-item">
					<span class="company-info-item-title">资信分数</span>
					<div class="credit-num">{{creditScore}}</div>
				</div>
				<div class="septal-line"></div>
				<div class="company-info-item">
					<span class="company-info-item-title">惠国评级</span>
					<div class="credit-num" :class="creditLevelColor">{{creditLevel}}</div>
				</div>
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
      console.log(this.$route.name);
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
  height: 209px;
  padding: 20px 30px;
  background-color: #fff;
  .company-wrap {
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
  .company-info-wrap {
    float: right;
    display: flex;
    min-width: 173px;
    justify-content: space-between;
    align-items: center;
    .company-info-item {
      flex: 1;
      text-align: right;
      .company-info-item-title {
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
</style>

