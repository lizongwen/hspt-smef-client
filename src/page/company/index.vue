<template>
  <div>
    <company-header></company-header>

    <div>
      <div>此处是查看报告组件</div>
      <div class="aside">
        <el-collapse v-model="activeName" accordion>
          <el-collapse-item class="groupTitle" v-for="(menuGroup,index) in asideMenus"
                            :key="index" :name="index">
            <template slot="title">
              <i class="menuIcon" :class="menuGroup.icon"></i>
              <span class="menuTitle">{{menuGroup.groupName}}</span>
            </template>
            <div v-for="(item,index) in menuGroup.items" :key="index" class="item">
              <router-link tag='div' :to="{path:item.path}">{{item.name}}</router-link>
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
      <div class="content">
        <router-view/>
      </div>
    </div>
  </div>

</template>

<script>
  import companyHeader from "@/components/companyHeader.vue";
  export default {
    components: {
      companyHeader
    },
    data(){
      return {
        activeName: 0,
        asideMenus: []
      }
    },
    methods: {
      init(){
        console.log('获取菜单数据！')
        this.$http({
          method: "get",
          url: '/api/getCompanyMenu',
        }).then(resp => {
          this.asideMenus = resp.data;
          console.log('获取的数据是：', this.asideMenus);
        })
      }
    },
    created(){
      this.init();
    }
  };
</script>
<style lang="scss" scoped>
  @import '@/style/commonStyle.scss';

  .aside {
    width: 200px;
    float: left;

    .el-collapse {
      color: #4A4A4A;
      .menuIcon {
        margin-left: 22px;
      }
      .menuTitle {
        margin-left: 15px;
        font-size: 16px;
      }
      .el-collapse-item__header.is-active {
        color: $main-color
      }
      .item {
        height: 45px;
        line-height: 45px;
        font-size: 14px;

        border-bottom: 1px solid #CCC;
        background: #ECECEC;
        text-align: center;
        cursor: pointer;
      }
      .router-link-exact-active.router-link-active {
        background: $main-color;
        color: #fff;
      }
    }
  }

</style>

