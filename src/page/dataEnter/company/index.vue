<template>
  <div>
    <company-header></company-header>
    <div class="main-content">
      <el-container>
        <el-aside width="200px" v-if="isAside">
          <el-menu default-active="1-1" :unique-opened="true" class="el-menu-vertical-demo" @open="handleOpen"
                   @close="handleClose" >
            <el-submenu :index="menuGroup.index" v-for="(menuGroup,index) in menuAsideData" :key="index">
              <template slot="title">
                <i :class="menuGroup.icon"></i>
                <span>{{menuGroup.groupName}}</span>
              </template>
              <el-menu-item v-for="(item,index) in menuGroup.items" :key="index" :index="item.index">
                <router-link tag="div" :to="item.path">{{item.name}}</router-link>
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view @change-side="changeSide"/>
        </el-main>
      </el-container>
    </div>
  </div>
</template>

<script>
  import companyHeader from "@/components/dataEnter/companyHeader.vue";
  import {menuAsideData} from '@/config/dataEnter/asideMenu.js';
  export default {
    data() {
      return {
        menuAsideData: menuAsideData,
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
        this.changeSide(false);
      }
    },
    methods: {
//      init() {
//        this.$http({
//          method: "get",
//          url: "/api/getCompanyMenu"
//        }).then(resp => {
//          this.asideMenus = resp.data;
//        });
//      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      //显示隐藏侧栏
      changeSide(val) {
        this.isAside = val;
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

