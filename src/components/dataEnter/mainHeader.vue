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
					<span>惠国征信-金融服务中心</span>
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
      projNum: 56,
      finishNum: 33,
      postName: "",
      username: ""
    };
  },
  computed: {
    currentPath() {
      return this.$store.state.app.currentPath; // 当前面包屑数组
    }
  },
  methods: {
    init() {
      let pathArr = util.setCurrentPath(this, this.$route.name);
      this.$http({
        method: "post",
		url: "/hspt-web-api/user/findByLoginName",
		
        data: {
			loginName:sessionStorage.getItem('username'),
			token:sessionStorage.getItem('token')
		}
      }).then(resp => {
        let rs = resp.data;
        if (rs.resultCode == "0") {
		 //this.username=rs.loginName
		 this.postName=rs.resultData;
        } else {
          //this.$message.error(rs.resultMsg);
        }
      });
    }
  },
  mounted() {
	this.init();
	this.username=sessionStorage.getItem('username')
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

