<template>
	<div>
		<el-card class="box-card" shadow='nevner'>
			<div slot="header" class="clearfix">
				<div class="card-right-wrap">
					<el-button type="default" size="medium" @click="downloadFile">模板下载</el-button>
          <div style="display:inline-block">
            <el-upload class="upload-button" :data="param" action="/hspt-web-api/data_entry/gsyyxx/gzffqk/import" :show-file-list='false' :on-success="handleSuccess" :on-progress='handleProgess'>
              <el-button size="medium" type="primary">数据导入</el-button>
            </el-upload>
          </div>
					<!--<el-button type="default" size="medium">生成图表</el-button>-->
					<el-button type="primary" size="medium" @click="setGzff">保存</el-button>
				</div>
				<div class="card-title">企业工资发放情况</div>
			</div>
			<div>
				<el-table :data="tableData" v-loading.body="listLoading" border fit highlight-current-row style="width: 100%">
					<el-table-column label="序号" type="index" width="50"></el-table-column>
					<el-table-column min-width="300px" label="日期">
						<template slot-scope="scope">
							<template v-if="scope.row.edit">
								<el-form :model="scope.row" :rules="rules" :id="'date'+scope.$index" :ref="'form_date_'+scope.$index" :show-message="false">
									<el-form-item prop="date" class="td-form-item">
										<el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_columns)[1]" size="small" v-model="scope.row.rq"></el-input>
									</el-form-item>
								</el-form>
							</template>
							<span v-else>{{ scope.row.rq }}</span>
						</template>
					</el-table-column>
					<el-table-column min-width="300px" label="发放人数">
						<template slot-scope="scope">
							<template v-if="scope.row.edit">
								<el-form :model="scope.row" :rules="rules" :id="'num'+scope.$index" :ref="'form_num_'+scope.$index" :show-message="false">
									<el-form-item prop="num" class="td-form-item">
										<el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_columns)[2]" size="small" v-model="scope.row.rs"></el-input>
									</el-form-item>
								</el-form>
							</template>
							<span v-else>{{scope.row.rs}}</span>
						</template>
					</el-table-column>
					<el-table-column min-width="300px" label="发放金额">
						<template slot-scope="scope">
							<template v-if="scope.row.edit">
								<el-form :model="scope.row" :rules="rules" :id="'money'+scope.$index" :ref="'form_money_'+scope.$index" :show-message="false">
									<el-form-item prop="money" class="td-form-item">
										<el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_columns)[3]" size="small" v-model="scope.row.ze"></el-input>
									</el-form-item>
								</el-form>
							</template>
							<span v-else>{{scope.row.ze}}</span>
						</template>
					</el-table-column>
					<el-table-column align="center" label="操作" width="240">
						<template slot-scope="scope">
							<v-tableOperation :scope="scope" :tableData="tableData" v-on:verify="verify" v-on:acceptDelRow='acceptDelRow'></v-tableOperation>
						</template>
					</el-table-column>
				</el-table>
				<v-tabelAddBtn :tableData="tableData" :tableData_columns="tableData_columns"></v-tabelAddBtn>
			</div>
		</el-card>
    <div>
      <el-card class="box-card" shadow='nevner'>
        <div slot="header" class="clearfix">
          <div class="card-right-wrap">
            <el-button type="primary" size="medium" @click="setGzffqk">保存</el-button>
          </div>
          <div class="card-title">小结</div>
        </div>
        <!-- 表格容器 -->
        <div class="text-editor">
          <quill-editor :value="gzffqk" :maxSize="10240" v-on:changeInput="changGzffqk"></quill-editor>
        </div>
      </el-card>
    </div>
	</div>
</template>

