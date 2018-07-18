<template>
  <div>
    <div>
      <el-card class="box-card" shadow='nevner'>
        <div slot="header" class="clearfix">
          <div class="card-right-wrap">
            <el-button type="default" size="medium">获取数据</el-button>
            <el-button type="primary" size="medium" @click="saveSbgjjjnRs">保存</el-button>
          </div>
          <div class="card-title"> 社保及公积金缴纳人数</div>
        </div>
        <!-- 表格容器 -->
        <div>
          <div class="el-table el-table--border el-table--enable-row-hover el-table--enable-row-transition">
            <table class="el-table__body text-center" style="width:100%" cellspacing="0" cellpadding="0" border="0">
              <thead>
              <tr>
                <th class=" text-center">
                  <div class="cell">公积金缴纳人数（人）</div>
                </th>
                <th class=" text-center">
                  <div class="cell">公积金缴纳人数的比例</div>
                </th>
                <th class=" text-center">
                  <div class="cell">社保缴纳人数（人）</div>
                </th>
                <th class=" text-center">
                  <div class="cell">社保缴纳人数的比例</div>
                </th>

              </tr>
              </thead>
              <tbody>
              <tr class="el-table__row">
                <td>
                  <div class="cell strong">
                    <el-input v-model="tableData_1.gjjjnRs" placeholder="公积金缴纳人数（人）"></el-input>
                  </div>
                </td>
                <td>
                  <div class="cell">
                    <el-input v-model="tableData_1.gjjjnRsbl" placeholder="公积金缴纳人数的比例"></el-input>
                  </div>
                </td>
                <td>
                  <div class="cell">
                    <el-input v-model="tableData_1.sbjnRs" placeholder="社保缴纳人数（人）"></el-input>
                  </div>
                </td>
                <td>
                  <div class="cell">
                    <el-input v-model="tableData_1.sbjnRsbl" placeholder="社保缴纳人数的比例"></el-input>
                  </div>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </el-card>
    </div>
    <div>
      <el-card class="box-card" shadow='nevner'>
        <div slot="header" class="clearfix">
          <div class="card-right-wrap">
            <el-button type="primary" size="medium" @click="saveSbgjjjnRsQksm">保存</el-button>
          </div>
          <div class="card-title">公司社保及公积金缴纳人数——情况说明</div>
        </div>
        <!-- 表格容器 -->
        <div>
          <el-form class="form clearfix" size="small" :model="summaryForm_jnsm">
            <el-form-item>
              <el-input type="textarea" :rows="5" v-model="summaryForm_jnsm.content"></el-input>
            </el-form-item>
          </el-form>
        </div>
      </el-card>
    </div>
    <div>
      <el-card class="box-card" shadow='nevner'>
        <div slot="header" class="clearfix">
          <div class="card-right-wrap">
            <el-button type="default" size="medium">获取数据</el-button>
            <el-button type="default" size="medium" @click="downloadFile">模板下载</el-button>
            <div style="display:inline-block">
              <el-upload class="upload-button" :data="param" action="/hspt-web-api/data_entry/gsyyxx/sbGjj/import"
                         :show-file-list='false' :on-success="handleSuccess" :on-progress='handleProgess'>
                <el-button size="medium" type="default">数据导入</el-button>
              </el-upload>
            </div>
            <el-button type="primary" size="medium" @click="saveSbgjj">保存</el-button>
          </div>
          <div class="card-title">社保缴纳趋势图</div>
        </div>
        <!-- 表格容器 -->
        <div>
          <el-table :data="tableData" v-loading.body="listLoading" border fit highlight-current-row style="width: 100%">
            <el-table-column label="序号" type="index" width="50"></el-table-column>
            <el-table-column min-width="300px" :label="tableData_columns.sbjnYf">
              <template slot-scope="scope">
                <template v-if="scope.row.edit">
                  <el-form :model="scope.row" :rules="rules" :id="'date'+scope.$index" :ref="'form_date_'+scope.$index"
                           :show-message="false">
                    <el-form-item prop="date" class="td-form-item">
                      <el-input class="edit-input" size="small" v-model="scope.row.sbjnYf"></el-input>
                    </el-form-item>
                  </el-form>
                </template>
                <span v-else>{{scope.row.sbjnYf}}</span>
              </template>
            </el-table-column>
            <el-table-column min-width="300px" :label="tableData_columns.sbjnRs">
              <template slot-scope="scope">
                <template v-if="scope.row.edit">
                  <el-form :model="scope.row" :rules="rules" :id="'num'+scope.$index" :ref="'form_num_'+scope.$index"
                           :show-message="false">
                    <el-form-item prop="num" class="td-form-item">
                      <el-input class="edit-input" size="small" v-model="scope.row.sbjnRs"></el-input>
                    </el-form-item>
                  </el-form>
                </template>
                <span v-else>{{ scope.row.sbjnRs}}</span>
              </template>
            </el-table-column>
            <el-table-column min-width="300px" :label="tableData_columns.sbjnZe">
              <template slot-scope="scope">
                <template v-if="scope.row.edit">
                  <el-form :model="scope.row" :rules="rules" :id="'totalMoney'+scope.$index"
                           :ref="'form_totalMoney_'+scope.$index" :show-message="false">
                    <el-form-item prop="totalMoney" class="td-form-item">
                      <el-input class="edit-input" size="small" v-model="scope.row.sbjnZe"></el-input>
                    </el-form-item>
                  </el-form>
                </template>
                <span v-else>{{ scope.row.sbjnZe}}</span>
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
    <div>
      <el-card class="box-card" shadow='nevner'>
        <div slot="header" class="clearfix">
          <div class="card-right-wrap">
            <el-button type="primary" size="medium" @click="saveSbgjjjnRsQssm">保存</el-button>
          </div>
          <div class="card-title">公司社保及公积金缴纳人数——情况分析</div>
        </div>
        <!-- 表格容器 -->
        <div>
          <el-form class="form clearfix" size="small"  :model="summaryForm_qssm">
            <el-form-item>
              <el-input type="textarea" :rows="5" v-model="summaryForm_qssm.content"></el-input>
            </el-form-item>
          </el-form>
        </div>
      </el-card>
    </div>
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
        param: {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token"),
        },
        labelPosition: "right",
        listLoading: false,
        summaryForm_jnsm: {
          content: ""
        },
        summaryForm_qssm: {
          content: ""
        },
        tableData: [],
        tableData_columns: {
          sbjnYf: "日期",
          sbjnRs: "社保缴纳人数",
          sbjnZe: "社保缴纳总额",
          edit: false
        },

        //----------------------------- 社保及公积金缴纳人数----------------------------------//
        tableData_1: [],
        deleteData_1: [],
        addData_1: [],
        updateData_1: [],
        tableData_1_columns: {
          id: null,
          gjjjnRs: "公积金缴纳人数（人）",
          gjjjnRsbl: "公积金缴纳人数的比例",
          sbjnRs: "社保缴纳人数（人）",
          sbjnRsbl: "社保缴纳人数的比例",
          edit: false
        },
        //规则
        rules: {
          date: [
            {
              required: true,
              message: "请选择年份",
              trigger: "null"
            }
          ],
          num: [
            {
              required: true,
              message: "请输入荣誉信息",
              trigger: "null"
            }
          ],
          totalMoney: [
            {
              required: true,
              message: "请输入荣誉信息",
              trigger: "null"
            }
          ]
        }
      };
    },
    computed: {},
    mounted() {
      this.getSbgjjjnRs();
      this.getSbgjjjnRsQksm();
      this.getSbgjj();
    },
    methods: {
      verify(row, index) {
        row.edit = false;
      },

      //---------------------------- 社保及公积金缴纳人数------------------------//
      getSbgjjjnRs: async function () {
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token")
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/gsyyxx/sbGjj/sbgjjjnrs",
          params
        );
        if (res.data.resultCode == "0") {
          this.tableData_1 = res.data.resultData.data;
        }
      },
      saveSbgjjjnRs: async function () {
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token"),
          data: JSON.stringify(this.tableData_1)
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/gsyyxx/sbGjj/saveJnRs",
          params
        );
        if (res.data.resultCode == "0") {
          this.$message({message: res.data.resultMsg, type: "success"});
          this.getSbgjjjnRs();
        } else {
          this.$message({message: res.data.resultMsg, type: "warning"});
        }
      },

      //---------------------------- 社保及公积金缴纳人数--情况说明------------------------//
      getSbgjjjnRsQksm: async function () {
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token")
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/gsyyxx/sbGjj/sbgjjjnsm",
          params
        );
        if (res.data.resultCode == "0" && res.data.resultData.data != null) {
          this.summaryForm_jnsm.content = res.data.resultData.data.qkSm;
          this.summaryForm_qssm.content = res.data.resultData.data.qsSm;
        }
      },

