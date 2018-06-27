<template>
	<div class="main-header">
		<el-breadcrumb separator="/">
			<el-breadcrumb-item v-for="item in currentPath" :key="item.name" :to="{ path:item.path}">{{item.title}}</el-breadcrumb-item>
		</el-breadcrumb>
		<div class="clearfix proj-wrap">
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
					<span>{{username}}</span>
				</div>
				<div class="user-post-wrap">
					<span class="post-name">{{postName}}</span>
					<span>惠国征信-{{deptName}}</span>
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
      projNum: 0,
      finishNum: 33,
      postName: "",
      username: "",
      deptName: ""
    };
  },
  computed: {
    currentPath() {
      return this.$store.state.app.currentPath; // 当前面包屑数组
    }
  },
  methods: {
    init() {
	  this.findByLoginName();
	  this.findDept();
	  this.getProjectCount();
	},
	//查询用户的职位
    findByLoginName: async function() {
      let params = {
        token: sessionStorage.getItem("token"),
        loginName: sessionStorage.getItem("username")
	  };
      const res = await this.$http.post(this.$api.findByLoginName, params);
      this.postName = res.data.resultData;
	},
	//查询用户的部门
	findDept: async function() {
      let params = {
        token: sessionStorage.getItem("token"),
        loginName: sessionStorage.getItem("username")
	  };
      const res = await this.$http.post(this.$api.findDept, params);
      this.deptName = res.data.resultData;
	},
	//获取填报项目数量
	getProjectCount:async function() {
		let params = {
        token: sessionStorage.getItem("token"),
        pageNo: 1,
        pageSize: 1000,
        username: sessionStorage.getItem("username"),
        parentIds:'0',
        queryKey:''
      };
      const res = await this.$http.post('/hspt-web-api/project/list', params);
	  this.projNum=res.data.resultData.records.length;
	}
  },
  mounted() {
    this.init();
    this.username = sessionStorage.getItem("username");
  }
};
</script>

<style lang="scss" scoped>
.main-header {
  overflow: hidden;
  background-color: #fff;
  .proj-wrap {
    margin: 0 30px 10px 30px;
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
          font-size: 16px;
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
}
</style>

