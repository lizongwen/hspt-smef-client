<template>
	<div>
		<el-tabs v-model="activeName" @tab-click="handleClick">
			<el-tab-pane label="企业不动产信息" name="first">
				<div>
					<el-card class="box-card">
						<div slot="header" class="clearfix">
							<div class="card-right-wrap">
								<el-button class="save" type="primary" size="medium">保存</el-button>
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
										<el-date-picker class="cellItem el-form-item" v-model="scope.row.zzrq"  value-format="yyyy-MM-dd" :class="Object.keys(tableData_columns)[6]" v-if="scope.row.edit" type="date" placeholder="选择日期" style="width: 100%;" :clearable='false' ></el-date-picker>
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
					<el-card class="box-card">
						<div slot="header" class="clearfix">
							<div class="card-right-wrap">
								<el-button class="save" type="primary" size="medium">保存</el-button>
							</div>
							<div class="card-title">企业房产信息</div>
						</div>
						<!-- 表格容器 -->
						<div>
							<el-table :data="tableData_1" v-loading.body="listLoading" border fit highlight-current-row style="width: 100%">
								<el-table-column label="序号" type="index" width="50"></el-table-column>
								<el-table-column min-width="300px" label="土地证号">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'landDeed'+scope.$index" :ref="'form_landDeed_'+scope.$index" :show-message="false">
												<el-form-item prop="landDeed" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.landDeed"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{scope.row.landDeed}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="100px" label="坐落">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'seat'+scope.$index" :ref="'form_seat_'+scope.$index" :show-message="false">
												<el-form-item prop="seat" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.seat"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.seat}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="100px" label="用途">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'use'+scope.$index" :ref="'form_use_'+scope.$index" :show-message="false">
												<el-form-item prop="use" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.use"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.use}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="100px" label="取得价格（万元）">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'price'+scope.$index" :ref="'form_price_'+scope.$index" :show-message="false">
												<el-form-item prop="price" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.price"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.price}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="100px" label="使用权类型">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'useType'+scope.$index" :ref="'form_useType_'+scope.$index" :show-message="false">
												<el-form-item prop="useType" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.useType"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.useType}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="100px" label="终止日期">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'expDate'+scope.$index" :ref="'form_expDate_'+scope.$index" :show-message="false">
												<el-form-item prop="expDate" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.expDate"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.expDate}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="150px" label="面积">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'landArea'+scope.$index" :ref="'form_landArea_'+scope.$index" :show-message="false">
												<el-form-item prop="landArea" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.landArea"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.landArea}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="100px" label="有无他项权利">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'hasMortgage'+scope.$index" :ref="'form_hasMortgage_'+scope.$index" :show-message="false">
												<el-form-item prop="hasMortgage" class="td-form-item">
													<el-select v-model="hasMortgage" placeholder="请选择">
														<el-option value="1" label="有"></el-option>
														<el-option value="0" label="无"></el-option>
													</el-select>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.hasMortgage==null?"":(scope.row.hasMortgage?"有":"无")}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="100px" label="融资额度">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'quota'+scope.$index" :ref="'form_quota_'+scope.$index" :show-message="false">
												<el-form-item prop="quota" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.quota"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.quota}}</span>
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
			<el-tab-pane label="企业主要生产设备" name="second">
				<div>
					<el-card class="box-card">
						<div slot="header" class="clearfix">
							<div class="card-right-wrap">
								<el-button class="save" type="default" size="medium">模板下载</el-button>
								<el-button class="save" type="default" size="medium">数据导入</el-button>
								<el-button class="save" type="primary" size="medium">保存</el-button>
							</div>
							<div class="card-title">企业主要生产设备</div>
						</div>
						<!-- 表格容器 -->
						<div>
							<el-table :data="tableData_2" v-loading.body="listLoading" border fit highlight-current-row show-summary :summary-method="getSummaries" style="width: 100%">
								<el-table-column min-width="100px" label="设备名称" prop="deviceName">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'deviceName'+scope.$index" :ref="'form_deviceName_'+scope.$index" :show-message="false">
												<el-form-item prop="deviceName" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.deviceName"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{scope.row.deviceName}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="100px" label="设备型号" prop="deviceModel">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'deviceModel'+scope.$index" :ref="'form_deviceModel_'+scope.$index" :show-message="false">
												<el-form-item prop="deviceModel" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.deviceModel"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.deviceModel}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="100px" label="原值（万元）" prop="worth">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'worth'+scope.$index" :ref="'form_worth_'+scope.$index" :show-message="false">
												<el-form-item prop="worth" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.worth"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.worth}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="100px" label="净值（万元）" prop="netWorth">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'netWorth'+scope.$index" :ref="'form_netWorth_'+scope.$index" :show-message="false">
												<el-form-item prop="netWorth" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.netWorth"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.netWorth}}</span>
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
							<div class="card-right-wrap">
								<el-button class="save" type="primary" size="medium">保存</el-button>
							</div>
							<div class="card-title">小结</div>
						</div>
						<!-- 表格容器 -->
						<div>
							<el-input type="textarea" :rows="5" placeholder="请输入内容" v-model="textarea"></el-input>
						</div>
					</el-card>
				</div>
			</el-tab-pane>
			<el-tab-pane label="企业车辆情况" name="third">
				<div>
					<el-card class="box-card">
						<div slot="header" class="clearfix">
							<div class="card-right-wrap">
								<el-button type="default" size="medium">获取数据</el-button>
								<el-button type="primary" size="medium">保存</el-button>
							</div>
							<div class="card-title">所有车辆记录</div>
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
								<el-button type="default" size="medium">获取数据</el-button>
								<el-button type="primary" size="medium">保存</el-button>
							</div>
							<div class="card-title">所有车辆明细</div>
						</div>
						<!-- 表格容器 -->
						<div>
							<el-table :data="tableData_4" v-loading.body="listLoading" border fit highlight-current-row style="width: 100%">
								<el-table-column label="序号" type="index" width="50"></el-table-column>
								<el-table-column min-width="300px" label="号牌种类">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'plateType'+scope.$index" :ref="'form_plateType_'+scope.$index" :show-message="false">
												<el-form-item prop="plateType" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.plateType"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{scope.row.plateType}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="300px" label="号牌号码">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'plateNum'+scope.$index" :ref="'form_plateNum_'+scope.$index" :show-message="false">
												<el-form-item prop="plateNum" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.plateNum"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.plateNum}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="300px" label="中文品牌">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'carBrand'+scope.$index" :ref="'form_carBrand_'+scope.$index" :show-message="false">
												<el-form-item prop="carBrand" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.carBrand"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.carBrand}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="100px" label="车辆类型">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'carType'+scope.$index" :ref="'form_carType_'+scope.$index" :show-message="false">
												<el-form-item prop="carType" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.carType"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.carType}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="100px" label="制造国">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'madeCpuntry'+scope.$index" :ref="'form_madeCpuntry_'+scope.$index" :show-message="false">
												<el-form-item prop="madeCpuntry" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.madeCpuntry"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.madeCpuntry}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="100px" label="机动车状态">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'paidIn'+scope.$index" :ref="'form_status_'+scope.$index" :show-message="false">
												<el-form-item prop="status" class="td-form-item">
													<el-select v-model="status" placeholder="请选择">
														<el-option value="1" label="正常"></el-option>
														<el-option value="0" label="异常"></el-option>
													</el-select>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.status==null?"":(scope.row.status?"正常":"异常")}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="100px" label="抵押标记">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'mortgageMark'+scope.$index" :ref="'form_mortgageMark_'+scope.$index" :show-message="false">
												<el-form-item prop="mortgageMark" class="td-form-item">
													<el-select v-model="mortgageMark" placeholder="请选择">
														<el-option value="1" label="已抵押"></el-option>
														<el-option value="0" label="未抵押"></el-option>
													</el-select>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.mortgageMark==null?"":(scope.row.mortgageMark?"已抵押":"未抵押")}}</span>
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
        ywtxql: '有无他项权利',
        rzed: '融资额度',
        edit: false
      },
      tableData_1: [
        {
          landDeed: "2018/01/01",
          seat: "变更事项1",
          use: "变更前1",
          price: "变更后1",
          useType: "使用权类型一",
          expDate: "终止日期一",
          landArea: "1000平米",
          hasMortgage: 1,
          quota: 100,
          edit: false
        }
      ],
      tableData_1_columns: {
        landDeed: "",
        seat: "",
        use: "",
        price: "",
        useType: "",
        expDate: "",
        landArea: "",
        hasMortgage: null,
        quota: null,
        edit: false
      },
      tableData_2: [
        {
          deviceName: "法利莱数控光纤激光切割",
          deviceModel: "设备型号一",
          worth: 100,
          netWorth: 80,
          edit: false
        }
      ],
      tableData_2_columns: {
        deviceName: "",
        deviceModel: "",
        worth: null,
        netWorth: null,
        edit: false
      },
      tableData_4: [
        {
          plateType: "小型汽车",
          plateNum: "皖B88888",
          carBrand: "兰博基尼",
		  carType:"跑车",
          madeCpuntry: "中国",
          status: 1,
          mortgageMark: 0,
          edit: false
        }
      ],
      tableData_4_columns: {
        plateType: "",
        plateNum: "",
        carBrand: "",
		carType:"",
        madeCpuntry: "",
        status: null,
        mortgageMark: null,
        edit: false
      },
      //规则
      rules: {

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
  mounted(){
	   this.getLandList();
  },
  methods: {
    handleClick(tab, event) {
      //   console.log(tab, event);
	},
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
		console.log(res.data);
		this.tableData=res.data.resultData.data.rows
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
    "v-tableOperation": tableOperation
  }
};
</script>

<style lang="scss" scoped>
</style>

