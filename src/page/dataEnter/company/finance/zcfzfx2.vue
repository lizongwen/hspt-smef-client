<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="资产负债分析" name="first">
        <div>
          <el-card class="box-card" shadow='nevner'>
            <div class="clear">
              <div slot="header" class="clearfix">
                <div class="card-title">资产负债结构分析</div>
              </div>
              <div>
                <div class="img">
                  图片展示区域
                </div>
              </div>
            </div>
            <div class="clear">
              <div slot="header" class="clearfix">
                <div class="card-right-wrap">
                  <el-button type="primary" size="medium" @click="setZcfzxj">保存</el-button>
                </div>
                <div class="card-title">小结</div>

              </div>
              <div class="text-editor">
                <quill-editor :value="zcfzxj" :maxSize="10240" v-on:changeInput="changZcfzxj"></quill-editor>
              </div>
            </div>
          </el-card>
        </div>

      </el-tab-pane>

      <el-tab-pane label="应收账款分析" name="second">

        <div>
          <el-card class="box-card" shadow='nevner'>
            <div slot="header" class="clearfix">
              <div class="card-right-wrap">
                <el-button type="primary" size="medium" @click="saveZlfx">保存</el-button>
              </div>
              <div class="card-title">账龄分析</div>
            </div>
            <!-- 表格容器 -->
            <div>
              <el-table :data="tableData_1" v-loading.body="listLoading" border fit highlight-current-row show-summary
                        :summary-method="getSummaries_zlfz" style="width: 100%">
                <el-table-column property="zlmc" :label="tableData_1_columns.zlmc" width="103">
                  <template slot-scope="scope">
                    <el-input class="edit-input cellItem el-form-item" v-model.number="scope.row.zlmc"
                              :class="Object.keys(tableData_1_columns)[1]" v-if="scope.row.edit"
                              size="small"></el-input>
                    <span v-else>{{ scope.row.zlmc}}</span>
                  </template>
                </el-table-column>
                <el-table-column label="期末余额">
                  <el-table-column property="qmyeJe" :label="tableData_1_columns.qmyeJe" width='108'>
                    <template slot-scope="scope">
                      <el-input class="edit-input cellItem el-form-item" v-model.number="scope.row.qmyeJe"
                                :class="Object.keys(tableData_1_columns)[1]" v-if="scope.row.edit"
                                size="small"></el-input>
                      <span v-else>{{ scope.row.qmyeJe}}</span>
                    </template>
                  </el-table-column>
                  <el-table-column property="qmyeZzebl" :label="tableData_1_columns.qmyeZzebl" width='108'>
                    <template slot-scope="scope">
                      <el-input class="edit-input cellItem el-form-item" v-model.number="scope.row.qmyeZzebl"
                                :class="Object.keys(tableData_1_columns)[1]" v-if="scope.row.edit"
                                size="small"></el-input>
                      <span v-else>{{ scope.row.qmyeZzebl}}</span>
                    </template>
                  </el-table-column>
                  <el-table-column property="qmyeHzzb" :label="tableData_1_columns.qmyeHzzb" width='150'>
                    <template slot-scope="scope">
                      <el-input class="edit-input cellItem el-form-item" v-model.number="scope.row.qmyeHzzb"
                                :class="Object.keys(tableData_1_columns)[1]" v-if="scope.row.edit"
                                size="small"></el-input>
                      <span v-else>{{ scope.row.qmyeHzzb}}</span>
                    </template>
                  </el-table-column>
                </el-table-column>
                <el-table-column label="期初余额">
                  <el-table-column property="qcyeJe" :label="tableData_1_columns.qcyeJe" width='108'>
                    <template slot-scope="scope">
                      <el-input class="edit-input cellItem el-form-item" v-model.number="scope.row.qcyeJe"
                                :class="Object.keys(tableData_1_columns)[1]" v-if="scope.row.edit"
                                size="small"></el-input>
                      <span v-else>{{ scope.row.qcyeJe}}</span>
                    </template>
                  </el-table-column>
                  <el-table-column property="qcyeZzebl" :label="tableData_1_columns.qcyeZzebl" width='108'>
                    <template slot-scope="scope">
                      <el-input class="edit-input cellItem el-form-item" v-model.number="scope.row.qcyeZzebl"
                                :class="Object.keys(tableData_1_columns)[1]" v-if="scope.row.edit"
                                size="small"></el-input>
                      <span v-else>{{ scope.row.qcyeZzebl}}</span>
                    </template>
                  </el-table-column>
                  <el-table-column property="qcyeHzzb" :label="tableData_1_columns.qcyeHzzb" width='150'>
                    <template slot-scope="scope">
                      <el-input class="edit-input cellItem el-form-item" v-model.number="scope.row.qcyeHzzb"
                                :class="Object.keys(tableData_1_columns)[1]" v-if="scope.row.edit"
                                size="small"></el-input>
                      <span v-else>{{ scope.row.qcyeHzzb}}</span>
                    </template>
                  </el-table-column>
                </el-table-column>
                <el-table-column align="center" label="操作" width="150">
                  <template slot-scope="scope">
                    <v-tableOperation :scope="scope" :tableData="tableData_1" v-on:verify="verify1"
                                      v-on:acceptDelRow='acceptDelRow1'></v-tableOperation>
                  </template>
                </el-table-column>
              </el-table>
              <v-tabelAddBtn :tableData="tableData_1" :tableData_columns="tableData_1_columns"></v-tabelAddBtn>
            </div>
          </el-card>
        </div>
        <div>
          <el-card class="box-card" shadow='nevner'>
            <div slot="header" class="clearfix">
              <div class="card-right-wrap">
                <el-button type="primary" size="medium" @click="saveNmzk">保存</el-button>
              </div>
              <div class="card-title">年末应收账款明细</div>
            </div>
            <!-- 表格容器 -->
            <div>
              <el-table :data="tableData_2" v-loading.body="listLoading" border fit highlight-current-row show-summary
                        :summary-method="getSummaries" style="width: 100%">
                <el-table-column property="qymc" min-width="90px" :label="tableData_2_columns.qymc">
                  <template slot-scope="scope">
                    <template v-if="scope.row.edit">
                      <el-form :model="scope.row" :id="'department'+scope.$index"
                               :ref="'form_department_'+scope.$index" :show-message="false">
                        <el-form-item prop="qymc" class="td-form-item">
                          <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_2_columns)[1]" size="small" v-model="scope.row.qymc"></el-input>
                        </el-form-item>
                      </el-form>
                    </template>
                    <span v-else>{{scope.row.qymc}}</span>
                  </template>
                </el-table-column>
                <el-table-column  property="yszk" min-width="90px" :label="tableData_2_columns.yszk">
                  <template slot-scope="scope">
                    <template v-if="scope.row.edit">
                      <el-form :model="scope.row" :id="'department'+scope.$index"
                               :ref="'form_yszk_'+scope.$index" :show-message="false">
                        <el-form-item class="td-form-item">
                          <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_2_columns)[2]" size="small" v-model="scope.row.yszk"></el-input>
                        </el-form-item>
                      </el-form>
                    </template>
                    <span v-else>{{scope.row.yszk}}</span>
                  </template>
                </el-table-column>
                <el-table-column  property="zb" min-width="90px" :label="tableData_2_columns.zb">
                  <template slot-scope="scope">
                    <template v-if="scope.row.edit">
                      <el-form :model="scope.row" :id="'department'+scope.$index"
                               :ref="'form_department_'+scope.$index" :show-message="false">
                        <el-form-item prop="zb" class="td-form-item">
                          <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_2_columns)[3]" size="small" v-model="scope.row.zb"></el-input>
                        </el-form-item>
                      </el-form>
                    </template>
                    <span v-else>{{scope.row.zb}}</span>
                  </template>
                </el-table-column>
                <el-table-column property="hzzb" min-width="90px" :label="tableData_2_columns.hzzb">
                  <template slot-scope="scope">
                    <template v-if="scope.row.edit">
                      <el-form :model="scope.row" :id="'department'+scope.$index"
                               :ref="'form_department_'+scope.$index" :show-message="false">
                        <el-form-item  prop="hzzb" class="td-form-item">
                          <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_2_columns)[4]" size="small" v-model="scope.row.hzzb"></el-input>
                        </el-form-item>
                      </el-form>
                    </template>
                    <span v-else>{{scope.row.hzzb}}</span>
                  </template>
                </el-table-column>
                <el-table-column property="remark" min-width="90px" :label="tableData_2_columns.remark">
                  <template slot-scope="scope">
                    <template v-if="scope.row.edit">
                      <el-form :model="scope.row" :id="'department'+scope.$index"
                               :ref="'form_department_'+scope.$index" :show-message="false">
                        <el-form-item prop="remark" class="td-form-item">
                          <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_2_columns)[5]" size="small" v-model="scope.row.remark"></el-input>
                        </el-form-item>
                      </el-form>
                    </template>
                    <span v-else>{{scope.row.remark}}</span>
                  </template>
                </el-table-column>
                <el-table-column align="center" label="操作" width="150">
                  <template slot-scope="scope">
                    <v-tableOperation :scope="scope" :tableData="tableData_2" v-on:verify="verify2"
                                      v-on:acceptDelRow='acceptDelRow2'></v-tableOperation>
                  </template>
                </el-table-column>
              </el-table>
              <v-tabelAddBtn :tableData="tableData_2" :tableData_columns="tableData_2_columns"></v-tabelAddBtn>
            </div>
          </el-card>
        </div>
        <div>
          <el-card class="box-card" shadow='nevner'>
            <div slot="header" class="clearfix">
              <div class="card-right-wrap">
                <el-button type="primary" size="medium" @click="setZlfxxj">保存</el-button>
              </div>
              <div class="card-title">小结</div>

            </div>
            <div class="text-editor">
              <quill-editor :value="zlfxxj" :maxSize="10240" v-on:changeInput="changZlfxxj"></quill-editor>
            </div>
          </el-card>
        </div>
      </el-tab-pane>

    </el-tabs>
  </div>
