<template>
	<div>
		<company-header></company-header>
		<div class="main-content">
			<el-container>
				<el-aside width="200px" v-if="isAside" >
					<!-- <el-collapse v-model="activeName" accordion>
						<el-collapse-item class="groupTitle" v-for="(menuGroup,index) in asideMenus" :key="index" :name="index">
							<template slot="title">
								<i class="menuIcon" :class="menuGroup.icon"></i>
								<span class="menuTitle">{{menuGroup.groupName}}</span>
							</template>
							<div v-for="(item,index) in menuGroup.items" :key="index" class="item">
								<router-link tag='div' :to="{path:item.path}">{{item.name}}</router-link>
							</div>
						</el-collapse-item>
					</el-collapse> -->
					<el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
						<el-submenu index="1">
							<template slot="title">
								<i class="el-icon-location"></i>
								<span>公司基本信息</span>
							</template>
							<el-menu-item index="1-1">
								<router-link tag='div' to="/company/base/gsxx">工商基本信息</router-link>
							</el-menu-item>
							<el-menu-item index="1-2">
								<router-link tag='div' to="/company/base/lsgy">公司历史沿革</router-link>
							</el-menu-item>
							<el-menu-item index="1-3">
								<router-link tag='div' to="/company/base/gqjgfz">股权机构及分支机构</router-link>
							</el-menu-item>
							<el-menu-item index="1-4">
								<router-link tag='div' to="/company/base/ryrz">公司荣誉与认证</router-link>
							</el-menu-item>
							<el-menu-item index="1-5">
								<router-link tag='div' to="/company/base/zscq">知识产权</router-link>
							</el-menu-item>
							<el-menu-item index="1-6">
								<router-link tag='div' to="/company/base/hbxx">环保信息</router-link>
							</el-menu-item>
						</el-submenu>
						<el-submenu index="2">
							<template slot="title">
								<i class="el-icon-location"></i>
								<span>公司资源信息</span>
							</template>
							<el-menu-item index="2-1">企业经营资源</el-menu-item>
							<el-menu-item index="2-2">人力资源分析</el-menu-item>
							<el-menu-item index="2-3">产品研发技术情况</el-menu-item>
							<el-menu-item index="2-4">招投标信息</el-menu-item>
							<el-menu-item index="2-5">企业社保及公积金缴纳人数</el-menu-item>
							<el-menu-item index="2-6">企业工资发放情况</el-menu-item>
						</el-submenu>
						<el-submenu index="3">
							<template slot="title">
								<i class="el-icon-location"></i>
								<span>企业信用概况</span>
							</template>
							<el-menu-item index="2-1">企业经营资源</el-menu-item>
							<el-menu-item index="2-2">人力资源分析</el-menu-item>
							<el-menu-item index="2-3">产品研发技术情况</el-menu-item>
							<el-menu-item index="2-4">招投标信息</el-menu-item>
							<el-menu-item index="2-5">企业社保及公积金缴纳人数</el-menu-item>
							<el-menu-item index="2-6">企业工资发放情况</el-menu-item>
						</el-submenu>
					</el-menu>
				</el-aside>
				<el-main>
					<router-view @child-side="changeSide"/>
				</el-main>
			</el-container>
		</div>
	</div>
</template>

<script>
import companyHeader from "@/components/dataEnter/companyHeader.vue";
export default {
  data() {
    return {
      activeName: 0,
      asideMenus: [],
      isAside: true
    };
  },
  components: {
    companyHeader
  },
  mounted() {
	let name = this.$route.name;
    if (name == "version") {
		this.changeSide(false)
    }
  },
  methods: {
    init() {
      this.$http({
        method: "get",
        url: "/api/getCompanyMenu"
      }).then(resp => {
        this.asideMenus = resp.data;
      });
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
	},
	//显示隐藏侧栏
	changeSide(val){
		this.isAside=val;
	}
  },
  created() {
    //this.init();
  }
};
</script>
<style lang="scss" scoped>
@import "@/style/commonStyle.scss";
.main-content {
  padding: 20px;
  .el-collapse {
    color: #4a4a4a;
    .menuIcon {
      margin-left: 22px;
    }
    .menuTitle {
      margin-left: 15px;
      font-size: 16px;
    }
    .el-collapse-item__header.is-active {
      color: $main-color;
    }
    .item {
      height: 45px;
      border-bottom: 1px solid #ccc;
      font-size: 14px;
      line-height: 45px;
      text-align: center;
      background: #ececec;
      cursor: pointer;
    }
    .router-link-exact-active.router-link-active {
      background: $main-color;
      color: #fff;
    }
  }
  .el-aside {
    padding: 0 20px 0 0;
  }
  .el-main {
    padding: 0;
  }
}
</style>

