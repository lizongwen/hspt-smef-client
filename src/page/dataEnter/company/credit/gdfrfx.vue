<template>
	<div>
		<div style="margin-bottom: 20px;">
			<el-card class="box-card" shadow='nevner'>
				<div slot="header" class="clearfix">
					<div class="card-right-wrap">
						<el-button class="save" type="primary" size="medium" @click="setZrrdgd">保存</el-button>
					</div>
					<div class="card-title">自然人大股东</div>
				</div>
				<div>
					<el-table :data="tableData_0" v-loading.body="listLoading" border fit highlight-current-row style="width: 100%">
						<el-table-column label="序号" type="index" width="50"></el-table-column>
						<el-table-column min-width="200px" label="姓名">
							<template slot-scope="scope">
								<template v-if="scope.row.edit">
									<el-form :model="scope.row" :rules="rules_zrrdgd" :id="'Name'+scope.$index" :ref="'form_Name_'+scope.$index" :show-message="false">
										<el-form-item prop="Name" class="td-form-item">
											<el-input class="edit-input" size="small" v-model="scope.row.name"></el-input>
										</el-form-item>
									</el-form>
								</template>
								<span v-else>{{scope.row.name}}</span>
							</template>
						</el-table-column>
						<el-table-column min-width="300px" label="身份证号">
							<template slot-scope="scope">
								<template v-if="scope.row.edit">
									<el-form :model="scope.row" :rules="rules_zrrdgd" :id="'identityNum'+scope.$index" :ref="'form_identityNum_'+scope.$index" :show-message="false">
										<el-form-item prop="identityNum" class="td-form-item">
											<el-input class="edit-input" size="small" v-model="scope.row.idNumber"></el-input>
										</el-form-item>
									</el-form>
								</template>
								<span v-else>{{ scope.row.idNumber}}</span>
							</template>
						</el-table-column>
						<el-table-column min-width="300px" label="手机号码">
							<template slot-scope="scope">
								<template v-if="scope.row.edit">
									<el-form :model="scope.row" :rules="rules_zrrdgd" :id="'phoneNum'+scope.$index" :ref="'form_phoneNum_'+scope.$index" :show-message="false">
										<el-form-item prop="phoneNum" class="td-form-item">
											<el-input class="edit-input" size="small" v-model="scope.row.mobile"></el-input>
										</el-form-item>
									</el-form>
								</template>
								<span v-else>{{ scope.row.mobile}}</span>
							</template>
						</el-table-column>
						<el-table-column align="center" label="操作" width="240">
							<template slot-scope="scope">
								<v-tableOperation :scope="scope" :tableData="tableData_0" v-on:verify="verify_0" v-on:acceptDelRow='acceptDelRow_0'></v-tableOperation>
							</template>
						</el-table-column>
					</el-table>
					<v-tabelAddBtn :tableData="tableData_0" :tableData_columns="tableData_0_columns"></v-tabelAddBtn>
       			</div>
			</el-card>
		</div>
		<el-tabs v-model="activeName" @tab-click="handleClick">
			<el-tab-pane label="央行报告信息" name="first">
				<div>
					<el-card class="box-card" shadow='nevner'>
						<div slot="header" class="clearfix">
							<div class="card-right-wrap">
								<el-button class="save" type="primary" size="medium" @click="setYhbg">保存</el-button>
							</div>
							<div class="card-title">自然人大股东央行报告信息</div>
						</div>
						<!-- 表格容器 -->
						<div>
							<el-table :data="tableData" v-loading.body="listLoading" border fit highlight-current-row style="width: 100%">
								<el-table-column min-width="70px" label="姓名">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules_yhbg" :id="'Name'+scope.$index" :ref="'form_Name_'+scope.$index" :show-message="false">
												<el-form-item prop="Name" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.name"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{scope.row.name}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="80px" label="账户">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules_yhbg" :id="'account'+scope.$index" :ref="'form_status_'+scope.$index" :show-message="false">
												<el-form-item prop=" account" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.account"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.account}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="100px" label="账户数">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules_yhbg" :id="'accountNum'+scope.$index" :ref="'form_accountNum_'+scope.$index" :show-message="false">
												<el-form-item prop="accountNum" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.accountAmount"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.accountAmount}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="100px" label="授信额度">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules_yhbg" :id="'creditLine'+scope.$index" :ref="'form_creditLine_'+scope.$index" :show-message="false">
												<el-form-item prop="creditLine" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.sxed"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.sxed}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="100px" label="未结清余额">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules_yhbg" :id="'balance'+scope.$index" :ref="'form_balance_'+scope.$index" :show-message="false">
												<el-form-item prop="balance" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.dkye"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.dkye}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="100px" label="逾期记录">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules_yhbg" :id="'yqrecord'+scope.$index" :ref="'form_yqrecord_'+scope.$index" :show-message="false">
												<el-form-item prop="yqrecord" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.yqjl"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.yqjl}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="150px" label="为他人担保余额">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules_yhbg" :id="'lawStatus'+scope.$index" :ref="'form_lawStatus_'+scope.$index" :show-message="false">
												<el-form-item prop="lawStatus" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.dbed"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.dbed}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="100px" label="被查询记录">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules_yhbg" :id="'bcrecord'+scope.$index" :ref="'form_bcrecord_'+scope.$index" :show-message="false">
												<el-form-item prop="bcrecord" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.bcxjl"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.bcxjl}}</span>
									</template>
								</el-table-column>
								<el-table-column align="center" label="操作" width="240">
									<template slot-scope="scope">
										<v-tableOperation :scope="scope" :tableData="tableData_1" v-on:verify="verify" v-on:acceptDelRow='acceptDelRow'></v-tableOperation>
									</template>
								</el-table-column>
							</el-table>
							<!--<v-tabelAddBtn :tableData="tableData" :tableData_columns="tableData_columns"></v-tabelAddBtn>-->
						</div>
					</el-card>
				</div>
			</el-tab-pane>
			<el-tab-pane label="法律风险" name="second">
				<div>
					<el-card class="box-card" shadow='nevner'>
						<div slot="header" class="clearfix">
							<div class="card-right-wrap">
								<el-button class="save" type="primary" size="medium" @click="setFlfx">保存</el-button>
							</div>
							<div class="card-title">自然人大股东法律风险</div>
						</div>
						<!-- 表格容器 -->
						<div>
							<el-table :data="tableData_1" v-loading.body="listLoading" border fit highlight-current-row style="width: 100%">
								<el-table-column label="序号" type="index" width="50"></el-table-column>
								<el-table-column min-width="150px" label="被执行人姓名/名称">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules_flfx" :id="'Name'+scope.$index" :ref="'form_Name_'+scope.$index" :show-message="false">
												<el-form-item prop="Name" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.bzxrxm"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{scope.row.bzxrxm}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="100px" label="案号">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules_flfx" :id="'caseNo'+scope.$index" :ref="'form_caseNo_'+scope.$index" :show-message="false">
												<el-form-item prop="caseNo" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.ah"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.ah}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="100px" label="立案时间">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules_flfx" :id="'time'+scope.$index" :ref="'form_time_'+scope.$index" :show-message="false">
												<el-form-item prop="time" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.lasj"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.lasj}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="100px" label="执行法院">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules_flfx" :id="'executive'+scope.$index" :ref="'form_executive_'+scope.$index" :show-message="false">
												<el-form-item prop="executive" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.zxfy"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.zxfy}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="150px" label="执行标的（元）">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules_flfx" :id="'zxbd'+scope.$index" :ref="'form_zxbd_'+scope.$index" :show-message="false">
												<el-form-item prop="zxbd" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.zxbd"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.zxbd}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="100px" label="案件状态">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules_flfx" :id="'state'+scope.$index" :ref="'form_state_'+scope.$index" :show-message="false">
												<el-form-item prop="state" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.ajzgt"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.ajzgt}}</span>
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
			</el-tab-pane>
			<el-tab-pane label="公共信息" name="third">
				<div>
					<el-card class="box-card" shadow='nevner'>
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
			<el-tab-pane label="反欺诈信息" name="four">
				<div>
					<el-card class="box-card" shadow='nevner'>
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
			<el-tab-pane label="互联网监控信息" name="five">
				<div>
					<el-card class="box-card" shadow='nevner'>
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
import tabelAddBtn from "@/components/table/table-add-btn.vue";
import tableOperation from "@/components/table/table-operation.vue";
import tableValidates from "@/utils/validateTable/tableValidates.js";
export default {
  data() {
    return {
      activeName: "first",
      listLoading: false,
      tableData_0: [], //表格数据
      deleteData_0: [],
      addData_0: [],
      updateData_0: [],
      tableData_0_columns: {
          id:null,
          name: "姓名",
          idNumber: "身份证号",
          mobile: "手机号",
          edit: false
      },
      rules_zrrdgd: {
        name: [
          { required: true, message: "姓名是必填项" }
        ],
        idNumber: [
          { required: true, message: "身份证号是必填项" }
        ],
        mobile: [
          { required: true, message: "手机号是必填项" }
        ]
      },

      rules: {},
      tableData: [],
      updateData: [],
      deleteData: [],
      addData: [],
      tableData_columns: {
        id:null,
        name: "姓名",
        account: "账户",
        accountAmount: "账户数",
        sxed: "授信额度",
        dkye: "未结清余额",
        yqjl: "逾期记录",
        dbed: "为他人担保余额",
        bcxjl: "被查询记录",
        edit: false
      },
      rules_yhbg:{},
      tableData_1: [],
      updateData_1: [],
      deleteData_1: [],
      addData_1: [],
      tableData_1_columns: {
          id:null,
          bzxrxm: "被执行人姓名/名称",
          ah: "案号",
          lasj: "立案时间",
          zxfy: "执行法院",
          zxbd: "执行标的(元）",
          ajzgt: "案件状态",
          edit: false
      },
      rules_flfx:{},

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
      } , //表格列字段
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
      }
    };
  },
  computed: {

  },
  mounted() {
    this.getZrrdgd();
    this.getYhbg();
    this.getFlfx();
  },
  methods: {

    //-------------------------------------------------自然人大股东-------------------------------------------------
    //获取自然人大股东信息
    getZrrdgd: async function() {
      let params = {
        creditCode: sessionStorage.getItem("creditCode"),
        token: sessionStorage.getItem("token")
      };
      const res = await this.$http.post(
        "/hspt-web-api/data_entry/qyfxgk/qyfxgkZrrdgdfxxx/loadBaseInfoData",
        params
      );
      if (res.data.resultCode == "0") {
        this.tableData_0 = res.data.resultData.data;
      }
    },

    //保存自然人大股东信息
    setZrrdgd: async function() {
      this.tableData_0.forEach((item, index) => {
        if (item.id == null) {
          this.addData_0.push(item);
        }
      });
      let params = {
        creditCode: sessionStorage.getItem("creditCode"),
        token: sessionStorage.getItem("token"),
        addData: JSON.stringify(this.addData_0),
        updateData: JSON.stringify(this.updateData_0),
        deleteData: JSON.stringify(this.deleteData_0)
      };
      const res = await this.$http.post(
        "/hspt-web-api/data_entry/qyfxgk/qyfxgkZrrdgdfxxx/saveBaseInfoData",
        params
      );
      if (res.data.resultCode == "0") {
        this.$message({ message: res.data.resultMsg, type: "success" });
        this.deleteData_0 = [];
        this.updateData_0 = [];
        this.addData_0 = [];
      }else{
        this.$message({ message: res.data.resultMsg, type: "warning" });
      }
    },
    //接受自然人大股东信息删除的数据
    acceptDelRow_0(val) {
      this.deleteData_0.push(val);
    },
    //验证自然人大股东信息数据
    verify_0(rowObj, rowIndex) {
      var isValid = tableValidates.validateByRow(
        rowObj,
        rowIndex,
        this.rules_zrrdgd,
        this
      );
      if (rowObj.id) {
        this.updateData_0.push(rowObj);
      }
    },

    //-------------------------------------------------央行报告信息-----------------------------------------------
    //获取自然人大股东央行报告信息
    getYhbg: async function() {
      let params = {
        creditCode: sessionStorage.getItem("creditCode"),
        token: sessionStorage.getItem("token")
      };
      const res = await this.$http.post(
        "/hspt-web-api/data_entry/qyfxgk/qyfxgkZrrdgdYhbg/loadData",
        params
      );
      if (res.data.resultCode == "0") {
        this.tableData = res.data.resultData.data.rows;
      }
    },
    //保存自然人大股东央行报告信息
    setYhbg: async function() {
      this.tableData.forEach((item, index) => {
        if (item.id == null) {
          this.addData.push(item);
        }
      });
      let params = {
        creditCode: sessionStorage.getItem("creditCode"),
        token: sessionStorage.getItem("token"),
        updateData: JSON.stringify(this.updateData)
      };
      const res = await this.$http.post(
        "/hspt-web-api/data_entry/qyfxgk/qyfxgkZrrdgdYhbg/update",
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
    //验证自然人大股东央行报告信息数据
    verify(rowObj, rowIndex) {
      var isValid = tableValidates.validateByRow(
        rowObj,
        rowIndex,
        this.rules_yhbg,
        this
      );
      if (rowObj.id) {
        this.updateData.push(rowObj);
      }
    },

    //接受自然人大股东央行报告信息删除的数据
    acceptDelRow(val) {
      this.deleteData.push(val);
    },

    //-------------------------------------------------法律风险-----------------------------------------------
    //获取法律风险信息
    getFlfx: async function() {
      let params = {
        creditCode: sessionStorage.getItem("creditCode"),
        token: sessionStorage.getItem("token")
      };
      const res = await this.$http.post(
        "/hspt-web-api/data_entry/qyfxgk/qyfxgkZrrdgdFlfx/loadData",
        params
      );
      if (res.data.resultCode == "0") {
        this.tableData_1 = res.data.resultData.data;
      }
    },

    //保存法律风险信息
    setFlfx: async function() {
      this.tableData_1.forEach((item, index) => {
        if (item.id == null) {
          this.addData_1.push(item);
        }
      });
      let params = {
        creditCode: sessionStorage.getItem("creditCode"),
        token: sessionStorage.getItem("token"),
        addData: JSON.stringify(this.addData_1),
        updateData: JSON.stringify(this.updateData_1),
        deleteData: JSON.stringify(this.deleteData_1)
      };
      const res = await this.$http.post(
        "/hspt-web-api/data_entry/qyfxgk/qyfxgkZrrdgdFlfx/update",
        params
      );
      if (res.data.resultCode == "0") {
        this.$message({ message: res.data.resultMsg, type: "success" });
        this.deleteData_1 = [];
        this.updateData_1 = [];
        this.addData_1 = [];
      }else{
        this.$message({ message: res.data.resultMsg, type: "warning" });
      }
    },
    //验证法律风险信息数据
    verify_1(rowObj, rowIndex) {
      var isValid = tableValidates.validateByRow(
        rowObj,
        rowIndex,
        this.rules_flfx,
        this
      );
      if (rowObj.id) {
        this.updateData_1.push(rowObj);
      }
    },

    //接受法律风险信息删除的数据
    acceptDelRow_1(val) {
      this.deleteData_1.push(val);
    },




    handleClick(tab, event) {
      console.log(tab, event);
    },
    verify2(row, index) {
      row.edit = false;
    },
    verify3(row, index) {
      row.edit = false;
    },
    verify4(row, index) {
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
