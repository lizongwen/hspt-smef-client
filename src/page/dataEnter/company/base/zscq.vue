<template>
	<div>
		<el-tabs v-model="activeName" @tab-click="handleClick">
			<el-tab-pane label="商标" name="first">
				<div>
					<el-card class="box-card">
						<div slot="header" class="clearfix">
							<div class="card-right-wrap">
								<el-button class="save" type="default" size="medium">获取数据</el-button>
								<el-button class="save" type="primary" size="medium" @click="setSb">保存</el-button>
							</div>
							<div class="card-title">商标</div>
						</div>
						<!-- 表格容器 -->
						<div>
							<el-table :data="tableData" v-loading.body="listLoading" border fit highlight-current-row style="width: 100%">
								<el-table-column label="序号" type="index" width="50"></el-table-column>
								<el-table-column min-width="200px" :label="tableData_columns.sbm">
									<template slot-scope="scope">
										<el-input class="edit-input cellItem el-form-item" v-model.number="scope.row.sbm" :class="Object.keys(tableData_columns)[1]" v-if="scope.row.edit" size="small"></el-input>
										<span v-else>{{ scope.row.sbm}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="200px" :label="tableData_columns.zt">
									<template slot-scope="scope">
										<el-select v-model="scope.row.zt" class="edit-input cellItem el-form-item" :class="Object.keys(tableData_columns)[2]" placeholder="请选择" size="small" v-if="scope.row.edit">
											<el-option :value="1" label="有效"></el-option>
											<el-option :value="0" label="无效"></el-option>
										</el-select>
										<span v-else>{{ scope.row.zt==null?"":(scope.row.zt?"有效":"无效")}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="110px" :label="tableData_columns.sqsj">
									<template slot-scope="scope">
										<el-date-picker class="cellItem el-form-item" v-model="scope.row.sqsj" value-format="yyyy-MM-dd" :class="Object.keys(tableData_columns)[3]" v-if="scope.row.edit" type="date" placeholder="选择日期" style="width: 100%;" :clearable='false'></el-date-picker>
										<span v-else>{{scope.row.sqsj}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="200px" :label="tableData_columns.zch">
									<template slot-scope="scope">
										<el-input class="edit-input cellItem el-form-item" v-model.number="scope.row.zch" :class="Object.keys(tableData_columns)[4]" v-if="scope.row.edit" size="small"></el-input>
										<span v-else>{{ scope.row.zch}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="200px" :label="tableData_columns.lb">
									<template slot-scope="scope">
										<el-input class="edit-input cellItem el-form-item" v-model.number="scope.row.lb" :class="Object.keys(tableData_columns)[5]" v-if="scope.row.edit" size="small"></el-input>
										<span v-else>{{ scope.row.lb}}</span>
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
			<el-tab-pane label="专利" name="second">
				<div>
					<el-card class="box-card">
						<div slot="header" class="clearfix">
							<div class="card-right-wrap">
								<el-button class="save" type="default" size="medium">获取数据</el-button>
								<el-button class="save" type="primary" size="medium" @click="setZL">保存</el-button>
							</div>
							<div class="card-title">专利</div>
						</div>
						<!-- 表格容器 -->
						<div class="el-table el-table--border el-table--enable-row-hover el-table--enable-row-transition">
							<table class="el-table__body text-center" style="width:100%" cellspacing="0" cellpadding="0" border="0">
								<thead>
									<tr>
										<th class=" text-center">
											<div class="cell">类型</div>
										</th>
										<th class=" text-center">
											<div class="cell">数量</div>
										</th>
										<th class=" text-center">
											<div class="cell">类型</div>
										</th>
										<th class=" text-center">
											<div class="cell">数量</div>
										</th>
										<th class=" text-center">
											<div class="cell">类型</div>
										</th>
										<th class=" text-center">
											<div class="cell">数量</div>
										</th>
									</tr>
								</thead>
								<tbody>
									<tr class="el-table__row">
										<td>
											<div class="cell strong">发明专利</div>
										</td>
										<td>
											<div class="cell">
												<el-input v-model="tableData_1.fmzl.sl" placeholder="请输入内容"></el-input>
											</div>
										</td>
										<td>
											<div class="cell strong">实用新型</div>
										</td>
										<td>
											<div class="cell">
												<el-input v-model="tableData_1.syxx.sl" placeholder="请输入内容"></el-input>
											</div>
										</td>
										<td>
											<div class="cell strong">外观设计</div>
										</td>
										<td>
											<div class="cell">
												<el-input v-model="tableData_1.wgsj.sl" placeholder="请输入内容"></el-input>
											</div>
										</td>
									</tr>
									<tr class="el-table__row">
										<td>
											<div class="cell">授权有权</div>
										</td>
										<td>
											<div class="cell">
												<el-input v-model="tableData_1.fmzl.sqyq" placeholder="请输入内容"></el-input>
											</div>
										</td>
										<td>
											<div class="cell">授权有权</div>
										</td>
										<td>
											<div class="cell">
												<el-input v-model="tableData_1.syxx.sqyq" placeholder="请输入内容"></el-input>
											</div>
										</td>
										<td>
											<div class="cell">授权有权</div>
										</td>
										<td>
											<div class="cell">
												<el-input v-model="tableData_1.wgsj.sqyq" placeholder="请输入内容"></el-input>
											</div>
										</td>
									</tr>
									<tr class="el-table__row">
										<td>
											<div class="cell">无权终止</div>
										</td>
										<td>
											<div class="cell">
												<el-input v-model="tableData_1.fmzl.wqzz" placeholder="请输入内容"></el-input>
											</div>
										</td>
										<td>
											<div class="cell">无权终止</div>
										</td>
										<td>
											<div class="cell">
												<el-input v-model="tableData_1.syxx.wqzz" placeholder="请输入内容"></el-input>
											</div>
										</td>
										<td>
											<div class="cell">无权终止</div>
										</td>
										<td>
											<div class="cell">
												<el-input v-model="tableData_1.wgsj.wqzz" placeholder="请输入内容"></el-input>
											</div>
										</td>
									</tr>
									<tr class="el-table__row">
										<td>
											<div class="cell">驳回撤回</div>
										</td>
										<td>
											<div class="cell">
												<el-input v-model="tableData_1.fmzl.bhch" placeholder="请输入内容"></el-input>
											</div>
										</td>
										<td>
											<div class="cell">驳回撤回</div>
										</td>
										<td>
											<div class="cell">
												<el-input v-model="tableData_1.syxx.bhch" placeholder="请输入内容"></el-input>
											</div>
										</td>
										<td>
											<div class="cell">驳回撤回</div>
										</td>
										<td>
											<div class="cell">
												<el-input v-model="tableData_1.wgsj.bhch" placeholder="请输入内容"></el-input>
											</div>
										</td>
									</tr>
									<tr class="el-table__row">
										<td>
											<div class="cell">审中实审</div>
										</td>
										<td>
											<div class="cell">
												<el-input v-model="tableData_1.fmzl.szss" placeholder="请输入内容"></el-input>
											</div>
										</td>
										<td>
											<div class="cell">审中实审</div>
										</td>
										<td>
											<div class="cell">
												<el-input v-model="tableData_1.syxx.szss" placeholder="请输入内容"></el-input>
											</div>
										</td>
										<td>
											<div class="cell">审中实审</div>
										</td>
										<td>
											<div class="cell">
												<el-input v-model="tableData_1.wgsj.szss" placeholder="请输入内容"></el-input>
											</div>
										</td>
									</tr>
									<tr class="el-table__row">
										<td>
											<div class="cell">公开审中</div>
										</td>
										<td>
											<div class="cell">
												<el-input v-model="tableData_1.fmzl.gksz" placeholder="请输入内容"></el-input>
											</div>
										</td>
										<td>
											<div class="cell">公开审中</div>
										</td>
										<td>
											<div class="cell">
												<el-input v-model="tableData_1.syxx.gksz" placeholder="请输入内容"></el-input>
											</div>
										</td>
										<td>
											<div class="cell">公开审中</div>
										</td>
										<td>
											<div class="cell">
												<el-input v-model="tableData_1.wgsj.gksz" placeholder="请输入内容"></el-input>
											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</el-card>
				</div>
				<div>
					<el-card class="box-card">
						<div slot="header" class="clearfix">
							<div class="card-right-wrap">
								<el-button class="save" type="primary" size="medium" @click="setSqyqzlmx">保存</el-button>
							</div>
							<div class="card-title">授权有权专利明细</div>
						</div>
						<!-- 表格容器 -->
						<div>
							<el-table :data="tableData_2" v-loading.body="listLoading" border fit highlight-current-row style="width: 100%">
								<el-table-column label="序号" type="index" width="50"></el-table-column>
								<el-table-column min-width="200px" :label="tableData_2_columns.sqh">
									<template slot-scope="scope">
										<el-input class="edit-input cellItem el-form-item" v-model.number="scope.row.sqh" :class="Object.keys(tableData_2_columns)[1]" v-if="scope.row.edit" size="small"></el-input>
										<span v-else>{{ scope.row.sqh}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="110px" :label="tableData_2_columns.sqr">
									<template slot-scope="scope">
										<el-date-picker class="cellItem el-form-item" v-model="scope.row.sqr" value-format="yyyy-MM-dd" :class="Object.keys(tableData_2_columns)[2]" v-if="scope.row.edit" type="date" placeholder="选择日期" style="width: 100%;" :clearable='false'></el-date-picker>
										<span v-else>{{scope.row.sqr}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="200px" :label="tableData_2_columns.mc">
									<template slot-scope="scope">
										<el-input class="edit-input cellItem el-form-item" v-model.number="scope.row.mc" :class="Object.keys(tableData_2_columns)[3]" v-if="scope.row.edit" size="small"></el-input>
										<span v-else>{{ scope.row.mc}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="200px" :label="tableData_2_columns.sqlx">
									<template slot-scope="scope">
										<el-input class="edit-input cellItem el-form-item" v-model.number="scope.row.sqlx" :class="Object.keys(tableData_2_columns)[4]" v-if="scope.row.edit" size="small"></el-input>
										<span v-else>{{ scope.row.sqlx}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="200px" :label="tableData_2_columns.sqgj">
									<template slot-scope="scope">
										<el-input class="edit-input cellItem el-form-item" v-model.number="scope.row.sqgj" :class="Object.keys(tableData_2_columns)[5]" v-if="scope.row.edit" size="small"></el-input>
										<span v-else>{{ scope.row.sqgj}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="200px" :label="tableData_2_columns.gkh">
									<template slot-scope="scope">
										<el-input class="edit-input cellItem el-form-item" v-model.number="scope.row.gkh" :class="Object.keys(tableData_2_columns)[6]" v-if="scope.row.edit" size="small"></el-input>
										<span v-else>{{ scope.row.gkh}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="100px" :label="tableData_2_columns.flzt">
									<template slot-scope="scope">
										<el-input class="edit-input cellItem el-form-item" v-model.number="scope.row.flzt" :class="Object.keys(tableData_2_columns)[7]" v-if="scope.row.edit" size="small"></el-input>
										<span v-else>{{ scope.row.flzt}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="100px" :label="tableData_2_columns.yxx">
									<template slot-scope="scope">
										<el-input class="edit-input cellItem el-form-item" v-model.number="scope.row.yxx" :class="Object.keys(tableData_2_columns)[8]" v-if="scope.row.edit" size="small"></el-input>
										<span v-else>{{ scope.row.yxx}}</span>
									</template>
								</el-table-column>
								<!-- <el-table-column min-width="200px" :label="tableData_2_columns.yxx">
									<template slot-scope="scope">
										<el-select v-model="scope.row.yxx" class="edit-input cellItem el-form-item" :class="Object.keys(tableData_2_columns)[8]" placeholder="请选择" size="small" v-if="scope.row.edit">
											<el-option :value="1" label="有效"></el-option>
											<el-option :value="0" label="无效"></el-option>
										</el-select>
										<span v-else>{{ scope.row.yxx==null?"":(scope.row.yxx?"有效":"无效")}}</span>
									</template>
								</el-table-column> -->
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
			</el-tab-pane>
			<el-tab-pane label="著作权" name="third">
				<div>
					<el-card class="box-card">
						<div slot="header" class="clearfix">
							<div class="card-right-wrap">
								<el-button class="save" type="default" size="medium">获取数据</el-button>
								<el-button class="save" type="primary" size="medium" @click="setZzq">保存</el-button>
							</div>
							<div class="card-title">著作权</div>
						</div>
						<div>
							<el-table :data="tableData_3" v-loading.body="listLoading" border fit highlight-current-row style="width: 100%">
								<el-table-column label="序号" type="index" width="50"></el-table-column>
								<el-table-column min-width="200px" :label="tableData_3_columns.zzqmc">
									<template slot-scope="scope">
										<el-input class="edit-input cellItem el-form-item" v-model.number="scope.row.zzqmc" :class="Object.keys(tableData_3_columns)[1]" v-if="scope.row.edit" size="small"></el-input>
										<span v-else>{{ scope.row.zzqmc}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="200px" :label="tableData_3_columns.lb">
									<template slot-scope="scope">
										<el-input class="edit-input cellItem el-form-item" v-model.number="scope.row.lb" :class="Object.keys(tableData_3_columns)[2]" v-if="scope.row.edit" size="small"></el-input>
										<span v-else>{{ scope.row.lb}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="200px" :label="tableData_3_columns.zzqr">
									<template slot-scope="scope">
										<el-input class="edit-input cellItem el-form-item" v-model.number="scope.row.zzqr" :class="Object.keys(tableData_3_columns)[3]" v-if="scope.row.edit" size="small"></el-input>
										<span v-else>{{ scope.row.zzqr}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="200px" :label="tableData_3_columns.djh">
									<template slot-scope="scope">
										<el-input class="edit-input cellItem el-form-item" v-model.number="scope.row.djh" :class="Object.keys(tableData_3_columns)[4]" v-if="scope.row.edit" size="small"></el-input>
										<span v-else>{{ scope.row.djh}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="200px" :label="tableData_3_columns.bbh">
									<template slot-scope="scope">
										<el-input class="edit-input cellItem el-form-item" v-model.number="scope.row.bbh" :class="Object.keys(tableData_3_columns)[5]" v-if="scope.row.edit" size="small"></el-input>
										<span v-else>{{ scope.row.bbh}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="110px" :label="tableData_3_columns.djpzrq">
									<template slot-scope="scope">
										<el-date-picker class="cellItem el-form-item" v-model="scope.row.djpzrq" value-format="yyyy-MM-dd" :class="Object.keys(tableData_3_columns)[6]" v-if="scope.row.edit" type="date" placeholder="选择日期" style="width: 100%;" :clearable='false'></el-date-picker>
										<span v-else>{{scope.row.djpzrq}}</span>
									</template>
								</el-table-column>
								<el-table-column align="center" label="操作" width="240">
									<template slot-scope="scope">
										<v-tableOperation :scope="scope" :tableData="tableData_3" v-on:verify="verify_3" v-on:acceptDelRow='acceptDelRow_3'></v-tableOperation>
									</template>
								</el-table-column>
							</el-table>
							<v-tabelAddBtn :tableData="tableData_3" :tableData_columns="tableData_3_columns"></v-tabelAddBtn>
						</div>
					</el-card>
				</div>
			</el-tab-pane>
			<el-tab-pane label="网站备案" name="four">
				<div>
					<el-card class="box-card">
						<div slot="header" class="clearfix">
							<div class="card-right-wrap">
								<el-button class="save" type="default" size="medium">获取数据</el-button>
								<el-button class="save" type="primary" size="medium" @click="setWzba">保存</el-button>
							</div>
							<div class="card-title">网站备案</div>
						</div>
						<div>
							<el-table :data="tableData_4" v-loading.body="listLoading" border fit highlight-current-row style="width: 100%">
								<el-table-column min-width="110px" :label="tableData_4_columns.basj">
									<template slot-scope="scope">
										<el-date-picker class="cellItem el-form-item" v-model="scope.row.basj" value-format="yyyy-MM-dd" :class="Object.keys(tableData_4_columns)[1]" v-if="scope.row.edit" type="date" placeholder="选择日期" style="width: 100%;" :clearable='false'></el-date-picker>
										<span v-else>{{scope.row.basj}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="200px" :label="tableData_4_columns.wzmc">
									<template slot-scope="scope">
										<el-input class="edit-input cellItem el-form-item" v-model.number="scope.row.wzmc" :class="Object.keys(tableData_4_columns)[2]" v-if="scope.row.edit" size="small"></el-input>
										<span v-else>{{ scope.row.wzmc}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="200px" :label="tableData_4_columns.wzsy">
									<template slot-scope="scope">
										<el-input class="edit-input cellItem el-form-item" v-model.number="scope.row.wzsy" :class="Object.keys(tableData_4_columns)[3]" v-if="scope.row.edit" size="small"></el-input>
										<span v-else>{{ scope.row.wzsy}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="200px" :label="tableData_4_columns.bah">
									<template slot-scope="scope">
										<el-input class="edit-input cellItem el-form-item" v-model.number="scope.row.bah" :class="Object.keys(tableData_4_columns)[4]" v-if="scope.row.edit" size="small"></el-input>
										<span v-else>{{ scope.row.bah}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="200px" :label="tableData_4_columns.zt">
									<template slot-scope="scope">
										<el-input class="edit-input cellItem el-form-item" v-model.number="scope.row.zt" :class="Object.keys(tableData_4_columns)[5]" v-if="scope.row.edit" size="small"></el-input>
										<span v-else>{{ scope.row.zt}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="200px" :label="tableData_4_columns.dwxz">
									<template slot-scope="scope">
										<el-input class="edit-input cellItem el-form-item" v-model.number="scope.row.dwxz" :class="Object.keys(tableData_4_columns)[6]" v-if="scope.row.edit" size="small"></el-input>
										<span v-else>{{ scope.row.dwxz}}</span>
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
  import tabelAddBtn from "@/components/table/table-add-btn.vue";
  import tableOperation from "@/components/table/table-operation.vue";
export default {
  data() {
    return {
      activeName: "four",
      listLoading: false,
      rules: {},
      tableData: [],        //商标
      deleteData: [],
      addData: [],
      updateData: [],
      tableData_columns: {
        id: null,
        sbm: "商标名称",
        zt: "状态",
        sqsj: "申请时间",
        zch: "注册号",
        lb: "类别",
      },
      tableData_1: {},
      tableData_2: [],      //授权有权专利明细
      deleteData_2: [],
      addData_2: [],
      updateData_2: [],
      tableData_2_columns: {
        id: null,
        sqh: "申请号",
        sqr: "申请日",
        mc: "名称",
        sqlx: "申请类型",
        sqgj: "申请国家",
        gkh: "公开（公告）号",
        flzt: "法律状态",
        yxx: "有效性",
      }, //表格列字段
      tableData_3: [],      //著作权
      deleteData_3: [],
      addData_3: [],
      updateData_3: [],
      tableData_3_columns: {
        id: null,
        zzqmc: "著作权名称",
        lb: "类别",
        zzqr: "著作权人",
        djh: "登记号",
        bbh: "版本号",
        djpzrq: "登记批准日期",
        edit: false
      }, //表格列字段
      tableData_4: [],      //网站备案
      deleteData_4: [],
      addData_4: [],
      updateData_4: [],
      tableData_4_columns: {
        id: null,
        basj: "备案时间",
        wzmc: "网站名称",
        wzsy: "网站首页",
        bah: "备案号",
        zt: "状态",
        dwxz: "单位性质",
        edit: false
      }
    };
  },
  computed: {},
  mounted() {
    this.getSb();
    this.getZl();
    this.getSqyqzlmx();
    this.getZzq();
    this.getWzba();
  },
  methods: {
    //获取商标数据
    getSb: async function() {
      let params = {
        creditCode: sessionStorage.getItem("creditCode"),
        token: sessionStorage.getItem("token")
      };
      const res = await this.$http.post(
        "/hspt-web-api/data_entry/gsjbxx/zscq/sbxx/list",
        params
      );
      if (res.data.resultCode == "0") {
        this.tableData = res.data.resultData.rows;
      }
    },
    //保存商标数据
    setSb: async function() {
      this.tableData.forEach((item, index) => {
        if (item.id == null) {
          this.addData.push(item);
        }
      });
      let params = {
        creditCode: sessionStorage.getItem("creditCode"),
        token: sessionStorage.getItem("token"),
        loginName: sessionStorage.getItem("loginName"),
        addData: JSON.stringify(this.addData),
        updateData: JSON.stringify(this.updateData),
        deleteData: JSON.stringify(this.deleteData)
      };
      const res = await this.$http.post(
        "/hspt-web-api/data_entry/gsjbxx/zscq/sbxx/save",
        params
      );
      if (res.data.resultCode == "0") {
        this.$message({ message: res.data.resultMsg, type: "success" });
        this.deleteData = [];
        this.updateData = [];
        this.addData = [];
      }else{
        this.$message({ message: res.data.resultMsg, type: "warning" });
      }
    },
    //接受商标删除的数据
    acceptDelRow(val) {
      this.deleteData.push(val);
    },
    //验证商标数据
    verify(rowObj, rowIndex) {
      var isValid = tableValidates.validateByRow(
        rowObj,
        rowIndex,
        this.rules,
        this
      );
      console.log(isValid);
      if (rowObj.id) {
        this.updateData.push(rowObj);
      }
    },





    //获取专利信息
    getZl: async function() {
      let params = {
        creditCode: sessionStorage.getItem("creditCode"),
        token: sessionStorage.getItem("token")
      };
      const res = await this.$http.post(
        "/hspt-web-api/data_entry/gsjbxx/zscq/zl/list",
        params
      );
      if (res.data.resultCode == "0") {
        this.tableData_1 = res.data.resultData;
      }
    },

    //保存专利信息
    setZL: async function() {
      let params = {
        creditCode: sessionStorage.getItem("creditCode"),
        token: sessionStorage.getItem("token"),
        zl: JSON.stringify(this.tableData_1)
      };
      const res = await this.$http.post(
        "/hspt-web-api/data_entry/gsjbxx/zscq/zl/save",
        params
      );
      if (res.data.resultCode == "0") {
        this.$message({ message: res.data.resultMsg, type: "success" });
      }
    },






    //获取授权有权专利明细
    getSqyqzlmx: async function() {
      let params = {
        creditCode: sessionStorage.getItem("creditCode"),
        token: sessionStorage.getItem("token")
      };
      const res = await this.$http.post(
        "/hspt-web-api/data_entry/gsjbxx/zscq/sqyqzlmx/list",
        params
      );
      if (res.data.resultCode == "0") {
        this.tableData_2 = res.data.resultData.rows;
      }
    },
    //保存授权有权专利明细
    setSqyqzlmx: async function() {
      this.tableData_2.forEach((item, index) => {
        if (item.id == null) {
          this.addData_2.push(item);
        }
      });
      let params = {
        creditCode: sessionStorage.getItem("creditCode"),
        token: sessionStorage.getItem("token"),
        loginName: sessionStorage.getItem("loginName"),
        addData: JSON.stringify(this.addData_2),
        updateData: JSON.stringify(this.updateData_2),
        deleteData: JSON.stringify(this.deleteData_2)
      };
      const res = await this.$http.post(
        "/hspt-web-api/data_entry/gsjbxx/zscq/sqyqzlmx/save",
        params
      );
      if (res.data.resultCode == "0") {
        this.$message({ message: res.data.resultMsg, type: "success" });
        this.deleteData_2 = [];
        this.updateData_2 = [];
        this.addData_2 = [];
      }else{
        this.$message({ message: res.data.resultMsg, type: "warning" });
      }
    },
    //接受授权有权专利明细删除的数据
    acceptDelRow_2(val) {
      this.deleteData_2.push(val);
    },
    //验证授权有权专利明细数据
    verify_2(rowObj, rowIndex) {
      var isValid = tableValidates.validateByRow(
        rowObj,
        rowIndex,
        this.rules,
        this
      );
      console.log(isValid);
      if (rowObj.id) {
        this.updateData_2.push(rowObj);
      }
    },




    //获取著作权
    getZzq: async function() {
      let params = {
        creditCode: sessionStorage.getItem("creditCode"),
        token: sessionStorage.getItem("token")
      };
      const res = await this.$http.post(
        "/hspt-web-api/data_entry/gsjbxx/zscq/zzq/list",
        params
      );
      if (res.data.resultCode == "0") {
        this.tableData_3 = res.data.resultData.rows;
      }
    },
    //保存著作权信息
    setZzq: async function() {
      this.tableData_3.forEach((item, index) => {
        if (item.id == null) {
          this.addData_3.push(item);
        }
      });
      let params = {
        creditCode: sessionStorage.getItem("creditCode"),
        token: sessionStorage.getItem("token"),
        loginName: sessionStorage.getItem("loginName"),
        addData: JSON.stringify(this.addData_3),
        updateData: JSON.stringify(this.updateData_3),
        deleteData: JSON.stringify(this.deleteData_3)
      };
      const res = await this.$http.post(
        "/hspt-web-api/data_entry/gsjbxx/zscq/zzq/save",
        params
      );
      if (res.data.resultCode == "0") {
        this.$message({ message: res.data.resultMsg, type: "success" });
        this.deleteData_3 = [];
        this.updateData_3 = [];
        this.addData_3 = [];
      }else{
        this.$message({ message: res.data.resultMsg, type: "warning" });
      }
    },
    //接受著作权删除的数据
    acceptDelRow_3(val) {
      this.deleteData_3.push(val);
    },
    //验证著作权数据
    verify_3(rowObj, rowIndex) {
      var isValid = tableValidates.validateByRow(
        rowObj,
        rowIndex,
        this.rules,
        this
      );
      console.log(isValid);
      if (rowObj.id) {
        this.updateData_3.push(rowObj);
      }
    },




    //获取网站备案
    getWzba: async function() {
      let params = {
        creditCode: sessionStorage.getItem("creditCode"),
        token: sessionStorage.getItem("token")
      };
      const res = await this.$http.post(
        "/hspt-web-api/data_entry/gsjbxx/zscq/wzba/list",
        params
      );
      if (res.data.resultCode == "0") {
        this.tableData_4 = res.data.resultData.rows;
      }
    },
    //保存网站备案
    setWzba: async function() {
      this.tableData_4.forEach((item, index) => {
        if (item.id == null) {
          this.addData_4.push(item);
        }
      });
      let params = {
        creditCode: sessionStorage.getItem("creditCode"),
        token: sessionStorage.getItem("token"),
        addData: JSON.stringify(this.addData_4),
        updateData: JSON.stringify(this.updateData_4),
        deleteData: JSON.stringify(this.deleteData_4)
      };
      const res = await this.$http.post(
        "/hspt-web-api/data_entry/gsjbxx/zscq/wzba/save",
        params
      );
      if (res.data.resultCode == "0") {
        this.$message({ message: res.data.resultMsg, type: "success" });
        this.deleteData_4 = [];
        this.updateData_4 = [];
        this.addData_4 = [];
      }else{
        this.$message({ message: res.data.resultMsg, type: "warning" });
      }
    },
    //接受网站备案删除的数据
    acceptDelRow_4(val) {
      this.deleteData_4.push(val);
    },
    //验证网站备案数据
    verify_4(rowObj, rowIndex) {
      var isValid = tableValidates.validateByRow(
        rowObj,
        rowIndex,
        this.rules,
        this
      );
      console.log(isValid);
      if (rowObj.id) {
        this.updateData_4.push(rowObj);
      }
    },

    /*handleClick(tab, event) {
    },
    verify1(row, index) {
      row.edit = false;
    },
    verify2(row, index) {
      row.edit = false;
    },
    verify3(row, index) {
      row.edit = false;
    },

    //单元格编辑回调
    cellEditDone(newValue, oldValue, rowIndex, rowData, field) {
      this.tableData[rowIndex][field] = newValue;
      // 接下来处理你的业务逻辑，数据持久化等...
    }*/
  },
  components: {
    "v-tabelAddBtn": tabelAddBtn,
    "v-tableOperation": tableOperation
  }
};
</script>

<style>
</style>
