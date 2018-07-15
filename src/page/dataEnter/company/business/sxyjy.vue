<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="主要客户往来信息" name="first">
        <div>
          <el-card class="box-card" shadow='nevner'>
            <div slot="header" class="clearfix">
              <div class="card-right-wrap">
                <el-button @click="saveXsgk" type="primary" size="medium">保存</el-button>
              </div>
              <div class="card-title">销售概况</div>
            </div>
            <div>
              <el-table :data="tableData_xsgk" v-loading.body="listLoading" border fit highlight-current-row
                        style="width: 100%">
                <el-table-column min-width="300px" :label="tableData_xsgk_columns.xsdq">
                  <template slot-scope="scope">
                    <template v-if="scope.row.edit">
                      <el-form :model="scope.row" :rules="rules" :id="'salesArea'+scope.$index"
                               :ref="'form_salesArea_'+scope.$index" :show-message="false">
                        <el-form-item prop="salesArea" class="td-form-item">
                          <el-input class="edit-input" size="small" v-model="scope.row.xsdq"></el-input>
                        </el-form-item>
                      </el-form>
                    </template>
                    <span v-else>{{scope.row.xsdq}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="300px" :label="tableData_xsgk_columns.bfb">
                  <template slot-scope="scope">
                    <template v-if="scope.row.edit">
                      <el-form :model="scope.row" :rules="rules" :id="'ratio'+scope.$index"
                               :ref="'form_ratio_'+scope.$index" :show-message="false">
                        <el-form-item prop="ratio" class="td-form-item">
                          <el-input class="edit-input" size="small" v-model="scope.row.bfb"></el-input>
                        </el-form-item>
                      </el-form>
                    </template>
                    <span v-else>{{ scope.row.bfb}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="100px" :label="tableData_xsgk_columns.dqgj">
                  <template slot-scope="scope">
                    <template v-if="scope.row.edit">
                      <el-form :model="scope.row" :rules="rules" :id="'country'+scope.$index"
                               :ref="'form_country_'+scope.$index" :show-message="false">
                        <el-form-item prop="country" class="td-form-item">
                          <el-input class="edit-input" size="small" v-model="scope.row.dqgj"></el-input>
                        </el-form-item>
                      </el-form>
                    </template>
                    <span v-else>{{ scope.row.dqgj}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="100px" :label="tableData_xsgk_columns.fkzl">
                  <template slot-scope="scope">
                    <template v-if="scope.row.edit">
                      <el-form :model="scope.row" :rules="rules" :id="'payKind'+scope.$index"
                               :ref="'form_payKind_'+scope.$index" :show-message="false">
                        <el-form-item prop="payKind" class="td-form-item">
                          <el-input class="edit-input" size="small" v-model="scope.row.fkzl"></el-input>
                        </el-form-item>
                      </el-form>
                    </template>
                    <span v-else>{{ scope.row.fkzl}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="100px" :label="tableData_xsgk_columns.fkzb">
                  <template slot-scope="scope">
                    <template v-if="scope.row.edit">
                      <el-form :model="scope.row" :rules="rules" :id="'payRatio'+scope.$index"
                               :ref="'form_payRatio_'+scope.$index" :show-message="false">
                        <el-form-item prop="payRatio" class="td-form-item">
                          <el-input class="edit-input" size="small" v-model="scope.row.fkzb"></el-input>
                        </el-form-item>
                      </el-form>
                    </template>
                    <span v-else>{{ scope.row.fkzb}}</span>
                  </template>
                </el-table-column>
                <el-table-column align="center" label="操作" width="240">
                  <template slot-scope="scope">
                    <v-tableOperation :scope="scope" :tableData="tableData_xsgk"
                                      v-on:verify="verify"></v-tableOperation>
                  </template>
                </el-table-column>
              </el-table>
              <v-tabelAddBtn :tableData="tableData_xsgk" :tableData_columns="tableData_xsgk_columns"></v-tabelAddBtn>
            </div>
          </el-card>
        </div>
        <div>
          <el-card class="box-card" shadow='nevner'>
            <div slot="header" class="clearfix">
              <div class="card-right-wrap">
                <el-button type="default" size="medium">模板下载</el-button>
                <el-button type="default" size="medium">数据导入</el-button>
                <el-button type="default" size="medium">生成图表</el-button>
                <el-button @click="saveZykhjssm" type="primary" size="medium">保存</el-button>
              </div>
              <div class="card-title">主要客户介绍</div>
            </div>
            <div>
              <el-table :data="tableData_zykh" v-loading.body="listLoading" border fit highlight-current-row
                        style="width: 100%">
                <el-table-column label="序号" type="index" width="50"></el-table-column>
                <el-table-column min-width="100px" :label="tableData_zykh_columns.dwmc">
                  <template slot-scope="scope">
                    <template v-if="scope.row.edit">
                      <el-form :model="scope.row" :rules="rules" :id="'companyName'+scope.$index"
                               :ref="'form_companyName_'+scope.$index" :show-message="false">
                        <el-form-item prop="companyName" class="td-form-item">
                          <el-input class="edit-input" size="small" v-model="scope.row.dwmc"></el-input>
                        </el-form-item>
                      </el-form>
                    </template>
                    <span v-else>{{scope.row.dwmc}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="100px" :label="tableData_zykh_columns.jtcphfw">
                  <template slot-scope="scope">
                    <template v-if="scope.row.edit">
                      <el-form :model="scope.row" :rules="rules" :id="'detail'+scope.$index"
                               :ref="'form_detail_'+scope.$index" :show-message="false">
                        <el-form-item prop="detail" class="td-form-item">
                          <el-input class="edit-input" size="small" v-model="scope.row.jtcphfw"></el-input>
                        </el-form-item>
                      </el-form>
                    </template>
                    <span v-else>{{ scope.row.jtcphfw}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="100px" :label="tableData_zykh_columns.zq">
                  <template slot-scope="scope">
                    <template v-if="scope.row.edit">
                      <el-form :model="scope.row" :rules="rules" :id="'accountPeriod'+scope.$index"
                               :ref="'form_accountPeriod_'+scope.$index" :show-message="false">
                        <el-form-item prop="accountPeriod" class="td-form-item">
                          <el-input class="edit-input" size="small" v-model="scope.row.zq"></el-input>
                        </el-form-item>
                      </el-form>
                    </template>
                    <span v-else>{{ scope.row.zq}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="100px" :label="tableData_zykh_columns.jsfs">
                  <template slot-scope="scope">
                    <template v-if="scope.row.edit">
                      <el-form :model="scope.row" :rules="rules" :id="'payWay'+scope.$index"
                               :ref="'form_payWay_'+scope.$index" :show-message="false">
                        <el-form-item prop="payWay" class="td-form-item">
                          <el-input class="edit-input" size="small" v-model="scope.row.jsfs"></el-input>
                        </el-form-item>
                      </el-form>
                    </template>
                    <span v-else>{{ scope.row.jsfs}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="100px" :label="tableData_zykh_columns.bl">
                  <template slot-scope="scope">
                    <template v-if="scope.row.edit">
                      <el-form :model="scope.row" :rules="rules" :id="'ratio'+scope.$index"
                               :ref="'form_ratio_'+scope.$index" :show-message="false">
                        <el-form-item prop="ratio" class="td-form-item">
                          <el-input class="edit-input" size="small" v-model="scope.row.bl"></el-input>
                        </el-form-item>
                      </el-form>
                    </template>
                    <span v-else>{{ scope.row.bl}}</span>
                  </template>
                </el-table-column>
                <el-table-column align="center" label="操作" width="240">
                  <template slot-scope="scope">
                    <v-tableOperation :scope="scope" :tableData="tableData_zykh"
                                      v-on:verify="verify"></v-tableOperation>
                  </template>
                </el-table-column>
              </el-table>
              <v-tabelAddBtn :tableData="tableData_zykh" :tableData_columns="tableData_zykh_columns"></v-tabelAddBtn>
            </div>
          </el-card>
        </div>
        <div>
          <el-card class="box-card" shadow='nevner'>
            <div slot="header" class="clearfix">
              <div class="card-title">图表视图</div>
            </div>
            <div class="img-preview">

            </div>
          </el-card>
        </div>
        <div>
          <el-card class="box-card" shadow='nevner'>
            <div slot="header" class="clearfix">
              <div class="card-right-wrap">
                <el-button type="primary" size="medium" @click="saveZykhjssmxj">保存</el-button>
              </div>
              <div class="card-title">主要客户介绍说明</div>
            </div>
            <!-- 小结（富文本框） -->
            <div class="text-editor">
							<quill-editor :value="zykhjssmxjxj" :maxSize="10240" v-on:changeInput="changZykhjssmxjxj"></quill-editor>
						</div>
          </el-card>
        </div>
        <div>
          <el-card class="box-card" shadow='nevner'>
            <div slot="header" class="clearfix">
              <div class="card-right-wrap">
                <el-button type="primary" size="medium" @click="saveXsjg">保存</el-button>
              </div>
              <div class="card-title">销售结构分析</div>
            </div>
            <!-- 小结（富文本框） -->
            <div class="text-editor">
							<quill-editor :value="xsjg" :maxSize="10240" v-on:changeInput="changXsjg"></quill-editor>
						</div>
          </el-card>
        </div>
      </el-tab-pane>
      <el-tab-pane label="主要供应商往来信息" name="second">
        <div>
          <el-card class="box-card" shadow='nevner'>
            <div slot="header" class="clearfix">
              <div class="card-right-wrap">
                <el-button type="default" size="medium">模板下载</el-button>
                <el-button type="default" size="medium">数据导入</el-button>
                <el-button type="default" size="medium">生成图表</el-button>
                <el-button type="primary" size="medium" @click="saveZygyslw">保存</el-button>
              </div>
              <div class="card-title">主要供应商介绍</div>
            </div>
            <div>
              <el-table :data="tableData_2" v-loading.body="listLoading" border fit highlight-current-row
                        style="width: 100%">
                <el-table-column label="序号" type="index" width="50"></el-table-column>
                <el-table-column min-width="200px" :label="tableData_2_columns.gysmc">
                  <template slot-scope="scope">
                    <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_2_columns)[1]"
                              v-if="scope.row.edit" size="small" v-model.number="scope.row.gysmc"></el-input>
                    <span v-else>{{ scope.row.gysmc}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="200px" :label="tableData_2_columns.jtcphfw">
                  <template slot-scope="scope">
                    <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_2_columns)[2]"
                              v-if="scope.row.edit" size="small" v-model="scope.row.jtcphfw"></el-input>
                    <span v-else>{{ scope.row.jtcphfw}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="200px" :label="tableData_2_columns.zq">
                  <template slot-scope="scope">
                    <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_2_columns)[3]"
                              v-if="scope.row.edit" size="small" v-model="scope.row.zq"></el-input>
                    <span v-else>{{ scope.row.zq}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="200px" :label="tableData_2_columns.jsfs">
                  <template slot-scope="scope">
                    <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_2_columns)[4]"
                              v-if="scope.row.edit" size="small" v-model.number="scope.row.jsfs"></el-input>
                    <span v-else>{{ scope.row.jsfs}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="200px" :label="tableData_2_columns.bl">
                  <template slot-scope="scope">
                    <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_2_columns)[5]"
                              v-if="scope.row.edit" size="small" v-model.number="scope.row.bl"></el-input>
                    <span v-else>{{ scope.row.bl}}</span>
                  </template>
                </el-table-column>
                <el-table-column align="center" label="操作" width="240">
                  <template slot-scope="scope">
                    <v-tableOperation :scope="scope" :tableData="tableData_2" v-on:verify="verify2"
                                      v-on:acceptDelRow='acceptDelTable2Row'></v-tableOperation>
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
              <div class="card-title">图表视图</div>
            </div>
            <div>

            </div>
          </el-card>
        </div>
        <div>
          <el-card class="box-card" shadow='nevner'>
            <div slot="header" class="clearfix">
              <div class="card-right-wrap">
                <el-button type="primary" size="medium" @click="saveZygysjssm">保存</el-button>
              </div>
              <div class="card-title">主要供应商介绍说明</div>
            </div>
            <!-- 小结（富文本框） -->
            <div class="text-editor">
							<quill-editor :value="zygysjssm" :maxSize="10240" v-on:changeInput="changZygysjssm"></quill-editor>
						</div>
          </el-card>
        </div>
        <div>
          <el-card class="box-card" shadow='nevner'>
            <div slot="header" class="clearfix">
              <div class="card-right-wrap">
                <el-button type="primary" size="medium" @click="saveGysjgfx">保存</el-button>
              </div>
              <div class="card-title">供应商结构分析</div>
            </div>
            <!-- 小结（富文本框） -->
            <div class="text-editor">
							<quill-editor :value="gysjgfx" :maxSize="10240" v-on:changeInput="changGysjgfx"></quill-editor>
						</div>
          </el-card>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import tabelAddBtn from "@/components/table/table-add-btn.vue";
  import tableOperation from "@/components/table/table-operation.vue";
  import tableValidates from "@/utils/validateTable/tableValidates.js";
  import quillEditor from "@/components/form/quillEditor.vue";

  export default {
    data() {
      return {
        activeName: "first",
        zykhjssmxjxj: "",
        xsjg: "",
        zygysjssm:"",
        gysjgfx:"",
        listLoading: false,
        rules: {},
        addData: [],
        updateData: [],
        delData: [],
        tableData_xsgk: [],
        tableData_xsgk_columns: {
          xsdq: "销售地区",
          bfb: "百分比",
          dqgj: "地区国家",
          fkzl: "付款种类",
          fkzb: "付款占比",
          edit: false
        },
        tableData_zykh: [],
        tableData_zykh_columns: {
          dwmc: "单位名称",
          jtcphfw: "具体产品和服务",
          zq: "账期",
          jsfs: "结算方式",
          bl: "占比",
          edit: false
        },


        tableData_2: [],
        addData2: [],
        updateData2: [],
        delRowData2: [],
        tableData_2_columns: {
          gysmc: "供应商名称",
          jtcphfw: "具体产品和服务",
          zq: "账期",
          jsfs: "结算方式",
          bl: "占比",
          edit: false
        }

        
      };
    },
    mounted() {
      this.init();
    },
    methods: {
      init(){
        this.getXsgk();
        this.getZykhjssm();
        this.getZygyslw();
        this.getZykhjssmxj();
        this.getXsjg();
        this.getZygysjssm();
        this.getGysjgfx();
      },
      getXsgk: async function () {
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token")
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/gsyyxx/sxyjyxx/qy/list",
          params
        );
        if (res.data.resultCode == "0") {
          this.tableData_xsgk = res.data.resultData.data.rows;
        }
      },
      saveXsgk: async function () {
        this.tableData_xsgk.forEach((item, index) => {
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
          "/hspt-web-api/data_entry/gsyyxx/sxyjyxx/qy/save",
          params
        );
      },
      getZykhjssm: async function () {
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token")
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/gsyyxx/sxyjyxx/zykhwlZykhjs/listTable",
          params
        );
        if (res.data.resultCode == "0") {
          this.tableData_zykh = res.data.resultData.data.rows;
        }
      },
      saveZykhjssm: async function () {
        this.tableData_xsgk.forEach((item, index) => {
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
          "/hspt-web-api/data_entry/gsyyxx/sxyjyxx/zykhwlZykhjs/save",
          params
        );
      },
      handleClick(tab, event) {
        //   console.log(tab, event);
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
      },

      //////////////////////////////////////////////////////////主要供应商来往信息
      //初始化主要供应商来往信息页面
      getZygyslw: async function () {
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token")
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/gsyyxx/sxyjyxx/zygysZykhjs/list",
          params
        );
        if (res.data.resultCode == "0") {
          this.tableData_2 = res.data.resultData;
        }
      },
      //保存主要供应商来往信息
      saveZygyslw() {
        this.setZygyslw();
      },
      //保存主要供应商来往信息数据
      setZygyslw: async function () {
        this.tableData_2.forEach((item, index) => {
          if (item.id == null) {
            this.addData2.push(item);
          }
        });
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token"),
          addData: JSON.stringify(this.addData2),
          updateData: JSON.stringify(this.updateData2),
          delData: JSON.stringify(this.delRowData2)
        };
        
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/gsyyxx/sxyjyxx/zygysZykhjs/save",
          params
        );
        if (res.data.resultCode == "1111") {
          this.$message({message: res.data.resultMsg, type: "success"});
          this.addData2 = [];
          this.updateData2 = [];
          this.delRowData2 = [];
          this.getZygyslw();
        } else {
          this.$message({message: res.data.resultMsg, type: "warning"});
        }
      },
      //接受主要供应商来往信息删除数据
      acceptDelTable2Row(val) {
        this.delRowData2.push(val);
      },
      verify2(rowObj, index) {
        var isValid = tableValidates.validateByRow(
          rowObj,
          index,
          this.rules,
          this
        );
        if (rowObj.id) {
          this.updateData2.push(rowObj);
        }
      },

      //获取主要客户介绍说明小结
      getZykhjssmxj: async function() {
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token")
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/gsyyxx/sxyjyxx/zykhjssm/list",
          params
        );
        if (res.data.resultCode == "0") {
          this.zykhjssmxjxj = res.data.resultData.data.rows;
        }
      },
      //修改主要客户介绍说明小结
      changZykhjssmxjxj(val) {
        this.zykhjssmxjxj = val;
      },
      //保存主要客户介绍说明小结
      saveZykhjssmxj: async function() {
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token"),
          text: this.zykhjssmxjxj,
          tableNum:"0"
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/gsyyxx/sxyjyxx/zykhjssm/save",
          params
        );
        if (res.data.resultCode == "0") {
          this.$message({ message: res.data.resultMsg, type: "success" });
        } else {
          this.$message({ message: res.data.resultMsg, type: "warning" });
        }
      },

      //获取销售结构分析小结
      getXsjg: async function() {
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token")
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/gsyyxx/sxyjyxx/xsjg/list",
          params
        );
        if (res.data.resultCode == "0") {
          this.xsjg = res.data.resultData.data.rows;
        }
      },
      //修改销售结构分析小结
      changXsjg(val) {
        this.xsjg = val;
      },
      //保存销售结构分析明小结
      saveXsjg: async function() {
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token"),
          text: this.xsjg,
          tableNum:"1"
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/gsyyxx/sxyjyxx/zykhjssm/save",
          params
        );
        if (res.data.resultCode == "0") {
          this.$message({ message: res.data.resultMsg, type: "success" });
        } else {
          this.$message({ message: res.data.resultMsg, type: "warning" });
        }
      },

      //获取主要供应商介绍说明小结
      getZygysjssm: async function() {
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token")
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/gsyyxx/sxyjyxx/zygysjssm/list",
          params
        );
        if (res.data.resultCode == "0") {
          this.zygysjssm = res.data.resultData.data.rows;
        }
      },
      //修改主要供应商介绍说明小结
      changZygysjssm(val) {
        this.zygysjssm = val;
      },
      //保存主要供应商介绍说明小结
      saveZygysjssm: async function() {
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token"),
          text: this.zygysjssm,
          tableNum:"2"
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/gsyyxx/sxyjyxx/zykhjssm/save",
          params
        );
        if (res.data.resultCode == "0") {
          this.$message({ message: res.data.resultMsg, type: "success" });
        } else {
          this.$message({ message: res.data.resultMsg, type: "warning" });
        }
      },

      //获取供应商结构分析小结
      getGysjgfx: async function() {
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token")
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/gsyyxx/sxyjyxx/gysjgfx/list",
          params
        );
        if (res.data.resultCode == "0") {
          this.gysjgfx = res.data.resultData.data.rows;
        }
      },
      //修改供应商结构分析小结
      changGysjgfx(val) {
        this.gysjgfx = val;
      },
      //保存供应商结构分析小结
      saveGysjgfx: async function() {
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token"),
          text: this.gysjgfx,
          tableNum:"3"
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/gsyyxx/sxyjyxx/zykhjssm/save",
          params
        );
        if (res.data.resultCode == "0") {
          this.$message({ message: res.data.resultMsg, type: "success" });
        } else {
          this.$message({ message: res.data.resultMsg, type: "warning" });
        }
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
  .img-preview {
    height: 200px;
    margin: 20px;
    border: #ebebeb;
    background-color: #eef9ff;
  }

  .text-editor .ql-editor {
    height: 300px;
  }
</style>

