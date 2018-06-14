<template>
	<div>
		<company-header></company-header>
		<div class="main-content">
			<el-container>
				<el-aside width="200px" v-if="isAside">
					<el-collapse v-model="activeName" accordion>
						<el-collapse-item class="groupTitle" v-for="(menuGroup,index) in asideMenus" :key="index" :name="index">
							<template slot="title">
								<i class="menuIcon" :class="menuGroup.icon"></i>
								<span class="menuTitle">{{menuGroup.groupName}}</span>
							</template>
							<div v-for="(item,index) in menuGroup.items" :key="index" class="item">
								<router-link tag='div' :to="{path:item.path}">{{item.name}}</router-link>
							</div>
						</el-collapse-item>
					</el-collapse>
				</el-aside>
				<el-main>
					<router-view/>
				</el-main>
			</el-container>
		</div>
	</div>
</template>

<script>
import companyHeader from "@/components/companyHeader.vue";
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
  methods: {
    init() {
      console.log("获取菜单数据！");
      this.$http({
        method: "get",
        url: "/api/getCompanyMenu"
      }).then(resp => {
        this.asideMenus = resp.data;
        console.log("获取的数据是：", this.asideMenus);
      });
    }
  },
  created() {
    this.init();
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
  .el-main {
    padding: 0 0 0 20px;
  }
}
</style>