<script>
import tabelAddBtn from "@/components/table/table-add-btn.vue";
import tableOperation from "@/components/table/table-operation.vue";
import tableValidates from "@/utils/validateTable/tableValidates.js";
import quillEditor from "@/components/form/quillEditor.vue";
export default {
  name: "inlineEditTable",
  data() {
    return {
      param:{
        creditCode: sessionStorage.getItem("creditCode"),
        token: sessionStorage.getItem("token"),
      },
      listLoading: false,
      gzffqk:"",
      tableData: [],
      deleteData: [],
      addData: [],
      updateData: [],
      tableData_columns: {
        id:null,
        rq: "日期",
        rs: "发放人数",
        ze: "发放金额",
        edit: false
      },
      rules_gzff: {
        rq: [
          { required: true, message: "日期是必填项" },
          /*{validator(rule, value, callback) {
              var errors = [];
              if (!/^[1-9]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/.test(value)) {

                callback('日期必须为yyyy-MM-dd值....');
              }
              callback(errors);

            }}*/
        ],
        rs: [
          { required: true, message: "发放人数是必填项" },
          {validator(rule, value, callback) {
              var errors = [];
              if (!/^([0-9]{1,})$/.test(value)) {

                callback('发放人数必须为正整数值....');
              }
              callback(errors);

            }}
        ],
        ze: [
          { required: true, message: "发放金额是必填项" },
          {validator(rule, value, callback) {
              var errors = [];
              if (!/^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/.test(value)) {

                callback('发放金额必须为数值....');
              }
              callback(errors);

            }}
        ]
      },
    };
  },
  mounted() {
    this.getList();
    this.getGzffqk();
  },
  methods: {
    //获取企业工资发放数据
    getList: async function() {
      let params = {
        creditCode: sessionStorage.getItem("creditCode"),
        token: sessionStorage.getItem("token")
      };
      const res = await this.$http.post(
        "/hspt-web-api/data_entry/gsyyxx/gzffqk/list",
        params
      );
      if (res.data.resultCode == "0") {
        this.tableData = res.data.resultData.data;
      } else {
      }
    },
    //保存企业工资发放数据
    setGzff: async function() {
      this.tableData.forEach((item, index) => {
        if (item.id == null) {
          this.addData.push(item);
        }
      });
      let params = {
        creditCode: sessionStorage.getItem("creditCode"),
        token: sessionStorage.getItem("token"),
        addedDataStr: JSON.stringify(this.addData),
        updatedDataStr: JSON.stringify(this.updateData),
        deletedDataStr: JSON.stringify(this.deleteData)
      };
      const res = await this.$http.post(
        "/hspt-web-api/data_entry/gsyyxx/gzffqk/save",
        params
      );
      if (res.data.resultCode == "0") {
        this.$message({ message: res.data.resultMsg, type: "success" });
        this.deleteData = [];
        this.updateData = [];
        this.addData = [];
        this.getList();
      } else {
        this.$message({ message: res.data.resultMsg, type: "warning" });
      }
    },
    //企业工资发放删除的数据
    acceptDelRow(val) {this.deleteData.push(val);},
    //验证企业工资发放数据
    verify(rowObj, rowIndex) {
      var isValid = tableValidates.validateByRow(
      rowObj,
      rowIndex,
      this.rules_gzff,
      this
    );
      console.log(isValid)
      if (rowObj.id) {
      this.updateData.push(rowObj);
  }
},

    //获取企业工资发放小结
    getGzffqk: async function() {
      let params = {
        creditCode: sessionStorage.getItem("creditCode"),
        token: sessionStorage.getItem("token")
      };
      const res = await this.$http.post(
        "/hspt-web-api/data_entry/gsyyxx/gzffqk/initGzffqk",
        params
      );
      if (res.data.resultCode == "0") {
        this.gzffqk = res.data.resultData;
      }
    },
    //修改企业工资发放小结
    changGzffqk(val) {
      this.gzffqk=val;
    },
    //保存企业工资发放小结
    setGzffqk:async function() {
      let params = {
        creditCode: sessionStorage.getItem("creditCode"),
        token: sessionStorage.getItem("token"),
        gzffqk: this.gzffqk
      };
      const res = await this.$http.post(
        "/hspt-web-api/data_entry/gsyyxx/gzffqk/saveGzffqk",
        params
      );
      if (res.data.resultCode == "0") {
        this.$message({ message: res.data.resultMsg, type: "success" });
        this.getGzffqk();
      }else{
        this.$message({ message: res.data.resultMsg, type: "warning" });
      }
    },

    downloadFile: async function() {
      let link = document.createElement("a");
      link.style.display = "none";
      link.href = "http://testdfs.creditstate.cn/group1/M00/02/1B/rBj-DlqgzsCAftPgAAAjTcM29i413.xlsx";
      link.setAttribute("download", "测试.xls");
      document.body.appendChild(link);
      link.click();
    },

    //////////////////////////////////////////////////////////////
    handleSuccess(res, file){
      if (res.resultCode == "0") {
        this.$message({ message: res.resultMsg, type: "success" });
        this.tableData = res.resultMapData.data.newExcelData;
      } else {
        this.$message({ message: res.resultMsg, type: "error" });
      }
    },
    handleProgess(){
      // console.log(arguments)
    }
  },

  components: {
    "v-tabelAddBtn": tabelAddBtn,
    "v-tableOperation": tableOperation,
    "quill-editor": quillEditor
  }
};


</script>
<style lang="scss">
  .text-editor .ql-editor {
    height: 300px;
  }
</style>

<style>
.td-form-item {
  margin: 0;
}
</style>
