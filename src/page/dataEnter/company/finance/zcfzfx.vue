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
                <el-button type="primary" size="medium">保存</el-button>
              </div>
              <div class="card-title">账龄分析</div>
            </div>
            <!-- 表格容器 -->
            <div>
              <el-table :data="tableData_1" v-loading.body="listLoading" border fit highlight-current-row show-summary
                        :summary-method="getSummaries" style="width: 100%">
                <el-table-column :label="tableData_1_columns.zlmc" width="103">
                  <template slot-scope="scope">
                    <el-input class="edit-input cellItem el-form-item" v-model.number="scope.row.zlmc"
                              :class="Object.keys(tableData_1_columns)[1]" v-if="scope.row.edit"
                              size="small"></el-input>
                    <span v-else>{{ scope.row.zlmc}}</span>
                  </template>
                </el-table-column>
                <el-table-column label="期末余额" width="430">
                  <el-table-column :label="tableData_1_columns.qmyeJe" width='108'>
                    <template slot-scope="scope">
                      <el-input class="edit-input cellItem el-form-item" v-model.number="scope.row.qmyeJe"
                                :class="Object.keys(tableData_1_columns)[1]" v-if="scope.row.edit"
                                size="small"></el-input>
                      <span v-else>{{ scope.row.qmyeJe}}</span>
                    </template>
                  </el-table-column>
                  <el-table-column :label="tableData_1_columns.qmyeZzebl" width='108'>
                    <template slot-scope="scope">
                      <el-input class="edit-input cellItem el-form-item" v-model.number="scope.row.qmyeZzebl"
                                :class="Object.keys(tableData_1_columns)[1]" v-if="scope.row.edit"
                                size="small"></el-input>
                      <span v-else>{{ scope.row.qmyeZzebl}}</span>
                    </template>
                  </el-table-column>
                  <el-table-column :label="tableData_1_columns.qmyeHzzb" width='165'>
                    <template slot-scope="scope">
                      <el-input class="edit-input cellItem el-form-item" v-model.number="scope.row.qmyeHzzb"
                                :class="Object.keys(tableData_1_columns)[1]" v-if="scope.row.edit"
                                size="small"></el-input>
                      <span v-else>{{ scope.row.qmyeHzzb}}</span>
                    </template>
                  </el-table-column>
                </el-table-column>
                <el-table-column label="期初余额">
                  <el-table-column :label="tableData_1_columns.qcyeJe" width='108'>
                    <template slot-scope="scope">
                      <el-input class="edit-input cellItem el-form-item" v-model.number="scope.row.qcyeJe"
                                :class="Object.keys(tableData_1_columns)[1]" v-if="scope.row.edit"
                                size="small"></el-input>
                      <span v-else>{{ scope.row.qcyeJe}}</span>
                    </template>
                  </el-table-column>
                  <el-table-column :label="tableData_1_columns.qcyeZzebl" width='108'>
                    <template slot-scope="scope">
                      <el-input class="edit-input cellItem el-form-item" v-model.number="scope.row.qcyeZzebl"
                                :class="Object.keys(tableData_1_columns)[1]" v-if="scope.row.edit"
                                size="small"></el-input>
                      <span v-else>{{ scope.row.qcyeZzebl}}</span>
                    </template>
                  </el-table-column>
                  <el-table-column :label="tableData_1_columns.qcyeHzzb" width='165'>
                    <template slot-scope="scope">
                      <el-input class="edit-input cellItem el-form-item" v-model.number="scope.row.qcyeHzzb"
                                :class="Object.keys(tableData_1_columns)[1]" v-if="scope.row.edit"
                                size="small"></el-input>
                      <span v-else>{{ scope.row.qcyeHzzb}}</span>
                    </template>
                  </el-table-column>
                </el-table-column>
                <el-table-column align="center" label="操作">
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
                <el-button type="primary" size="medium">保存</el-button>
              </div>
              <div class="card-title">小结</div>

            </div>
            <div class="text-editor">
              <quill-editor :value="textEditorContent" :maxSize="10240"></quill-editor>
            </div>
          </el-card>
        </div>

        <div>
          <el-card class="box-card" shadow='nevner'>
            <div slot="header" class="clearfix">
              <div class="card-right-wrap">
                <el-button type="primary" size="medium">保存</el-button>
              </div>
              <div class="card-title">年末应收账款明细</div>
            </div>
            <!-- 表格容器 -->
            <div>
              <el-table :data="tableData_2" v-loading.body="listLoading" border fit highlight-current-row show-summary
                        :summary-method="getSummaries" style="width: 100%">

                <el-table-column :label="tableData_2_columns.qymc">
                  <template slot-scope="scope">
                    <el-input class="edit-input cellItem el-form-item" v-model.number="scope.row.qymc"
                              :class="Object.keys(tableData_2_columns)[1]" v-if="scope.row.edit"
                              size="small"></el-input>
                    <span v-else>{{ scope.row.qymc}}</span>
                  </template>
                </el-table-column>
                <el-table-column :label="tableData_2_columns.biyszk">
                  <template slot-scope="scope">
                    <el-input class="edit-input cellItem el-form-item" v-model.number="scope.row.biyszk"
                              :class="Object.keys(tableData_2_columns)[2]" v-if="scope.row.edit"
                              size="small"></el-input>
                    <span v-else>{{ scope.row.biyszk}}</span>
                  </template>
                </el-table-column>
                <el-table-column :label="tableData_2_columns.bizb">
                  <template slot-scope="scope">
                    <el-input class="edit-input cellItem el-form-item" v-model.number="scope.row.bizb"
                              :class="Object.keys(tableData_2_columns)[3]" v-if="scope.row.edit"
                              size="small"></el-input>
                    <span v-else>{{ scope.row.bizb}}</span>
                  </template>
                </el-table-column>
                <el-table-column :label="tableData_2_columns.biHzzb">
                  <template slot-scope="scope">
                    <el-input class="edit-input cellItem el-form-item" v-model.number="scope.row.biHzzb"
                              :class="Object.keys(tableData_2_columns)[4]" v-if="scope.row.edit"
                              size="small"></el-input>
                    <span v-else>{{ scope.row.biHzzb}}</span>
                  </template>
                </el-table-column>
                <el-table-column :label="tableData_2_columns.remark">
                  <template slot-scope="scope">
                    <el-input class="edit-input cellItem el-form-item" v-model.number="scope.row.remark"
                              :class="Object.keys(tableData_2_columns)[4]" v-if="scope.row.edit"
                              size="small"></el-input>
                    <span v-else>{{ scope.row.bz}}</span>
                  </template>
                </el-table-column>
                <el-table-column align="center" label="操作">
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
                <el-button type="primary" size="medium">保存</el-button>
              </div>
              <div class="card-title">小结</div>

            </div>
            <div class="text-editor">
              <quill-editor :value="textEditorContent" :maxSize="10240"></quill-editor>
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
          biyszk: "应收账款",
          bizb: "占应收账款比例(%)",
          biHzzb: "坏账准备",
          remark: "备注",
          edit: false
        },
        activeName: "first",
        textEditorContent: "",

        //验证规则
        rules: {
          zl: [
            {required: true, message: "不能为空"}
          ],
          je: [
            {required: true, message: "不能为空"}
          ],
          zzebl: [
            {required: true, message: "不能为空"}
          ],
          hzzb: [
            {required: true, message: "不能为空"}
          ],
          je2: [
            {required: true, message: "不能为空"}
          ],
          zzebl2: [
            {required: true, message: "不能为空"}
          ],
          hzzb2: [
            {required: true, message: "不能为空"}
          ],
        },
        rules2: {
          dwmc: [
            {required: true, message: "不能为空"}
          ],
          ye: [
            {required: true, message: "不能为空"}
          ],
          zyszkbl: [
            {required: true, message: "不能为空"}
          ],
          hzzb: [
            {required: true, message: "不能为空"}
          ],
          bz: [
            {required: true, message: "不能为空"}
          ]
        }
      }
    },
    mounted() {
    this.getZlfx();
    this.getNmzk();
      this.getZcfzxj();
    },
    methods: {
      //点击标签页触发事件
      handleClick(tab, event) {
//           console.log(tab, event);
      },


//////////////////////////////////////////////////修改资产负债分析
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
      getZlfx: async function () {
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token")
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/cwzk/cwzkCwjgfx/getZlfx",
          params
        );
        console.log(res.data.resultData)
        if (res.data.resultCode == "0") {
          this.tableData_1 = res.data.resultData.data.dataList;
        }
      },

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
            if (column.property == "zyszkbl") {
              sums[index] += "%";
            } else if (column.property == "ye" || column.property == "hzzb") {
              sums[index] += " 万元";
            }
          } else {
            sums[index] = "";
          }
        });
        return sums;
      },
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
