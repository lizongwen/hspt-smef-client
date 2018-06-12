<template>
  <div>
    <company-header></company-header>

    <div>
      <div>此处是查看报告组件</div>
      <div class="aside">
        <el-collapse v-model="activeName" accordion>
          <el-collapse-item :title="menuGroup.groupName" v-for="(menuGroup,index) in asideMenus"
                            :key="index" class="group" name="1">
            <div v-for="(item,index) in menuGroup.items" :key="index" class="item">
              <router-link :to="{path:item.path}">{{item.name}}</router-link>
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
        activeName: '1',
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
  .aside {
    width: 15%;
    float: left;
  }
</style>

