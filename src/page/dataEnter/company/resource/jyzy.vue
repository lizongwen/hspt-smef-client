<template>
	<div>
		<el-tabs v-model="activeName">
			<el-tab-pane label="企业不动产信息" name="first">
				<div>
					<el-card class="box-card" shadow='nevner'>
						<div slot="header" class="clearfix">
							<div class="card-right-wrap">
								<el-button type="primary" size="medium">保存</el-button>
							</div>
							<div class="card-title">企业土地信息</div>
						</div>
						<!-- 表格容器 -->
						<div>
							<el-table :data="tableData" v-loading.body="listLoading" border fit highlight-current-row style="width: 100%">
								<el-table-column label="序号" type="index" width="50"></el-table-column>
								<el-table-column min-width="200px" :label="tableData_columns.syzh">
									<template slot-scope="scope">
										<el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_columns)[1]" v-if="scope.row.edit" size="small" v-model.number="scope.row.syzh"></el-input>
										<span v-else>{{ scope.row.syzh}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="200px" :label="tableData_columns.zl">
									<template slot-scope="scope">
										<el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_columns)[2]" v-if="scope.row.edit" size="small" v-model.number="scope.row.zl"></el-input>
										<span v-else>{{ scope.row.zl}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="50px" :label="tableData_columns.yt">
									<template slot-scope="scope">
										<el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_columns)[3]" v-if="scope.row.edit" size="small" v-model.number="scope.row.yt"></el-input>
										<span v-else>{{ scope.row.yt}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="150px" :label="tableData_columns.qdjg">
									<template slot-scope="scope">
										<el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_columns)[4]" v-if="scope.row.edit" size="small" v-model.number="scope.row.qdjg"></el-input>
										<span v-else>{{ scope.row.qdjg}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="100px" :label="tableData_columns.syqlx">
									<template slot-scope="scope">
										<el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_columns)[5]" v-if="scope.row.edit" size="small" v-model.number="scope.row.syqlx"></el-input>
										<span v-else>{{ scope.row.syqlx}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="130px" :label="tableData_columns.zzrq">
									<template slot-scope="scope">
										<el-date-picker class="cellItem el-form-item" v-model="scope.row.zzrq" value-format="yyyy-MM-dd" :class="Object.keys(tableData_columns)[6]" v-if="scope.row.edit" type="date" placeholder="选择日期" style="width: 100%;" :clearable='false'></el-date-picker>
										<span v-else>{{scope.row.zzrq}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="120px" :label="tableData_columns.mj">
									<template slot-scope="scope">
										<el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_columns)[7]" v-if="scope.row.edit" size="small" v-model.number="scope.row.mj"></el-input>
										<span v-else>{{ scope.row.mj}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="120px" :label="tableData_columns.ywtxql">
									<template slot-scope="scope">
										<el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_columns)[8]" v-if="scope.row.edit" size="small" v-model.number="scope.row.ywtxql"></el-input>
										<span v-else>{{ scope.row.ywtxql}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="100px" :label="tableData_columns.rzed">
									<template slot-scope="scope">
										<el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_columns)[9]" v-if="scope.row.edit" size="small" v-model.number="scope.row.rzed"></el-input>
										<span v-else>{{ scope.row.rzed}}</span>
									</template>
								</el-table-column>
								<el-table-column align="center" label="操作" width="200">
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
								<el-button type="primary" size="medium">保存</el-button>
							</div>
							<div class="card-title">企业房产信息</div>
						</div>
						<!-- 表格容器 -->
						<div>
							<el-table :data="tableData_1" v-loading.body="listLoading" border fit highlight-current-row style="width: 100%">
								<el-table-column label="序号" type="index" width="50"></el-table-column>
								<el-table-column min-width="120px" :label="tableData_1_columns.fqzh">
									<template slot-scope="scope">
										<el-input class="edit-input cellItem el-form-item" v-model.number="scope.row.fqzh" :class="Object.keys(tableData_1_columns)[1]" v-if="scope.row.edit" size="small"></el-input>
										<span v-else>{{ scope.row.fqzh}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="200px" :label="tableData_1_columns.fwzl">
									<template slot-scope="scope">
										<el-input class="edit-input cellItem el-form-item" v-model.number="scope.row.fwzl" :class="Object.keys(tableData_1_columns)[2]" v-if="scope.row.edit" size="small"></el-input>
										<span v-else>{{ scope.row.fwzl}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="100px" :label="tableData_1_columns.yt">
									<template slot-scope="scope">
										<el-input class="edit-input cellItem el-form-item" v-model.number="scope.row.yt" :class="Object.keys(tableData_1_columns)[3]" v-if="scope.row.edit" size="small"></el-input>
										<span v-else>{{ scope.row.yt}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="150px" :label="tableData_1_columns.gmjg">
									<template slot-scope="scope">
										<el-input class="edit-input cellItem el-form-item" v-model.number="scope.row.gmjg" :class="Object.keys(tableData_1_columns)[4]" v-if="scope.row.edit" size="small"></el-input>
										<span v-else>{{ scope.row.gmjg}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="200px" :label="tableData_1_columns.qsxz">
									<template slot-scope="scope">
										<el-input class="edit-input cellItem el-form-item" v-model.number="scope.row.qsxz" :class="Object.keys(tableData_1_columns)[5]" v-if="scope.row.edit" size="small"></el-input>
										<span v-else>{{ scope.row.qsxz}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="130px" :label="tableData_columns.zzrq">
									<template slot-scope="scope">
										<el-date-picker class="cellItem el-form-item" v-model="scope.row.zzrq" value-format="yyyy-MM-dd" :class="Object.keys(tableData_1_columns)[6]" v-if="scope.row.edit" type="date" placeholder="选择日期" style="width: 100%;" :clearable='false'></el-date-picker>
										<span v-else>{{scope.row.zzrq}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="120px" :label="tableData_1_columns.symj">
									<template slot-scope="scope">
										<el-input class="edit-input cellItem el-form-item" v-model.number="scope.row.symj" :class="Object.keys(tableData_1_columns)[7]" v-if="scope.row.edit" size="small"></el-input>
										<span v-else>{{ scope.row.symj}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="120px" :label="tableData_1_columns.ywtxql">
									<template slot-scope="scope">
										<el-input class="edit-input cellItem el-form-item" v-model.number="scope.row.ywtxql" :class="Object.keys(tableData_1_columns)[8]" v-if="scope.row.edit" size="small"></el-input>
										<span v-else>{{ scope.row.ywtxql}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="100px" :label="tableData_1_columns.rzed">
									<template slot-scope="scope">
										<el-input class="edit-input cellItem el-form-item" v-model.number="scope.row.rzed" :class="Object.keys(tableData_1_columns)[9]" v-if="scope.row.edit" size="small"></el-input>
										<span v-else>{{ scope.row.rzed}}</span>
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
				<div>
					<el-card class="box-card" shadow='nevner'>
						<div slot="header" class="clearfix">
							<div class="card-right-wrap">
								<el-button type="primary" size="medium" @click="saveBdcXj">保存</el-button>
							</div>
							<div class="card-title">小结</div>
						</div>
						<div class="text-editor">
							<quill-editor :value="bdcxj" :maxSize="10240" v-on:changeInput="changBdcxj"></quill-editor>
						</div>
					</el-card>
				</div>
			</el-tab-pane>
			<el-tab-pane label="企业主要生产设备" name="second">
				<div>
					<el-card class="box-card" shadow='nevner'>
						<div slot="header" class="clearfix">
							<div class="card-right-wrap">
								<el-button type="default" size="medium">模板下载</el-button>
								<el-button type="default" size="medium">数据导入</el-button>
								<el-button type="primary" size="medium">保存</el-button>
							</div>
							<div class="card-title">企业主要生产设备</div>
						</div>
						<!-- 表格容器 -->
						<div>
							<el-table :data="tableData_2" v-loading.body="listLoading" border fit highlight-current-row show-summary :summary-method="getSummaries" style="width: 100%">
								<el-table-column label="序号" type="index" width="50"></el-table-column>
								<el-table-column min-width="200px" :label="tableData_2_columns.sbmc">
									<template slot-scope="scope">
										<el-input class="edit-input cellItem el-form-item" v-model.number="scope.row.sbmc" :class="Object.keys(tableData_2_columns)[1]" v-if="scope.row.edit" size="small"></el-input>
										<span v-else>{{ scope.row.sbmc}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="200px" :label="tableData_2_columns.sbxh">
									<template slot-scope="scope">
										<el-input class="edit-input cellItem el-form-item" v-model.number="scope.row.sbxh" :class="Object.keys(tableData_2_columns)[2]" v-if="scope.row.edit" size="small"></el-input>
										<span v-else>{{ scope.row.sbxh}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="200px" :label="tableData_2_columns.yz">
									<template slot-scope="scope">
										<el-input class="edit-input cellItem el-form-item" v-model.number="scope.row.yz" :class="Object.keys(tableData_2_columns)[3]" v-if="scope.row.edit" size="small"></el-input>
										<span v-else>{{ scope.row.yz}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="200px" :label="tableData_2_columns.jz">
									<template slot-scope="scope">
										<el-input class="edit-input cellItem el-form-item" v-model.number="scope.row.jz" :class="Object.keys(tableData_2_columns)[4]" v-if="scope.row.edit" size="small"></el-input>
										<span v-else>{{ scope.row.jz}}</span>
									</template>
								</el-table-column>
								<el-table-column align="center" label="操作" width="240">
									<template slot-scope="scope">
										<v-tableOperation :scope="scope" :tableData="tableData_2" v-on:verify="verify2"></v-tableOperation>
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
								<el-button type="primary" size="medium" @click="saveZysbXj">保存</el-button>
							</div>
							<div class="card-title">小结</div>
						</div>
						<!-- 表格容器 -->
						<div class="text-editor">
							<quill-editor :value="zysbxj" :maxSize="10240" v-on:changeInput="changZysbxj"></quill-editor>
						</div>
					</el-card>
				</div>
			</el-tab-pane>
			<el-tab-pane label="企业车辆情况" name="third">
				<div>
					<el-card class="box-card" shadow='nevner'>
						<div slot="header" class="clearfix">
							<div class="card-right-wrap">
								<el-button type="default" size="medium">获取数据</el-button>
								<el-button type="primary" size="medium">保存</el-button>
							</div>
							<div class="card-title">所有车辆记录</div>
						</div>
						<!-- 表格容器 -->
						<div>
							<div class="el-table el-table--border el-table--enable-row-hover el-table--enable-row-transition">
								<table class="el-table__body text-center" style="width:100%" cellspacing="0" cellpadding="0" border="0">
									<thead>
										<tr>
											<th class=" text-center">
												<div class="cell">公司车辆数目</div>
											</th>
											<th class=" text-center">
												<div class="cell">抵押车辆情况</div>
											</th>
											<th class=" text-center">
												<div class="cell">累计违章次数</div>
											</th>
											
										</tr>
									</thead>
									<tbody>
										<tr class="el-table__row">
											<td>
												<div class="cell strong">
													<el-input v-model="carTotal" placeholder="请输入车辆数目"></el-input>
												</div>
											</td>
											<td>
												<div class="cell">
													<el-input v-model="carInfo" placeholder="请输入车辆情况"></el-input>
												</div>
											</td>
											<td>
												<div class="cell">
													<el-input v-model="carNum" placeholder="请输入车辆违章次数"></el-input>
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
								<el-button type="default" size="medium">获取数据</el-button>
								<el-button type="primary" size="medium">保存</el-button>
							</div>
							<div class="card-title">所有车辆明细</div>
						</div>
						<!-- 表格容器 -->
						<div>
							<el-table :data="tableData_4" v-loading.body="listLoading" border fit highlight-current-row style="width: 100%">
								<el-table-column label="序号" type="index" width="50"></el-table-column>
								<el-table-column min-width="100px" :label="tableData_4_columns.hpzl">
									<template slot-scope="scope">
										<el-input class="edit-input cellItem el-form-item" v-model.number="scope.row.hpzl" :class="Object.keys(tableData_4_columns)[1]" v-if="scope.row.edit" size="small"></el-input>
										<span v-else>{{ scope.row.hpzl}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="200px" :label="tableData_4_columns.hphm">
									<template slot-scope="scope">
										<el-input class="edit-input cellItem el-form-item" v-model.number="scope.row.hphm" :class="Object.keys(tableData_4_columns)[2]" v-if="scope.row.edit" size="small"></el-input>
										<span v-else>{{ scope.row.hphm}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="200px" :label="tableData_4_columns.zwpp">
									<template slot-scope="scope">
										<el-input class="edit-input cellItem el-form-item" v-model.number="scope.row.zwpp" :class="Object.keys(tableData_4_columns)[3]" v-if="scope.row.edit" size="small"></el-input>
										<span v-else>{{ scope.row.zwpp}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="200px" :label="tableData_4_columns.cllx">
									<template slot-scope="scope">
										<el-input class="edit-input cellItem el-form-item" v-model.number="scope.row.cllx" :class="Object.keys(tableData_4_columns)[4]" v-if="scope.row.edit" size="small"></el-input>
										<span v-else>{{ scope.row.cllx}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="200px" :label="tableData_4_columns.zzg">
									<template slot-scope="scope">
										<el-input class="edit-input cellItem el-form-item" v-model.number="scope.row.zzg" :class="Object.keys(tableData_4_columns)[5]" v-if="scope.row.edit" size="small"></el-input>
										<span v-else>{{ scope.row.zzg}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="200px" :label="tableData_4_columns.jdczt">
									<template slot-scope="scope">
										<el-input class="edit-input cellItem el-form-item" v-model.number="scope.row.jdczt" :class="Object.keys(tableData_4_columns)[6]" v-if="scope.row.edit" size="small"></el-input>
										<span v-else>{{ scope.row.jdczt}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="200px" :label="tableData_4_columns.dybj">
									<template slot-scope="scope">
										<el-input class="edit-input cellItem el-form-item" v-model.number="scope.row.dybj" :class="Object.keys(tableData_4_columns)[7]" v-if="scope.row.edit" size="small"></el-input>
										<span v-else>{{ scope.row.dybj}}</span>
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
import quillEditor from "@/components/form/quillEditor.vue";
import tabelAddBtn from "@/components/table/table-add-btn.vue";
import tableOperation from "@/components/table/table-operation.vue";
export default {
  data() {
    return {
	  bdcxj: "我是富文本的返回内容",
	  zysbxj:"我是主要设备富文本的返回内容",
      activeName: "first",
      listLoading: false,
      textarea: "",
      tableData: [],
      tableData_columns: {
        syzh: "土地证号",
        zl: "坐落",
        yt: "用途",
        qdjg: "取得价格（万元）",
        syqlx: "使用权类型",
        zzrq: "终止日期",
        mj: "面积（平米）",
        ywtxql: "有无他项权利",
        rzed: "融资额度",
        edit: false
      },
      tableData_1: [],
      tableData_1_columns: {
        fqzh: "土地证号",
        fwzl: "坐落",
        yt: "用途",
        gmjg: "取得价格（万元）",
        qsxz: "使用权类型",
        zzrq: "终止日期",
        symj: "面积（平米）",
        ywtxql: "有无他项权利",
        rzed: "融资额度",
        edit: false
      },
      tableData_2: [],
      tableData_2_columns: {
        sbmc: "设备名称",
        sbxh: "设备型号",
        yz: "原值（万元）",
        jz: "净值（万元）",
        edit: false
	  },
	  //-----------------------------车辆记录----------------------------------//
	  carTotal:null,
	  carInfo:"",
	  carNum:null,
      tableData_4: [],
      tableData_4_columns: {
        hpzl: "号牌种类",
        hphm: "车牌号码",
        zwpp: "中文品牌",
        cllx: "车辆类型",
        zzg: "制造国",
        jdczt: "机动车状态",
        dybj: "抵押标记",
        edit: false
      },
      //规则
      rules: {}
    };
  },
  computed: {
    hasMortgage() {
      return this.tableData.hasMortgage ? "有" : "无";
    },
    status() {
      return this.tableData.status ? "正常" : "异常";
    },
    mortgageMark() {
      return this.tableData.mortgageMark ? "已抵押" : "未抵押";
    }
  },
  mounted() {
    this.getLandList();
    this.getHouseList();
    this.getDeviceList();
    this.getCarList();
  },
  methods: {
    //---------------------------------------企业不动产信息--------------------------------------------------------------//
    // 获取土地信息
    getLandList: async function() {
      let params = {
        creditCode: sessionStorage.getItem("creditCode"),
        token: sessionStorage.getItem("token")
      };
      const res = await this.$http.post(
        "/hspt-web-api/data_entry/gsyyxx/qyjyzy/qytdxx/list",
        params
      );
      if (res.data.resultCode == "0") {
        this.tableData = res.data.resultData.data.rows;
      } else {
      }
    },
    //获取房产信息
    getHouseList: async function() {
      let params = {
        creditCode: sessionStorage.getItem("creditCode"),
        token: sessionStorage.getItem("token")
      };
      const res = await this.$http.post(
        "/hspt-web-api/data_entry/gsyyxx/qyjyzy/qyfcxx/list",
        params
      );
      if (res.data.resultCode == "0") {
        this.tableData_1 = res.data.resultData.data.rows;
      } else {
      }
	},
	//保存小结
	saveBdcXj(){
		alert(this.bdcxj)
	},
    //改变小结内容
    changBdcxj(val) {
      this.bdcxj=val;
    },
    //---------------------------------------企业主要生产设备--------------------------------------------------------------//
    // 获取企业主要生产设备
    getDeviceList: async function() {
      let params = {
        creditCode: sessionStorage.getItem("creditCode"),
        token: sessionStorage.getItem("token")
      };
      const res = await this.$http.post(
        "/hspt-web-api/data_entry/gsyyxx/qyjyzy/scsb/list",
        params
      );
      if (res.data.resultCode == "0") {
        this.tableData_2 = res.data.resultData.data.rows;
      } else {
      }
	},
	//保存小结
	saveZysbXj(){
		alert(this.bdcxj)
	},
	//改变小结内容
    changZysbxj(val) {
      this.bdcxj=val;
    },
    //---------------------------------------企业车辆信息--------------------------------------------------------------//
    //获取车辆信息
    getCarList: async function() {
      let params = {
        creditCode: sessionStorage.getItem("creditCode"),
        token: sessionStorage.getItem("token")
      };
      const res = await this.$http.post(
        "/hspt-web-api/data_entry/gsyyxx/qyjyzy/clqkmx/list",
        params
      );
      if (res.data.resultCode == "0") {
        this.tableData_4 = res.data.resultData.data.rows;
      } else {
      }
    },

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
          //根据列名不同，确定不同的合计单位
          if (column.property == "ratio") {
            sums[index] += "%";
          } else if (
            column.property == "subscribe" ||
            column.property == "paidIn"
          ) {
            sums[index] += " 万元";
          }
        } else {
          sums[index] = "";
        }
      });
      return sums;
    },
    verify(row, index) {
      row.edit = false;
    },
    verify1(row, index) {
      row.edit = false;
    },
    verify2(row, index) {
      row.edit = false;
    },
    verify4(row, index) {
      row.edit = false;
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

