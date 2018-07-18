<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="股权结构" name="first">
        <div>
          <el-card class="box-card" shadow='nevner'>
            <div slot="header" class="clearfix">
              <div class="card-right-wrap">
                <el-button class="save" type="primary" size="medium" @click="saveFssgsGqjg">保存</el-button>
              </div>
              <div class="card-title">股权结构（非上市公司）</div>
            </div>
            <div>
              <el-table :data="tableData" v-loading.body="listLoading" border fit highlight-current-row show-summary
                        :summary-method="getSummaries" style="width: 100%">
                <el-table-column label="序号" type="index" width="50"></el-table-column>
                <el-table-column min-width="100px" :label="tableData_columns.gdxm">
                  <template slot-scope="scope">
                    <el-input class="edit-input cellItem el-form-item" v-model="scope.row.gdxm"
                              :class="Object.keys(tableData_columns)[1]" v-if="scope.row.edit" size="small"></el-input>
                    <span v-else>{{ scope.row.gdxm}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="120px" :label="tableData_columns.czbl" prop="czbl">
                  <template slot-scope="scope">
                    <el-input class="edit-input cellItem el-form-item" v-model="scope.row.czbl"
                              :class="Object.keys(tableData_columns)[2]" v-if="scope.row.edit" size="small"></el-input>
                    <span v-else>{{ scope.row.czbl}}</span>
                  </template>
                </el-table-column>
                <!-- <el-table-column min-width="200px" :label="tableData_columns.isEff">
                                    <template slot-scope="scope">
                                        <el-select v-model="scope.row.isEff" class="edit-input cellItem el-form-item" :class="Object.keys(tableData_columns)[3]" placeholder="请选择" size="small" v-if="scope.row.edit">
                                            <el-option :value="1" label="有效"></el-option>
                                            <el-option :value="0" label="无效"></el-option>
                                        </el-select>
                                        <span v-else>{{ scope.row.isEff==null?"":(scope.row.isEff?"有效":"无效")}}</span>
                                    </template>
                                </el-table-column> -->
                <el-table-column min-width="140px" :label="tableData_columns.rjcz" prop="rjcz">
                  <template slot-scope="scope">
                    <el-input class="edit-input cellItem el-form-item" v-model="scope.row.rjcz"
                              :class="Object.keys(tableData_columns)[3]" v-if="scope.row.edit" size="small"></el-input>
                    <span v-else>{{ scope.row.rjcz}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="140px" :label="tableData_columns.rjczrq">
                  <template slot-scope="scope">
                    <el-date-picker v-model="scope.row.rjczrq" class="el-form-item" value-format="yyyy-MM-dd" :class="Object.keys(tableData_columns)[4]" v-if="scope.row.edit" type="date" placeholder="选择日期" style="width: 100%;" :clearable='false'></el-date-picker>
                    <span v-else>{{scope.row.rjczrq}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="140px" :label="tableData_columns.sjcz" prop="sjcz">
                  <template slot-scope="scope">
                    <el-input class="edit-input cellItem el-form-item" v-model="scope.row.sjcz"
                              :class="Object.keys(tableData_columns)[5]" v-if="scope.row.edit" size="small"></el-input>
                    <span v-else>{{ scope.row.sjcz}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="140px" :label="tableData_columns.sjczrq" prop="sjczrq">
                  <template slot-scope="scope">
                    <el-date-picker v-model="scope.row.sjczrq" class="el-form-item" value-format="yyyy-MM-dd" :class="Object.keys(tableData_columns)[6]" v-if="scope.row.edit" type="date" placeholder="选择日期" style="width: 100%;" :clearable='false'></el-date-picker>
                    <!--<el-input class="edit-input cellItem el-form-item" v-model="scope.row.sjczrq"-->
                              <!--:class="Object.keys(tableData_columns)[5]" v-if="scope.row.edit" size="small"></el-input>-->
                    <span v-else>{{ scope.row.sjczrq}}</span>
                  </template>
                </el-table-column>
                <el-table-column align="center" label="操作" width="240">
                  <template slot-scope="scope">
                    <v-tableOperation :scope="scope" :tableData="tableData" v-on:verify="verify_fssgx"
                                      v-on:acceptDelRow='acceptDelRow'></v-tableOperation>
                  </template>
                </el-table-column>
              </el-table>
              <v-tabelAddBtn :tableData="tableData" :tableData_columns="tableData_columns"></v-tabelAddBtn>
            </div>
          </el-card>
        </div>
        <div>
          <el-card class="box-card" shadow='nevner'>
            <div slot="header" class="clearfix">
              <div class="card-right-wrap">
                <el-button class="save" type="primary" size="medium" @click="saveSsgsGqjg">保存</el-button>
              </div>
              <div class="card-title">股权结构（上市公司）</div>
            </div>
            <div>
              <el-table :data="tableData_1" v-loading.body="listLoading" border fit highlight-current-row show-summary
                        :summary-method="getSummaries" style="width: 100%">
                <el-table-column label="序号" type="index" width="50"></el-table-column>
                <el-table-column min-width="180px" :label="tableData_1_columns.gdxm" prop="gdxm">
                  <template slot-scope="scope">
                    <el-input class="edit-input cellItem el-form-item" v-model="scope.row.gdxm"
                              :class="Object.keys(tableData_1_columns)[1]" v-if="scope.row.edit"
                              size="small"></el-input>
                    <span v-else>{{ scope.row.gdxm}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="200px" :label="tableData_1_columns.czbl" prop="czbl">
                  <template slot-scope="scope">
                    <el-input class="edit-input cellItem el-form-item" v-model="scope.row.czbl"
                              :class="Object.keys(tableData_1_columns)[2]" v-if="scope.row.edit"
                              size="small"></el-input>
                    <span v-else>{{ scope.row.czbl}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="200px" :label="tableData_1_columns.cgs" prop="cgs">
                  <template slot-scope="scope">
                    <el-input class="edit-input cellItem el-form-item" v-model="scope.row.cgs"
                              :class="Object.keys(tableData_1_columns)[3]" v-if="scope.row.edit"
                              size="small"></el-input>
                    <span v-else>{{ scope.row.cgs}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="200px" :label="tableData_1_columns.cgbh" prop="cgbh">
                  <template slot-scope="scope">
                    <el-input class="edit-input cellItem el-form-item" v-model="scope.row.cgbh"
                              :class="Object.keys(tableData_1_columns)[4]" v-if="scope.row.edit"
                              size="small"></el-input>
                    <span v-else>{{ scope.row.cgbh}}</span>
                  </template>
                </el-table-column>
                <el-table-column align="center" label="操作" width="240">
                  <template slot-scope="scope">
                    <v-tableOperation :scope="scope" :tableData="tableData_1" v-on:verify="verify_ssgx"
                                      v-on:acceptDelRow='acceptDelRow1'></v-tableOperation>
                  </template>
                </el-table-column>
              </el-table>
              <v-tabelAddBtn :tableData="tableData_1" :tableData_columns="tableData_1_columns"></v-tabelAddBtn>
            </div>
          </el-card>
        </div>
      </el-tab-pane>
      <el-tab-pane label="企业图谱" name="second">
        <div>
          <el-card class="box-card" shadow='nevner'>
            <div slot="header" class="clearfix">
              <div class="card-right-wrap">
                <el-upload class="upload-button" :data="picUploadParam"
                           action="/hspt-web-api/data_entry/gqjg/qytp/upload" accept='image/*' :show-file-list='false'
                           :on-success="handleSuccess" :on-progress='handleProgess'>
                  <el-button size="medium" type="primary">上传图片</el-button>
                </el-upload>
                <!-- <el-button class="save" type="primary" size="medium">保存</el-button> -->
              </div>
              <div class="card-title">股权结构</div>
            </div>
            <!-- 图片容器 -->
            <div class="img-preview">
              <img :src="imgurl_qytp" alt="" srcset="">
            </div>
          </el-card>
        </div>
        <div>
          <el-card class="box-card" shadow='nevner'>
            <div slot="header" class="clearfix">
              <div class="card-right-wrap">
                <el-button class="save" type="primary" size="medium" @click="saveFzjxsqyqk">保存</el-button>
              </div>
              <div class="card-title">分支及下属企业情况</div>
            </div>
            <!-- 表格容器 -->
            <div>
              <el-table :data="tableData_2" v-loading.body="listLoading" border fit highlight-current-row
                        style="width: 100%">
                <el-table-column label="序号" type="index" width="50"></el-table-column>
                <el-table-column min-width="110px" :label="tableData_2_columns.xsjgmc">
                  <template slot-scope="scope">
                    <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_2_columns)[1]"
                              v-if="scope.row.edit" size="small" v-model.number="scope.row.xsjgmc"></el-input>
                    <span v-else>{{ scope.row.xsjgmc}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="200px" :label="tableData_2_columns.szd">
                  <template slot-scope="scope">
                    <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_2_columns)[2]"
                              v-if="scope.row.edit" size="small" v-model.number="scope.row.szd"></el-input>
                    <span v-else>{{ scope.row.szd}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="200px" :label="tableData_2_columns.ywnr">
                  <template slot-scope="scope">
                    <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_2_columns)[3]"
                              v-if="scope.row.edit" size="small" v-model="scope.row.ywnr"></el-input>
                    <span v-else>{{ scope.row.ywnr}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="200px" :label="tableData_2_columns.tyshxydm">
                  <template slot-scope="scope">
                    <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_2_columns)[4]"
                              v-if="scope.row.edit" size="small" v-model="scope.row.tyshxydm"></el-input>
                    <span v-else>{{ scope.row.tyshxydm}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="200px" :label="tableData_2_columns.xsgxbl">
                  <template slot-scope="scope">
                    <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_2_columns)[5]"
                              v-if="scope.row.edit" size="small" v-model="scope.row.xsgxbl"></el-input>
                    <span v-else>{{ scope.row.xsgxbl}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="200px" :label="tableData_2_columns.lrgxbl">
                  <template slot-scope="scope">
                    <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_2_columns)[6]"
                              v-if="scope.row.edit" size="small" v-model="scope.row.lrgxbl"></el-input>
                    <span v-else>{{ scope.row.lrgxbl}}</span>
                  </template>
                </el-table-column>
                <el-table-column align="center" label="操作" width="240">
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
                <el-button class="save" type="primary" size="medium" @click="saveGlqy">保存</el-button>
              </div>
              <div class="card-title">关联企业</div>
            </div>
            <!-- 表格容器 -->
            <div>
              <el-table :data="tableData_3" v-loading.body="listLoading" border fit highlight-current-row
                        style="width: 100%">
                <el-table-column label="序号" type="index" width="50"></el-table-column>
                <el-table-column min-width="110px" :label="tableData_3_columns.gsmc">
                  <template slot-scope="scope">
                    <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_3_columns)[1]"
                              v-if="scope.row.edit" size="small" v-model.number="scope.row.gsmc"></el-input>
                    <span v-else>{{ scope.row.gsmc}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="200px" :label="tableData_3_columns.ywnr">
                  <template slot-scope="scope">
                    <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_3_columns)[2]"
                              v-if="scope.row.edit" size="small" v-model.number="scope.row.ywnr"></el-input>
                    <span v-else>{{ scope.row.ywnr}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="200px" :label="tableData_3_columns.hbgssfyywwl">
                  <template slot-scope="scope">
                    <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_3_columns)[3]"
                              v-if="scope.row.edit" size="small" v-model="scope.row.hbgssfyywwl"></el-input>
                    <span v-else>{{ scope.row.hbgssfyywwl}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="200px" :label="tableData_3_columns.sfygljy">
                  <template slot-scope="scope">
                    <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_3_columns)[4]"
                              v-if="scope.row.edit" size="small" v-model="scope.row.sfygljy"></el-input>
                    <span v-else>{{ scope.row.sfygljy}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="200px" :label="tableData_3_columns.sfxsqy">
                  <template slot-scope="scope">
                    <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_3_columns)[5]"
                              v-if="scope.row.edit" size="small" v-model="scope.row.sfxsqy"></el-input>
                    <span v-else>{{ scope.row.sfxsqy}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="200px" :label="tableData_3_columns.zczb">
                  <template slot-scope="scope">
                    <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_3_columns)[6]"
                              v-if="scope.row.edit" size="small" v-model="scope.row.zczb"></el-input>
                    <span v-else>{{ scope.row.zczb}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="200px" :label="tableData_3_columns.cgbl">
                  <template slot-scope="scope">
                    <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_3_columns)[7]"
                              v-if="scope.row.edit" size="small" v-model="scope.row.cgbl"></el-input>
                    <span v-else>{{ scope.row.cgbl}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="200px" :label="tableData_3_columns.zw">
                  <template slot-scope="scope">
                    <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_3_columns)[8]"
                              v-if="scope.row.edit" size="small" v-model="scope.row.zw"></el-input>
                    <span v-else>{{ scope.row.zw}}</span>
                  </template>
                </el-table-column>
                <el-table-column align="center" label="操作" width="240">
                  <template slot-scope="scope">
                    <v-tableOperation :scope="scope" :tableData="tableData_3" v-on:verify="verify3"
                                      v-on:acceptDelRow='acceptDelRow3'></v-tableOperation>
                  </template>
                </el-table-column>
              </el-table>
              <v-tabelAddBtn :tableData="tableData_3" :tableData_columns="tableData_3_columns"></v-tabelAddBtn>
            </div>
          </el-card>
        </div>

      </el-tab-pane>
      <el-tab-pane label="组织架构" name="third">
        <div>
          <el-card class="box-card" shadow='nevner'>
            <div slot="header" class="clearfix">
              <div class="card-right-wrap">
                <el-upload class="upload-button" :data="picUploadParam"
                           action="/hspt-web-api/data_entry/gqjg/zzjg/upload" accept='image/*' :show-file-list='false'
                           :on-success="handleSuccess" :on-progress='handleProgess'>
                  <el-button size="medium" type="primary">上传图片</el-button>
                </el-upload>
                <!-- <el-button class="save" type="primary" size="medium">保存</el-button> -->
              </div>
              <div class="card-title">组织架构</div>
            </div>
            <!-- 图片容器 -->
            <div class="img-preview">
              <img :src="imgurl_zzjg" alt="" srcset="">
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
        picUploadParam: {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token"),
          qytpId: "",
          zzjgId: ""
        },
        activeName: "first",
        listLoading: false,
        imgurl_qytp: '',
        imgurl_zzjg: '',
        //   fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
        //验证规则
        rules: {},
        rules_fssgx: {
          czbl: [
            {type: "number", message: "出资比例需要录入数字",transform(value) {return Number(value);}}
          ],
          rjcz: [
            {type: "number", message: "认缴出资需要录入数字",transform(value) {return Number(value);}}
          ],
          sjcz: [
            {type: "number", message: "实缴出资需要录入数字",transform(value) {return Number(value);}}
          ]
        },

        rules_ssgx: {
          czbl: [
            {type: "number", message: "出资比例需要录入数字",transform(value) {return Number(value);}}
          ],
          cgs: [
            {type: "number", message: "持股数需要录入数字",transform(value) {return Number(value);}}
          ],
          cgbh: [
            {type: "number", message: "持股变化需要录入数字",transform(value) {return Number(value);}}
          ]
        },
        rules_fzjxsqyqk: {
          xsgxbl: [
            {type: "number", message: "销售贡献比例需要录入数字",transform(value) {return Number(value);}}
          ],
          lrgxbl: [
            {type: "number", message: "利润贡献比例需要录入数字",transform(value) {return Number(value);}}
          ]
        },
        rules_glqy: {
          zczb: [
            {type: "number", message: "注册资本需要录入数字",transform(value) {return Number(value);}}
          ],
          cgbl: [
            {type: "number", message: "持股比例需要录入数字",transform(value) {return Number(value);}}
          ]
        },


        ////////////////股权结构（非上市公司）
        tableData: [],
        delRowData: [],
        addData: [],
        updateData: [],
        tableData_columns: {
          id: null,
          gdxm: "股东姓名",
          czbl: "出资比例（%）",
          rjcz: "认缴出资（万元）",
          rjczrq: "认缴出资日期",
          sjcz: "实缴出资（万元）",
          sjczrq: "实缴出资日期"
        },
        ///////////////////////////股权结构（上市公司）
        tableData_1: [],
        delRowData_1: [],
        addData_1: [],
        updateData_1: [],
        tableData_1_columns: {
          id: null,
          gdxm: "股东姓名",
          czbl: "出资比例（%）",
          cgs: "持股数（股）",
          cgbh: "持股变化（股）",
          edit: false
        },

        //////////////////////////分支及下属企业情况
        tableData_2: [],
        delRowData_2: [],
        addData_2: [],
        updateData_2: [],
        tableData_2_columns: {
          id: null,
          xsjgmc: "下属公司/分公司名称",
          szd: "所在地",
          ywnr: "业务内容",
          tyshxydm: "统一社会信用代码",
          xsgxbl: "销售贡献比例%",
          lrgxbl: "利润贡献比例%",
          edit: false
        },

        //////////////////////////关联企业

        tableData_3: [],
        delRowData_3: [],
        addData_3: [],
        updateData_3: [],
        tableData_3_columns: {
          id: null,
          gsmc: "公司名称",
          ywnr: "业务内容",
          hbgssfyywwl: "和目标公司之间是否有业务往来",
          sfygljy: "是否有关联交易",
          sfxsqy: "是否下属企业",
          zczb: "注册资本 (万元)",
          cgbl: "持股比例",
          zw: "职位",
          edit: false
        }
      };
    },
    computed: {
      isMerge() {
        return this.tableData_3.isMerge ? "是" : "否";
      }
    },
    mounted() {
      this.getFssgsGqjg(); //股权结构（非上市公司）
      this.getSsgsGqjg(); //股权结构（上市公司）
      this.getFzjxsqyqk(); //分支及下属企业情况
      this.getGlqy(); //关联企业
      this.retrieveQytpPic();//企业图谱
      this.retrieveZzjgPic();//组织架构
    },
    methods: {
      //点击标签页触发事件
      handleClick(tab, event) {
        //   console.log(tab, event);
      },

      ////////////////////////////////获取股权结构（非上市公司）

      //接受删除的数据
      acceptDelRow(val) {
        this.delRowData.push(val);
      },
      verify(rowObj, rowIndex) {
        tableValidates.validateByRow(rowObj, rowIndex, this.rules, this);
        if (rowObj.id) {
          this.updateData.push(rowObj);
        }
      },
      verify_fssgx(rowObj, rowIndex) {
        tableValidates.validateByRow(rowObj, rowIndex, this.rules_fssgx, this);
        if (rowObj.id) {
          this.updateData.push(rowObj);
        }
      },
      verify_ssgx(rowObj, rowIndex) {
        tableValidates.validateByRow(rowObj, rowIndex, this.rules_ssgx, this);
        if (rowObj.id) {
          this.updateData_1.push(rowObj);
        }
      },
      getFssgsGqjg: async function () {
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token")
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/gqjg/fssgs/list",
          params
        );
        if (res.data.resultCode == "0") {
          this.tableData = res.data.resultData;
        }
      },

      saveFssgsGqjg: async function () {
        this.tableData.forEach((item, index) => {
          if (item.id == null) {
            this.addData.push(item);
          }
        });
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token"),
          companyName: sessionStorage.getItem("companyName"),
          isSub: "0",
          addData: JSON.stringify(this.addData),
          updateData: JSON.stringify(this.updateData),
          delData: JSON.stringify(this.delRowData)
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/gqjg/fssgs/save",
          params
        );
        if (res.data.resultCode == "0") {
          this.$message({message: res.data.resultMsg, type: "success"});
          this.delRowData = [];
          this.updateData = [];
          this.addData = [];
          this.getFssgsGqjg();
        } else {
          this.$message({message: res.data.resultMsg, type: "warning"});
        }
      },

      /////////////////////////////////////////////////////获取股权结构（上市公司）

      //接受删除的数据
      acceptDelRow1(val) {
        this.delRowData_1.push(val);
      },
      verify1(rowObj, rowIndex) {
        tableValidates.validateByRow(rowObj, rowIndex, this.rules, this);
        if (rowObj.id) {
          this.updateData_1.push(rowObj);
        }
      },

      getSsgsGqjg: async function () {
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token")
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/gqjg/ssgs/list",
          params
        );
        if (res.data.resultCode == "0") {
          this.tableData_1 = res.data.resultData;
        }
      },

      saveSsgsGqjg: async function () {
        this.tableData_1.forEach((item, index) => {
          if (item.id == null) {
            this.addData_1.push(item);
          }
        });
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token"),
          companyName: sessionStorage.getItem("companyName"),
          isSub: "0",
          addData: JSON.stringify(this.addData_1),
          updateData: JSON.stringify(this.updateData_1),
          delData: JSON.stringify(this.delRowData_1)
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/gqjg/ssgs/save",
          params
        );
        if (res.data.resultCode == "0") {
          this.$message({message: res.data.resultMsg, type: "success"});
          this.delRowData_1 = [];
          this.updateData_1 = [];
          this.addData_1 = [];
          this.getSsgsGqjg();
        } else {
          this.$message({message: res.data.resultMsg, type: "warning"});
        }
      },

      /////////////////////////////////////////////////////获取分支及下属企业情况
      acceptDelRow2(val) {
        this.delRowData_2.push(val);
      },
      verify2(rowObj, rowIndex) {
        tableValidates.validateByRow(rowObj, rowIndex, this.rules_fzjxsqyqk, this);
        if (rowObj.id) {
          this.updateData_2.push(rowObj);
        }
      },
      getFzjxsqyqk: async function () {
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token")
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/gqjg/fzjxsqyqk/list",
          params
        );
        if (res.data.resultCode == "0") {
          this.tableData_2 = res.data.resultData.data;
        }
      },
      saveFzjxsqyqk: async function () {
        this.tableData_2.forEach((item, index) => {
          if (item.id == null) {
            this.addData_2.push(item);
          }
        });
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token"),
          addData: JSON.stringify(this.addData_2),
          updateData: JSON.stringify(this.updateData_2),
          delData: JSON.stringify(this.delRowData_2)
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/gqjg/fzjxsqyqk/save",
          params
        );
        if (res.data.resultCode == "0") {
          this.$message({message: res.data.resultMsg, type: "success"});
          this.delRowData_2 = [];
          this.updateData_2 = [];
          this.addData_2 = [];
          this.getFzjxsqyqk();
        } else {
          this.$message({message: res.data.resultMsg, type: "warning"});
        }
      },

      //////////////////////////////////////////////////获取关联企业

      acceptDelRow3(val) {
        this.delRowData_3.push(val);
      },
      verify3(rowObj, rowIndex) {
        tableValidates.validateByRow(rowObj, rowIndex, this.rules_glqy, this);
        if (rowObj.id) {
          this.updateData_3.push(rowObj);
        }
      },
      getGlqy: async function () {
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token")
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/gqjg/glqy/list",
          params
        );
        if (res.data.resultCode == "0") {
          this.tableData_3 = res.data.resultData.data;
        }
      },
      saveGlqy: async function () {
        this.tableData_3.forEach((item, index) => {
          if (item.id == null) {
            this.addData_3.push(item);
          }
        });
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token"),
          addData: JSON.stringify(this.addData_3),
          updateData: JSON.stringify(this.updateData_3),
          delData: JSON.stringify(this.delRowData_3)
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/gqjg/glqy/save",
          params
        );
        if (res.data.resultCode == "0") {
          this.$message({message: res.data.resultMsg, type: "success"});
          this.delRowData_3 = [];
          this.updateData_3 = [];
          this.addData_3 = [];
          this.getGlqy();
        } else {
          this.$message({message: res.data.resultMsg, type: "warning"});
        }
      },

      /////////////////////////////////////////////////////////////
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
            if (column.property == "czbl") {
              sums[index] += "%";
            } else if (column.property == "rjcz" || column.property == "sjcz") {
              sums[index] += " 万元";
            }
          } else {
            sums[index] = "";
          }
        });
        return sums;
      },
      ///////////////////////////////////////////////////企业图谱
      retrieveQytpPic: async function () {

        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token"),
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/gqjg/qytp/list",
          params
        );
        if (res.data.resultCode == "0") {
          this.imgurl_qytp = res.data.resultData.data.url;
          this.picUploadParam.qytpId = res.data.resultData.data.qytpId;
        } else {
          this.$message({message: res.data.resultMsg, type: "warning"});
        }
      },
      ///////////////////////////////////////////////////组织架构图谱
      retrieveZzjgPic: async function () {
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token"),
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/gqjg/zzjg/list",
          params
        );
        if (res.data.resultCode == "0") {
          this.imgurl_zzjg = res.data.resultData.data.url;
          this.picUploadParam.zzjgId = res.data.resultData.data.zzjgId;
        } else {
          this.$message({message: res.data.resultMsg, type: "warning"});
        }
      },
      //////////////////////////////////////////////////////////////
      handleSuccess(res, file) {
        if (res.resultCode == "0") {
          this.$message({message: res.resultMsg, type: "success"});
          if (res.resultMapData.qytpPicUrl != null)
            this.imgurl_qytp = res.resultMapData.qytpPicUrl;
          else if (res.resultMapData.zzjgPicUrl != null)
            this.imgurl_zzjg = res.resultMapData.zzjgPicUrl;
        } else {
          this.$message({message: res.resultMsg, type: "error"});
        }
      },
      handleProgess() {
        // console.log(arguments)
      }
    },
    components: {
      "v-tabelAddBtn": tabelAddBtn,
      "v-tableOperation": tableOperation
    }
  };
</script>

<style lang="scss" scoped>
  .img-preview {
    height: 200px;
    margin: 20px;
    border: #ebebeb;
    background-color: #eef9ff;
  }

  .upload-button {
    display: inline-block;
  }
</style>

