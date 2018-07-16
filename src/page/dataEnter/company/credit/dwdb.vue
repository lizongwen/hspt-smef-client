<template>
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
</template>

<style>
</style>

<script>
import AsyncValidator from "async-validator";
import popMsg from "@/utils/notice/notice";
export default {
  data() {
    return {
      total: 0,
      tableData: [], // 页面展示的数据
      addData: [], // 保存页面数据
      updateData: [], // 更新页面数据
      deleteData: [], // 删除页面数据
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
          { fields: ["xmmc"], title: "", titleAlign: "center" },
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
      }
    };
  },

  // 统计合计值
  computed: {
    totalNum() {
      let all = 0;
      this.tableData.forEach((items, index, array) => {
        for (let item in items) {
          if (
            item === "bs" ||
            item === "dbje" ||
            item === "bdbywBl" ||
            item === "bdbywGz" ||
            item === "bdbywZc"
          ) {
            all += parseInt(items[item]);
          }
        }
      });
      return all;
    }
  },

  // 预加载数据,在html页面渲染完成之后开始加载页面需要展示的数据
  mounted() {
    this.init();
  },

  // 页面业务逻辑处理函数
  methods: {
    // 页面初始化加载的函数
    init() {
      this.loadDwdb();
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
        // tableData[rowIndex][field] = Number(newValue.trim());
        // console.log('rowData[rowIndex][field] typeof:', typeof Number(tableData[rowIndex][field]))
      } catch (ex) {
        console.log("in catch!!!");
        obj[field] = newValue.trim();
      }

      const validator = new AsyncValidator(rule);
      validator.validate(obj, (errors, invalidFields) => {
        console.log("typeof obj[field]:", typeof obj[field]);
        if (errors) {
          let notice = "";
          //构造错误信息
          invalidFields[field].forEach((item, index) => {
            notice += `${index + 1}. ${item.message}`;
          });
          //弹出错误信息
          popMsg.popErrorMsg(this, notice);
          //高亮该单元格，且让该单元格聚焦
        }
      });
    },
    cellEditDone(newValue, oldValue, rowIndex, rowData, field) {
      this.tableData[rowIndex][field] = newValue;
      //数据验证
      this.validateData(field, rowIndex, newValue, rowData);
    },
    cellMerge(rowIndex, rowData, field) {
      if (field === "hj") {
        return {
          colSpan: 1,
          rowSpan: 3,
          content: this.totalNum
        };
      }
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
    }
  }
};
</script>
