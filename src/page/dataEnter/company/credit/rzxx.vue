<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="银行借款信息" name="first">
        <div>
          <el-card class="box-card" shadow='nevner'>
            <div slot="header" class="clearfix">
              <div class="card-right-wrap">
                <el-button @click="saveBankInfo" class="save" type="primary" size="medium">保存</el-button>
              </div>
              <div class="card-title">主要往来银行信息</div>
            </div>
            <!-- 表格容器 -->
            <div>
              <el-table :data="tableData_bank" v-loading.body="listLoading" border fit highlight-current-row
                        style="width: 100%">
                <el-table-column label="序号" type="index" width="50"></el-table-column>
                <el-table-column min-width="110px" :label="tableData_bank_columns.yhmc">
                  <template slot-scope="scope">
                    <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_bank_columns)[1]"
                              v-if="scope.row.edit" size="small" v-model.number="scope.row.yhmc"></el-input>
                    <span v-else>{{scope.row.yhmc}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="110px" :label="tableData_bank_columns.yhzhlb">
                  <template slot-scope="scope">
                    <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_bank_columns)[2]"
                              v-if="scope.row.edit" size="small" v-model.number="scope.row.yhzhlb"></el-input>
                    <span v-else>{{scope.row.yhzhlb}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="110px" :label="tableData_bank_columns.zh">
                  <template slot-scope="scope">
                    <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_bank_columns)[3]"
                              v-if="scope.row.edit" size="small" v-model.number="scope.row.zh"></el-input>
                    <span v-else>{{scope.row.yhzhlb}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="110px" :label="tableData_bank_columns.zhsypl">
                  <template slot-scope="scope">
                    <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_bank_columns)[4]"
                              v-if="scope.row.edit" size="small" v-model.number="scope.row.zhsypl"></el-input>
                    <span v-else>{{scope.row.zhsypl}}</span>
                  </template>
                </el-table-column>
                <el-table-column align="center" label="操作" width="240">
                  <template slot-scope="scope">
                    <v-tableOperation :scope="scope" :tableData="tableData_bank" v-on:verify="verify"
                                      v-on:acceptDelRow='acceptDelRow'></v-tableOperation>
                  </template>
                </el-table-column>
              </el-table>
              <v-tabelAddBtn :tableData="tableData_bank" :tableData_columns="tableData_bank_columns"></v-tabelAddBtn>
            </div>
          </el-card>
        </div>
        <div>
          <el-card class="box-card" shadow='nevner'>
            <div slot="header" class="clearfix">
              <div class="card-right-wrap">
                <el-button @click="saveYhwjqxded" class="save" type="primary" size="medium">保存</el-button>
              </div>
              <div class="card-title">银行未结清信贷额度</div>
            </div>
            <!-- 表格容器 -->
            <div>
              <el-table :data="tableData_xd" v-loading.body="listLoading" border fit highlight-current-row
                        style="width: 100%">
                <el-table-column label="序号" type="index" width="50"></el-table-column>
                <el-table-column min-width="110px" :label="tableData_xd_columns.yhmc">
                  <template slot-scope="scope">
                    <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_xd_columns)[1]"
                              v-if="scope.row.edit" size="small" v-model.number="scope.row.yhmc"></el-input>
                    <span v-else>{{scope.row.yhmc}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="110px" :label="tableData_xd_columns.cxsj">
                  <template slot-scope="scope">
                    <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_xd_columns)[2]"
                              v-if="scope.row.edit" size="small" v-model.number="scope.row.cxsj"></el-input>
                    <span v-else>{{scope.row.cxsj}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="110px" :label="tableData_xd_columns.xdedlx">
                  <template slot-scope="scope">
                    <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_xd_columns)[3]"
                              v-if="scope.row.edit" size="small" v-model.number="scope.row.xdedlx"></el-input>
                    <span v-else>{{scope.row.xdedlx}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="110px" :label="tableData_xd_columns.dydb">
                  <template slot-scope="scope">
                    <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_xd_columns)[4]"
                              v-if="scope.row.edit" size="small" v-model.number="scope.row.dydb"></el-input>
                    <span v-else>{{scope.row.dydb}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="110px" :label="tableData_xd_columns.sxed">
                  <template slot-scope="scope">
                    <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_xd_columns)[5]"
                              v-if="scope.row.edit" size="small" v-model.number="scope.row.sxed"></el-input>
                    <span v-else>{{scope.row.sxed}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="110px" :label="tableData_xd_columns.dkye">
                  <template slot-scope="scope">
                    <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_xd_columns)[6]"
                              v-if="scope.row.edit" size="small" v-model.number="scope.row.dkye"></el-input>
                    <span v-else>{{scope.row.dkye}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="110px" :label="tableData_xd_columns.dkcb">
                  <template slot-scope="scope">
                    <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_xd_columns)[7]"
                              v-if="scope.row.edit" size="small" v-model.number="scope.row.dkcb"></el-input>
                    <span v-else>{{scope.row.dkcb}}</span>
                  </template>
                </el-table-column>
                <el-table-column align="center" label="操作" width="240">
                  <template slot-scope="scope">
                    <v-tableOperation :scope="scope" :tableData="tableData_xd" v-on:verify="verify"
                                      v-on:acceptDelRow='acceptDelRow'></v-tableOperation>
                  </template>
                </el-table-column>
              </el-table>
              <v-tabelAddBtn :tableData="tableData_xd" :tableData_columns="tableData_xd_columns"></v-tabelAddBtn>
            </div>
          </el-card>
        </div>
      </el-tab-pane>
      <el-tab-pane label="动产融资信息" name="second">
        <div>
          <el-card class="box-card" shadow='nevner'>
            <div slot="header" class="clearfix">
              <div class="card-right-wrap">
                <el-button @click="saveDcdyxx" class="save" type="primary" size="medium">保存</el-button>
              </div>
              <div class="card-title">动产融资信息</div>
            </div>
            <!-- 表格容器 -->
            <div>
              <el-table :data="tableData_dcdy" v-loading.body="listLoading" border fit highlight-current-row
                        style="width: 100%">
                <el-table-column label="序号" type="index" width="50"></el-table-column>
                <el-table-column min-width="100px" :label="tableData_dcdy_columns.djrq">
                  <template slot-scope="scope">
                    <el-date-picker v-model="scope.row.djrq" class="cellItem el-form-item" value-format="yyyy-MM-dd"
                                    :class="Object.keys(tableData_dcdy_columns)[1]" v-if="scope.row.edit" type="date"
                                    placeholder="选择日期" style="width: 100%;" :clearable='false'></el-date-picker>
                    <span v-else>{{scope.row.djrq}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="100px" :label="tableData_dcdy_columns.djh">
                  <template slot-scope="scope">
                    <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_xd_columns)[2]"
                              v-if="scope.row.edit" size="small" v-model.number="scope.row.djh"></el-input>
                    <span v-else>{{scope.row.djh}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="120px" :label="tableData_dcdy_columns.bdbzqlx">
                  <template slot-scope="scope">
                    <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_xd_columns)[3]"
                              v-if="scope.row.edit" size="small" v-model.number="scope.row.bdbzqlx"></el-input>
                    <span v-else>{{scope.row.bdbzqlx}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="120px" :label="tableData_dcdy_columns.bdbzqse">
                  <template slot-scope="scope">
                    <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_xd_columns)[4]"
                              v-if="scope.row.edit" size="small" v-model.number="scope.row.bdbzqse"></el-input>
                    <span v-else>{{scope.row.bdbzqse}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="100px" :label="tableData_dcdy_columns.zwqx">
                  <template slot-scope="scope">
                    <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_xd_columns)[5]"
                              v-if="scope.row.edit" size="small" v-model.number="scope.row.zwqx"></el-input>
                    <span v-else>{{scope.row.zwqx}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="100px" :label="tableData_dcdy_columns.dyqr">
                  <template slot-scope="scope">
                    <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_xd_columns)[6]"
                              v-if="scope.row.edit" size="small" v-model.number="scope.row.dyqr"></el-input>
                    <span v-else>{{scope.row.dyqr}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="70px" :label="tableData_dcdy_columns.djjg">
                  <template slot-scope="scope">
                    <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_xd_columns)[7]"
                              v-if="scope.row.edit" size="small" v-model.number="scope.row.djjg"></el-input>
                    <span v-else>{{scope.row.djjg}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="70px" :label="tableData_dcdy_columns.zt">
                  <template slot-scope="scope">
                    <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_xd_columns)[8]"
                              v-if="scope.row.edit" size="small" v-model.number="scope.row.zt"></el-input>
                    <span v-else>{{scope.row.zt}}</span>
                  </template>
                </el-table-column>
                <el-table-column align="center" label="操作" width="240">
                  <template slot-scope="scope">
                    <v-tableOperation :scope="scope" :tableData="tableData_dcdy" v-on:verify="verify"
                                      v-on:acceptDelRow='acceptDelRow'></v-tableOperation>
                  </template>
                </el-table-column>
              </el-table>
              <v-tabelAddBtn :tableData="tableData_dcdy" :tableData_columns="tableData_dcdy_columns"></v-tabelAddBtn>
            </div>
          </el-card>
        </div>
      </el-tab-pane>
      <el-tab-pane label="其他融资信息" name="third">
        <div>
          <el-card class="box-card" shadow='nevner'>
            <div slot="header" class="clearfix">
              <div class="card-right-wrap">
                <el-button @click="saveYxfz" class="save" type="primary" size="medium">保存</el-button>
              </div>
              <div class="card-title">其他融资信息</div>
            </div>
            <div>
              <el-table :data="tableData_yxfz" v-loading.body="listLoading" border fit highlight-current-row
                        style="width: 100%">
                <el-table-column label="序号" type="index" width="50"></el-table-column>
                <el-table-column min-width="100px" :label="tableData_yxfz_columns.jkjg">
                  <template slot-scope="scope">
                    <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_yxfz_columns)[1]"
                              v-if="scope.row.edit" size="small" v-model.number="scope.row.jkjg"></el-input>
                    <span v-else>{{scope.row.jkjg}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="100px" :label="tableData_yxfz_columns.jksj">
                  <template slot-scope="scope">
                    <el-date-picker v-model="scope.row.jksj" class="cellItem el-form-item" value-format="yyyy-MM-dd"
                                    :class="Object.keys(tableData_yxfz_columns)[2]" v-if="scope.row.edit" type="date"
                                    placeholder="选择日期" style="width: 100%;" :clearable='false'></el-date-picker>
                    <span v-else>{{scope.row.jksj}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="100px" :label="tableData_yxfz_columns.jkje">
                  <template slot-scope="scope">
                    <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_yxfz_columns)[3]"
                              v-if="scope.row.edit" size="small" v-model.number="scope.row.jkje"></el-input>
                    <span v-else>{{scope.row.jkje}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="100px" :label="tableData_yxfz_columns.dqsj">
                  <template slot-scope="scope">
                    <el-date-picker v-model="scope.row.dqsj" class="cellItem el-form-item" value-format="yyyy-MM-dd"
                                    :class="Object.keys(tableData_yxfz_columns)[4]" v-if="scope.row.edit" type="date"
                                    placeholder="选择日期" style="width: 100%;" :clearable='false'></el-date-picker>
                    <span v-else>{{scope.row.dqsj}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="100px" :label="tableData_yxfz_columns.zxfs">
                  <template slot-scope="scope">
                    <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_yxfz_columns)[5]"
                              v-if="scope.row.edit" size="small" v-model.number="scope.row.zxfs"></el-input>
                    <span v-else>{{scope.row.zxfs}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="100px" :label="tableData_yxfz_columns.rzyt">
                  <template slot-scope="scope">
                    <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_yxfz_columns)[6]"
                              v-if="scope.row.edit" size="small" v-model.number="scope.row.rzyt"></el-input>
                    <span v-else>{{scope.row.rzyt}}</span>
                  </template>
                </el-table-column>
                <el-table-column align="center" label="操作" width="240">
                  <template slot-scope="scope">
                    <v-tableOperation :scope="scope" :tableData="tableData_yxfz" v-on:verify="verify"
                                      v-on:acceptDelRow='acceptDelRow'></v-tableOperation>
                  </template>
                </el-table-column>
              </el-table>
              <v-tabelAddBtn :tableData="tableData_yxfz" :tableData_columns="tableData_yxfz_columns"></v-tabelAddBtn>
            </div>
          </el-card>
        </div>
        <div>
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <div class="card-right-wrap">
                <el-button @click="saveXj" class="save" type="primary" size="medium">保存</el-button>
              </div>
              <div class="card-title">小结</div>
            </div>
            <div>
              <quill-editor :value="textEditorContent" :maxSize="10240" v-on:changeInput="changeInput"></quill-editor>
            </div>
          </el-card>
        </div>
      </el-tab-pane>

    </el-tabs>
  </div>
</template>

<script>
  import tableValidates from "@/utils/validateTable/tableValidates.js";
  import tabelAddBtn from "@/components/table/table-add-btn.vue";
  import tableOperation from "@/components/table/table-operation.vue";
  import quillEditor from "@/components/form/quillEditor.vue";

  export default {
    data() {
      return {
        activeName: "first",
        listLoading: false,
        textarea: "",
        rules: {},
        delRowData: [],
        addData: [],
        updateData: [],
        tableData_bank: [],
        tableData_bank_columns: {
          yhmc: "银行名称",
          yhzhlb: "往来账户类别",
          zh: "账户",
          zhsypl: "账户使用频率",
          edit: false
        }, //表格列字段
        tableData_dcdy: [],
        tableData_dcdy_columns: {
          djrq: "登记日期",
          djh: "登记号",
          bdbzqlx: "被担保债权类型",
          bdbzqse: "被担保债权数额",
          zwqx: "债务期限",
          dyqr: "抵押权人",
          djjg: "登记机关",
          zt: "状态",
          edit: false
        }, //表格列字段
        tableData_yxfz: [],
        tableData_yxfz_columns: {
          jkjg: "借款机构",
          jksj: "借款时间",
          jkje: "借款金额",
          dqsj: "到期时间",
          zxfs: "增信方式",
          rzyt: "融资用途",
          edit: false
        }, //表格列字段
        tableData_xd: [],
        tableData_xd_columns: {
          yhmc: "银行名称",
          cxsj: "存续时间",
          xdedlx: "信贷额度类型",
          dydb: "抵押/担保",
          sxed: "授信额度",
          dkye: "贷款余额",
          dkcb: "贷款成本",
          edit: false
        }, //表格列字段
        textEditorContent: ""
      };
    },
    mounted() {
      this.init();
    },
    methods: {
      init() {
        this.getBankInfo();
        this.getYhwjqxded();
        this.getDcdyxx();
        this.getYxfz();
        this.getTextEditorCon();
      },
      //获取主要往来银行信息
      getBankInfo: async function () {
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token"),
          dataType: "Zywlyhxx"
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/qyfxgk/qyfxgkRzxx/loadData",
          params
        );
        if (res.data.resultCode == "0") {
          this.tableData_bank = res.data.resultData.data;
        }
      },
      saveBankInfo: async function () {
        this.tableData_bank.forEach((item, index) => {
          if (item.id == null) {
            this.addData.push(item);
          }
        });
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token"),
          addData: JSON.stringify(this.addData),
          updateData: JSON.stringify(this.updateData),
          delData: JSON.stringify(this.delRowData),
          dataType: "Zywlyhxx"
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/qyfxgk/qyfxgkRzxx/update",
          params
        );
        if (res.data.resultCode == "0") {
          this.$message({message: res.data.resultMsg, type: "success"});
          this.delData = [];
          this.updateData = [];
          this.addData = [];
          this.getBankInfo();
        } else {
          this.$message({message: res.data.resultMsg, type: "warning"});
        }
      },
      getYhwjqxded: async function () {
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token"),
          dataType: "Yhwjqxded"
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/qyfxgk/qyfxgkRzxx/loadData",
          params
        );
        if (res.data.resultCode == "0") {
          this.tableData_xd = res.data.resultData.data;
        }
      },
      saveYhwjqxded: async function () {
        this.tableData_bank.forEach((item, index) => {
          if (item.id == null) {
            this.addData.push(item);
          }
        });
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token"),
          addData: JSON.stringify(this.addData),
          updateData: JSON.stringify(this.updateData),
          delData: JSON.stringify(this.delRowData),
          dataType: "Yhwjqxded"
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/qyfxgk/qyfxgkRzxx/update",
          params
        );
        if (res.data.resultCode == "0") {
          this.$message({message: res.data.resultMsg, type: "success"});
          this.delData = [];
          this.updateData = [];
          this.addData = [];
          this.getYhwjqxded();
        } else {
          this.$message({message: res.data.resultMsg, type: "warning"});
        }
      },
      getDcdyxx: async function () {
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token")
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/qyfxgk/qyfxgkDcdyxx/init",
          params
        );
        if (res.data.resultCode == "0") {
          this.tableData_dcdy = res.data.resultData.data;
        }
      },
      saveDcdyxx: async function () {
        this.tableData_bank.forEach((item, index) => {
          if (item.id == null) {
            this.addData.push(item);
          }
        });
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token"),
          addData: JSON.stringify(this.addData),
          updateData: JSON.stringify(this.updateData),
          delData: JSON.stringify(this.delRowData),
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/qyfxgk/qyfxgkDcdyxx/update",
          params
        );
        if (res.data.resultCode == "0") {
          this.$message({message: res.data.resultMsg, type: "success"});
          this.delData = [];
          this.updateData = [];
          this.addData = [];
          this.getDcdyxx();
        } else {
          this.$message({message: res.data.resultMsg, type: "warning"});
        }
      },
      getYxfz: async function () {
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token")
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/qyfxgk/qyfxgkRzxx/loadYxfz",
          params
        );
        if (res.data.resultCode == "0") {
          this.tableData_yxfz = res.data.resultData.data.rows;
        }
      },
      saveYxfz: async function () {
        this.tableData_bank.forEach((item, index) => {
          if (item.id == null) {
            this.addData.push(item);
          }
        });
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token"),
          addData: JSON.stringify(this.addData),
          updateData: JSON.stringify(this.updateData),
          delData: JSON.stringify(this.delRowData),
          dataType: "Yxfz"
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/qyfxgk/qyfxgkRzxx/update",
          params
        );
        if (res.data.resultCode == "0") {
          this.$message({message: res.data.resultMsg, type: "success"});
          this.delData = [];
          this.updateData = [];
          this.addData = [];
          this.getYxfz();
        } else {
          this.$message({message: res.data.resultMsg, type: "warning"});
        }
      },
      //获取富文本框内容
      getTextEditorCon: async function () {
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token")
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/qyfxgk/qyfxgkQyrzxxxj/loadData",
          params
        );
        if (res.data.resultCode == "0") {
          this.textEditorContent = res.data.resultData.data[0].qyrzxxxj;
        }
      },
      //修改富文本框内容
      changeInput(val) {
        this.textEditorContent = val;
      },
      //接受删除的数据
      acceptDelRow(val) {
        this.delRowData.push(val);
      },
      //保存小结
      saveXj: async function () {
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token"),
          qyrzxxxj: this.textEditorContent
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/qyfxgk/qyfxgkRzxx/updateQyrzxxxj",
          params
        );
        if (res.data.resultCode == "0") {
          this.$message({message: res.data.resultMsg, type: "success"});
          this.getTextEditorCon();
        } else {
          this.$message({message: res.data.resultMsg, type: "warning"});
        }
      },
      handleClick(tab, event) {
        console.log(tab, event);
      },
      verify1(row, index) {
        row.edit = false;
      },
      verify2(row, index) {
        row.edit = false;
      },
      verify3(row, index) {
        row.edit = false;
      },
      //验证数据
      verify(rowObj, rowIndex) {
        var isValid = tableValidates.validateByRow(
          rowObj,
          rowIndex,
          this.rules,
          this
        );
        if (rowObj.id) {
          this.updateData.push(rowObj);
        }
      }
    },
    components: {
      "v-tabelAddBtn": tabelAddBtn,
      "v-tableOperation": tableOperation,
      "quill-editor": quillEditor
    }
  };
</script>

<style>

</style>
