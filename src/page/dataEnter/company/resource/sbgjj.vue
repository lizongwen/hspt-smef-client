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

     <!-- 企业公积金echarts图展示  start -->
    <div>
      <el-card class="box-card" shadow='nevner'>
        <div slot="header" class="clearfix">
          <div class="card-title">公司公积金缴纳趋势图</div>
        </div>
        <!-- echarts图div容器 -->
        <div id="echartsApp" class="page-line-chart">
          <ve-line :data="gjjEchartData" :settings="gjjEchartSettings"></ve-line>
        </div>
      </el-card>
    </div>
<!-- 企业公积金echarts图展示  end -->

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
          <div class="card-title">社保缴纳趋明细</div>
        </div>
        <!-- 表格容器 -->
        <div>
          <el-table :data="tableData" v-loading.body="listLoading" border fit highlight-current-row style="width: 100%">
            <el-table-column label="序号" type="index" width="50"></el-table-column>
            <el-table-column min-width="200px" :label="tableData_columns.sbjnYf">
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
            <el-table-column min-width="200px" :label="tableData_columns.sbjnRs">
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
            <el-table-column min-width="200px" :label="tableData_columns.sbjnZe">
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
            <el-button type="default" size="medium">获取数据</el-button>
            <el-button type="default" size="medium">模板下载</el-button>
            <div style="display:inline-block">
              <el-upload class="upload-button" :data="param" action=""
                         :show-file-list='false' :on-success="handleSuccess" :on-progress='handleProgess'>
                <el-button size="medium" type="default">数据导入</el-button>
              </el-upload>
            </div>
            <el-button type="primary" size="medium" @click="saveGjjMx">保存</el-button>
          </div>
          <div class="card-title">公积金缴纳明细</div>
        </div>
        <!-- 表格容器 -->
        <div>
          <el-table :data="tableData_2" v-loading.body="listLoading" border fit highlight-current-row style="width: 100%">
            <el-table-column label="序号" type="index" width="50"></el-table-column>
            <el-table-column min-width="200px" :label="tableData_2_columns.rq">
              <template slot-scope="scope">
                <template v-if="scope.row.edit">
                  <el-form :model="scope.row" :rules="rules" :id="'date'+scope.$index" :ref="'form_date_'+scope.$index"
                           :show-message="false">
                    <el-form-item prop="date" class="td-form-item">
                      <el-input class="edit-input" size="small" v-model="scope.row.rq"></el-input>
                    </el-form-item>
                  </el-form>
                </template>
                <span v-else>{{scope.row.rq}}</span>
              </template>
            </el-table-column>
            <el-table-column min-width="200px" :label="tableData_2_columns.rs">
              <template slot-scope="scope">
                <template v-if="scope.row.edit">
                  <el-form :model="scope.row" :rules="rules" :id="'num'+scope.$index" :ref="'form_num_'+scope.$index"
                           :show-message="false">
                    <el-form-item prop="num" class="td-form-item">
                      <el-input class="edit-input" size="small" v-model="scope.row.rs"></el-input>
                    </el-form-item>
                  </el-form>
                </template>
                <span v-else>{{ scope.row.rs}}</span>
              </template>
            </el-table-column>
            <el-table-column min-width="200px" :label="tableData_2_columns.ze">
              <template slot-scope="scope">
                <template v-if="scope.row.edit">
                  <el-form :model="scope.row" :rules="rules" :id="'totalMoney'+scope.$index"
                           :ref="'form_totalMoney_'+scope.$index" :show-message="false">
                    <el-form-item prop="totalMoney" class="td-form-item">
                      <el-input class="edit-input" size="small" v-model="scope.row.ze"></el-input>
                    </el-form-item>
                  </el-form>
                </template>
                <span v-else>{{ scope.row.ze}}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" label="操作" width="240">
              <template slot-scope="scope">
                <v-tableOperation :scope="scope" :tableData="tableData_2" v-on:verify="verify"></v-tableOperation>
              </template>
            </el-table-column>
          </el-table>
          <v-tabelAddBtn :tableData="tableData_2" :tableData_columns="tableData_2_columns"></v-tabelAddBtn>
        </div>
      </el-card>
    </div>

   <!-- 企业社保echarts图展示  start -->
    <div>
      <el-card class="box-card" shadow='nevner'>
        <div slot="header" class="clearfix">
          <div class="card-title">公司社保缴纳趋势图</div>
        </div>
        <!-- echarts图div容器 -->
        <div id="echartsApp" class="page-line-chart">
          <ve-line :data="sbEchartData" :settings="sbEchartSettings"></ve-line>
        </div>
      </el-card>
    </div>

<!-- 企业社保echarts图展示  end -->

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
      this.sbEchartSettings = {
        labelMap:{
          'sbjnZe': '社保缴纳金额',
          'sbjnRs': '社保缴纳人数'
        }
      }
      this.gjjEchartSettings = {
        labelMap:{
          'gjjjnZe': '公积金缴纳金额',
          'gjjjnRs': '公积金缴纳人数'
        }
      }

    return {
      sbEchartData:{// 定义社保Echarts图标的属性数据容器
        columns:[],
        rows:[]
        },
      gjjEchartData:{// 定义公积金Echarts图标的属性数据容器
        columns:[],
        rows:[]
        },
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

        //-------------------------------公积金缴纳明细--------------------------------------//

        tableData_2: [],
        deleteData_2: [],
        addData_2: [],
        updateData_2: [],
        tableData_2_columns: {
          id: null,
          rq: "日期",
          rs: "人数",
          ze: "总额",
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
      this.loadsbjnhGjjEchartsData();// 加载社保和公积金echarts视图数据
      this.getSbgjjjnRs();
      this.getSbgjjjnRsQksm();
      this.getSbgjj();
      this.getGjjMx();
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

//---------------------------- 公司社保和公积金echarts图表数据------------------------//
    loadsbjnhGjjEchartsData: async function() {
      let params = {
        creditCode: sessionStorage.getItem("creditCode"),
        token: sessionStorage.getItem("token")
      };
      const res = await this.$http.post(
        "/hspt-web-api/data_entry/gsyyxx/sbGjj/list",
        params
      );
      if (res.data.resultCode == "0" && res.data.resultData.data != null) {
        // 为社保echarts图表填充数据
        this.sbEchartData = res.data.resultData.data.sbGjjMxGraphData;
        // 为公积金echarts图表填充数据
        this.gjjEchartData = res.data.resultData.data.gjjMxGraphData;
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

      //-----------------------------------------公积金---------------------------------------------//
       getGjjMx: async function () {
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token")
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/gsyyxx/sbGjj/listGjjMx",
          params
        );
        if (res.data.resultCode == "0" && res.data.resultData.data != null) {
          this.tableData_2 = res.data.resultData.data;
        }
      },

     saveGjjMx: async function () {
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token"),
          data: JSON.stringify(this.tableData_2),
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/gsyyxx/sbGjj/saveGjjMx",
          params
        );
        if (res.data.resultCode == "0") {
          this.$message({message: res.data.resultMsg, type: "success"});
          this.getGjjMx();
        } else {
          this.$message({message: res.data.resultMsg, type: "warning"});
        }
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
