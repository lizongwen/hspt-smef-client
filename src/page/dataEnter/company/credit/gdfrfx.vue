<template>
	<div>
		<div style="margin-bottom: 20px;">
			<el-card class="box-card" shadow='nevner'>
				<div slot="header" class="clearfix">
					<div class="card-right-wrap">
						<el-button class="save" type="primary" size="medium">保存</el-button>
					</div>
					<div class="card-title">自然人大股东</div>
				</div>
				<div>
					<el-table :data="tableData_0" v-loading.body="listLoading" border fit highlight-current-row style="width: 100%">
						<el-table-column label="序号" type="index" width="50"></el-table-column>
						<el-table-column min-width="200px" label="姓名">
							<template slot-scope="scope">
								<template v-if="scope.row.edit">
									<el-form :model="scope.row" :rules="rules" :id="'Name'+scope.$index" :ref="'form_Name_'+scope.$index" :show-message="false">
										<el-form-item prop="Name" class="td-form-item">
											<el-input class="edit-input" size="small" v-model="scope.row.Name"></el-input>
										</el-form-item>
									</el-form>
								</template>
								<span v-else>{{scope.row.Name}}</span>
							</template>
						</el-table-column>
						<el-table-column min-width="300px" label="身份证号">
							<template slot-scope="scope">
								<template v-if="scope.row.edit">
									<el-form :model="scope.row" :rules="rules" :id="'identityNum'+scope.$index" :ref="'form_identityNum_'+scope.$index" :show-message="false">
										<el-form-item prop="identityNum" class="td-form-item">
											<el-input class="edit-input" size="small" v-model="scope.row.identityNum"></el-input>
										</el-form-item>
									</el-form>
								</template>
								<span v-else>{{ scope.row.identityNum}}</span>
							</template>
						</el-table-column>
						<el-table-column min-width="300px" label="手机号码">
							<template slot-scope="scope">
								<template v-if="scope.row.edit">
									<el-form :model="scope.row" :rules="rules" :id="'phoneNum'+scope.$index" :ref="'form_phoneNum_'+scope.$index" :show-message="false">
										<el-form-item prop="phoneNum" class="td-form-item">
											<el-input class="edit-input" size="small" v-model="scope.row.phoneNum"></el-input>
										</el-form-item>
									</el-form>
								</template>
								<span v-else>{{ scope.row.phoneNum}}</span>
							</template>
						</el-table-column>
						<el-table-column align="center" label="操作" width="240">
							<template slot-scope="scope">
								<v-tableOperation :scope="scope" :tableData="tableData_0" v-on:verify="verify"></v-tableOperation>
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
								<el-button class="save" type="primary" size="medium">保存</el-button>
							</div>
							<div class="card-title">自然人大股东央行报告信息</div>
						</div>
						<!-- 表格容器 -->
						<div>
							<el-table :data="tableData" v-loading.body="listLoading" border fit highlight-current-row style="width: 100%">
								<el-table-column min-width="70px" label="姓名">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'Name'+scope.$index" :ref="'form_Name_'+scope.$index" :show-message="false">
												<el-form-item prop="Name" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.Name"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{scope.row.Name}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="80px" label="账户">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'account'+scope.$index" :ref="'form_status_'+scope.$index" :show-message="false">
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
											<el-form :model="scope.row" :rules="rules" :id="'accountNum'+scope.$index" :ref="'form_accountNum_'+scope.$index" :show-message="false">
												<el-form-item prop="accountNum" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.accountNum"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.accountNum}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="100px" label="守信额度">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'creditLine'+scope.$index" :ref="'form_creditLine_'+scope.$index" :show-message="false">
												<el-form-item prop="creditLine" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.creditLine"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.creditLine}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="100px" label="未结清余额">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'balance'+scope.$index" :ref="'form_balance_'+scope.$index" :show-message="false">
												<el-form-item prop="balance" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.balance"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.balance}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="100px" label="逾期记录">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'yqrecord'+scope.$index" :ref="'form_yqrecord_'+scope.$index" :show-message="false">
												<el-form-item prop="yqrecord" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.yqrecord"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.yqrecord}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="150px" label="为他人担保余额">
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
								<el-table-column min-width="100px" label="被查询记录">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'bcrecord'+scope.$index" :ref="'form_bcrecord_'+scope.$index" :show-message="false">
												<el-form-item prop="bcrecord" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.bcrecord"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.bcrecord}}</span>
									</template>
								</el-table-column>
								<el-table-column align="center" label="操作" width="240">
									<template slot-scope="scope">
										<v-tableOperation :scope="scope" :tableData="tableData_1" v-on:verify="verify"></v-tableOperation>
									</template>
								</el-table-column>
							</el-table>
							<v-tabelAddBtn :tableData="tableData" :tableData_columns="tableData_columns"></v-tabelAddBtn>
						</div>
					</el-card>
				</div>
			</el-tab-pane>
			<el-tab-pane label="法律风险" name="second">
				<div>
					<el-card class="box-card" shadow='nevner'>
						<div slot="header" class="clearfix">
							<div class="card-right-wrap">
								<el-button class="save" type="primary" size="medium">保存</el-button>
							</div>
							<div class="card-title">自然人大股东法律风险</div>
						</div>
						<!-- 表格容器 -->
						<div>
							<el-table :data="tableData_1" v-loading.body="listLoading" border fit highlight-current-row style="width: 100%">
								<el-table-column label="序号" type="index" width="50"></el-table-column>
								<el-table-column min-width="300px" label="被执行人姓名/名称">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'Name'+scope.$index" :ref="'form_Name_'+scope.$index" :show-message="false">
												<el-form-item prop="Name" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.Name"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{scope.row.Name}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="100px" label="案号">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'caseNo'+scope.$index" :ref="'form_caseNo_'+scope.$index" :show-message="false">
												<el-form-item prop="caseNo" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.caseNo"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.caseNo}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="100px" label="立案时间">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'time'+scope.$index" :ref="'form_time_'+scope.$index" :show-message="false">
												<el-form-item prop="time" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.time"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.time}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="100px" label="执行法院">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'executive'+scope.$index" :ref="'form_executive_'+scope.$index" :show-message="false">
												<el-form-item prop="executive" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.executive"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.executive}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="100px" label="执行标的（元）">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'zxbd'+scope.$index" :ref="'form_zxbd_'+scope.$index" :show-message="false">
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
											<el-form :model="scope.row" :rules="rules" :id="'state'+scope.$index" :ref="'form_state_'+scope.$index" :show-message="false">
												<el-form-item prop="state" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.state"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.state}}</span>
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
export default {
  data() {
    return {
      activeName: "first",
      listLoading: false,
      rules: {
      },
      tableData_0: [
        {
          Name: "张三",
          identityNum: "1000",
          phoneNum: "300",
          edit: false
        }
      ], //表格数据
      tableData_0_columns: {
         Name: "",
          identityNum: "",
          phoneNum: "",
          edit: false
      },
      tableData: [
        {
          Name: "张三",
          account: "贷款卡",
          accountNum: "1000",
          creditLine: "300",
          balance: "300",
          yqrecord: "5条",
          lawStatus: "333333",
          bcrecord: 12,
          edit: false
        }
      ], //表格数据
      tableData_columns: {
        Name: "",
        account: "",
        accountNum: "",
        creditLine: "",
        balance: "",
        yqrecord: "",
        creditLine: "",
        bcrecord: null,
        edit: false
      }, //表格列字段
      tableData_1: [
        {
          Name: "张三",
          caseNo: "1234",
          time: "1000",
          executive: "300",
          zxbd: "300",
          state: "5条",
          edit: false
        }
      ], //表格数据
      tableData_1_columns: {
          Name: "",
          caseNo: "",
          time: "",
          executive: "",
          zxbd: "",
          state: "",
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