</template>

<script>
  import tableValidates from "@/utils/validateTable/tableValidates.js";
  import quillEditor from "@/components/form/quillEditor.vue";
  import tabelAddBtn from "@/components/table/table-add-btn.vue";
  import tableOperation from "@/components/table/table-operation.vue";

  export default {
    data() {
      return {
        listLoading: false,
        zcfzxj: "",
        zlfxxj:"",
        tableData_1: [],
        deleteData_1: [],
        addData_1: [],
        updateData_1: [],
        tableData_1_columns: {
          zlmc: "账龄",
          qmyeJe: "金额（万元）",
          qmyeZzebl: "占总额比例(%)",
          qmyeHzzb: "坏账准备（万元）",
          qcyeJe: "金额（万元）",
          qcyeZzebl: "占总额比例(%)",
          qcyeHzzb: "坏账准备（万元）",
          edit: false
        },


        tableData_2: [],
        deleteData_2: [],
        addData_2: [],
        updateData_2: [],
        tableData_2_columns: {
          qymc: "单位名称",
          yszk: "应收账款",
          zb: "占应收账款比例(%)",
          hzzb: "坏账准备",
          remark: "备注",
          edit: false
        },
        activeName: "first",
        textEditorContent: "",

        //验证规则
        rules: {},
        rules2: {}
      }
    },
    mounted() {
    this.getZlfx();
    this.getNmzk();
      this.getZcfzxj();
      this.getZlfxxj();
    },
    methods: {
      //点击标签页触发事件
      handleClick(tab, event) {
//           console.log(tab, event);
      },


  //----------------------------------------应收账款分析-------------------------------
      getZcfzxj: async function () {
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token")
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/cwzk/cwzkCwjgfx/getZcfzjgfxxj",
          params
        );

        if (res.data.resultCode == "0") {
          this.zcfzxj = res.data.resultData.data.xj;
        }
      },
      //修改资产负债分析小结
      changZcfzxj(val) {
        this.zcfzxj = val;
      },
      //保存修改资产负债分析小结
      setZcfzxj: async function () {
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token"),
          xj: this.zcfzxj
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/cwzk/cwzkCwjgfx/saveZcfzjgfxxj",
          params
        );
        if (res.data.resultCode == "0") {
          this.$message({message: res.data.resultMsg, type: "success"});
          this.getZcfzxj();
        } else {
          this.$message({message: res.data.resultMsg, type: "warning"});
        }
      },
      //----------------------------------------帐年龄分析-------------------------------
      getZlfx: async function () {
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token")
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/cwzk/cwzkCwjgfx/getZlfx",
          params
        );
        console.log(res.data.resultData.data.dataList);
        if (res.data.resultCode == "0") {
          this.tableData_1 = res.data.resultData.data.dataList;
        }
      },

      //保存年龄
      saveZlfx: async function () {
        this.tableData_1.forEach((item, index) => {
          if (item.id == null) {
            this.addData_1.push(item);
          }
        });
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token"),
          addedDataStr: JSON.stringify(this.addData_1),
          updatedDataStr: JSON.stringify(this.updateData_1),
          deletedDataStr: JSON.stringify(this.deleteData_1)
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/cwzk/cwzkCwjgfx/saveZlfx",
          params
        );
        if (res.data.resultCode == "0") {
          this.$message({message: res.data.resultMsg, type: "success"});
          this.getZlfx();
        } else {
          this.$message({message: res.data.resultMsg, type: "warning"});
        }
        this.deleteData_1 = [];
        this.updateData_1 = [];
        this.addData_1 = [];
      },

      //----------------------------------------帐龄分析小结-------------------------------
      getZlfxxj: async function () {
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token")
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/cwzk/cwzkCwjgfx/xj",
          params
        );
        console.log(res.data.resultData.data.dataList);
        if (res.data.resultCode == "0") {
          this.zlfxxj = res.data.resultData.data.xj;
        }
      },
      //修改帐龄分析小结
      changZlfxxj(val) {
        this.zlfxxj = val;
      },
      //保存帐龄分析小结
      setZlfxxj: async function () {
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token"),
          xj: this.zlfxxj
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/cwzk/cwzkCwjgfx/saveZlfxxj",
          params
        );
        if (res.data.resultCode == "0") {
          this.$message({message: res.data.resultMsg, type: "success"});
          this.getZlfxxj();
        } else {
          this.$message({message: res.data.resultMsg, type: "warning"});
        }
      },

      //----------------------------------------年末应收账款明显分析-------------------------------
      //获取年末应收账款明显
      getNmzk: async function () {
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token")
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/cwzk/cwzkCwjgfx/getQmdemx",
          params
        );
        console.log(res.data.resultData)
        if (res.data.resultCode == "0") {
          this.tableData_2 = res.data.resultData.data.rows
        }
      },

      //保存年末应收账款
      saveNmzk: async function () {
        this.tableData_2.forEach((item, index) => {
          if (item.id == null) {
              this.addData_2.push(item);
          }
        });
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token"),
          addedDataStr: JSON.stringify(this.addData_2),
          updateDataStr: JSON.stringify(this.updateData_2),
          delDataStr: JSON.stringify(this.deleteData_2)
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/cwzk/cwzkCwjgfx/saveQmdemx",
          params
        );
        if (res.data.resultCode == "0") {
          this.$message({message: res.data.resultMsg, type: "success"});
          this.getNmzk();
        } else {
          this.$message({message: res.data.resultMsg, type: "warning"});
        }
        this.deleteData_2 = [];
        this.updateData_2 = [];
        this.addData_2 = [];
      },
      acceptDelRow1(val) {
        this.deleteData_1.push(val);
      },
      verify1(rowObj, rowIndex) {
        tableValidates.validateByRow(rowObj, rowIndex, this.rules, this);
        if (rowObj.id) {
          this.updateData_1.push(rowObj);
        }
      },
      acceptDelRow2(val) {
        this.deleteData_2.push(val);
      },
      verify2(rowObj, rowIndex) {
        tableValidates.validateByRow(rowObj, rowIndex, this.rules, this);
        if (rowObj.id) {
          this.updateData_2.push(rowObj);
        }
      },

      //应收账款合计
      getSummaries(param) {
        const {columns, data} = param;
        const sums = [];
        columns.forEach((column, index) => {
          if (index === 0) {
            sums[index] = "合计";
            return;
          }
          const values = data.map(item => Number(item[column.property]));
          if (!values.every(value => isNaN(value))) {
            sums[index] = values.reduce((prev, curr) => {
              const value = Number(curr);
              if (!isNaN(value)) {
                return prev + curr;
              } else {
                return prev;
              }
            }, 0);
            //根据列名不同，确定不同的合计单位
            if (column.property == "zb") {
              sums[index] += "%";
            } else if (column.property == "yszk" || column.property == "hzzb") {
              sums[index] += " 万元";
            }
          } else {
            sums[index] = "";
          }
        });
        return sums;
      }
    },
    //应收账款合计
    getSummaries_zlfx(param) {
      const {columns, data} = param;
      const sums = [];
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = "合计";
          return;
        }
        const values = data.map(item => Number(item[column.property]));
        if (!values.every(value => isNaN(value))) {
          sums[index] = values.reduce((prev, curr) => {
            const value = Number(curr);
            if (!isNaN(value)) {
              return prev + curr;
            } else {
              return prev;
            }
          }, 0);
          //根据列名不同，确定不同的合计单位
          if (column.property == "qmyeZzebl" || column.property == "qcyeZzebl") {
            sums[index] += "%";
          } else if (column.property == "qmyeje" || column.property == "qcyeje" || column.property == "qmyeHzzb" || column.property == "qcyeHzzb") {
            sums[index] += " 万元";
          }
        } else {
          sums[index] = "";
        }
      });
      return sums;
    },
    components: {
      "v-tabelAddBtn": tabelAddBtn,
      "v-tableOperation": tableOperation,
      "quill-editor": quillEditor
    }
  };
</script>

<style lang="scss">
  .card-title {
    font-size: 15px;
  }

  .img {
    width: 100%;
    height: 200px;
    background: #EEF9FF;
    margin-top: 20px;
    margin-bottom: 20px;
    text-align: center;
    line-height: 200px;
  }

  .text-editor {
    margin-top: 15px;
  }

  .text-editor .ql-editor {
    height: 200px;
  }

  .el-table th {
    border-bottom: 1px solid #ebeef5;
    text-align: center;
    background: #F4F3F3;
    color: black;
  }

  .el-table .el-button {
    float: left;
    padding: 8px;
  }

  .el-table .el-button + .el-button {
    padding: 8px;
  }
</style>
