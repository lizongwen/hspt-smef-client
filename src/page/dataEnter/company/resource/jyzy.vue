<template>
	<div>
		<el-tabs v-model="activeName">
			<el-tab-pane label="企业不动产信息" name="first">
				<div>
					<el-card class="box-card" shadow='nevner'>
						<div slot="header" class="clearfix">
							<div class="card-right-wrap">
								<el-button type="primary" size="medium" @click="setTdxx">保存</el-button>
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
								<el-table-column min-width="150px" :label="tableData_columns.yt">
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
										<v-tableOperation :scope="scope" :tableData="tableData" v-on:verify="verify" v-on:acceptDelRow='acceptDelRow'></v-tableOperation>
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
								<el-button type="primary" size="medium" @click="setFcxx">保存</el-button>
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
								<el-table-column min-width="100px" :label="tableData_1_columns.dh">
									<template slot-scope="scope">
										<el-input class="edit-input cellItem el-form-item" v-model.number="scope.row.dh" :class="Object.keys(tableData_1_columns)[3]" v-if="scope.row.edit" size="small"></el-input>
										<span v-else>{{ scope.row.dh}}</span>
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
								<el-table-column min-width="130px" :label="tableData_1_columns.synx">
									<template slot-scope="scope">
                    <el-input class="edit-input cellItem el-form-item" v-model.number="scope.row.synx" :class="Object.keys(tableData_1_columns)[6]" v-if="scope.row.edit" size="small"></el-input>
                    <span v-else>{{ scope.row.synx}}</span>
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
										<v-tableOperation :scope="scope" :tableData="tableData_1" v-on:verify="verify_1" v-on:acceptDelRow='acceptDelRow_1'></v-tableOperation>
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
								<el-button type="default" size="medium" @click="downloadFile">模板下载</el-button> 
								<el-upload class="upload-button" :data="param" action="/hspt-web-api/data_entry/gsyyxx/qyjyzy/scsb/upload" :show-file-list='false' :on-success="handleSuccess" :on-progress='handleProgess'>
									<el-button size="medium" type="primary">数据导入</el-button>
								</el-upload>
								<el-button type="primary" size="medium" @click="setScsb">保存</el-button>
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
								<el-table-column min-width="200px" :label="tableData_2_columns.yz" prop="yz">
									<template slot-scope="scope">
										<el-input class="edit-input cellItem el-form-item" v-model.number="scope.row.yz" :class="Object.keys(tableData_2_columns)[3]" v-if="scope.row.edit" size="small"></el-input>
										<span v-else>{{ scope.row.yz}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="200px" :label="tableData_2_columns.jz" prop="jz">
									<template slot-scope="scope">
										<el-input class="edit-input cellItem el-form-item" v-model.number="scope.row.jz" :class="Object.keys(tableData_2_columns)[4]" v-if="scope.row.edit" size="small"></el-input>
										<span v-else>{{ scope.row.jz}}</span>
									</template>
								</el-table-column>
								<el-table-column align="center" label="操作" width="240">
									<template slot-scope="scope">
										<v-tableOperation :scope="scope" :tableData="tableData_2" v-on:verify="verify_2" v-on:acceptDelRow='acceptDelRow_2'></v-tableOperation>
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
								<el-button type="primary" size="medium" @click="setZysbXj">保存</el-button>
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
								<el-button type="default" size="medium" @click="getCljlIterfaceData">获取数据</el-button>
								<el-button type="primary" size="medium" @click="setCljl">保存</el-button>
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
													<el-input v-model="tableData_3.gsclqksm" placeholder="请输入车辆数目"></el-input>
												</div>
											</td>
											<td>
												<div class="cell">
													<el-input v-model="tableData_3.dyclqk" placeholder="请输入车辆情况"></el-input>
												</div>
											</td>
											<td>
												<div class="cell">
													<el-input v-model="tableData_3.ljwzcs" placeholder="请输入车辆违章次数"></el-input>
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
								<el-button type="default" size="medium" @click="getClmxIterfaceData">获取数据</el-button>
								<el-button type="primary" size="medium" @click="setClmx">保存</el-button>
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
										<v-tableOperation :scope="scope" :tableData="tableData_4" v-on:verify="verify_4" v-on:acceptDelRow='acceptDelRow_4'></v-tableOperation>
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
import quillEditor from "@/components/form/quillEditor.vue";
import tabelAddBtn from "@/components/table/table-add-btn.vue";
import tableOperation from "@/components/table/table-operation.vue";
import axios from "axios";

export default {
  data() {
    return {
      param:{
	    creditCode: sessionStorage.getItem("creditCode"),
      token: sessionStorage.getItem("token"),
	    },
      bdcxj: "",
      zysbxj: "",
      activeName: "first",
      listLoading: false,
      textarea: "",
      tableData: [],
      deleteData: [],
      addData: [],
      updateData: [],
      tableData_columns: {
        id: null,
        syzh: "土地证号",
        zl: "坐落",
        yt: "用途",
        qdjg: "取得价格（万元）",
        syqlx: "使用权类型",
        zzrq: "终止日期",
        mj: "面积",
        ywtxql: "有无他项权利",
        rzed: "融资额度",
        edit: false
      },
      tableData_1: [],
      deleteData_1: [],
      addData_1: [],
      updateData_1: [],
      tableData_1_columns: {
        id: null,
        fqzh: "房产证号",
        fwzl: "坐落",
        dh: "地号",
        gmjg: "购买价格",
        symj: "使用面积",
        qsxz: "权属性质",
        synx: "使用年限",
        ywtxql: "有无他项权利",
        rzed: "融资额度",
        edit: false
      },
      tableData_2: [],
      deleteData_2: [],
      addData_2: [],
      updateData_2: [],
      tableData_2_columns: {
        id: null,
        sbmc: "设备名称",
        sbxh: "设备型号",
        yz: "原值（万元）",
        jz: "净值（万元）",
        edit: false
      },
      //-----------------------------车辆记录----------------------------------//
      tableData_3: [],

      tableData_4: [],
      deleteData_4: [],
      addData_4: [],
      updateData_4: [],
      tableData_4_columns: {
        id: null,
        hpzl: "号牌种类",
        hphm: "车牌号码",
        zwpp: "中文品牌",
        cllx: "车辆类型",
        zzg: "制造国",
        jdczt: "机动车状态",
        dybj: "抵押标记",
        edit: false
      },
      //-----------------------------规则-------------------------------------//
      rules_tdxx: {
        syzh: [{ required: true, message: "土地证号是必填项" }],
        zl: [{ required: true, message: "坐落是必填项" }],
        yt: [{ required: true, message: "用途是必填项" }],
        qdjg: [{ required: true, message: "取得价格是必填项" }],
        syqlx: [{ required: true, message: "使用权类型是必填项" }],
        zzrq: [{ required: true, message: "终止日期是必填项" }],
        mj: [{ required: true, message: "面积是必填项" }],
        ywtxql: [{ required: true, message: "有无他项权利是必填项" }],
        rzed: [{ required: true, message: "融资额度是必填项" }]
      },
      rules_fcxx: {
        fqzh: [{ required: true, message: "房产证号是必填项" }],
        fwzl: [{ required: true, message: "坐落是必填项" }],
        dh: [{ required: true, message: "地号是必填项" }],
        gmjg: [{ required: true, message: "购买价格是必填项" }],
        symj: [{ required: true, message: "使用面积是必填项" }],
        qsxz: [{ required: true, message: "权属性质是必填项" }],
        synx: [{ required: true, message: "使用年限是必填项" }],
        ywtxql: [{ required: true, message: "有无他项权利是必填项" }],
        rzed: [{ required: true, message: "融资额度是必填项" }]
      },
      rules_scsb: {
        sbmc: [{ required: true, message: "设备名称是必填项" }],
        sbxh: [{ required: true, message: "设备型号是必填项" }],
        yz: [{ required: true, message: "原值（万元）是必填项" }],
        jz: [{ required: true, message: "净值（万元）是必填项" }]
      },
      rules_clmx: {
        hpzl: [{ required: true, message: "号牌种类是必填项" }],
        hphm: [{ required: true, message: "车牌号码是必填项" }],
        zwpp: [{ required: true, message: "中文品牌是必填项" }],
        cllx: [{ required: true, message: "车辆类型是必填项" }],
        zzg: [{ required: true, message: "制造国是必填项" }],
        jdczt: [{ required: true, message: "机动车状态是必填项" }],
        dybj: [{ required: true, message: "抵押标记是必填项" }]
      }
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
    this.getBdcxj();
    this.getZysbxj();
    this.getCljl();
  },
  methods: {
    //---------------------------------------企业不动产信息--------------------------------------------------------------//
    // 获取企业土地信息
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
    //保存企业土地信息数据
    setTdxx: async function() {
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
        "/hspt-web-api/data_entry/gsyyxx/qyjyzy/qytdxx/save",
        params
      );
      if (res.data.resultCode == "0") {
        this.$message({ message: res.data.resultMsg, type: "success" });
        this.deleteData = [];
        this.updateData = [];
        this.addData = [];
      } else {
        this.$message({ message: res.data.resultMsg, type: "warning" });
      }
    },
    //接受企业土地信息删除的数据
    acceptDelRow(val) {
      this.deleteData.push(val);
    },
    //验证企业土地信息数据
    verify(rowObj, rowIndex) {
      var isValid = tableValidates.validateByRow(
        rowObj,
        rowIndex,
        this.rules_tdxx,
        this
      );
      console.log(isValid);
      if (rowObj.id) {
        this.updateData.push(rowObj);
      }
    },

    //获取企业房产信息
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
    //保存企业房产信息数据
    setFcxx: async function() {
      this.tableData_1.forEach((item, index) => {
        if (item.id == null) {
          this.addData_1.push(item);
        }
      });
      let params = {
        creditCode: sessionStorage.getItem("creditCode"),
        token: sessionStorage.getItem("token"),
        addedDataStr: JSON.stringify(this.addData_1),
        updatedDataStr: JSON.stringify(this.updateData_1),
        deletedDataStr: JSON.stringify(this.deleteData_1)
      };
      const res = await this.$http.post(
        "/hspt-web-api/data_entry/gsyyxx/qyjyzy/qyfcxx/save",
        params
      );
      if (res.data.resultCode == "0") {
        this.$message({ message: res.data.resultMsg, type: "success" });
        this.deleteData_1 = [];
        this.updateData_1 = [];
        this.addData_1 = [];
      } else {
        this.$message({ message: res.data.resultMsg, type: "warning" });
      }
    },
    //接受企业房产信息删除的数据
    acceptDelRow_1(val) {
      this.deleteData_1.push(val);
    },
    //验证企业房产信息数据
    verify_1(rowObj, rowIndex) {
      var isValid = tableValidates.validateByRow(
        rowObj,
        rowIndex,
        this.rules_fcxx,
        this
      );
      console.log(isValid);
      if (rowObj.id) {
        this.updateData_1.push(rowObj);
      }
    },

    //获取不动产信息小结
    getBdcxj: async function() {
      let params = {
        creditCode: sessionStorage.getItem("creditCode"),
        token: sessionStorage.getItem("token")
      };
      const res = await this.$http.post(
        "/hspt-web-api/data_entry/gsyyxx/qyjyzy/initQybdcxxxj",
        params
      );
      if (res.data.resultCode == "0") {
        this.bdcxj = res.data.resultData.data.xj;
      }
    },
    //修改不动产信息小结
    changBdcxj(val) {
      this.bdcxj = val;
    },
    //保存不动产信息小结
    saveBdcXj: async function() {
      let params = {
        creditCode: sessionStorage.getItem("creditCode"),
        token: sessionStorage.getItem("token"),
        xj: this.bdcxj
      };
      const res = await this.$http.post(
        "/hspt-web-api/data_entry/gsyyxx/qyjyzy/saveQybdcxxxj",
        params
      );
      if (res.data.resultCode == "0") {
        this.$message({ message: res.data.resultMsg, type: "success" });
      } else {
        this.$message({ message: res.data.resultMsg, type: "warning" });
      }
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
    //保存主要生产设备数据
    setScsb: async function() {
      this.tableData_2.forEach((item, index) => {
        if (item.id == null) {
          this.addData_2.push(item);
        }
      });
      let params = {
        creditCode: sessionStorage.getItem("creditCode"),
        token: sessionStorage.getItem("token"),
        addedDataStr: JSON.stringify(this.addData_2),
        updatedDataStr: JSON.stringify(this.updateData_2),
        deletedDataStr: JSON.stringify(this.deleteData_2)
      };
      const res = await this.$http.post(
        "/hspt-web-api/data_entry/gsyyxx/qyjyzy/scsb/save",
        params
      );
      if (res.data.resultCode == "0") {
        this.$message({ message: res.data.resultMsg, type: "success" });
        this.deleteData_2 = [];
        this.updateData_2 = [];
        this.addData_2 = [];
      } else {
        this.$message({ message: res.data.resultMsg, type: "warning" });
      }
    },
    //接受主要生产设备删除的数据
    acceptDelRow_2(val) {
      this.deleteData_2.push(val);
    },
    //验证主要生产设备数据
    verify_2(rowObj, rowIndex) {
      var isValid = tableValidates.validateByRow(
        rowObj,
        rowIndex,
        this.rules_scsb,
        this
      );
      console.log(isValid);
      if (rowObj.id) {
        this.updateData_2.push(rowObj);
      }
    },

    //获取主要生产设备小结
    getZysbxj: async function() {
      let params = {
        creditCode: sessionStorage.getItem("creditCode"),
        token: sessionStorage.getItem("token")
      };
      const res = await this.$http.post(
        "/hspt-web-api/data_entry/gsyyxx/qyjyzy/scsb/initQyzyscsbxj",
        params
      );
      if (res.data.resultCode == "0") {
        this.zysbxj = res.data.resultData.data.xj;
      }
    },
    //修改主要生产设备小结
    changZysbxj(val) {
      this.zysbxj = val;
    },
    //保存主要生产设备小结
    setZysbXj: async function() {
      let params = {
        creditCode: sessionStorage.getItem("creditCode"),
        token: sessionStorage.getItem("token"),
        xj: this.zysbxj
      };
      const res = await this.$http.post(
        "/hspt-web-api/data_entry/gsyyxx/qyjyzy/scsb/saveQyzyscsbxj",
        params
      );
      if (res.data.resultCode == "0") {
        this.$message({ message: res.data.resultMsg, type: "success" });
      } else {
        this.$message({ message: res.data.resultMsg, type: "warning" });
      }
    },

    //企业主要生产设备模板下载
    // downloadScsb: async function() {
    //   let params = {
    //     token: sessionStorage.getItem("token"),
    //     fileName:"企业主要生产设备",
    //     filePath:"http://testdfs.creditstate.cn/group1/M00/02/17/rBj-DlpEC0WADGeQAABaABUpVk8581.xls"
    //   };
    //   const res = await this.$http.post(
    //     "/hspt-web-api/data_entry/gsyyxx/qyjyzy/scsb/download",
    //     params
    //   );
    // },

    //---------------------------------------企业车辆信息--------------------------------------------------------------//
    //获取车辆记录
    getCljl: async function() {
      let params = {
        creditCode: sessionStorage.getItem("creditCode"),
        token: sessionStorage.getItem("token")
      };
      const res = await this.$http.post(
        "/hspt-web-api/data_entry/gsyyxx/qyjyzy/qyhgrclqk/list",
        params
      );
      if (res.data.resultCode == "0") {
        this.tableData_3 = res.data.resultData.data.rows[0];
      } else {
      }
    },

    //保存车辆记录
    setCljl: async function() {
      let params = {
        creditCode: sessionStorage.getItem("creditCode"),
        token: sessionStorage.getItem("token"),
        updatedDataStr: JSON.stringify(this.tableData_3)
      };
      const res = await this.$http.post(
        "/hspt-web-api/data_entry/gsyyxx/qyjyzy/qyhgrclqk/save",
        params
      );
      if (res.data.resultCode == "0") {
        this.$message({ message: res.data.resultMsg, type: "success" });
      } else {
        this.$message({ message: res.data.resultMsg, type: "warning" });
      }
    },

    //接口获取车辆记录
    getCljlIterfaceData: async function() {
      let params = {
        creditCode: sessionStorage.getItem("creditCode"),
        token: sessionStorage.getItem("token")
      };
      const res = await this.$http.post(
        "/hspt-web-api/data_entry/gsyyxx/qyjyzy/qyhgrclqk/getData",
        params
      );
      if (res.data.resultCode == "0") {
        this.$message({ message: res.data.resultMsg, type: "success" });
        this.tableData_3 = res.data.resultData.data;
      } else {
        this.$message({ message: res.data.resultMsg, type: "warning" });
      }
    },

    //获取车辆明细信息
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
    //接口获取车辆明细
    getClmxIterfaceData: async function() {
      let params = {
        creditCode: sessionStorage.getItem("creditCode"),
        token: sessionStorage.getItem("token")
      };
      const res = await this.$http.post(
        "/hspt-web-api/data_entry/gsyyxx/qyjyzy/qyhgrclqkmx/getData",
        params
      );
      if (res.data.resultCode == "0") {
        this.$message({ message: res.data.resultMsg, type: "success" });
        this.tableData_4 = res.data.resultData.data.rows;
        this.deleteData_4 = [];
        this.updateData_4 = [];
        this.addData_4 = [];
        this.addData_4 = res.data.resultData.data.rows;
      } else {
        this.$message({ message: res.data.resultMsg, type: "warning" });
      }
    },

    //保存车辆明细数据
    setClmx: async function() {
      this.tableData_4.forEach((item, index) => {
        if (item.id == null) {
          this.addData_4.push(item);
        }
      });
      let params = {
        creditCode: sessionStorage.getItem("creditCode"),
        token: sessionStorage.getItem("token"),
        addedDataStr: JSON.stringify(this.addData_4),
        updatedDataStr: JSON.stringify(this.updateData_4),
        deletedDataStr: JSON.stringify(this.deleteData_4)
      };
      const res = await this.$http.post(
        "/hspt-web-api/data_entry/gsyyxx/qyjyzy/clqkmx/save",
        params
      );
      if (res.data.resultCode == "0") {
        this.$message({ message: res.data.resultMsg, type: "success" });
        this.deleteData_4 = [];
        this.updateData_4 = [];
        this.addData_4 = [];
      } else {
        this.$message({ message: res.data.resultMsg, type: "warning" });
      }
    },

 //downloadUrl downloadFile
    downloadFile: async function() {
    //   let params = {
    //     token: sessionStorage.getItem("token"),
    //     fileName: "我操",
    //     filePath:
    //       "http://testdfs.creditstate.cn/group1/M00/02/17/rBj-DlpEC0WADGeQAABaABUpVk8581.xls"
    //   };
    //   const res = await this.$http.post(
    //    "/hspt-web-api/data_entry/gsyyxx/qyjyzy/scsb/downloadTest",
    //    params,
    //    {responseType:'arrayBuffer'}
    //  );

      // let url = window.URL.createObjectURL(
      //   new Blob([res.data], { type: "application/vnd.ms-excel" })
      // );
      let link = document.createElement("a");
      link.style.display = "none";
      link.href = "http://testdfs.creditstate.cn/group1/M00/02/17/rBj-DlpEC0WADGeQAABaABUpVk8581.xls";
      link.setAttribute("download", "测试.xls");
      document.body.appendChild(link);
      link.click();
    },

    //接受车辆明细删除的数据
    acceptDelRow_4(val) {
      this.deleteData_4.push(val);
    },
    //验证车辆明细数据
    verify_4(rowObj, rowIndex) {
      var isValid = tableValidates.validateByRow(
        rowObj,
        rowIndex,
        this.rules_clmx,
        this
      );
      console.log(isValid);
      if (rowObj.id) {
        this.updateData_4.push(rowObj);
      }
    },

    //主要生产设备合计
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
          if (column.property == "sbmc" || column.property == "sbxh") {
            sums[index] += "";
          } else if (column.property == "yz" || column.property == "jz") {
            sums[index] += " 万元";
          }
        } else {
          sums[index] = "";
        }
      });
      return sums;
    },

    //////////////////////////////////////////////////////////////
      handleSuccess(res, file){
        if (res.resultCode == "0") {
              this.$message({ message: res.resultMsg, type: "success" });
            if(res.resultMapData.qytpPicUrl!=null)
                  this.imgurl_qytp=res.resultMapData.qytpPicUrl;
            else if(res.resultMapData.zzjgPicUrl!=null)
                this.imgurl_zzjg=res.resultMapData.zzjgPicUrl;
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

