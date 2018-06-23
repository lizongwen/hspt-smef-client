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
							<v-tabelAddBtn v-on:addRow="addRow" tableIndex="tableData"></v-tabelAddBtn>
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
    //增加行
    addRow(tableIndex) {
      this[tableIndex].push(this[`${tableIndex}_columns`]);
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

