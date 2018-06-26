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
								<el-table-column min-width="100px" label="商标名">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'trademarkName'+scope.$index" :ref="'form_trademarkName_'+scope.$index" :show-message="false">
												<el-form-item prop="trademarkName" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.trademarkName"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{scope.row.trademarkName}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="100px" label="状态">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'status'+scope.$index" :ref="'form_status_'+scope.$index" :show-message="false">
												<el-form-item prop="status" class="td-form-item">
													<el-select v-model="scope.row.status" placeholder="请选择">
														<el-option :value="1" label="有效"></el-option>
														<el-option :value="0" label="无效"></el-option>
													</el-select>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.status==null?"":(scope.row.status?"有效":"无效")}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="100px" label="申请时间">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'applyTime'+scope.$index" :ref="'form_applyTime_'+scope.$index" :show-message="false">
												<el-form-item prop="applyTime" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.applyTime"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.applyTime}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="100px" label="注册号">
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
								<el-table-column min-width="100px" label="类别">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'category'+scope.$index" :ref="'form_category_'+scope.$index" :show-message="false">
												<el-form-item prop="category" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.category"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.category}}</span>
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
						<div>
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
							<el-table :data="tableData_1" v-loading.body="listLoading" border fit highlight-current-row style="width: 100%">
								<el-table-column label="序号" type="index" width="50"></el-table-column>
								<el-table-column min-width="300px" label="申请号">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'applyNo'+scope.$index" :ref="'form_applyNo_'+scope.$index" :show-message="false">
												<el-form-item prop="applyNo" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.applyNo"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{scope.row.applyNo}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="100px" label="申请日">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'applyDate'+scope.$index" :ref="'form_applyDate_'+scope.$index" :show-message="false">
												<el-form-item prop="applyDate" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.applyDate"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.applyDate }}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="100px" label="名称">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'patentName'+scope.$index" :ref="'form_patentName_'+scope.$index" :show-message="false">
												<el-form-item prop="patentName" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.patentName"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.patentName}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="100px" label="申请类型">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'applyType'+scope.$index" :ref="'form_applyType_'+scope.$index" :show-message="false">
												<el-form-item prop="applyType" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.applyType"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.applyType}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="100px" label="申请国家">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'applyCuntry'+scope.$index" :ref="'form_applyCuntry_'+scope.$index" :show-message="false">
												<el-form-item prop="applyCuntry" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.applyCuntry"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.applyCuntry}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="100px" label="公开（公告）号">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'publicNo'+scope.$index" :ref="'form_publicNo_'+scope.$index" :show-message="false">
												<el-form-item prop="publicNo" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.publicNo"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.publicNo}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="100px" label="法律状态">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'lawStatus'+scope.$index" :ref="'form_lawStatus_'+scope.$index" :show-message="false">
												<el-form-item prop="lawStatus" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.lawStatus"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.lawStatus}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="80px" label="有效性">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'isEff'+scope.$index" :ref="'form_isEff_'+scope.$index" :show-message="false">
												<el-form-item prop="isEff" class="td-form-item">
													<el-select v-model="scope.row.isEff" placeholder="请选择">
														<el-option :value="1" label="有权"></el-option>
														<el-option :value="0" label="无权"></el-option>
													</el-select>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.isEff==null?"":(scope.row.isEff?"有权":"无权")}}</span>
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
							<el-table :data="tableData_2" v-loading.body="listLoading" border fit highlight-current-row style="width: 100%">
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
										<v-tableOperation :scope="scope" :tableData="tableData_2" v-on:verify="verify2"></v-tableOperation>
									</template>
								</el-table-column>
							</el-table>
							<v-tabelAddBtn :tableData="tableData_2" :tableData_columns="tableData_2_columns"></v-tabelAddBtn>
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
							<el-table :data="tableData_3" v-loading.body="listLoading" border fit highlight-current-row style="width: 100%">
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
										<v-tableOperation :scope="scope" :tableData="tableData_3" v-on:verify="verify3"></v-tableOperation>
									</template>
								</el-table-column>
							</el-table>
							<v-tabelAddBtn :tableData="tableData_3" :tableData_columns="tableData_3_columns"></v-tabelAddBtn>
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
      activeName: "first",
      listLoading: false,
      rules: {
      },
      tableData: [
        {
          trademarkName: "爱福特环保",
          status: 0,
          applyTime: "2018/02/01",
          regNo: "05415785",
          category: "科研服务",
          edit: false
        },{
          trademarkName: "爱福特环保1",
          status: 1,
          applyTime: "2018/02/02",
          regNo: "05415788",
          category: "科研服务",
          edit: false
        }
      ], //表格数据
      tableData_columns: {
        trademarkName: "",
        status: null,
        applyTime: "",
        regNo: "",
        category: "",
        edit: false
      }, //表格列字段
      tableData_1: [
        {
          applyNo: "054457",
          applyDate: "2018/04/01",
          patentName: "开关寿命试验机",
          applyType: "25358745",
          applyCuntry: "中国（CN）",
          publicNo: "CN205455744",
          lawStatus: "授权",
          isEff: 0,
          edit: false
        }
      ], //表格数据
      tableData_1_columns: {
        applyNo: "",
        applyDate: "",
        patentName: "",
        applyType: "",
        applyCuntry: "",
        publicNo: "",
        lawStatus: "",
        isEff: null,
        edit: false
      }, //表格列字段
      tableData_2: [
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
      tableData_2_columns: {
        copyrightName: "",
        worksType: "",
        worksName: "",
        regNo: "",
        version: "",
        regDate: "",
        edit: false
      }, //表格列字段
      tableData_3: [
        {
          siteName: "芜湖新闻网",
          siteHome: "http://www.wuhunews.com",
          siteNo: "皖备58741258",
          siteStatus: 0,
          nature: "企业",
          edit: false
        }
      ], //表格数据
      tableData_3_columns: {
        siteName: "",
        siteHome: "",
        siteNo: "",
        siteStatus: null,
        nature: "",
        edit: false
      } //表格列字段
    };
  },
  computed: {

  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
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