//保存情况说明
      saveSbgjjjnRsQksm: async function () {
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token"),
          sbGjjSm: this.summaryForm_jnsm.content,
          type: 'qksm'
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/gsyyxx/sbGjj/saveJnSm",
          params
        );
        if (res.data.resultCode == "0") {
          this.$message({message: res.data.resultMsg, type: "success"});
          this.getSbgjjjnRsQksm();
        } else {
          this.$message({message: res.data.resultMsg, type: "warning"});
        }
      },

      //保存趋势说明
      saveSbgjjjnRsQssm: async function () {
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token"),
          sbGjjSm: this.summaryForm_qssm.content,
          type: 'qssm'
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/gsyyxx/sbGjj/saveJnSm",
          params
        );
        if (res.data.resultCode == "0") {
          this.$message({message: res.data.resultMsg, type: "success"});
          this.getSbgjjjnRsQksm();
        } else {
          this.$message({message: res.data.resultMsg, type: "warning"});
        }
      },
      //---------------------------- 社保缴纳------------------------//
      getSbgjj: async function () {
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token")
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/gsyyxx/sbGjj/jnMxData",
          params
        );
        if (res.data.resultCode == "0" && res.data.resultData.data != null) {
          this.tableData = res.data.resultData.data.sbGjjMxTableData;
          this.tableData = res.data.resultData.data.sbGjjMxTableData;
        }
      },

      //保存社保缴纳明细
      saveSbgjj: async function () {
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token"),
          excelData: JSON.stringify(this.tableData),
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/gsyyxx/sbGjj/saveJnMx",
          params
        );
        if (res.data.resultCode == "0") {
          this.$message({message: res.data.resultMsg, type: "success"});
          this.getSbgjjjnRsQksm();
        } else {
          this.$message({message: res.data.resultMsg, type: "warning"});
        }
      },
      downloadFile: async function () {
        let link = document.createElement("a");
        link.style.display = "none";
        link.href = "http://testdfs.creditstate.cn/group1/M00/02/1B/rBj-DlqgobmAZCnOAAAj6-fLS0804.xlsx";
        link.setAttribute("download", "测试.xls");
        document.body.appendChild(link);
        link.click();
      },

      //////////////////////////////////////////////////////////////
      handleSuccess(res, file) {
        if (res.resultCode == "0") {
          this.$message({message: res.resultMsg, type: "success"});
          this.tableData = res.resultMapData.data.newExcelData;
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
</style>
