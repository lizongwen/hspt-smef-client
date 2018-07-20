<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="法院公告信息" name="first">
        <div>
          <el-card class="box-card" shadow='nevner'>
            <div slot="header" class="clearfix">
              <div class="card-right-wrap">
                <!--<el-button class="save" type="default" size="medium">获取数据</el-button>-->
                <el-button class="save" type="primary" size="medium" @click="saveSfKtgg" :loading="loadingStatus">保存</el-button>
              </div>
              <div class="card-title">法院公告信息</div>
            </div>
            <div>
              <el-table :data="tableData_1" v-loading.body="listLoading" border fit highlight-current-row
                        style="width: 100%">
                <el-table-column label="序号" type="index" width="50"></el-table-column>
                <el-table-column min-width="200px" :label="tableData_1_columns.zxfy">
                  <template slot-scope="scope">
                    <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_1_columns)[1]"
                              v-if="scope.row.edit" size="small" v-model="scope.row.zxfy"></el-input>
                    <span v-else>{{ scope.row.zxfy}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="200px" :label="tableData_1_columns.ktsj">
                  <template slot-scope="scope">
                    <el-date-picker class="edit-input cellItem el-form-item" :class="Object.keys(tableData_1_columns)[2]"
                              v-if="scope.row.edit" size="small" v-model="scope.row.ktsj" type=data value-format="yyyy-MM-dd" placeholder="选择日期"></el-date-picker>
                    <span v-else>{{ scope.row.ktsj}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="200px" :label="tableData_1_columns.ah">
                  <template slot-scope="scope">
                    <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_1_columns)[3]"
                              v-if="scope.row.edit" size="small" v-model="scope.row.ah"></el-input>
                    <span v-else>{{ scope.row.ah}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="200px" :label="tableData_1_columns.ay">
                  <template slot-scope="scope">
                    <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_1_columns)[4]"
                              v-if="scope.row.edit" size="small" v-model="scope.row.ay"></el-input>
                    <span v-else>{{ scope.row.ay}}</span>
                  </template>
                </el-table-column>
                <el-table-column align="center" label="操作" width="240">
                  <template slot-scope="scope">
                    <v-tableOperation :scope="scope" :tableData="tableData_1" v-on:verify="verify1"
                                      v-on:acceptDelRow='acceptDelTable1Row'></v-tableOperation>
                  </template>
                </el-table-column>
              </el-table>
              <v-tabelAddBtn :tableData="tableData_1" :tableData_columns="tableData_1_columns"></v-tabelAddBtn>
            </div>
          </el-card>
        </div>
      </el-tab-pane>
      <el-tab-pane label="法院判决信息" name="second">
        <div>
          <el-card class="box-card" shadow='nevner'>
            <div slot="header" class="clearfix">
              <div class="card-right-wrap">
                <!--<el-button class="save" type="default" size="medium">获取数据</el-button>-->
                <el-button class="save" type="primary" size="medium" @click="saveSfFypb" :loading="loadingStatus">保存</el-button>
              </div>
              <div class="card-title">法院判决信息</div>
            </div>
            <div>
              <el-table :data="tableData_2" v-loading.body="listLoading" border fit highlight-current-row
                        style="width: 100%">
                <el-table-column label="序号" type="index" width="50"></el-table-column>
                <el-table-column min-width="200px" :label="tableData_2_columns.pjxx">
                  <template slot-scope="scope">
                    <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_2_columns)[1]"
                              v-if="scope.row.edit" size="small" v-model="scope.row.pjxx"></el-input>
                    <span v-else>{{ scope.row.pjxx}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="200px" :label="tableData_2_columns.sf">
                  <template slot-scope="scope">
                    <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_2_columns)[2]"
                              v-if="scope.row.edit" size="small" v-model="scope.row.sf"></el-input>
                    <span v-else>{{ scope.row.sf}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="200px" :label="tableData_2_columns.zxfy">
                  <template slot-scope="scope">
                    <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_2_columns)[3]"
                              v-if="scope.row.edit" size="small" v-model="scope.row.zxfy"></el-input>
                    <span v-else>{{ scope.row.zxfy}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="200px" :label="tableData_2_columns.wszh">
                  <template slot-scope="scope">
                    <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_2_columns)[4]"
                              v-if="scope.row.edit" size="small" v-model="scope.row.wszh"></el-input>
                    <span v-else>{{ scope.row.wszh}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="200px" :label="tableData_2_columns.pjjg">
                  <template slot-scope="scope">
                    <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_2_columns)[5]"
                              v-if="scope.row.edit" size="small" v-model="scope.row.pjjg"></el-input>
                    <span v-else>{{ scope.row.pjjg}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="200px" :label="tableData_2_columns.ssfcd">
                  <template slot-scope="scope">
                    <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_2_columns)[6]"
                              v-if="scope.row.edit" size="small" v-model="scope.row.ssfcd"></el-input>
                    <span v-else>{{ scope.row.ssfcd}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="200px" :label="tableData_2_columns.ay">
                  <template slot-scope="scope">
                    <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_2_columns)[7]"
                              v-if="scope.row.edit" size="small" v-model="scope.row.ay"></el-input>
                    <span v-else>{{ scope.row.ay}}</span>
                  </template>
                </el-table-column>
                <!--<el-table-column min-width="200px" :label="tableData_2_columns.isDeleted">
                  <template slot-scope="scope">
                    <el-select v-model="scope.row.isDeleted" class="edit-input cellItem el-form-item"
                               :class="Object.keys(tableData_2_columns)[8]" placeholder="请选择" size="small"
                               v-if="scope.row.edit">
                      <el-option :value="1" label="是"></el-option>
                      <el-option :value="0" label="否"></el-option>
                    </el-select>
                    <span v-else>{{ scope.row.isDeleted == null ? "" : (scope.row.isDeleted ? "否" : "是")}}</span>
                  </template>
                </el-table-column>-->
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
      </el-tab-pane>
      <el-tab-pane label="企业被执行公告信息" name="third">
        <div>
          <el-card class="box-card" shadow='nevner'>
            <div slot="header" class="clearfix">
              <div class="card-right-wrap">
                <!--<el-button class="save" type="default" size="medium">获取数据</el-button>-->
                <el-button class="save" type="primary" size="medium" @click="saveSfqybzxgg" :loading="loadingStatus">保存</el-button>
              </div>
              <div class="card-title">企业被执行公告信息</div>
            </div>
            <div>
              <el-table :data="tableData_3" v-loading.body="listLoading" border fit highlight-current-row
                        style="width: 100%">
                <el-table-column label="序号" type="index" width="50"></el-table-column>
                <el-table-column min-width="200px" :label="tableData_3_columns.lasj">
                  <template slot-scope="scope">
                    <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_3_columns)[1]"
                              v-if="scope.row.edit" size="small" v-model="scope.row.lasj"></el-input>
                    <span v-else>{{ scope.row.lasj}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="200px" :label="tableData_3_columns.zxfy">
                  <template slot-scope="scope">
                    <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_3_columns)[2]"
                              v-if="scope.row.edit" size="small" v-model="scope.row.zxfy"></el-input>
                    <span v-else>{{ scope.row.zxfy}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="200px" :label="tableData_3_columns.zxbd">
                  <template slot-scope="scope">
                    <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_3_columns)[3]"
                              v-if="scope.row.edit" size="small" v-model="scope.row.zxbd"></el-input>
                    <span v-else>{{ scope.row.zxbd}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="200px" :label="tableData_3_columns.ajzt">
                  <template slot-scope="scope">
                    <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_3_columns)[4]"
                              v-if="scope.row.edit" size="small" v-model="scope.row.ajzt"></el-input>
                    <span v-else>{{ scope.row.ajzt}}</span>
                  </template>
                </el-table-column>
                <!--<el-table-column min-width="200px" :label="tableData_3_columns.isDeleted">
                  <template slot-scope="scope">
                    <el-select v-model="scope.row.isDeleted" class="edit-input cellItem el-form-item"
                               :class="Object.keys(tableData_3_columns)[5]" placeholder="请选择" size="small"
                               v-if="scope.row.edit">
                      <el-option :value="1" label="是"></el-option>
                      <el-option :value="0" label="否"></el-option>
                    </el-select>
                    <span v-else>{{ scope.row.isDeleted == null ? "" : (scope.row.isDeleted ? "否" : "是")}}</span>
                  </template>
                </el-table-column>-->
                <el-table-column align="center" label="操作" width="240">
                  <template slot-scope="scope">
                    <v-tableOperation :scope="scope" :tableData="tableData_3" v-on:verify="verify3"
                                      v-on:acceptDelRow='acceptDelTable3Row'></v-tableOperation>
                  </template>
                </el-table-column>
              </el-table>
              <v-tabelAddBtn :tableData="tableData_3" :tableData_columns="tableData_3_columns"></v-tabelAddBtn>
            </div>
          </el-card>
        </div>
      </el-tab-pane>
      <el-tab-pane label="失信联合惩戒信息" name="four">
        <div>
          <el-card class="box-card" shadow='nevner'>
            <div slot="header" class="clearfix">
              <div class="card-right-wrap">
                <!--<el-button class="save" type="default" size="medium">获取数据</el-button>-->
                <el-button class="save" type="primary" size="medium" @click="saveSfSxlhcj" :loading="loadingStatus">保存</el-button>
              </div>
              <div class="card-title">失信联合惩戒信息</div>
            </div>
            <div>
              <el-table :data="tableData_4" v-loading.body="listLoading" border fit highlight-current-row
                        style="width: 100%">
                <el-table-column label="序号" type="index" width="50"></el-table-column>
                <el-table-column min-width="200px" :label="tableData_4_columns.sxztmc">
                  <template slot-scope="scope">
                    <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_4_columns)[1]"
                              v-if="scope.row.edit" size="small" v-model="scope.row.sxztmc"></el-input>
                    <span v-else>{{ scope.row.sxztmc}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="200px" :label="tableData_4_columns.cjlb">
                  <template slot-scope="scope">
                    <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_4_columns)[2]"
                              v-if="scope.row.edit" size="small" v-model="scope.row.cjlb"></el-input>
                    <span v-else>{{ scope.row.cjlb}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="200px" :label="tableData_4_columns.cxcs">
                  <template slot-scope="scope">
                    <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_4_columns)[3]"
                              v-if="scope.row.edit" size="small" v-model="scope.row.cxcs"></el-input>
                    <span v-else>{{ scope.row.cxcs}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="200px" :label="tableData_4_columns.cjcs">
                  <template slot-scope="scope">
                    <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_4_columns)[4]"
                              v-if="scope.row.edit" size="small" v-model="scope.row.cjcs"></el-input>
                    <span v-else>{{ scope.row.cjcs}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="200px" :label="tableData_4_columns.sjsj">
                  <template slot-scope="scope">
                    <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_4_columns)[5]"
                              v-if="scope.row.edit" size="small" v-model="scope.row.sjsj"></el-input>
                    <span v-else>{{ scope.row.sjsj}}</span>
                  </template>
                </el-table-column>
                <el-table-column align="center" label="操作" width="240">
                  <template slot-scope="scope">
                    <v-tableOperation :scope="scope" :tableData="tableData_4" v-on:verify="verify4"
                                      v-on:acceptDelRow='acceptDelTable4Row'></v-tableOperation>
                  </template>
                </el-table-column>
              </el-table>
              <v-tabelAddBtn :tableData="tableData_4" :tableData_columns="tableData_4_columns"></v-tabelAddBtn>
            </div>
          </el-card>
        </div>
      </el-tab-pane>
      <el-tab-pane label="行政处罚信息" name="five">
        <div>
          <el-card class="box-card" shadow='nevner'>
            <div slot="header" class="clearfix">
              <div class="card-right-wrap">
                <!--<el-button class="save" type="default" size="medium">获取数据</el-button>-->
                <el-button class="save" type="primary" size="medium" :loading="loadingStatus">保存</el-button>
              </div>
              <div class="card-title">行政处罚信息</div>
            </div>
            <div>
              <el-table :data="tableData_4" v-loading.body="listLoading" border fit highlight-current-row
                        style="width: 100%">
                <el-table-column label="序号" type="index" width="50"></el-table-column>
                <el-table-column min-width="150px" label="处罚事由">
                  <template slot-scope="scope">
                    <template v-if="scope.row.edit">
                      <el-form :model="scope.row" :rules="rules" :id="'origin'+scope.$index"
                               :ref="'form_origin_'+scope.$index" :show-message="false">
                        <el-form-item prop="origin" class="td-form-item">
                          <el-input class="edit-input" size="small" v-model="scope.row.origin"></el-input>
                        </el-form-item>
                      </el-form>
                    </template>
                    <span v-else>{{scope.row.origin}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="300px" label="行政处罚决定书文号">
                  <template slot-scope="scope">
                    <template v-if="scope.row.edit">
                      <el-form :model="scope.row" :rules="rules" :id="'num'+scope.$index"
                               :ref="'form_num_'+scope.$index" :show-message="false">
                        <el-form-item prop="num" class="td-form-item">
                          <el-input class="edit-input" size="small" v-model="scope.row.num"></el-input>
                        </el-form-item>
                      </el-form>
                    </template>
                    <span v-else>{{ scope.row.num}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="300px" label="处罚机关">
                  <template slot-scope="scope">
                    <template v-if="scope.row.edit">
                      <el-form :model="scope.row" :rules="rules" :id="'office'+scope.$index"
                               :ref="'form_office_'+scope.$index" :show-message="false">
                        <el-form-item prop="office" class="td-form-item">
                          <el-input class="edit-input" size="small" v-model="scope.row.office"></el-input>
                        </el-form-item>
                      </el-form>
                    </template>
                    <span v-else>{{ scope.row.office}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="100px" label="处罚决定日期">
                  <template slot-scope="scope">
                    <template v-if="scope.row.edit">
                      <el-form :model="scope.row" :rules="rules" :id="'Date'+scope.$index"
                               :ref="'form_Date_'+scope.$index" :show-message="false">
                        <el-form-item prop="Date" class="td-form-item">
                          <el-input class="edit-input" size="small" v-model="scope.row.Date"></el-input>
                        </el-form-item>
                      </el-form>
                    </template>
                    <span v-else>{{ scope.row.Date}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="100px" label="处罚结果">
                  <template slot-scope="scope">
                    <template v-if="scope.row.edit">
                      <el-form :model="scope.row" :rules="rules" :id="'result'+scope.$index"
                               :ref="'form_result_'+scope.$index" :show-message="false">
                        <el-form-item prop="result" class="td-form-item">
                          <el-input class="edit-input" size="small" v-model="scope.row.result"></el-input>
                        </el-form-item>
                      </el-form>
                    </template>
                    <span v-else>{{ scope.row.result}}</span>
                  </template>
                </el-table-column>
                <el-table-column align="center" label="操作" width="240">
                  <template slot-scope="scope">
                    <v-tableOperation :scope="scope" :tableData="tableData_4" v-on:verify="verify4"></v-tableOperation>
                  </template>
                </el-table-column>
              </el-table>
              <v-tabelAddBtn :tableData="tableData_4" :tableData_columns="tableData_4_columns"></v-tabelAddBtn>
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
  export default {
    data() {
      return {
        activeName: "first",
        listLoading: false,
        loadingStatus:false,
        rules: {},

        tableData_1: [], //表格数据
        addData1: [],
        updateData1: [],
        delRowData1: [],
        tableData_1_columns: {
          id:null,
          zxfy: "执行法院",
          ktsj: "开庭时间",
          ah: "案号",
          ay: "案由",
          edit: false
        }, //表格列字段
        rules_fygg:{
          ktsj: [{validator(rule, value, callback) {
              var errors = [];
              if (!/^[1-9]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/.test(value)) {

                callback('此项必须为日期格式....');
              }
              callback(errors);

            }}
          ],

        },

        tableData_2: [], //表格数据
        addData2: [],
        updateData2: [],
        delRowData2: [],
        tableData_2_columns: {
          id: null,
          pjxx: "判决时间",
          sf: "身份",
          zxfy: "执行法院",
          wszh: "文书字号",
          pjjg: "判决结果",
          ssfcd: "诉讼费承担",
          ay: "案由",
          edit: false
        }, //表格列字段
        rules_fypj:{
          pjxx: [{validator(rule, value, callback) {
              var errors = [];
              if (!/^[1-9]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/.test(value)) {

                callback('此项必须为日期格式....');
              }
              callback(errors);

            }}
          ],

        },


        tableData_3: [], //表格数据
        addData3: [],
        updateData3: [],
        delRowData3: [],
        tableData_3_columns: {
          id: null,
          lasj: "立案时间",
          zxfy: "执行法院",
          zxbd: "执行标的",
          ajzt: "案件状态",
          edit: false
        }, //表格列字段

        rules_bzxgg:{
          lasj: [{validator(rule, value, callback) {
              var errors = [];
              if (!/^[1-9]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/.test(value)) {

                callback('此项必须为日期格式....');
              }
              callback(errors);

            }}
          ],

        },

        tableData_4: [], //表格数据
        addData4: [],
        updateData4: [],
        delRowData4: [],
        tableData_4_columns: {
          id: null,
          sxztmc: "失信主体名称",
          cjlb: "惩戒类别",
          cxcs: "查询次数",
          cjcs: "惩戒次数",
          sjsj: "收录时间",
          edit: false
        },//表格列字段

        rules_sxlhcj: {
          sjsj: [{validator(rule, value, callback) {
                var errors = [];
                if (!/^[1-9]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/.test(value)) {

                  callback('此项必须为日期格式....');
                }
                callback(errors);

              }}
          ],
        },

        tableData_5: [
          {
            origin: "芜湖新闻网",
            num: "http://www.wuhunews.com",
            office: "皖备58741258",
            Date: 0,
            result: "企业",
            edit: false
          }
        ], //表格数据
        tableData_5_columns: {
          origin: "",
          num: "",
          office: "",
          Date: "0",
          result: "",
          edit: false
        } //表格列字段
      };
    },
    computed: {},

    mounted() {
      this.init();
    },
    methods: {
      //初始化信息
      init() {
        this.getSfSxlhcj();
        this.getSfQybzxgg();
        this.getSfFypj();
        this.getSfKtgg();
      },
      //初始化开庭公告信息页面
      getSfKtgg: async function () {
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token")
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/qyfxgk/qyfxgkKtgg/init",
          params
        );
        if (res.data.resultCode == "0") {
          this.tableData_1 = res.data.resultData;
        }
      },
      //保存开庭公告信息
      saveSfKtgg() {
        this.setSfKtgg();
      },
      //保存司法信息中开庭公告数据
      setSfKtgg: async function () {
        this.loadingStatus=true;
        this.tableData_1.forEach((item, index) => {
          if (item.id == null) {
            // if(item.id!=null&&item.id!=""){
              this.addData1.push(item);
            // }
          }
        });
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token"),
          addData: JSON.stringify(this.addData1),
          updateData: JSON.stringify(this.updateData1),
          deleteData: JSON.stringify(this.delRowData1)
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/qyfxgk/qyfxgkKtgg/update",
          params
        );
        if (res.data.resultCode == "0") {
          this.$message({ message: res.data.resultMsg, type: "success" });
          this.getSfKtgg();
        } else {
          this.$message({message: res.data.resultMsg, type: "warning"});
        }
          this.loadingStatus=false;
          this.delRowData1 = [];
          this.updateData1 = [];
          this.addData1 = [];
      },
      //删除开庭公告的数据
      acceptDelTable1Row(val) {
        this.delRowData1.push(val);
      },
      verify1(rowObj, index) {
        var isValid = tableValidates.validateByRow(
          rowObj,
          index,
          this.rules_fygg,
          this
        );
        if (rowObj.id) {
          this.updateData1.push(rowObj);
        }
      },

      ////////////////////////////////////////////////////法院判决信息
      //初始化法院判别信息页面
      getSfFypj: async function () {
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token")
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/qyfxgk/qyfxgkFypjxx/init",
          params
        );
        if (res.data.resultCode == "0") {
          this.tableData_2 = res.data.resultData;
        }
      },
      //保存法院判别信息
      saveSfFypb() {
        this.setSfFypb();
      },
      //保存司法信息中法院判别数据
      setSfFypb: async function () {
         this.loadingStatus=true;
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
          deleteData: JSON.stringify(this.delRowData2)
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/qyfxgk/qyfxgkFypjxx/update",
          params
        );
        if (res.data.resultCode == "0") {
          this.$message({message: res.data.resultMsg, type: "success"});
          this.getSfFypj();
        } else {
          this.$message({message: res.data.resultMsg, type: "warning"});
        }
          this.addData2 = [];
          this.updateData2 = [];
          this.delRowData2 = [];
          this.loadingStatus=false;
      },
      //接受法院判别删除数据
      acceptDelTable2Row(val) {
        this.delRowData2.push(val);
      },
      verify2(rowObj, index) {
        var isValid = tableValidates.validateByRow(
          rowObj,
          index,
          this.rules_fypj,
          this
        );
        if (rowObj.id) {
          this.updateData2.push(rowObj);
        }
      },

      //////////////////////////////////////////////////////////////失信被执行公告
      //初始化司法信息中企业被执行公告页面
      getSfQybzxgg: async function () {
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token")
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/qyfxgk/qyfxgkQyzxggxx/init",
          params
        );
        if (res.data.resultCode == "0") {
          this.tableData_3 = res.data.resultData;
        }
      },
      //保存企业被执行公告信息
      saveSfqybzxgg() {
        this.setSfqybzxgg();
      },
      //保存司法信息中企业被执行公告数据
      setSfqybzxgg: async function () {
         this.loadingStatus=true;
        this.tableData_3.forEach((item, index) => {
          if (item.id == null) {
            this.addData3.push(item);
          }
        });
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token"),
          addData: JSON.stringify(this.addData3),
          updateData: JSON.stringify(this.updateData3),
          deleteData: JSON.stringify(this.delRowData3)
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/qyfxgk/qyfxgkQyzxggxx/update",
          params
        );
        if (res.data.resultCode == "0") {
          this.$message({message: res.data.resultMsg, type: "success"});
          this.getSfQybzxgg();
        } else {
          this.$message({message: res.data.resultMsg, type: "warning"});
        }
         
         this.addData3 = [];
         this.updateData3 = [];
         this.delRowData3 = [];
         this.loadingStatus=false;
      },
      //接受失信联合惩戒删除的数据
      acceptDelTable3Row(val) {
        this.delRowData3.push(val);
      },
      verify3(rowObj, index) {
        var isValid = tableValidates.validateByRow(
          rowObj,
          index,
          this.rules_bzxgg,
          this
        );
        if (rowObj.id) {
          this.updateData3.push(rowObj);
        }
      },

      ///////////////////////////////////////////////////////失信联合惩戒
      //初始化司法信息中失信联合惩戒页面
      getSfSxlhcj: async function () {
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token")
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/qyfxgk/qyfxgkSxlhcjxx/init",
          params
        );
        if (res.data.resultCode == "0") {
          this.tableData_4 = res.data.resultData;
        }
      },
      //保存失信联合惩戒信息
      saveSfSxlhcj() {
        this.setSfSxlhcj();
      },
      //保存司法信息中失信联合惩戒数据
      setSfSxlhcj: async function () {
        this.loadingStatus=true;
        this.tableData_4.forEach((item, index) => {
          if (item.id == null) {
            this.addData4.push(item);
          }
        });
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token"),
          addData: JSON.stringify(this.addData4),
          updateData: JSON.stringify(this.updateData4),
          deleteData: JSON.stringify(this.delRowData4)
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/qyfxgk/qyfxgkSxlhcjxx/update",
          params
        );
        if (res.data.resultCode == "0") {
          this.$message({message: res.data.resultMsg, type: "success"});
          
          this.getSfSxlhcj();
        } else {
          this.$message({message: res.data.resultMsg, type: "warning"});
        }
        this.delRowData4 = [];
        this.updateData4 = [];
        this.addData4 = [];
        this.loadingStatus=false;
      },
      //接受失信联合惩戒删除的数据
      acceptDelTable4Row(val) {
        this.delRowData4.push(val);
      },
      verify4(rowObj, index) {
        var isValid = tableValidates.validateByRow(
          rowObj,
          index,
          this.rules_sxlhcj,
          this
        );
        if (rowObj.id) {
          this.updateData4.push(rowObj);
        }
      },

      handleClick(tab, event) {
        console.log(tab, event);
      },
    },
    components: {
      "v-tabelAddBtn": tabelAddBtn,
      "v-tableOperation": tableOperation
    }
  };
</script>

<style>
</style>
