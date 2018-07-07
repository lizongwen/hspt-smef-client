<template>
	<div>
		<el-tabs v-model="activeName" @tab-click="handleClick">
			<el-tab-pane label="银行借款信息" name="first">
				<div>
					<el-card class="box-card" shadow='nevner'>
						<div slot="header" class="clearfix">
							<div class="card-right-wrap">
								<el-button class="save" type="primary" size="medium">保存</el-button>
							</div>
							<div class="card-title">主要往来银行信息</div>
						</div>
						<!-- 表格容器 -->
						<div>
							<el-table :data="tableData" v-loading.body="listLoading" border fit highlight-current-row style="width: 100%">
								<el-table-column label="序号" type="index" width="50"></el-table-column>
								<el-table-column min-width="100px" label="银行名称">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'bankName'+scope.$index" :ref="'form_bankName_'+scope.$index" :show-message="false">
												<el-form-item prop="bankName" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.bankName"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{scope.row.bankName}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="100px" label="往来账户类别">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'lable'+scope.$index" :ref="'form_lable_'+scope.$index" :show-message="false">
												<el-form-item prop="lable" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.lable"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.lable}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="100px" label="账户">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'account'+scope.$index" :ref="'form_account_'+scope.$index" :show-message="false">
												<el-form-item prop="account" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.account"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.account}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="100px" label="账户使用频率">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'accountCategory'+scope.$index" :ref="'form_accountCategory_'+scope.$index" :show-message="false">
												<el-form-item prop="accountCategory" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.accountCategory"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.accountCategory}}</span>
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
					<el-card class="box-card" shadow='nevner'>
						<div slot="header" class="clearfix">
							<div class="card-right-wrap">
								<el-button class="save" type="primary" size="medium">保存</el-button>
							</div>
							<div class="card-title">银行未结清信贷额度</div>
						</div>
						<!-- 表格容器 -->
						<div>
							<el-table :data="tableData_3" v-loading.body="listLoading" border fit highlight-current-row style="width: 100%">
								<el-table-column min-width="100px" label="银行名称">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'bankName'+scope.$index" :ref="'form_bankName_'+scope.$index" :show-message="false">
												<el-form-item prop="bankName" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.bankName"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{scope.row.bankName}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="100px" label="存续时间">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'cxtime'+scope.$index" :ref="'form_cxtime_'+scope.$index" :show-message="false">
												<el-form-item prop="cxtime" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.cxtime"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.cxtime}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="100px" label="信贷额度类型">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'lable'+scope.$index" :ref="'form_lable_'+scope.$index" :show-message="false">
												<el-form-item prop="lable" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.lable"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.lable}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="100px" label="抵押/担保">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'pledge'+scope.$index" :ref="'form_pledge_'+scope.$index" :show-message="false">
												<el-form-item prop="pledge" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.pledge"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.pledge}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="100px" label="授信额度(万元)">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'sxbalance'+scope.$index" :ref="'form_sxbalance_'+scope.$index" :show-message="false">
												<el-form-item prop="sxbalance" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.sxbalance"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.sxbalance}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="100px" label="贷款余额（万元）">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'dkbalance'+scope.$index" :ref="'form_dkbalance_'+scope.$index" :show-message="false">
												<el-form-item prop="dkbalance" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.dkbalance"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.dkbalance}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="100px" label="贷款成本">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'dkcost'+scope.$index" :ref="'form_dkcost_'+scope.$index" :show-message="false">
												<el-form-item prop="dkcost" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.dkcost"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.dkcost}}</span>
									</template>
								</el-table-column>
								<el-table-column align="center" label="操作" width="240">
									<template slot-scope="scope">
										<v-tableOperation :scope="scope" :tableData="tableData" v-on:verify="verify"></v-tableOperation>
									</template>
								</el-table-column>
							</el-table>
							<v-tabelAddBtn :tableData="tableData_3" :tableData_columns="tableData_3_columns"></v-tabelAddBtn>
						</div>
					</el-card>
				</div>
			</el-tab-pane>
			<el-tab-pane label="动产融资信息" name="second">
				<div>
					<el-card class="box-card" shadow='nevner'>
						<div slot="header" class="clearfix">
							<div class="card-right-wrap">
								<el-button class="save" type="primary" size="medium">保存</el-button>
							</div>
							<div class="card-title">动产融资信息</div>
						</div>
						<!-- 表格容器 -->
						<div>
							<el-table :data="tableData_1" v-loading.body="listLoading" border fit highlight-current-row style="width: 100%">
								<el-table-column label="序号" type="index" width="50"></el-table-column>
								<el-table-column min-width="100px" label="登记日期">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'Date'+scope.$index" :ref="'form_Date_'+scope.$index" :show-message="false">
												<el-form-item prop="Date" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="Date.row.applyNo"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{scope.row.Date}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="100px" label="登记号">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'registration'+scope.$index" :ref="'form_registration_'+scope.$index" :show-message="false">
												<el-form-item prop="registration" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.registration"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.registration }}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="120px" label="被担保债权类型">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'lable'+scope.$index" :ref="'form_lable_'+scope.$index" :show-message="false">
												<el-form-item prop="lable" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.lable"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.lable}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="120px" label="被担保债权数额">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'Num'+scope.$index" :ref="'form_Num_'+scope.$index" :show-message="false">
												<el-form-item prop="Num" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.Num"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.Num}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="100px" label="债务期限">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'deadline'+scope.$index" :ref="'form_deadline_'+scope.$index" :show-message="false">
												<el-form-item prop="deadline" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.deadline"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.deadline}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="100px" label="抵押权人">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'pledger'+scope.$index" :ref="'form_pledger_'+scope.$index" :show-message="false">
												<el-form-item prop="pledger" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.pledger"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.pledger}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="70px" label="登记机关">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'authority'+scope.$index" :ref="'form_authority_'+scope.$index" :show-message="false">
												<el-form-item prop="authority" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.authority"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.authority}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="70px" label="状态">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'state'+scope.$index" :ref="'form_state_'+scope.$index" :show-message="false">
												<el-form-item prop="state" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.state"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.lawStatus}}</span>
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
			<el-tab-pane label="其他融资信息" name="third">
				<div>
					<el-card class="box-card" shadow='nevner'>
						<div slot="header" class="clearfix">
							<div class="card-right-wrap">
								<el-button class="save" type="primary" size="medium">保存</el-button>
							</div>
							<div class="card-title">其他融资信息</div>
						</div>
						<div>
							<el-table :data="tableData_2" v-loading.body="listLoading" border fit highlight-current-row style="width: 100%">
								<el-table-column label="序号" type="index" width="50"></el-table-column>
								<el-table-column min-width="100px" label="借款机构">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'organization'+scope.$index" :ref="'form_organization_'+scope.$index" :show-message="false">
												<el-form-item prop="organization" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.organization"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{scope.row.organization}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="100px" label="借款时间">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'jktime'+scope.$index" :ref="'form_jktime_'+scope.$index" :show-message="false">
												<el-form-item prop="jktime" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.jktime"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.jktime}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="100px" label="借款金额">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'jkmoney'+scope.$index" :ref="'form_jkmoney_'+scope.$index" :show-message="false">
												<el-form-item prop="jkmoney" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.jkmoney"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.jkmoney}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="100px" label="到期时间">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'dqtime'+scope.$index" :ref="'form_dqtime_'+scope.$index" :show-message="false">
												<el-form-item prop="dqtime" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.dqtime"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.dqtime}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="100px" label="借款余额">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'klbalance'+scope.$index" :ref="'form_klbalance_'+scope.$index" :show-message="false">
												<el-form-item prop="klbalance" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.klbalance"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.klbalance}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="100px" label="增信方式">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'way'+scope.$index" :ref="'form_way_'+scope.$index" :show-message="false">
												<el-form-item prop="way" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.way"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.way}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="100px" label="融资用途">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'purpose'+scope.$index" :ref="'form_purpose_'+scope.$index" :show-message="false">
												<el-form-item prop="purpose" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.purpose"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.purpose}}</span>
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
								<el-button class="save" type="primary" size="medium">保存</el-button>
							</div>
							<div class="card-title">小结</div>
						</div>
						<div>
							<el-input type="textarea" :rows="5" placeholder="请输入内容" v-model="textarea"></el-input>
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
				textarea: "",
				rules: {},
				tableData: [{
					bankName: "爱福特环保",
					lable: 0,
					account: "2018/02/01",
					accountCategory: "科研服务",
					edit: false
				}, {
					bankName: "爱福特环保2",
					lable: 0,
					account: "2018/02/01",
					accountCategory: "科研服务2",
					edit: false
				}], //表格数据
				tableData_columns: {
					bankName: "",
					lable: "",
					account: "",
					accountCategory: "",
					edit: false
				}, //表格列字段
				tableData_1: [{
					Date: "054457",
					registration: "2018/04/01",
					lable: "开关寿命试验机",
					Num: "25358745",
					deadline: "中国（CN）",
					pledger: "CN205455744",
					authority: "授权",
					state: "0",
					edit: false
				}], //表格数据
				tableData_1_columns: {
					Date: "",
					registration: "",
					lable: "",
					Num: "",
					deadline: "",
					pledger: "",
					authority: "",
					state: "",
					edit: false
				}, //表格列字段
				tableData_2: [{
					organization:"芜湖新闻网",
					jktime:"http://www.wuhunews.com",
					jkmoney:"皖备58741258",
					dqtime:0,
					klbalance:"企业",
					way:"企业",
					purpose: "企业",
					edit: false
				}], //表格数据
				tableData_2_columns: {
					organization: "",
					jktime: "",
					jkmoney : "",
					dqtime : "",
					klbalance: "",
					way: "",
					purpose: "",
					edit: false
				}, //表格列字段
				tableData_3: [{
					bankName:"芜湖新闻网",
					cxtime:"http://www.wuhunews.com",
					lable:"皖备58741258",
					pledge:0,
					sxbalance:"企业",
					dkbalance:"企业",
					dkcost: "企业",
					edit: false
				}], //表格数据
				tableData_3_columns: {
					bankName:"",
					cxtime:"",
					lable:"",
					pledge:"",
					sxbalance:"",
					dkbalance:"",
					dkcost: "  ",
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