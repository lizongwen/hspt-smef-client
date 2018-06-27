<template>
	<div>
		<el-tabs v-model="activeName" @tab-click="handleClick">
			<el-tab-pane label="主要客户往来信息" name="first">
				<div>
					<el-card class="box-card">
						<div slot="header" class="clearfix">
							<div class="card-right-wrap">
								<el-button type="primary" size="medium">保存</el-button>
							</div>
							<div class="card-title">销售概况</div>
						</div>
						<div>
							<el-table :data="tableData" v-loading.body="listLoading" border fit highlight-current-row style="width: 100%">
								<el-table-column min-width="300px" label="销售地区">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'salesArea'+scope.$index" :ref="'form_salesArea_'+scope.$index" :show-message="false">
												<el-form-item prop="salesArea" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.salesArea"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{scope.row.salesArea}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="300px" label="百分比">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'ratio'+scope.$index" :ref="'form_ratio_'+scope.$index" :show-message="false">
												<el-form-item prop="ratio" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.ratio"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.ratio}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="100px" label="地区国家">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'country'+scope.$index" :ref="'form_country_'+scope.$index" :show-message="false">
												<el-form-item prop="country" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.country"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.country}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="100px" label="付款种类">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'payKind'+scope.$index" :ref="'form_payKind_'+scope.$index" :show-message="false">
												<el-form-item prop="payKind" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.payKind"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.payKind}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="100px" label="付款比例">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'payRatio'+scope.$index" :ref="'form_payRatio_'+scope.$index" :show-message="false">
												<el-form-item prop="payRatio" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.payRatio"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.payRatio}}</span>
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
				<div>
					<el-card class="box-card">
						<div slot="header" class="clearfix">
							<div class="card-right-wrap">
								<el-button type="default" size="medium">模板下载</el-button>
								<el-button type="default" size="medium">数据导入</el-button>
								<el-button type="default" size="medium">生成图表</el-button>
								<el-button type="primary" size="medium">保存</el-button>
							</div>
							<div class="card-title">主要客户介绍</div>
						</div>
						<div>
							<el-table :data="tableData_1" v-loading.body="listLoading" border fit highlight-current-row style="width: 100%">
								<el-table-column label="序号" type="index" width="50"></el-table-column>
								<el-table-column min-width="100px" label="单位名称">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'companyName'+scope.$index" :ref="'form_companyName_'+scope.$index" :show-message="false">
												<el-form-item prop="companyName" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.companyName"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{scope.row.companyName}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="100px" label="具体产品和服务">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'detail'+scope.$index" :ref="'form_detail_'+scope.$index" :show-message="false">
												<el-form-item prop="detail" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.detail"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.detail}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="100px" label="账期">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'accountPeriod'+scope.$index" :ref="'form_accountPeriod_'+scope.$index" :show-message="false">
												<el-form-item prop="accountPeriod" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.accountPeriod"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.accountPeriod}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="100px" label="结算方式">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'payWay'+scope.$index" :ref="'form_payWay_'+scope.$index" :show-message="false">
												<el-form-item prop="payWay" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.payWay"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.payWay}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="100px" label="占比">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'ratio'+scope.$index" :ref="'form_ratio_'+scope.$index" :show-message="false">
												<el-form-item prop="ratio" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.ratio"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.ratio}}</span>
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
					<el-card class="box-card">
						<div slot="header" class="clearfix">
							<div class="card-title">图表视图</div>
						</div>
						<div class="img-preview">

						</div>
					</el-card>
				</div>
				<div>
					<el-card class="box-card">
						<div slot="header" class="clearfix">
							<div class="card-right-wrap">
								<el-button type="primary" size="medium">保存</el-button>
							</div>
							<div class="card-title">客户说明</div>
						</div>
						<!-- 小结（富文本框） -->
						<div>

						</div>
					</el-card>
				</div>
				<div>
					<el-card class="box-card">
						<div slot="header" class="clearfix">
							<div class="card-right-wrap">
								<el-button type="primary" size="medium">保存</el-button>
							</div>
							<div class="card-title">客户结构分析</div>
						</div>
						<!-- 小结（富文本框） -->
						<div>

						</div>
					</el-card>
				</div>
			</el-tab-pane>
			<el-tab-pane label="主要供应商往来信息" name="second">
				<div>
					<el-card class="box-card">
						<div slot="header" class="clearfix">
							<div class="card-right-wrap">
								<el-button type="default" size="medium">模板下载</el-button>
								<el-button type="default" size="medium">数据导入</el-button>
								<el-button type="default" size="medium">生成图表</el-button>
								<el-button type="primary" size="medium">保存</el-button>
							</div>
							<div class="card-title">主要供应商介绍</div>
						</div>
						<div>
							<el-table :data="tableData_2" v-loading.body="listLoading" border fit highlight-current-row style="width: 100%">
								<el-table-column label="序号" type="index" width="50"></el-table-column>
								<el-table-column min-width="100px" label="单位名称">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'companyName'+scope.$index" :ref="'form_companyName_'+scope.$index" :show-message="false">
												<el-form-item prop="companyName" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.companyName"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{scope.row.companyName}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="100px" label="具体产品和服务">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'detail'+scope.$index" :ref="'form_detail_'+scope.$index" :show-message="false">
												<el-form-item prop="detail" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.detail"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.detail}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="100px" label="账期">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'accountPeriod'+scope.$index" :ref="'form_accountPeriod_'+scope.$index" :show-message="false">
												<el-form-item prop="accountPeriod" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.accountPeriod"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.accountPeriod}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="100px" label="结算方式">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'payWay'+scope.$index" :ref="'form_payWay_'+scope.$index" :show-message="false">
												<el-form-item prop="payWay" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.payWay"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.payWay}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="100px" label="占比">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'ratio'+scope.$index" :ref="'form_ratio_'+scope.$index" :show-message="false">
												<el-form-item prop="ratio" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.ratio"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.ratio}}</span>
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
					<el-card class="box-card">
						<div slot="header" class="clearfix">
							<div class="card-title">图表视图</div>
						</div>
						<div>

						</div>
					</el-card>
				</div>
				<div>
					<el-card class="box-card">
						<div slot="header" class="clearfix">
							<div class="card-right-wrap">
								<el-button type="primary" size="medium">保存</el-button>
							</div>
							<div class="card-title">供应商说明</div>
						</div>
						<!-- 小结（富文本框） -->
						<div>

						</div>
					</el-card>
				</div>
				<div>
					<el-card class="box-card">
						<div slot="header" class="clearfix">
							<div class="card-right-wrap">
								<el-button type="primary" size="medium">保存</el-button>
							</div>
							<div class="card-title">供应商结构分析</div>
						</div>
						<!-- 小结（富文本框） -->
						<div>

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
      rules: {},
      tableData: [
        {
          salesArea: "中国",
          ratio: 1,
          country: "美国",
          payKind: "现金",
          payRatio: 5,
          edit: false
        },
        {
          salesArea: "美国",
          ratio: 2,
          country: "美国",
          payKind: "现金",
          payRatio: 15,
          edit: false
        }
      ],
      tableData_columns: {
        salesArea: "",
        ratio: null,
        country: "",
        payKind: "",
        payRatio: null,
        edit: false
      },
      tableData_1: [
        {
          companyName: "A公司",
          detail: "主营卖水果",
          accountPeriod: 5,
          payWay: "现金",
          ratio: 5,
          edit: false
        },
        {
          companyName: "B公司",
          detail: "主营卖蔬菜",
          accountPeriod: 15,
          payWay: "现金",
          ratio: 50,
          edit: false
        }
      ],
      tableData_1_columns: {
        companyName: "",
        detail: null,
        accountPeriod: "",
        payWay: "",
        ratio: null,
        edit: false
      },
      tableData_2: [
        {
          supplierName: "供应商名称A",
          detail: "供应小姐姐",
          accountPeriod: 6,
          payWay: "现买现卖",
          ratio: 50,
          edit: false
        },
        {
          supplierName: "供应商名称B",
          detail: "供应小哥哥",
          accountPeriod: 6,
          payWay: "现买现卖",
          ratio: 50,
          edit: false
        }
      ],
      tableData_2_columns: {
        supplierName: "",
        detail: "",
        accountPeriod: null,
        payWay: "",
        ratio: null,
        edit: false
      }
    };
  },
  methods: {
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
  },
  components: {
    "v-tabelAddBtn": tabelAddBtn,
    "v-tableOperation": tableOperation
  }
};
</script>

<style lang="scss" scoped>
.img-preview {
  height: 200px;
  margin: 20px;
  border: #ebebeb;
  background-color: #eef9ff;
}
</style>

