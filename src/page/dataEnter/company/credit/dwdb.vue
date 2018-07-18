<template>

  <div>
   <el-tabs v-model="activeName" @tab-click="handleClick">
			<el-tab-pane label="" name="first">
        <div>
          <!--对外担保信息-->
          <el-card class="box-card" shadow='nevner'>
            <div slot="header" class="clearfix">
              <div class="card-right-wrap">
                <el-button class="save" type="primary" size="medium" @click="updateDwdb">保存</el-button>
              </div>
              <div class="card-title">对外担保信息</div>
            </div>
            <v-table
              is-horizontal-resize
              style="width:100%"
              :height="500"
              :title-rows="titleRows"
              :columns="columns"
              :table-data="tableData"
              row-hover-color="#eee"
              row-click-color="#edf7ff"
              :cell-edit-done="cellEditDone"
              :cell-merge="cellMerge"
            ></v-table>
          </el-card>
        </div>

        <div>
					<el-card class="box-card"  shadow='nevner'>
						<div slot="header" class="clearfix">
							<div class="card-right-wrap">
								<el-button class="save" type="primary" size="medium" @click="saveDwdbxxmx">保存</el-button>
							</div>
							<div class="card-title">对外担保信息明细</div>
						</div>
						<div>
							<el-table :data="tableData_1" v-loading.body="listLoading" border fit highlight-current-row show-summary :summary-method="getSummaries" style="width: 100%">
								<el-table-column label="序号" type="index" width="50"></el-table-column>
								<el-table-column min-width="150px" :label="tableData_1_columns.bdbdw">
									<template slot-scope="scope">
										<el-input class="edit-input cellItem el-form-item" v-model="scope.row.bdbdw" :class="Object.keys(tableData_1_columns)[1]" v-if="scope.row.edit" size="small"></el-input>
										<span v-else>{{ scope.row.bdbdw}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="150px" :label="tableData_1_columns.dbnr">
									<template slot-scope="scope">
										<el-input class="edit-input cellItem el-form-item" v-model="scope.row.dbnr" :class="Object.keys(tableData_1_columns)[2]" v-if="scope.row.edit" size="small"></el-input>
										<span v-else>{{ scope.row.dbnr}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="150px" :label="tableData_1_columns.lx">
									<template slot-scope="scope">
										<el-input class="edit-input cellItem el-form-item" v-model="scope.row.lx" :class="Object.keys(tableData_1_columns)[3]" v-if="scope.row.edit" size="small"></el-input>
										<span v-else>{{ scope.row.lx}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="150px" :label="tableData_1_columns.dbje" prop="dbje">
									<template slot-scope="scope">
										<el-input class="edit-input cellItem el-form-item" v-model="scope.row.dbje" :class="Object.keys(tableData_1_columns)[4]" v-if="scope.row.edit" size="small"></el-input>
										<span v-else>{{ scope.row.dbje}}</span>
									</template>
								</el-table-column>
                <el-table-column min-width="150px" :label="tableData_1_columns.dbxs">
									<template slot-scope="scope">
										<el-input class="edit-input cellItem el-form-item" v-model="scope.row.dbxs" :class="Object.keys(tableData_1_columns)[5]" v-if="scope.row.edit" size="small"></el-input>
										<span v-else>{{ scope.row.dbxs}}</span>
									</template>
								</el-table-column>
                <el-table-column min-width="150px" :label="tableData_1_columns.kssj">
									<template slot-scope="scope">
                    <el-date-picker v-model="scope.row.kssj" class="cellItem el-form-item" value-format="yyyy-MM-dd" :class="Object.keys(tableData_1_columns)[6]" v-if="scope.row.edit" type="date" placeholder="选择日期" style="width: 100%;" :clearable='false'></el-date-picker>
										<span v-else>{{ scope.row.kssj}}</span>
									</template>
								</el-table-column>
                <el-table-column min-width="150px" :label="tableData_1_columns.jssj">
									<template slot-scope="scope">
										<el-date-picker v-model="scope.row.jssj" class="cellItem el-form-item" value-format="yyyy-MM-dd" :class="Object.keys(tableData_1_columns)[7]" v-if="scope.row.edit" type="date" placeholder="选择日期" style="width: 100%;" :clearable='false'></el-date-picker>
										<span v-else>{{ scope.row.jssj}}</span>
									</template>
								</el-table-column>
								<el-table-column align="center" label="操作" width="240">
									<template slot-scope="scope">
										<v-tableOperation :scope="scope" :tableData="tableData_1" v-on:verify="verify1" v-on:acceptDelRow='acceptDelRow1'></v-tableOperation>
									</template>
								</el-table-column>
							</el-table>
							<v-tabelAddBtn :tableData="tableData_1" :tableData_columns="tableData_1_columns"></v-tabelAddBtn>
						</div>
					</el-card>
				</div>


      </el-tab-pane>
		</el-tabs>
  </div>
</template>

<style>
</style>

<script>
import AsyncValidator from "async-validator";
import popMsg from "@/utils/notice/notice";
import tableValidates from "@/utils/validateTable/tableValidates.js";
import tabelAddBtn from "@/components/table/table-add-btn.vue";
import tableOperation from "@/components/table/table-operation.vue";
export default {
  data() {
    return {
      total: 0,
      tableData: [], // 页面展示的数据
      addData: [], // 保存页面数据
      updateData: [], // 更新页面数据
      deleteData: [], // 删除页面数据

      ///////////////////////////对外担保信息明细
      validateState: "",
      activeName: "first",
      listLoading: false,
      tableData_1: [],
      delRowData_1: [],
      addData_1: [],
      updateData_1: [],
      tableData_1_columns: {
        id:null,
        bdbdw: "被担保单位",
        dbnr: "担保内容",
        lx: "类型",
        dbje: "担保金额",
        dbxs: "担保形式 ",
        kssj: "开始时间",
        jssj: "结束时间",
        edit: false
      },

      columns: [
        { field: "xmmc", width: 100, columnAlign: "center", isFrozen: true },
        { field: "bs", width: 110, columnAlign: "center", isEdit: true },
        { field: "dbje", width: 110, columnAlign: "center", isEdit: true },
        { field: "bdbywBl", width: 110, columnAlign: "center", isEdit: true },
        { field: "bdbywGz", width: 110, columnAlign: "center", isEdit: true },
        { field: "bdbywZc", width: 110, columnAlign: "center", isEdit: true },
        { field: "hj", width: 110, columnAlign: "center", isResize: true }
      ],
      titleRows: [
        [
          { fields: ["xmmc"], title: "汇总类型", titleAlign: "center" },
          { fields: ["bs"], title: "笔数", titleAlign: "center" },
          { fields: ["dbje"], title: "担保金额", titleAlign: "center" },
          {
            fields: ["bdbywBl", "bdbywGz", "bdbywZc"],
            title: "被担保业务余额",
            titleAlign: "center"
          },
          { fields: ["hj"], title: "合计", titleAlign: "center" }
        ]
      ],
      rules: {
        bs: [
          { required: true, message: "此项必填" },
          { type: "number", message: "此项必须为数字值" },
          { len: "5", message: "请填写5位数" }
        ],
        dbje: [
          { required: true, message: "此项必填" },
          { type: "number", message: "此项必须为数字值" }
        ],
        bdbywBl: [
          { required: true, message: "此项必填" },
          { type: "number", message: "此项必须为数字值" }
        ],
        bdbywGz: [
          { required: true, message: "此项必填" },
          { type: "number", message: "此项必须为数字值" }
        ],
        bdbywZc: [
          { required: true, message: "此项必填" },
          { type: "number", message: "此项必须为数字值" }
        ]
      },
      rules_1: {
        bdbdw: [
          { required: true, message: "被担保单位是必填项" }
        ],
        dbje:[
          {validator(rule, value, callback) {
              var errors = [];
              if (!/^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/.test(value)) {

                callback('此项必须为数字值....');
              }
              callback(errors);

            }}
        ]
      }
    };
  },

  // 统计合计值
  computed: {
    totalNum() {
      {
        let all = 0;
        this.tableData.forEach((items, index, array) => {

          for (let item in items) {
            if (item === 'bs') continue;
            all += parseInt(items[item]);
          }
        })
        return all;
      }
    }
  },

  // 预加载数据,在html页面渲染完成之后开始加载页面需要展示的数据
  mounted() {
    this.init();
  },

  // 页面业务逻辑处理函数
  methods: {
    //点击标签页触发事件
    handleClick(tab, event) {
      //   console.log(tab, event);
    },
    // 页面初始化加载的函数
    init() {
      this.loadDwdb();
      this.getDwdbxxmx(); //对外担保信息明细
    },

    // 更新对外担保函数
    updateDwdb() {
      this.updateDwdbData();
    },

    // 对number类型数据输入的校验处理
    validateData(field, rowIndex, newValue, rowData) {
      let rules, obj, rule;
      rules = this.rules;
      obj = {};
      rule = {};
      //取到当前规则
      rule[field] = rules[field];

      //粗犷的处理
      //需要转化input中的value为数字类型
      try {
        obj[field] = Number(newValue.trim());
        tableData[rowIndex][field] = Number(newValue.trim());
        // console.log('rowData[rowIndex][field] typeof:', typeof Number(tableData[rowIndex][field]))
      } catch (ex) {
        console.log("in catch!!!");
        obj[field] = newValue.trim();
      }

      // const validator = new AsyncValidator(rule);
      // validator.validate(obj, (errors, invalidFields) => {
      //   console.log("typeof obj[field]:", typeof obj[field]);
      //   if (errors) {
      //     let notice = "";
      //     //构造错误信息
      //     invalidFields[field].forEach((item, index) => {
      //       notice += `${index + 1}. ${item.message}`;
      //     });
      //     //弹出错误信息
      //     popMsg.popErrorMsg(this, notice);
      //     //高亮该单元格，且让该单元格聚焦
      //   }
      // });
    },
    cellEditDone(newValue, oldValue, rowIndex, rowData, field) {
      this.tableData[rowIndex][field] = newValue;
      //数据验证
      this.validateData(field, rowIndex, newValue, rowData);
    },
    cellMerge(rowIndex, rowData, field) {
       if (field === "bs") {
        return {
          // colSpan: 1,
          // rowSpan: 1,
          content: this.totalNum
        };
      }
    },

    /////////////////////////////////////////////////////对外担保信息明细

    //接受删除的数据
    acceptDelRow1(val) {
      this.delRowData_1.push(val);
    },
    verify1(rowObj, rowIndex) {
      tableValidates.validateByRow(rowObj, rowIndex, this.rules_1, this);
      if (rowObj.id) {
        this.updateData_1.push(rowObj);
      }
    },

    getDwdbxxmx: async function() {
      let params = {
        creditCode: sessionStorage.getItem("creditCode"),
        token: sessionStorage.getItem("token"),
        dataType: "Dwdbmx"
      };
      const res = await this.$http.post(
        "/hspt-web-api/data_entry/qyfxgk/qyfxgkDwdbxx/loadData",
        params
      );
      if (res.data.resultCode == "0") {
        this.tableData_1 = res.data.resultData.data;
        console.log(res.data.resultData.data);
      }
    },

    saveDwdbxxmx: async function() {
      this.tableData_1.forEach((item, index) => {
        if (item.id == null) {
          this.addData_1.push(item);
        }
      });
      let params = {
        creditCode: sessionStorage.getItem("creditCode"),
        token: sessionStorage.getItem("token"),
        addData: JSON.stringify(this.addData_1),
        updateData: JSON.stringify(this.updateData_1),
        deleteData: JSON.stringify(this.delRowData_1),
        dataType: "Dwdbmx"
      };
      const res = await this.$http.post(
        "/hspt-web-api/data_entry/qyfxgk/qyfxgkDwdbxx/update",
        params
      );
      if (res.data.resultCode == "0") {
        this.$message({ message: res.data.resultMsg, type: "success" });
        this.delRowData = [];
        this.updateData = [];
        this.addData = [];
        this.getDwdbxxmx();
      } else {
        this.$message({ message: res.data.resultMsg, type: "warning" });
      }
    },

    /////////////////////////////////////////////////////////////明细合计计算
    getSummaries(param) {
      const { columns, data } = param;
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
          // //根据列名不同，确定不同的合计单位
          // if (column.property == "czbl") {
          //   sums[index] += "%";
          // } else if (column.property == "rjcz" || column.property == "sjcz") {
          //   sums[index] += " 万元";
          // }
        } else {
          sums[index] = "";
        }
      });
      return sums;
    },

    // 声明函数,加载对外担保信息的数据
    loadDwdb: async function() {
      // 获取请求后端service数据参数
      let params = {
        creditCode: sessionStorage.getItem("creditCode"), // 通过缓存获取creditCode
        token: sessionStorage.getItem("token") // 通过缓存获取token
      };
      const res = await this.$http.post(
        "/hspt-web-api/data_entry/qyfxgk/qyfxgkDwdbxx/loadDwdb",
        params
      );

      if (res.data.resultCode == "0") {
        this.tableData = res.data.resultData.data;
      }
    },

    // 声明函数,保存对外担保信息的数据
    updateDwdbData: async function() {
      for (var i = 0, size = this.tableData.length; i < size; i++) {
        this.updateData.push(this.tableData[i]);
      }

      for (var i = 0, size = this.updateData.length; i < size; i++) {
        const bs = this.updateData[i].bs;
        const dbje = this.updateData[i].dbje;
        const bdbywBl = this.updateData[i].bdbywBl;
        const bdbywGz = this.updateData[i].bdbywGz;
        const bdbywZc = this.updateData[i].bdbywZc;
        const count =
          parseInt(bs) +
          parseInt(dbje) +
          parseInt(bdbywBl) +
          parseInt(bdbywGz) +
          parseInt(bdbywZc);
        this.updateData[i].hj = count;
      }

      let params = {
        creditCode: sessionStorage.getItem("creditCode"), // 通过缓存获取creditCode
        token: sessionStorage.getItem("token"), // 通过缓存获取token
        addData: JSON.stringify(this.addData),
        updateData: JSON.stringify(this.updateData),
        deleteData: JSON.stringify(this.deleteData),
        dataType: "Dwdb"
      };

      const res = await this.$http.post(
        "/hspt-web-api/data_entry/qyfxgk/qyfxgkDwdbxx/update",
        params
      );

      if (res.data.resultCode == "0") {
        this.$message({ message: res.data.resultMsg, type: "success" });
        this.updateData = [];
        this.addData = [];
        this.deleteData = [];
      } else {
        this.$message({ message: res.data.resultMsg, type: "warning" });
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
