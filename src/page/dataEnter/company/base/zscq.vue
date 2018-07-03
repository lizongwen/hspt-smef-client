<template>
	<div>
		<el-tabs v-model="activeName" @tab-click="handleClick">
			<el-tab-pane label="商标" name="first">
				<div>
					<el-card class="box-card">
						<div slot="header" class="clearfix">
							<div class="card-right-wrap">
								<el-button class="save" type="default" size="medium">获取数据</el-button>
								<el-button class="save" type="primary" size="medium">保存</el-button>
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
										<v-tableOperation :scope="scope" :tableData="tableData" v-on:verify="verify"></v-tableOperation>
									</template>
								</el-table-column>
							</el-table>
							<v-tabelAddBtn :tableData="tableData" :tableData_columns="tableData_columns" v-on:acceptDelRow='acceptDelRow'></v-tabelAddBtn>
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
								<el-button class="save" type="primary" size="medium">保存</el-button>
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
												<el-input v-model="tableData_1.fmzl" placeholder="请输入内容"></el-input>
											</div>
										</td>
										<td>
											<div class="cell">实用新型</div>
										</td>
										<td>
											<div class="cell">
												<el-input v-model="tableData_1.syxx" placeholder="请输入内容"></el-input>
											</div>
										</td>
										<td>
											<div class="cell">外观设计</div>
										</td>
										<td>
											<div class="cell">
												<el-input v-model="tableData_1.wgsj" placeholder="请输入内容"></el-input>
											</div>
										</td>
									</tr>
									<tr class="el-table__row">
										<td>
											<div class="cell">授权有权</div>
										</td>
										<td>
											<div class="cell">
												<el-input v-model="tableData_1.fmzl_1" placeholder="请输入内容"></el-input>
											</div>
										</td>
										<td>
											<div class="cell">授权有权</div>
										</td>
										<td>
											<div class="cell">
												<el-input v-model="tableData_1.syxx_1" placeholder="请输入内容"></el-input>
											</div>
										</td>
										<td>
											<div class="cell">授权有权</div>
										</td>
										<td>
											<div class="cell">
												<el-input v-model="tableData_1.wgsj_1" placeholder="请输入内容"></el-input>
											</div>
										</td>
									</tr>
									<tr class="el-table__row">
										<td>
											<div class="cell">无权终止</div>
										</td>
										<td>
											<div class="cell">
												<el-input v-model="tableData_1.fmzl_2" placeholder="请输入内容"></el-input>
											</div>
										</td>
										<td>
											<div class="cell">无权终止</div>
										</td>
										<td>
											<div class="cell">
												<el-input v-model="tableData_1.syxx_2" placeholder="请输入内容"></el-input>
											</div>
										</td>
										<td>
											<div class="cell">无权终止</div>
										</td>
										<td>
											<div class="cell">
												<el-input v-model="tableData_1.wgsj_2" placeholder="请输入内容"></el-input>
											</div>
										</td>
									</tr>
									<tr class="el-table__row">
										<td>
											<div class="cell">驳回撤回</div>
										</td>
										<td>
											<div class="cell">
												<el-input v-model="tableData_1.fmzl_3" placeholder="请输入内容"></el-input>
											</div>
										</td>
										<td>
											<div class="cell">驳回撤回</div>
										</td>
										<td>
											<div class="cell">
												<el-input v-model="tableData_1.syxx_3" placeholder="请输入内容"></el-input>
											</div>
										</td>
										<td>
											<div class="cell">驳回撤回</div>
										</td>
										<td>
											<div class="cell">
												<el-input v-model="tableData_1.wgsj_3" placeholder="请输入内容"></el-input>
											</div>
										</td>
									</tr>
									<tr class="el-table__row">
										<td>
											<div class="cell">审中实审</div>
										</td>
										<td>
											<div class="cell">
												<el-input v-model="tableData_1.fmzl_4" placeholder="请输入内容"></el-input>
											</div>
										</td>
										<td>
											<div class="cell">审中实审</div>
										</td>
										<td>
											<div class="cell">
												<el-input v-model="tableData_1.syxx_4" placeholder="请输入内容"></el-input>
											</div>
										</td>
										<td>
											<div class="cell">审中实审</div>
										</td>
										<td>
											<div class="cell">
												<el-input v-model="tableData_1.wgsj_4" placeholder="请输入内容"></el-input>
											</div>
										</td>
									</tr>
									<tr class="el-table__row">
										<td>
											<div class="cell">公开审中</div>
										</td>
										<td>
											<div class="cell">
												<el-input v-model="tableData_1.fmzl_5" placeholder="请输入内容"></el-input>
											</div>
										</td>
										<td>
											<div class="cell">公开审中</div>
										</td>
										<td>
											<div class="cell">
												<el-input v-model="tableData_1.syxx_5" placeholder="请输入内容"></el-input>
											</div>
										</td>
										<td>
											<div class="cell">公开审中</div>
										</td>
										<td>
											<div class="cell">
												<el-input v-model="tableData_1.wgsj_5" placeholder="请输入内容"></el-input>
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
								<el-button class="save" type="primary" size="medium">保存</el-button>
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
										<v-tableOperation :scope="scope" :tableData="tableData_2" v-on:verify="verify1"></v-tableOperation>
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
								<el-button class="save" type="primary" size="medium">保存</el-button>
							</div>
							<div class="card-title">著作权</div>
						</div>
						<div>
							<el-table :data="tableData_3" v-loading.body="listLoading" border fit highlight-current-row style="width: 100%">
								<el-table-column label="序号" type="index" width="50"></el-table-column>
								<el-table-column min-width="300px" label="著作权名称">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'copyrightName'+scope.$index" :ref="'form_copyrightName_'+scope.$index" :show-message="false">
												<el-form-item prop="copyrightName" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.copyrightName"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{scope.row.copyrightName}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="300px" label="类别">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'worksType'+scope.$index" :ref="'form_worksType_'+scope.$index" :show-message="false">
												<el-form-item prop="worksType" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.worksType"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.worksType}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="300px" label="著作权人">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'worksName'+scope.$index" :ref="'form_worksName_'+scope.$index" :show-message="false">
												<el-form-item prop="worksName" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.worksName"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.worksName}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="100px" label="登记号">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'regNo'+scope.$index" :ref="'form_regNo_'+scope.$index" :show-message="false">
												<el-form-item prop="regNo" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.regNo"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.regNo}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="100px" label="版本">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'version'+scope.$index" :ref="'form_version_'+scope.$index" :show-message="false">
												<el-form-item prop="version" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.version"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.version}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="100px" label="登记批准日期">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'regDate'+scope.$index" :ref="'form_regDate_'+scope.$index" :show-message="false">
												<el-form-item prop="regDate" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.regDate"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.regDate}}</span>
									</template>
								</el-table-column>
								<el-table-column align="center" label="操作" width="240">
									<template slot-scope="scope">
										<v-tableOperation :scope="scope" :tableData="tableData_3" v-on:verify="verify2"></v-tableOperation>
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
								<el-button class="save" type="primary" size="medium">保存</el-button>
							</div>
							<div class="card-title">网站备案</div>
						</div>
						<div>
							<el-table :data="tableData_4" v-loading.body="listLoading" border fit highlight-current-row style="width: 100%">
								<el-table-column label="序号" type="index" width="50"></el-table-column>
								<el-table-column min-width="300px" label="网站名称">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'siteName'+scope.$index" :ref="'form_siteName_'+scope.$index" :show-message="false">
												<el-form-item prop="siteName" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.siteName"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{scope.row.siteName}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="300px" label="网站首页">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'siteHome'+scope.$index" :ref="'form_siteHome_'+scope.$index" :show-message="false">
												<el-form-item prop="siteHome" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.siteHome"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.siteHome}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="300px" label="备案号">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'siteNo'+scope.$index" :ref="'form_siteNo_'+scope.$index" :show-message="false">
												<el-form-item prop="siteNo" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.siteNo"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.siteNo}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="100px" label="状态">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'siteStatus'+scope.$index" :ref="'form_siteStatus_'+scope.$index" :show-message="false">
												<el-form-item prop="siteStatus" class="td-form-item">
													<el-select v-model="scope.row.siteStatus" placeholder="请选择">
														<el-option :value="1" label="正常"></el-option>
														<el-option :value="0" label="异常"></el-option>
													</el-select>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.siteStatus==null?"":(scope.row.siteStatus?"正常":"异常")}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="100px" label="单位性质">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'nature'+scope.$index" :ref="'form_nature_'+scope.$index" :show-message="false">
												<el-form-item prop="nature" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.nature"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.nature}}</span>
									</template>
								</el-table-column>
								<el-table-column align="center" label="操作" width="240">
									<template slot-scope="scope">
										<v-tableOperation :scope="scope" :tableData="tableData_4" v-on:verify="verify"></v-tableOperation>
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
import tabelAddBtn from "@/components/table/table-add-btn.vue";
import tableOperation from "@/components/table/table-operation.vue";
export default {
  data() {
    return {
      activeName: "second",
      listLoading: false,
      rules: {},
      tableData: [],
      tableData_columns: {
		id:null,
        sbm: "商标名称",
        zt: '状态',
        sqsj: "申请时间",
        zch: "注册号",
        lb: "类别",
        edit: false
      },
      tableData_1: {},
      tableData_2: [], //表格数据
      tableData_2_columns: {
		id:null,
        sqh: "申请号",
        sqr: "申请日",
        mc: "名称",
        sqlx: "申请类型",
        sqgj: "申请国家",
        gkh: "公开（公告）号",
        flzt: "法律状态",
        yxx: "有效性",
        edit: false
      }, //表格列字段
      tableData_3: [
        {
          copyrightName: "爱瑞特电动车充电控制软件",
          worksType: "开关寿命试验机",
          worksName: "王大锤",
          regNo: "55225587",
          version: "V1.0",
          regDate: "2018/05/01",
          edit: false
        }
      ], //表格数据
      tableData_3_columns: {
        copyrightName: "",
        worksType: "",
        worksName: "",
        regNo: "",
        version: "",
        regDate: "",
        edit: false
      }, //表格列字段
      tableData_4: [
        {
          siteName: "芜湖新闻网",
          siteHome: "http://www.wuhunews.com",
          siteNo: "皖备58741258",
          siteStatus: 0,
          nature: "企业",
          edit: false
        }
      ], //表格数据
      tableData_4_columns: {
        siteName: "",
        siteHome: "",
        siteNo: "",
        siteStatus: null,
        nature: "",
        edit: false
      } //表格列字段
    };
  },
  computed: {},
  mounted(){
	  this.getSbData();
	  this.getSqyqzlmx();
	  this.getZzq();
  },
  methods: {

	//获取商标数据
	getSbData:async function(){
		let params = {
			creditCode: sessionStorage.getItem("creditCode"),
			token: sessionStorage.getItem("token")
		};
      const res = await this.$http.post(
        "/hspt-web-api/data_entry/gsjbxx/zscq/sbxx/list",
        params
      );
      if (res.data.resultCode == "0") {
		  this.tableData=res.data.resultData.data;
      }
	},


	//获取授权有权专利明细
	getSqyqzlmx:async function(){
		let params = {
			creditCode: sessionStorage.getItem("creditCode"),
			token: sessionStorage.getItem("token")
		};
      const res = await this.$http.post(
        "/hspt-web-api/data_entry/gsjbxx/zscq/sqyqzlmx/list",
        params
      );
      if (res.data.resultCode == "0") {
		  this.tableData_2=res.data.resultData.data;
      }
	},
	//获取授权有权专利明细
	getZzq:async function(){
		let params = {
			creditCode: sessionStorage.getItem("creditCode"),
			token: sessionStorage.getItem("token")
		};
      const res = await this.$http.post(
       	"/hspt-web-api/data_entry/gsjbxx/zscq/zzq/list",
        params
      );
      if (res.data.resultCode == "0") {
		  this.tableData_3=res.data.resultData.data;
      }
	},



    handleClick(tab, event) {
    //   console.log(tab, event);
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
    verify3(row, index) {
      row.edit = false;
	},
	 //接受删除的数据
    acceptDelRow(val) {
    //   console.log(delRowData);
      this.delRowData.push(val);
    },
    //单元格编辑回调
    cellEditDone(newValue, oldValue, rowIndex, rowData, field) {
      this.tableData[rowIndex][field] = newValue;
      // 接下来处理你的业务逻辑，数据持久化等...
    }
  },
  components: {
    "v-tabelAddBtn": tabelAddBtn,
    "v-tableOperation": tableOperation
  }
};
</script>

<style>
</style>
