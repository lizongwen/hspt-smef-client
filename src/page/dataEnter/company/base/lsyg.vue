<template>
  <!--公司历史沿革-->
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <div class="card-right-wrap">
          <el-button type="default" size="medium">获取数据</el-button>
          <el-button type="primary" size="medium">保存</el-button>
        </div>
        <div class="card-title">公司历史沿革</div>
      </div>
      <!-- 表格容器 -->
      <div>
        <el-table :data="tableData" v-loading.body="listLoading" border fit highlight-current-row style="width: 100%">
          <el-table-column label="序号" type="index" width="50"></el-table-column>
          <el-table-column min-width="110px" label="变更日期">
            <template slot-scope="scope">
              <el-date-picker v-if="scope.row.edit" type="date" placeholder="选择日期" v-model="scope.row.changeDate"
                              style="width: 100%;"></el-date-picker>
              <span v-else>{{scope.row.changeDate}}</span>
            </template>
          </el-table-column>
          <el-table-column min-width="200px" label="变更事项">
            <template slot-scope="scope">
              <el-input v-if="scope.row.edit" class="edit-input" size="small"
                        v-model.number="scope.row.changeThing"></el-input>
              <span v-else>{{ scope.row.changeThing}}</span>
            </template>
          </el-table-column>
          <el-table-column min-width="200px" label="变更前">
            <template slot-scope="scope">
              <el-input v-if="scope.row.edit" class="edit-input" size="small"
                        v-model="scope.row.beforeThing"></el-input>
              <span v-else>{{ scope.row.beforeThing}}</span>
            </template>
          </el-table-column>
          <el-table-column min-width="200px" label="变更后">
            <template slot-scope="scope">
              <el-input v-if="scope.row.edit" class="edit-input" size="small" v-model="scope.row.afterThing"></el-input>
              <span v-else>{{ scope.row.afterThing}}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" label="操作" width="240">
            <template slot-scope="scope">
              <v-tableOperation :scope="scope" :tableData="tableData" v-on:verify="verify"></v-tableOperation>
            </template>
          </el-table-column>
        </el-table>
        <v-tabelAddBtn :tableData="tableData" :tableData_columns="tableData_columns"></v-tabelAddBtn>
      </div>
    </el-card>
  </div>
</template>

<script>
  import tableValidates from "@/utils/validateTable/tableValidates.js";
  import tabelAddBtn from "@/components/table/table-add-btn.vue";
  import tableOperation from "@/components/table/table-operation.vue";

  export default {
    data() {
      return {
        listLoading: false,
        tableData: [
          {
            changeDate: "2018/01/01",
            changeThing: "变更事项1",
            beforeThing: "变更前1",
            afterThing: "变更后1",
            edit: false
          },
          {
            changeDate: "2018/01/02",
            changeThing: "变更事项2",
            beforeThing: "变更前2",
            afterThing: "变更后2",
            edit: false
          }
        ],
        tableData_columns: {
          changeDate: "",
          changeThing: "",
          beforeThing: "",
          afterThing: "",
          edit: false
        },
        //规则
        rules: {
          changeDate: [
            {type: 'date', required: true, message: '请选择变更日期'}
          ],
          changeThing: [
            {type: 'number', required: true, message: "变更事项是必填项，且需要录入数字"}
          ],
          beforeThing: [
            {required: true, message: "变更前是必填项"},
            {min: 3, max: 5, message: '变更前字符长度需要 3 到 5 个字符'}
          ],
          afterThing: [
            {required: true, message: "变更后是必填项"}
          ]
        }
      };
    },
    mounted() {
    },
    methods: {
      verify(row, index) {
        tableValidates.validateByRow(row, index, this.rules, this);
//        var a = true,
//          b = true,
//          c = true,
//          d = true;
//        this.$refs[`form_changeDate_${index}`].validate((res, obj) => {
//          if (res) {
//            //验证通过
//            a = false;
//          } else {
//            //验证不通过
//            console.log(obj.changeDate[0].message);
//          }
//        });
//        this.$refs[`form_changeThing_${index}`].validate((res, obj) => {
//          if (res) {
//            //验证通过
//            b = false;
//          } else {
//            //验证不通过
//            console.log(obj.changeThing[0].message);
//          }
//        });
//        this.$refs[`form_beforeThing_${index}`].validate((res, obj) => {
//          if (res) {
//            //验证通过
//            c = false;
//          } else {
//            //验证不通过
//            console.log(obj.beforeThing[0].message);
//          }
//        });
//        this.$refs[`form_afterThing_${index}`].validate((res, obj) => {
//          if (res) {
//            //验证通过
//            d = false;
//          } else {
//            //验证不通过
//            console.log(obj.afterThing[0].message);
//          }
//        });
//        if (!a && !b && !c && !d) {
//          row.edit = false;
//        } else {
//          //弹出错误消息汇总
//        }
      }
    },
    components: {
      "v-tabelAddBtn": tabelAddBtn,
      "v-tableOperation": tableOperation
    }
  };
</script>

<style lang="scss" scoped>

</style>
