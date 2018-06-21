<template>
  <div>
    <main-header></main-header>
    <div class="main-content">
      <el-row :gutter="20">
        <el-col :span="18">
          <div class="grid-content">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span class="card-title">进行中的项目</span>
                <el-button style="float: right; padding: 3px 0" type="text" @click="showProjs">全部项目</el-button>
              </div>
              <ul class="proj-list">
                <li class="proj-list-item" v-for="(item,index) in topProject" :key="index">
                  <div class="proj-name">{{item.companyName}}</div>
                  <div class="proj-progress-wrap">
                    <p>报告填报进度</p>
                    <el-progress :percentage="70"></el-progress>
                  </div>
                  <div class="proj-state">
                    <div class="modify-name">修改人：
                      <span>{{item.updateBy}}</span>
                    </div>
                    <div class="modify-time">修改时间：
                      <span>{{item.updateTime}}</span>
                    </div>
                  </div>
                </li>
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
                <li class="member-list-item" v-for="(item,index) in rightMember" :key="index">
                  <img src="" alt="" srcset="">
                  <span class="member-name">{{item.position}} - {{item.loginName}}</span>
                </li>
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
  import mainHeader from "@/components/dataEnter/mainHeader.vue";
  export default {
    data() {
      return {
        topProject: [],
        rightMember: [],
      };
    },
    mounted(){
      this.init();
    },
    methods: {
      init(){
        this.findLatestProject();
        this.findAllProjectMember();
      },
      //查询倒序排列后的6个项目
      findLatestProject: async function () {
        let params = {
          token: sessionStorage.getItem("token"),
          createName: sessionStorage.getItem("username"),
          pageSize: 6
        };
        const res = await this.$http.post(this.$api.findLatestProject, params);
        this.topProject = res.data.resultData;
      },
      //查询项目成员
      findAllProjectMember: async function () {
        let params = {
          token: sessionStorage.getItem("token"),
          loginName: sessionStorage.getItem("username")
        };
        const res = await this.$http.post(this.$api.findAllProjectMember, params);
        this.rightMember = res.data.resultData;
      },
      showProjs() {
        this.$router.push({path: "./project"});
      }
    },
    components: {
      mainHeader
    }
  };
</script>

<style lang="scss" scoped>
  .el-main {
    .main-content {
      padding: 20px;
      .proj-list {
        display: flex;
        flex-wrap: wrap;
        .proj-list-item {
          width: 33.33%;
          height: 140px;
          padding: 20px;
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
          > div {
            margin-bottom: 14px;
          }
          .proj-name {
            font-size: 16px;
            color: #000;
          }
          .proj-progress-wrap {
            p {
              color: #4a4a4a;
            }
          }
          .proj-state {
            display: flex;

            color: #9b9b9b;
            .modify-name {
              margin-right: 20px;
            }
          }
        }
      }
      .member-list {
        padding-left: 16px;
        padding-right: 15px;
        color: #000;
        .member-list-item {
          padding: 24px;
          border-bottom: 1px solid #ebebeb;
          &:last-child {
            border: none;
          }
          .member-name {
            margin-left: 20px;
          }
        }
      }
      .member-foot {
        padding: 20px;
        border-top: 1px solid #ebebeb;
      }
    }
  }
</style>

