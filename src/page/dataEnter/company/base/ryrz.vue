<template>
	<div>
		<el-tabs v-model="activeName" @tab-click="handleClick">
			<el-tab-pane label="荣誉信息" name="first">
				<div>
					<el-card class="box-card">
						<div slot="header" class="clearfix">
							<div class="card-right-wrap">
								<el-button class="save" type="primary" size="medium">保存</el-button>
							</div>
							<div class="card-title">荣誉信息</div>
						</div>
						<!-- 表格容器 -->
						<div>
							<el-table :data="tableData" v-loading.body="listLoading" border fit highlight-current-row style="width: 100%">
								<el-table-column min-width="300px" label="年份">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'year'+scope.$index" :ref="'form_year_'+scope.$index" :show-message="false">
												<el-form-item prop="year" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.year"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{scope.row.year}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="300px" label="荣誉">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'year'+scope.$index" :ref="'form_record_'+scope.$index" :show-message="false">
												<el-form-item prop="record" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.record"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.record}}</span>
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
			<el-tab-pane label="行政许可" name="second">
				<div>
					<el-card class="box-card">
						<div slot="header" class="clearfix">
							<div class="card-right-wrap">
								<el-button class="save" type="primary" size="medium">保存</el-button>
							</div>
							<div class="card-title">行政许可</div>
						</div>
						<!-- 表格容器 -->
						<div>
							<el-table :data="tableData_1" v-loading.body="listLoading" border fit highlight-current-row style="width: 100%">
								<el-table-column label="序号" type="index" width="50"></el-table-column>
								<el-table-column min-width="300px" label="主体名称">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'name'+scope.$index" :ref="'form_name_'+scope.$index" :show-message="false">
												<el-form-item prop="name" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.name"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{scope.row.name}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="300px" label="公示类型（行政许可）">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'publicType'+scope.$index" :ref="'form_publicType_'+scope.$index" :show-message="false">
												<el-form-item prop="publicType" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.publicType"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.publicType}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="300px" label="行政类别/区域">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'deptName'+scope.$index" :ref="'form_deptName_'+scope.$index" :show-message="false">
												<el-form-item prop="deptName" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.deptName"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.deptName}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="300px" label="更新时间">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'updateTime'+scope.$index" :ref="'form_updateTime_'+scope.$index" :show-message="false">
												<el-form-item prop="updateTime" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.updateTime"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.updateTime}}</span>
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
			<el-tab-pane label="主要认证与资质" name="third">
				<div>
					<el-card class="box-card">
						<div slot="header" class="clearfix">
							<div class="card-right-wrap">
								<el-button class="save" type="primary" size="medium">保存</el-button>
							</div>
							<div class="card-title">主要认证与资质</div>
						</div>
						<!-- 表格容器 -->
						<div>
							<el-table :data="tableData_2" v-loading.body="listLoading" border fit highlight-current-row style="width: 100%">
								<el-table-column label="序号" type="index" width="50"></el-table-column>
								<el-table-column min-width="300px" label="主体名称">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'name'+scope.$index" :ref="'form_name_'+scope.$index" :show-message="false">
												<el-form-item prop="name" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.name"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{scope.row.name}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="300px" label="证书编号">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'certificateNo'+scope.$index" :ref="'form_certificateNo_'+scope.$index" :show-message="false">
												<el-form-item prop="certificateNo" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.certificateNo"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.certificateNo}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="300px" label="认证项目/产品类别">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'certificationProj'+scope.$index" :ref="'form_certificationProj_'+scope.$index" :show-message="false">
												<el-form-item prop="certificationProj" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.certificationProj"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.certificationProj}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="300px" label="证书到期日期">
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
      tableData: [], //表格数据
      tableData_columns: {
        year: "",
        record: "",
        edit: false
      },
      tableData_1: [
        {
          name: "安徽XXX有限公司",
          publicType: "营业执照",
          deptName: "芜湖市工商行政管理局",
          updateTime: "2018/02/05",
          edit: false
        }
      ],
      tableData_1_columns: {
        name: "",
        publicType: "",
        deptName: "",
        updateTime: "",
        edit: false
      },
      tableData_2: [
        {
          name: "安徽XXX有限公司",
          certificateNo: "CI/134893Q",
          certificationProj: "质量管理体系认证",
          expDate: "2017/03/01",
          edit: false
        }
      ],
      tableData_2_columns: {
        name: "",
        certificateNo: "",
        certificationProj: "",
        expDate: "",
        edit: false
      },
      //规则
      rules: {
        year: [
          {
            required: true,
            message: "请选择年份",
            trigger: "null"
          }
        ],
        record: [
          {
            required: true,
            message: "请输入荣誉信息",
            trigger: "null"
          }
        ]
      }
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    //初始化
    init() {
      this.getTableData();
    },
    verify(row, index) {
      //   var a = true,
      //     b = true,
      //     c = true,
      //     d = true;
      //   this.$refs[`form_changeDate_${index}`].validate((res, obj) => {
      //     if (res) {
      //       //验证通过
      //       a = false;
      //     } else {
      //       //验证不通过
      //       console.log(obj.changeDate[0].message);
      //     }
      //   });
      //   this.$refs[`form_changeThing_${index}`].validate((res, obj) => {
      //     if (res) {
      //       //验证通过
      //       b = false;
      //     } else {
      //       //验证不通过
      //       console.log(obj.changeThing[0].message);
      //     }
      //   });
      //   this.$refs[`form_beforeThing_${index}`].validate((res, obj) => {
      //     if (res) {
      //       //验证通过
      //       c = false;
      //     } else {
      //       //验证不通过
      //       console.log(obj.beforeThing[0].message);
      //     }
      //   });
      //   this.$refs[`form_afterThing_${index}`].validate((res, obj) => {
      //     if (res) {
      //       //验证通过
      //       d = false;
      //     } else {
      //       //验证不通过
      //       console.log(obj.afterThing[0].message);
      //     }
      //   });
      //   if (!a && !b && !c && !d) {
      row.edit = false;
      //   } else {
      //弹出错误消息汇总
      //   }
    },
    verify1(row, index) {
      row.edit = false;
    },
    verify2(row, index) {
      row.edit = false;
    },
    //获取表格数据
    getTableData() {
      this.tableData = [
        {
          year: "2017年",
          record: "优秀企业创新科技大奖",
          edit: false
        },
        {
          year: "2018年",
          record: "优秀企业创新科技大奖2",
          edit: false
        }
      ];
    },
    //点击标签页触发事件
    handleClick(tab, event) {
      //   console.log(tab, event);
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

