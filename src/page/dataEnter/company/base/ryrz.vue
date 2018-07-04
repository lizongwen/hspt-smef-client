<template>
	<div>
		<el-tabs v-model="activeName" @tab-click="handleClick">
			<el-tab-pane label="荣誉信息" name="first">
				<div>
					<el-card class="box-card">
						<div slot="header" class="clearfix">
							<div class="card-right-wrap">
								<el-button class="save" type="primary" size="medium">保存</el-button>
							</div>
							<div class="card-title">荣誉信息</div>
						</div>
						<!-- 表格容器 -->
						<div>
							<el-table :data="tableData" v-loading.body="listLoading" border fit highlight-current-row style="width: 100%">
								<el-table-column min-width="200px" :label="tableData_columns.nf">
									<template slot-scope="scope">
										<el-input v-model.number="scope.row.nf" class="edit-input cellItem el-form-item" :class="Object.keys(tableData_columns)[1]" v-if="scope.row.edit" size="small"></el-input>
										<span v-else>{{ scope.row.nf}}</span>
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
										<v-tableOperation :scope="scope" :tableData="tableData" v-on:verify="verify"></v-tableOperation>
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
					<el-card class="box-card">
						<div slot="header" class="clearfix">
							<div class="card-right-wrap">
								<el-button class="save" type="primary" size="medium">保存</el-button>
							</div>
							<div class="card-title">行政许可</div>
						</div>
						<!-- 表格容器 -->
						<div>
							<el-table :data="tableData_xzxk" v-loading.body="listLoading" border fit highlight-current-row style="width: 100%">
								<el-table-column label="序号" type="index" width="50"></el-table-column>
								<el-table-column min-width="300px" label="主体名称">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'ztmc'+scope.$index" :ref="'form_ztmc_'+scope.$index" :show-message="false">
												<el-form-item prop="ztmc" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.ztmc"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{scope.row.ztmc}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="300px" label="公示类型（行政许可）">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'gslx'+scope.$index" :ref="'form_gslx_'+scope.$index" :show-message="false">
												<el-form-item prop="gslx" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.gslx"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.gslx}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="300px" label="行政类别/区域">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'xzlb'+scope.$index" :ref="'form_xzlb_'+scope.$index" :show-message="false">
												<el-form-item prop="xzlb" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.xzlb"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.xzlb}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="300px" label="更新时间">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'gxsj'+scope.$index" :ref="'form_gxsj_'+scope.$index" :show-message="false">
												<el-form-item prop="gxsj" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.gxsj"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.gxsj}}</span>
									</template>
								</el-table-column>
								<el-table-column align="center" label="操作" width="240">
									<template slot-scope="scope">
										<v-tableOperation :scope="scope" :tableData="tableData_xzxk" v-on:verify="verify" v-on:acceptDelRow='acceptDelRow'></v-tableOperation>
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
					<el-card class="box-card">
						<div slot="header" class="clearfix">
							<div class="card-right-wrap">
								<el-button class="save" type="primary" size="medium">保存</el-button>
							</div>
							<div class="card-title">主要认证与资质</div>
						</div>
						<!-- 表格容器 -->
						<div>
							<el-table :data="tableData_zyzzyrz" v-loading.body="listLoading" border fit highlight-current-row style="width: 100%">
								<el-table-column label="序号" type="index" width="50"></el-table-column>
								<el-table-column min-width="300px" label="主体名称">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'ztmc'+scope.$index" :ref="'form_ztmc_'+scope.$index" :show-message="false">
												<el-form-item prop="ztmc" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.ztmc"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{scope.row.ztmc}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="300px" label="证书编号">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'zsbh'+scope.$index" :ref="'form_zsbh_'+scope.$index" :show-message="false">
												<el-form-item prop="zsbh" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.zsbh"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.zsbh}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="300px" label="认证项目/产品类别">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'rzxm'+scope.$index" :ref="'form_rzxm_'+scope.$index" :show-message="false">
												<el-form-item prop="rzxm" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.rzxm"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.rzxm}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="300px" label="证书到期日期">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'zsdqrq'+scope.$index" :ref="'form_zsdqrq_'+scope.$index" :show-message="false">
												<el-form-item prop="zsdqrq" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.zsdqrq"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.zsdqrq}}</span>
									</template>
								</el-table-column>
								<el-table-column align="center" label="操作" width="240">
									<template slot-scope="scope">
										<v-tableOperation :scope="scope" :tableData="tableData_zyzzyrz" v-on:verify="verify2"></v-tableOperation>
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
      tableData_xzxk: [],
      tableData_xzxk_columns: {
        ztmc: "",
        gslx: "",
        xzlb: "",
        gxsj: "",
        edit: false
      },
      tableData_zyzzyrz: [],
      tableData_zyzzyrz_columns: {
        ztmc: "",
        zsbh: "",
        rzxm: "",
        zsdqrq: "",
        edit: false
      },
      //规则
      rules: {
        // bgrq: [{ type: "date", required: true, message: "请选择变更日期" }],
        nf: [
          { required: true, message: "变更事项是必填项" }
          // { type: "number", message: "变更事项需要录入数字" }
        ],
        ry: [
          { required: true, message: "变更前是必填项" }
          //   { min: 3, max: 5, message: "变更前字符长度需要 3 到 5 个字符" }
        ]
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
      //this.getXzxk(); //获取行政许可信息
      //this.getZyzzrz(); //获取主要资质与认证信息
    },
    //接受删除的数据
    acceptDelRow(val) {
      this.tableData_delRowData.push(val);
    },
    //验证数据
    verify(rowObj, rowIndex) {
      var isValid = tableValidates.validateByRow(
        rowObj,
        rowIndex,
        this.rules,
        this
      );
      console.log(isValid);
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
    //点击标签页触发事件
    handleClick(tab, event) {
      //   console.log(tab, event);
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

