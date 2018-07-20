<template>
	<div>
		<el-tabs v-model="activeName">
			<el-tab-pane label="荣誉信息" name="first">
				<div>
					<el-card class="box-card" shadow='nevner'>
						<div slot="header" class="clearfix">
							<div class="card-right-wrap">
								<el-button class="save" type="primary" size="medium" @click="saveRyxx" :loading="loadingStatus">保存</el-button>
							</div>
							<div class="card-title">荣誉信息</div>
						</div>
						<!-- 表格容器 -->
						<div>
							<el-table :data="tableData" v-loading.body="listLoading" border fit highlight-current-row style="width: 100%">
								<el-table-column label="序号" type="index" width="50"></el-table-column>
								<el-table-column min-width="80px" :label="tableData_columns.nf">
									<template slot-scope="scope">
										<el-date-picker v-model="scope.row.nf" class="cellItem el-form-item" value-format="yyyy" :class="Object.keys(tableData_columns)[1]" v-if="scope.row.edit" type="year" placeholder="选择日期" style="width: 100%;" :clearable='false'></el-date-picker>
						      	<span v-else>{{scope.row.nf}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="200px" :label="tableData_columns.ry">
									<template slot-scope="scope">
										<el-input v-model.number="scope.row.ry" class="edit-input cellItem el-form-item" :class="Object.keys(tableData_columns)[2]" v-if="scope.row.edit" size="small"></el-input>
										<span v-else>{{ scope.row.ry}}</span>
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
				</div>
			</el-tab-pane>
			<el-tab-pane label="行政许可" name="second">
				<div>
					<el-card class="box-card" shadow='nevner'>
						<div slot="header" class="clearfix">
							<div class="card-right-wrap">
								<el-button class="save" type="primary" size="medium" @click="saveXzxk" :loading="loadingStatus">保存</el-button>
							</div>
							<div class="card-title">行政许可</div>
						</div>
						<!-- 表格容器 -->
						<div>
							<el-table :data="tableData_xzxk" v-loading.body="listLoading" border fit highlight-current-row style="width: 100%">
								<el-table-column label="序号" type="index" width="50"></el-table-column>
								<el-table-column min-width="200px" :label="tableData_xzxk_columns.ztmc">
									<template slot-scope="scope">
										<el-input v-model.number="scope.row.ztmc" class="edit-input cellItem el-form-item" :class="Object.keys(tableData_xzxk_columns)[1]" v-if="scope.row.edit" size="small"></el-input>
										<span v-else>{{ scope.row.ztmc}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="200px" :label="tableData_xzxk_columns.gslx">
									<template slot-scope="scope">
										<el-input v-model.number="scope.row.gslx" class="edit-input cellItem el-form-item" :class="Object.keys(tableData_xzxk_columns)[2]" v-if="scope.row.edit" size="small"></el-input>
										<span v-else>{{ scope.row.gslx}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="200px" :label="tableData_xzxk_columns.xzlb">
									<template slot-scope="scope">
										<el-input v-model.number="scope.row.xzlb" class="edit-input cellItem el-form-item" :class="Object.keys(tableData_xzxk_columns)[3]" v-if="scope.row.edit" size="small"></el-input>
										<span v-else>{{ scope.row.xzlb}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="200px" :label="tableData_xzxk_columns.gxsj">
									<template slot-scope="scope">
										<el-input v-model.number="scope.row.gxsj" class="edit-input cellItem el-form-item" :class="Object.keys(tableData_xzxk_columns)[4]" v-if="scope.row.edit" size="small"></el-input>
										<span v-else>{{ scope.row.gxsj}}</span>
									</template>
								</el-table-column>
								<el-table-column align="center" label="操作" width="240">
									<template slot-scope="scope">
										<v-tableOperation :scope="scope" :tableData="tableData_xzxk" v-on:verify="verify_xzxk" v-on:acceptDelRow='acceptDelRow_xzxk'></v-tableOperation>
									</template>
								</el-table-column>
							</el-table>
							<v-tabelAddBtn :tableData="tableData_xzxk" :tableData_columns="tableData_xzxk_columns"></v-tabelAddBtn>
						</div>
					</el-card>
				</div>
			</el-tab-pane>
			<el-tab-pane label="主要认证与资质" name="third">
				<div>
					<el-card class="box-card" shadow='nevner'>
						<div slot="header" class="clearfix">
							<div class="card-right-wrap">
                <el-button type="default" size="medium" @click="getDataFromRemote">获取数据</el-button>
								<el-button class="save" type="primary" size="medium" @click="saveZyzzyrz" :loading="loadingStatus">保存</el-button>
							</div>
							<div class="card-title">主要认证与资质</div>
						</div>
						<!-- 表格容器 -->
						<div>
						 <el-table :data="tableData_zyzzyrz" v-loading.body="listLoading" border fit highlight-current-row style="width: 100%">
								<el-table-column label="序号" type="index" width="50"></el-table-column>
								<el-table-column min-width="200px" :label="tableData_zyzzyrz_columns.ztmc">
									<template slot-scope="scope">
										<el-input v-model.number="scope.row.ztmc" class="edit-input cellItem el-form-item" :class="Object.keys(tableData_zyzzyrz_columns)[1]" v-if="scope.row.edit" size="small"></el-input>
										<span v-else>{{ scope.row.ztmc}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="200px" :label="tableData_zyzzyrz_columns.zsbh">
									<template slot-scope="scope">
										<el-input v-model.number="scope.row.zsbh" class="edit-input cellItem el-form-item" :class="Object.keys(tableData_zyzzyrz_columns)[2]" v-if="scope.row.edit" size="small"></el-input>
										<span v-else>{{ scope.row.zsbh}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="200px" :label="tableData_zyzzyrz_columns.rzxm">
									<template slot-scope="scope">
										<el-input v-model.number="scope.row.rzxm" class="edit-input cellItem el-form-item" :class="Object.keys(tableData_zyzzyrz_columns)[3]" v-if="scope.row.edit" size="small"></el-input>
										<span v-else>{{ scope.row.rzxm}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="200px" :label="tableData_zyzzyrz_columns.zsdqrq">
									<template slot-scope="scope">
										<el-input v-model.number="scope.row.zsdqrq" class="edit-input cellItem el-form-item" :class="Object.keys(tableData_zyzzyrz_columns)[4]" v-if="scope.row.edit" size="small"></el-input>
										<span v-else>{{ scope.row.zsdqrq}}</span>
									</template>
								</el-table-column>
								<el-table-column align="center" label="操作" width="240">
									<template slot-scope="scope">
										<v-tableOperation :scope="scope" :tableData="tableData_zyzzyrz" v-on:verify="verify_zyzzyrz" v-on:acceptDelRow='acceptDelRow_zyzzyrz'></v-tableOperation>
									</template>
								</el-table-column>
							</el-table>
							<v-tabelAddBtn :tableData="tableData_zyzzyrz" :tableData_columns="tableData_zyzzyrz_columns"></v-tabelAddBtn>
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
      tableData: [], //荣誉信息
      tableData_delRowData: [],
      tableData_addData: [],
      tableData_updateData: [],
      tableData_columns: {
        id: null,
        nf: "年份",
        ry: "荣誉",
        edit: false
      },

      tableData_xzxk: [], //行政许可信息
      tableData_xzxk_delRowData: [],
      tableData_xzxk_addData: [],
      tableData_xzxk_updateData: [],
      tableData_xzxk_columns: {
	    id: null,
        ztmc: "主体名称",
        gslx: "公示类型（行政许可）",
        xzlb: "行政类别/区域",
        gxsj: "更新时间",
        edit: false
      },

      tableData_zyzzyrz: [],//主要认证与资质
	    tableData_zyzzyrz_delRowData: [],
      tableData_zyzzyrz_addData: [],
      tableData_zyzzyrz_updateData: [],
      tableData_zyzzyrz_columns: {
	      id: null,
        ztmc: "主体名称",
        zsbh: "证书编号",
        rzxm: "认证项目/产品类别",
        zsdqrq: "证书到期日期",
        edit: false
      },
      //规则
      rules_ryxx: {
        // bgrq: [{ type: "date", required: true, message: "请选择变更日期" }],
        // nf: [
        //   { required: true, message: "年份是必填项" }
        //   // { type: "number", message: "变更事项需要录入数字" }
        // ],
        // ry: [
        //   { required: true, message: "荣誉是必填项" }
        //   //   { min: 3, max: 5, message: "变更前字符长度需要 3 到 5 个字符" }
        // ]
      },
	  rules_xzxk: {
        // ztmc: [
        //   { required: true, message: "主体名称是必填项" }
        // ],
        // gslx: [
        //   { required: true, message: "公示类型（行政许可）是必填项" }
        // ],
        // xzlb: [
        //   { required: true, message: "行政类别/区域是必填项" }
        // ],
        // gxsj: [
        //   { required: true, message: "更新时间是必填项" }
        // ]
      },
	  rules_zyzzyrz: {
        // ztmc: [
        //   { required: true, message: "主体名称是必填项" }
        // ],
        // zsbh: [
        //   { required: true, message: "证书编号是必填项" }
        // ],
        // rzxm: [
        //   { required: true, message: "认证项目/产品类别是必填项" }
        // ],
        // zsdqrq: [
        //   { required: true, message: "证书到期日期是必填项" }
        // ]
      }
    };
  },
  mounted() {
    this.init();
  },

  methods: {
    //初始化
    init() {
      this.getRyrz(); //获取荣誉信息
      this.getXzxk(); //获取行政许可信息
      this.getZyzzrz(); //获取主要资质与认证信息
    },

	//////////////////////////////////////////////////////////////荣誉信息

    //接受删除的数据
    acceptDelRow(val) {
      this.tableData_delRowData.push(val);
    },
    //验证数据
    verify(rowObj, rowIndex) {
      var isValid = tableValidates.validateByRow(
        rowObj,
        rowIndex,
        this.rules_ryxx,
        this
      );
      if (rowObj.id) {
        this.tableData_updateData.push(rowObj);
      }
    },

    //获取荣誉信息表格数据
    getRyrz: async function() {
      let params = {
        creditCode: sessionStorage.getItem("creditCode"),
        token: sessionStorage.getItem("token")
      };
      const res = await this.$http.post(
        "/hspt-web-api/data_entry/gsjbxx/ryrz/ryxx/list",
        params
      );
      if (res.data.resultCode == "0") {
        this.tableData = res.data.resultData;
      }
    },
	//保存荣誉信息
	saveRyxx: async function() {
    this.loadingStatus=true;
	   this.tableData.forEach((item, index) => {
        if (item.id == null) {
          if((item.nf != null && item.nf != "") || (item.ry != null && item.ry != "")){
            this.tableData_addData.push(item);
          }
        }
      });
      let params = {
        creditCode: sessionStorage.getItem("creditCode"),
        token: sessionStorage.getItem("token"),
        addData: JSON.stringify(this.tableData_addData),
        updateData: JSON.stringify(this.tableData_updateData),
        delData: JSON.stringify(this.tableData_delRowData)
      };
      const res = await this.$http.post(
        "/hspt-web-api/data_entry/gsjbxx/ryrz/ryxx/save",
        params
      );
      if (res.data.resultCode == "0") {
        this.$message({ message: res.data.resultMsg, type: "success" });
        this.tableData_delRowData = [];
        this.tableData_updateData = [];
        this.tableData_addData = [];
        this.getRyrz();
      }else{
        this.$message({ message: res.data.resultMsg, type: "warning" });
      }
      this.loadingStatus=false;
	},

    //////////////////////////////////////////////////////////////////////////////行政许可

    //获取行政许可信息表格数据
    getXzxk: async function() {
      let params = {
        creditCode: sessionStorage.getItem("creditCode"),
        token: sessionStorage.getItem("token")
      };
      const res = await this.$http.post(
        "/hspt-web-api/data_entry/gsjbxx/ryrz/xzxk/list",
        params
      );
      if (res.data.resultCode == "0") {
        this.tableData_xzxk = res.data.resultData;
      }
    },
	 //接受删除的数据
    acceptDelRow_xzxk(val) {
      this.tableData_xzxk_delRowData.push(val);
    },
    //验证数据
	verify_xzxk(rowObj, rowIndex) {
      var isValid = tableValidates.validateByRow(
        rowObj,
        rowIndex,
        this.rules_xzxk,
        this
      );
      if (rowObj.id) {
        this.tableData_xzxk_updateData.push(rowObj);
      }
    },
	//保存行政许可信息表格数据
	saveXzxk: async function() {
     this.loadingStatus=true;
	   this.tableData_xzxk.forEach((item, index) => {
        if (item.id == null) {
          if((item.ztmc != null && item.ztmc != "") || (item.gslx != null && item.gslx != "") || (item.xzlb != null && item.xzlb != "") || (item.gxsj != null && item.gxsj != "")){
            this.tableData_xzxk_addData.push(item);
          }   
        }
      });
      let params = {
        creditCode: sessionStorage.getItem("creditCode"),
        token: sessionStorage.getItem("token"),
        addData: JSON.stringify(this.tableData_xzxk_addData),
        updateData: JSON.stringify(this.tableData_xzxk_updateData),
        delData: JSON.stringify(this.tableData_xzxk_delRowData)
      };
      const res = await this.$http.post(
        "/hspt-web-api/data_entry/gsjbxx/ryrz/xzxk/save",
        params
      );
      if (res.data.resultCode == "0") {
        this.$message({ message: res.data.resultMsg, type: "success" });
        this.tableData_xzxk_delRowData = [];
        this.tableData_xzxk_updateData = [];
        this.tableData_xzxk_addData = [];
        this.getXzxk();
      }else{
        this.$message({ message: res.data.resultMsg, type: "warning" });
      }
      this.loadingStatus=false;
	},

	///////////////////////////////////////////////////////////////////////// 主要资质与认证

	//接受删除的数据
    acceptDelRow_zyzzyrz(val) {
      this.tableData_zyzzyrz_delRowData.push(val);
    },
    //验证数据
	verify_zyzzyrz(rowObj, rowIndex) {
      var isValid = tableValidates.validateByRow(
        rowObj,
        rowIndex,
        this.rules_zyzzyrz,
        this
      );
      if (rowObj.id) {
        this.tableData_zyzzyrz_updateData.push(rowObj);
      }
    },

    //获取主要资质与认证信息表格数据
    getZyzzrz: async function() {
      let params = {
        creditCode: sessionStorage.getItem("creditCode"),
        token: sessionStorage.getItem("token")
      };
      const res = await this.$http.post(
        "/hspt-web-api/data_entry/gsjbxx/ryrz/zyzzyrz/list",
        params
      );
      if (res.data.resultCode == "0") {
        this.tableData_zyzzyrz = res.data.resultData;
      }
    },
	//保存主要资质与认证信息表格数据
	saveZyzzyrz: async function() {
	   this.tableData_zyzzyrz.forEach((item, index) => {
        this.loadingStatus=true;
        if (item.id == null) {
          if((item.ztmc != null && item.ztmc != "") || (item.zsbh != null && item.zsbh != "") || (item.rzxm != null && item.rzxm != "") || (item.zsdqrq != null && item.zsdqrq != "")){
            this.tableData_zyzzyrz_addData.push(item);
          }
        }
      });
      let params = {
        creditCode: sessionStorage.getItem("creditCode"),
        token: sessionStorage.getItem("token"),
        addData: JSON.stringify(this.tableData_zyzzyrz_addData),
        updateData: JSON.stringify(this.tableData_zyzzyrz_updateData),
        delData: JSON.stringify(this.tableData_zyzzyrz_delRowData)
      };
      const res = await this.$http.post(
        "/hspt-web-api/data_entry/gsjbxx/ryrz/zyzzyrz/save",
        params
      );
      if (res.data.resultCode == "0") {
        this.$message({ message: res.data.resultMsg, type: "success" });
        this.tableData_zyzzyrz_delRowData = [];
        this.tableData_zyzzyrz_updateData = [];
        this.tableData_zyzzyrz_addData = [];
        this.getZyzzrz();
      }else{
      this.$message({ message: res.data.resultMsg, type: "warning" });
      }
      this.loadingStatus=false;
  },

  /////////////////////////////////////////////// 获取主要资质与认证远程接口数据
  getDataFromRemote: async function(){
    let params = {
        creditCode: sessionStorage.getItem("creditCode"),
        token: sessionStorage.getItem("token"),
        companyName:sessionStorage.getItem("companyName")
      };
      const res = await this.$http.post(
        "/hspt-web-api/data_entry/gsjbxx/ryrz/zyzzyrz/remote",
        params
      );
      if (res.data.resultCode == "0") {
        this.$message({ message: res.data.resultMsg, type: "success" });
        this.tableData_zyzzyrz = res.data.resultData;
        this.tableData_zyzzyrz_delRowData = [];
        this.tableData_zyzzyrz_updateData = res.data.resultDat;
        this.tableData_zyzzyrz_addData = [];
      }else{
        this.$message({ message: res.data.resultMsg, type: "warning" });
      }
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

