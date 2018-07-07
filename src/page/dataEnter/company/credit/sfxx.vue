<template>
	<div>
		<el-tabs v-model="activeName" @tab-click="handleClick">
			<el-tab-pane label="法院公告信息" name="first">
				<div>
					<el-card class="box-card" shadow='nevner'>
						<div slot="header" class="clearfix">
							<div class="card-right-wrap">
								<el-button class="save" type="default" size="medium">获取数据</el-button>
								<el-button class="save" type="primary" size="medium">保存</el-button>
							</div>
							<div class="card-title">法院公告信息</div>
						</div>
						<!-- 表格容器 -->
						<div>
							<el-table :data="tableData" v-loading.body="listLoading" border fit highlight-current-row style="width: 100%">
								<el-table-column label="序号" type="index" width="50"></el-table-column>
								<el-table-column min-width="100px" label="执行法院">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'executive'+scope.$index" :ref="'form_executive_'+scope.$index" :show-message="false">
												<el-form-item prop="executive" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.executive"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{scope.row.executive}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="100px" label="发布时间">
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
								<el-table-column min-width="100px" label="公告类型">
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
								<el-table-column min-width="100px" label="公告内容">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'content'+scope.$index" :ref="'form_content_'+scope.$index" :show-message="false">
												<el-form-item prop="content" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.content"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.content}}</span>
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
			<el-tab-pane label="法院判别信息" name="second">
				<div>
					<el-card class="box-card" shadow='nevner'>
						<div slot="header" class="clearfix">
							<div class="card-right-wrap">
								<el-button class="save" type="primary" size="medium">保存</el-button>
							</div>
							<div class="card-title">法院判决信息</div>
						</div>
						<!-- 表格容器 -->
						<div>
							<el-table :data="tableData_1" v-loading.body="listLoading" border fit highlight-current-row style="width: 100%">
								<el-table-column label="序号" type="index" width="50"></el-table-column>
								<el-table-column min-width="300px" label="判决时间">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'time'+scope.$index" :ref="'form_time_'+scope.$index" :show-message="false">
												<el-form-item prop="time" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.time"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{scope.row.time}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="100px" label="身份">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'identity'+scope.$index" :ref="'form_identity_'+scope.$index" :show-message="false">
												<el-form-item prop="identity" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.identity"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.identity }}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="100px" label="执行法院">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'court'+scope.$index" :ref="'form_court_'+scope.$index" :show-message="false">
												<el-form-item prop="court" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.court"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.court}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="100px" label="文书字号">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'fontSize'+scope.$index" :ref="'form_fontSize_'+scope.$index" :show-message="false">
												<el-form-item prop="fontSize" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.fontSize"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.fontSize}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="100px" label="判决结果">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'result'+scope.$index" :ref="'form_result_'+scope.$index" :show-message="false">
												<el-form-item prop="result" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.result"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.result}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="100px" label="诉讼费用">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'cost'+scope.$index" :ref="'form_cost_'+scope.$index" :show-message="false">
												<el-form-item prop="cost" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.cost"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.cost}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="100px" label="案由">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'causeAction'+scope.$index" :ref="'form_causeAction_'+scope.$index" :show-message="false">
												<el-form-item prop="causeAction" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.causeAction"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.causeAction}}</span>
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
			<el-tab-pane label="企业被执行公告信息" name="third">
				<div>
					<el-card class="box-card" shadow='nevner'>
						<div slot="header" class="clearfix">
							<div class="card-right-wrap">
								<el-button class="save" type="default" size="medium">获取数据</el-button>
								<el-button class="save" type="primary" size="medium">保存</el-button>
							</div>
							<div class="card-title">企业被执行公告信息</div>
						</div>
						<div>
							<el-table :data="tableData_2" v-loading.body="listLoading" border fit highlight-current-row style="width: 100%">
								<el-table-column label="序号" type="index" width="50"></el-table-column>
								<el-table-column min-width="150px" label="被执行人姓名/名称">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'Name '+scope.$index" :ref="'form_Name_'+scope.$index" :show-message="false">
												<el-form-item prop="Name" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.Name"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{scope.row.Name}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="70px" label="案号">
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
								<el-table-column min-width="80px" label="立案时间">
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
											<el-form :model="scope.row" :rules="rules" :id="'court'+scope.$index" :ref="'form_court_'+scope.$index" :show-message="false">
												<el-form-item prop="court" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.court"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.court}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="100px" label="执行标的">
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
								<el-table-column min-width="200px" label="案件状态">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'kyState'+scope.$index" :ref="'form_kyState_'+scope.$index" :show-message="false">
												<el-form-item prop="kyState" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.kyState"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.kyState}}</span>
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
			<el-tab-pane label="失信联合惩戒信息" name="four">
				<div>
					<el-card class="box-card" shadow='nevner'>
						<div slot="header" class="clearfix">
							<div class="card-right-wrap">
								<el-button class="save" type="default" size="medium">获取数据</el-button>
								<el-button class="save" type="primary" size="medium">保存</el-button>
							</div>
							<div class="card-title">失信联合惩戒信息</div>
						</div>
						<div>
							<el-table :data="tableData_3" v-loading.body="listLoading" border fit highlight-current-row style="width: 100%">
								<el-table-column label="序号" type="index" width="50"></el-table-column>
								<el-table-column min-width="150px" label="失信主体名称">
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
								<el-table-column min-width="150px" label="惩戒类别">
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
								<el-table-column min-width="300px" label="查询次数">
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
								<el-table-column min-width="100px" label="惩戒次数">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'cjtime'+scope.$index" :ref="'form_cjtime_'+scope.$index" :show-message="false">
												<el-form-item prop="cjtime" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.cjtime"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.cjtime}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="100px" label="收录时间">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'sltime'+scope.$index" :ref="'form_sltime_'+scope.$index" :show-message="false">
												<el-form-item prop="sltime" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.sltime"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.sltime}}</span>
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
		    <el-tab-pane label="行政处罚信息" name="five">
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
							<el-table :data="tableData_4" v-loading.body="listLoading" border fit highlight-current-row style="width: 100%">
								<el-table-column label="序号" type="index" width="50"></el-table-column>
								<el-table-column min-width="150px" label="处罚事由">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'origin'+scope.$index" :ref="'form_origin_'+scope.$index" :show-message="false">
												<el-form-item prop="origin" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.origin"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{scope.row.origin}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="300px" label="行政处罚决定书文号">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'num'+scope.$index" :ref="'form_num_'+scope.$index" :show-message="false">
												<el-form-item prop="num" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.num"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.num}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="300px" label="处罚机关">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'office'+scope.$index" :ref="'form_office_'+scope.$index" :show-message="false">
												<el-form-item prop="office" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.office"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.office}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="100px" label="处罚决定日期">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'Date'+scope.$index" :ref="'form_Date_'+scope.$index" :show-message="false">
												<el-form-item prop="Date" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.Date"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.Date}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="100px" label="处罚结果">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'result'+scope.$index" :ref="'form_result_'+scope.$index" :show-message="false">
												<el-form-item prop="result" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.result"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.result}}</span>
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
      tableData: [
        {
          executive: "爱福特环保",
          time: 0,
          lable: "2018/02/01",
          content: "05415785",
          edit: false
        },{
          executive: "爱福特环保1",
          time: 1,
          lable: "2018/02/02",
          content: "05415788",
          edit: false
        }
      ], //表格数据
      tableData_columns: {
          executive: "",
          time: "",
          lable: "",
          content: "",
          edit: false
      }, //表格列字段
      tableData_1: [
        {
          time: "054457",
          identity: "2018/04/01",
          court: "开关寿命试验机",
          fontSize: "25358745",
          result: "中国（CN）",
          cost: "CN205455744",
          causeAction: "授权",
          edit: false
        }
      ], //表格数据
      tableData_1_columns: {
          time: "",
          identity: "",
          court: "",
          fontSize: "",
          result: "",
          cost: "",
          causeAction: "",
          edit: false
      }, //表格列字段
      tableData_2: [
        {
          Name: "爱瑞特电动车充电控制软件",
          Num: "开关寿命试验机",
          time: "王大锤",
          court: "55225587",
          zxbd: "V1.0",
          kyState: "2018/05/01",
          edit: false
        }
      ], //表格数据
      tableData_2_columns: {
          Name: "",
          Num: "",
          time: "",
          court: "",
          zxbd: "",
          kyState: "",
          edit: false
      }, //表格列字段
      tableData_3: [
        {
          Name: "芜湖新闻网",
          lable: "http://www.wuhunews.com",
          cxtime: "皖备58741258",
          cjtime: 0,
          sltime: "企业",
          edit: false
        }
      ], //表格数据
      tableData_3_columns: {
          Name: "",
          lable: "",
          cxtime: "",
          cjtime: "",
          sltime: "",
        edit: false
      },//表格列字段
      tableData_4: [
        {
          origin: "芜湖新闻网",
          num: "http://www.wuhunews.com",
          office: "皖备58741258",
          Date: 0,
          result: "企业",
          edit: false
        }
      ], //表格数据
      tableData_4_columns: {
          origin: "",
          num: "",
          office: "",
          Date: "0",
          result: "",
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
