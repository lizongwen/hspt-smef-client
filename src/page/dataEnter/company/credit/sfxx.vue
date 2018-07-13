<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="法院公告信息" name="first">
        <div>
          <el-card class="box-card" shadow='nevner'>
            <div slot="header" class="clearfix">
              <div class="card-right-wrap">
                <el-button class="save" type="default" size="medium">获取数据</el-button>
                <el-button class="save" type="primary" size="medium">保存</el-button>
              </div>
              <div class="card-title">法院公告信息</div>
            </div>
            <!-- 表格容器 -->
            <div>
              <el-table :data="tableData" v-loading.body="listLoading" border fit highlight-current-row
                        style="width: 100%">
                <el-table-column label="序号" type="index" width="50"></el-table-column>
                <el-table-column min-width="100px" label="执行法院">
                  <template slot-scope="scope">
                    <template v-if="scope.row.edit">
                      <el-form :model="scope.row" :rules="rules" :id="'executive'+scope.$index"
                               :ref="'form_executive_'+scope.$index" :show-message="false">
                        <el-form-item prop="executive" class="td-form-item">
                          <el-input class="edit-input" size="small" v-model="scope.row.executive"></el-input>
                        </el-form-item>
                      </el-form>
                    </template>
                    <span v-else>{{scope.row.executive}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="100px" label="发布时间">
                  <template slot-scope="scope">
                    <template v-if="scope.row.edit">
                      <el-form :model="scope.row" :rules="rules" :id="'time'+scope.$index"
                               :ref="'form_time_'+scope.$index" :show-message="false">
                        <el-form-item prop="time" class="td-form-item">
                          <el-input class="edit-input" size="small" v-model="scope.row.time"></el-input>
                        </el-form-item>
                      </el-form>
                    </template>
                    <span v-else>{{ scope.row.time}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="100px" label="公告类型">
                  <template slot-scope="scope">
                    <template v-if="scope.row.edit">
                      <el-form :model="scope.row" :rules="rules" :id="'lable'+scope.$index"
                               :ref="'form_lable_'+scope.$index" :show-message="false">
                        <el-form-item prop="lable" class="td-form-item">
                          <el-input class="edit-input" size="small" v-model="scope.row.lable"></el-input>
                        </el-form-item>
                      </el-form>
                    </template>
                    <span v-else>{{ scope.row.lable}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="100px" label="公告内容">
                  <template slot-scope="scope">
                    <template v-if="scope.row.edit">
                      <el-form :model="scope.row" :rules="rules" :id="'content'+scope.$index"
                               :ref="'form_content_'+scope.$index" :show-message="false">
                        <el-form-item prop="content" class="td-form-item">
                          <el-input class="edit-input" size="small" v-model="scope.row.content"></el-input>
                        </el-form-item>
                      </el-form>
                    </template>
                    <span v-else>{{ scope.row.content}}</span>
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
      </el-tab-pane>
      <el-tab-pane label="法院判别信息" name="second">
        <div>
          <el-card class="box-card" shadow='nevner'>
            <div slot="header" class="clearfix">
              <div class="card-right-wrap">
                <el-button class="save" type="primary" size="medium">保存</el-button>
              </div>
              <div class="card-title">法院判决信息</div>
            </div>
            <!-- 表格容器 -->
            <div>
              <el-table :data="tableData_1" v-loading.body="listLoading" border fit highlight-current-row
                        style="width: 100%">
                <el-table-column label="序号" type="index" width="50"></el-table-column>
                <el-table-column min-width="300px" label="判决时间">
                  <template slot-scope="scope">
                    <template v-if="scope.row.edit">
                      <el-form :model="scope.row" :rules="rules" :id="'time'+scope.$index"
                               :ref="'form_time_'+scope.$index" :show-message="false">
                        <el-form-item prop="time" class="td-form-item">
                          <el-input class="edit-input" size="small" v-model="scope.row.time"></el-input>
                        </el-form-item>
                      </el-form>
                    </template>
                    <span v-else>{{scope.row.time}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="100px" label="身份">
                  <template slot-scope="scope">
                    <template v-if="scope.row.edit">
                      <el-form :model="scope.row" :rules="rules" :id="'identity'+scope.$index"
                               :ref="'form_identity_'+scope.$index" :show-message="false">
                        <el-form-item prop="identity" class="td-form-item">
                          <el-input class="edit-input" size="small" v-model="scope.row.identity"></el-input>
                        </el-form-item>
                      </el-form>
                    </template>
                    <span v-else>{{ scope.row.identity }}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="100px" label="执行法院">
                  <template slot-scope="scope">
                    <template v-if="scope.row.edit">
                      <el-form :model="scope.row" :rules="rules" :id="'court'+scope.$index"
                               :ref="'form_court_'+scope.$index" :show-message="false">
                        <el-form-item prop="court" class="td-form-item">
                          <el-input class="edit-input" size="small" v-model="scope.row.court"></el-input>
                        </el-form-item>
                      </el-form>
                    </template>
                    <span v-else>{{ scope.row.court}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="100px" label="文书字号">
                  <template slot-scope="scope">
                    <template v-if="scope.row.edit">
                      <el-form :model="scope.row" :rules="rules" :id="'fontSize'+scope.$index"
                               :ref="'form_fontSize_'+scope.$index" :show-message="false">
                        <el-form-item prop="fontSize" class="td-form-item">
                          <el-input class="edit-input" size="small" v-model="scope.row.fontSize"></el-input>
                        </el-form-item>
                      </el-form>
                    </template>
                    <span v-else>{{ scope.row.fontSize}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="100px" label="判决结果">
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
                <el-table-column min-width="100px" label="诉讼费用">
                  <template slot-scope="scope">
                    <template v-if="scope.row.edit">
                      <el-form :model="scope.row" :rules="rules" :id="'cost'+scope.$index"
                               :ref="'form_cost_'+scope.$index" :show-message="false">
                        <el-form-item prop="cost" class="td-form-item">
                          <el-input class="edit-input" size="small" v-model="scope.row.cost"></el-input>
                        </el-form-item>
                      </el-form>
                    </template>
                    <span v-else>{{ scope.row.cost}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="100px" label="案由">
                  <template slot-scope="scope">
                    <template v-if="scope.row.edit">
                      <el-form :model="scope.row" :rules="rules" :id="'causeAction'+scope.$index"
                               :ref="'form_causeAction_'+scope.$index" :show-message="false">
                        <el-form-item prop="causeAction" class="td-form-item">
                          <el-input class="edit-input" size="small" v-model="scope.row.causeAction"></el-input>
                        </el-form-item>
                      </el-form>
                    </template>
                    <span v-else>{{ scope.row.causeAction}}</span>
                  </template>
                </el-table-column>
                <el-table-column align="center" label="操作" width="240">
                  <template slot-scope="scope">
                    <v-tableOperation :scope="scope" :tableData="tableData_1" v-on:verify="verify1"></v-tableOperation>
                  </template>
                </el-table-column>
              </el-table>
              <v-tabelAddBtn :tableData="tableData_1" :tableData_columns="tableData_1_columns"></v-tabelAddBtn>
            </div>
          </el-card>
        </div>
      </el-tab-pane>
      <el-tab-pane label="企业被执行公告信息" name="third">
        <div>
          <el-card class="box-card" shadow='nevner'>
            <div slot="header" class="clearfix">
              <div class="card-right-wrap">
                <el-button class="save" type="default" size="medium">获取数据</el-button>
                <el-button class="save" type="primary" size="medium" @click="saveSfqybzxgg">保存</el-button>
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
                              v-if="scope.row.edit" size="small" v-model.number="scope.row.lasj"></el-input>
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
                              v-if="scope.row.edit" size="small" v-model.number="scope.row.ajzt"></el-input>
                    <span v-else>{{ scope.row.ajzt}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="200px" :label="tableData_3_columns.isDeleted">
                  <template slot-scope="scope">
                    <el-select v-model="scope.row.isDeleted" class="edit-input cellItem el-form-item" :class="Object.keys(tableData_3_columns)[5]" placeholder="请选择" size="small" v-if="scope.row.edit">
                      <el-option :value="1" label="是"></el-option>
                      <el-option :value="0" label="否"></el-option>
                    </el-select>
                    <span v-else>{{ scope.row.isDeleted==null?"":(scope.row.isDeleted?"否":"是")}}</span>
                  </template>
                </el-table-column>
                <el-table-column align="center" label="操作" width="240">
                  <template slot-scope="scope">
                    <v-tableOperation :scope="scope" :tableData="tableData_3" v-on:verify="verify3" v-on:acceptDelRow='acceptDelTable3Row'></v-tableOperation>
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
                <el-button class="save" type="default" size="medium">获取数据</el-button>
                <el-button class="save" type="primary" size="medium" @click="saveSfSxlhcj">保存</el-button>
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
                              v-if="scope.row.edit" size="small" v-model.number="scope.row.sxztmc"></el-input>
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
                <el-table-column min-width="200px" :label="tableData_4_columns.cxcs">
                  <template slot-scope="scope">
                    <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_4_columns)[4]"
                              v-if="scope.row.edit" size="small" v-model.number="scope.row.cxcs"></el-input>
                    <span v-else>{{ scope.row.cxcs}}</span>
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
                <el-button class="save" type="default" size="medium">获取数据</el-button>
                <el-button class="save" type="primary" size="medium">保存</el-button>
              </div>
              <div class="card-title">网站备案</div>
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
        rules: {},

        tableData: [
          {
            executive: "爱福特环保",
            time: 0,
            lable: "2018/02/01",
            content: "05415785",
            edit: false
          }, {
            executive: "爱福特环保1",
            time: 1,
            lable: "2018/02/02",
            content: "05415788",
            edit: false
          }
        ], //表格数据
        tableData_columns: {
          executive: "",
          time: "",
          lable: "",
          content: "",
          edit: false
        }, //表格列字段
        tableData_1: [
          {
            time: "054457",
            identity: "2018/04/01",
            court: "开关寿命试验机",
            fontSize: "25358745",
            result: "中国（CN）",
            cost: "CN205455744",
            causeAction: "授权",
            edit: false
          }
        ], //表格数据
        tableData_1_columns: {
          time: "",
          identity: "",
          court: "",
          fontSize: "",
          result: "",
          cost: "",
          causeAction: "",
          edit: false
        }, //表格列字段

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
          isDeleted: "是否删除",
          edit: false
        }, //表格列字段

        tableData_4: [], //表格数据
        addData: [],
        updateData: [],
        delRowData: [],
        tableData_4_columns: {
          id: null,
          sxztmc: "失信主体名称",
          cjlb: "惩戒类别",
          cxcs: "查询次数",
          cjcs: "惩戒次数",
          sjsj: "收录时间",
          edit: false
        },//表格列字段

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
      },
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
      //保存信息
      saveSfqybzxgg() {
        this.setSfqybzxgg();
      },
      //保存司法信息中企业被执行公告数据
      setSfqybzxgg: async function () {
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
          delData: JSON.stringify(this.delRowData3)
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/qyfxgk/qyfxgkQyzxggxx/update",
          params
        );
        if (res.data.resultCode == "1111") {
          this.$message({message: res.data.resultMsg, type: "success"});
          this.addData3 = [];
          this.updateData3 = [];
          this.delRowData = [];
          this.getSfQybzxgg();
        } else {
          this.$message({message: res.data.resultMsg, type: "warning"});
        }
      },
      //接受失信联合惩戒删除的数据
      acceptDelTable3Row(val) {
        this.delRowData3.push(val);
      },
      verify3(rowObj, index) {
        var isValid = tableValidates.validateByRow(
          rowObj,
          index,
          this.rules,
          this
        );
        if (rowObj.id) {
          this.updateData3.push(rowObj);
        }
      },


      //保存信息
      saveSfSxlhcj() {
        this.setSfSxlhcj();
      },
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
      //保存司法信息中失信联合惩戒数据
      setSfSxlhcj: async function () {
        this.tableData_4.forEach((item, index) => {
          if (item.id == null) {
            this.addData.push(item);
          }
        });
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token"),
          addData: JSON.stringify(this.addData),
          updateData: JSON.stringify(this.updateData),
          delData: JSON.stringify(this.delRowData)
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/qyfxgk/qyfxgkSxlhcjxx/update",
          params
        );
        if (res.data.resultCode == "1111") {
          this.$message({message: res.data.resultMsg, type: "success"});
          this.delRowData = [];
          this.updateData = [];
          this.addData = [];
          this.getSfSxlhcj();
        } else {
          this.$message({message: res.data.resultMsg, type: "warning"});
        }
      },
      //接受失信联合惩戒删除的数据
      acceptDelTable4Row(val) {
        this.delRowData.push(val);
      },
      verify4(rowObj, index) {
        var isValid = tableValidates.validateByRow(
          rowObj,
          index,
          this.rules,
          this
        );
        if (rowObj.id) {
          this.updateData.push(rowObj);
        }
      },

      handleClick(tab, event) {
        console.log(tab, event);
      },
      verify(row, index) {
        row.edit = false;
      },
      verify1(row, index) {
        row.edit = false;
      },
      verify2(row, index) {
        row.edit = false;
      }
    },
    components: {
      "v-tabelAddBtn": tabelAddBtn,
      "v-tableOperation": tableOperation
    }
  };
</script>

<style>
</style>
