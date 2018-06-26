<template>
	<div>
		<el-tabs v-model="activeName" @tab-click="handleClick">
			<el-tab-pane label="经营管理团队分析" name="first">
				<div>
					<el-card class="box-card">
						<div slot="header" class="clearfix">
							<div class="card-right-wrap">
								<el-button class="save" type="primary" size="medium">保存</el-button>
							</div>
							<div class="card-title">团队成员</div>
						</div>
						<!-- 循环表单 -->
						<div v-for="(formItem,index) in formArry" :key="index" class="form-item">
							<el-form class="form clearfix" size="small" :label-position="labelPosition" label-width="130px" :model="formItem" ref="form">
								<el-row>
									<el-col :offset="1" :span="10">
										<el-form-item label="职务:">
											<el-input v-model="formItem.post"></el-input>
										</el-form-item>
									</el-col>
									<el-col :offset="1" :span="10">
										<el-form-item label="是否参与日常运营:">
											<el-select v-model="formItem.isJoin" placeholder="请选择" style="width:100%">
												<el-option label="参与" value="1"></el-option>
												<el-option label="不参与" value="0"></el-option>
											</el-select>
										</el-form-item>
									</el-col>
								</el-row>
								<el-row>
									<el-col :offset="1" :span="10">
										<el-form-item label="姓名:">
											<el-input v-model="formItem.name"></el-input>
										</el-form-item>
									</el-col>
									<el-col :offset="1" :span="10">
										<el-form-item label="性别:">
											<el-select v-model="formItem.sex" placeholder="请选择" style="width:100%">
												<el-option label="男" value="1"></el-option>
												<el-option label="女" value="0"></el-option>
											</el-select>
										</el-form-item>
									</el-col>
								</el-row>
								<el-row>
									<el-col :offset="1" :span="10">
										<el-form-item label="文化程度:">
											<el-select v-model="formItem.educateLevel" placeholder="请选择" style="width:100%">
												<el-option label="小学" value="1"></el-option>
												<el-option label="初中" value="2"></el-option>
												<el-option label="高中" value="3"></el-option>
												<el-option label="大专" value="4"></el-option>
												<el-option label="本科" value="5"></el-option>
												<el-option label="研究生" value="6"></el-option>
												<el-option label="博士生" value="7"></el-option>
											</el-select>
										</el-form-item>
									</el-col>
									<el-col :offset="1" :span="10">
										<el-form-item label="出生年月:">
											<el-date-picker v-model="formItem.birth" type="date" placeholder="选择日期" style="width:100%"></el-date-picker>
										</el-form-item>
									</el-col>
								</el-row>
								<el-row>
									<el-col :offset="1" :span="10">
										<el-form-item label="相关工作年限:">
											<el-input v-model="formItem.workYear"></el-input>
										</el-form-item>
									</el-col>
									<el-col :offset="1" :span="10">
										<el-form-item label="婚姻状况:">
											<el-select v-model="formItem.isMarry" placeholder="请选择" style="width:100%">
												<el-option label="未婚" value="0"></el-option>
												<el-option label="已婚" value="1"></el-option>
											</el-select>
										</el-form-item>
									</el-col>
								</el-row>
								<el-row>
									<el-col :offset="1" :span="10">
										<el-form-item label="任职性质:">
											<el-input v-model="formItem.taskAttr"></el-input>
										</el-form-item>
									</el-col>
								</el-row>
								<el-row>
									<el-col :offset="1" :span="21">
										<el-form-item label="工作履历:">
											<el-input type="textarea" :rows="5" v-model="formItem.workHistory"></el-input>
										</el-form-item>
									</el-col>
								</el-row>
							</el-form>
						</div>
						<v-formAddBtn v-on:addForm="addForm"></v-formAddBtn>
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
			<el-tab-pane label="员工分析" name="second">
				<div>
					<el-card class="box-card">
						<div slot="header" class="clearfix">
							<div class="card-right-wrap">
								<el-button class="save" type="primary" size="medium">保存</el-button>
							</div>
							<div class="card-title">公司员工分析</div>
						</div>
						<!-- 表格容器 -->
						<div>
							<el-table :data="formatterTableData" v-loading.body="listLoading" border fit highlight-current-row show-summary :summary-method="getSummaries" style="width: 100%">
								<el-table-column min-width="100px" label="部门" prop="department">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'department'+scope.$index" :ref="'form_department_'+scope.$index" :show-message="false">
												<el-form-item prop="department" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.department"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{scope.row.department}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="100px" label="学历结构">
									<el-table-column min-width="100px" label="初中及以下" prop="junior">
										<template slot-scope="scope">
											<template v-if="scope.row.edit">
												<el-form :model="scope.row" :rules="rules" :id="'junior'+scope.$index" :ref="'form_junior_'+scope.$index" :show-message="false">
													<el-form-item prop="junior" class="td-form-item">
														<el-input class="edit-input" size="small" v-model="scope.row.junior"></el-input>
													</el-form-item>
												</el-form>
											</template>
											<span v-else>{{ scope.row.junior}}</span>
										</template>
									</el-table-column>
									<el-table-column min-width="100px" label="高中" prop="middle">
										<template slot-scope="scope">
											<template v-if="scope.row.edit">
												<el-form :model="scope.row" :rules="rules" :id="'middle'+scope.$index" :ref="'form_middle_'+scope.$index" :show-message="false">
													<el-form-item prop="middle" class="td-form-item">
														<el-input class="edit-input" size="small" v-model="scope.row.middle"></el-input>
													</el-form-item>
												</el-form>
											</template>
											<span v-else>{{ scope.row.middle}}</span>
										</template>
									</el-table-column>
									<el-table-column min-width="100px" label="大学及以上" prop="senior">
										<template slot-scope="scope">
											<template v-if="scope.row.edit">
												<el-form :model="scope.row" :rules="rules" :id="'senior'+scope.$index" :ref="'form_senior_'+scope.$index" :show-message="false">
													<el-form-item prop="senior" class="td-form-item">
														<el-input class="edit-input" size="small" v-model="scope.row.senior"></el-input>
													</el-form-item>
												</el-form>
											</template>
											<span v-else>{{ scope.row.senior}}</span>
										</template>
									</el-table-column>
								</el-table-column>
								<el-table-column min-width="100px" label="小计" prop="subtotal"></el-table-column>
								<el-table-column min-width="100px" label="在职年限" prop="workYear">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'workYear'+scope.$index" :ref="'form_workYear_'+scope.$index" :show-message="false">
												<el-form-item prop="workYear" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.workYear"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.workYear}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="100px" label="平均年龄" prop="averagAge">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'averagAge'+scope.$index" :ref="'form_averagAge_'+scope.$index" :show-message="false">
												<el-form-item prop="averagAge" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.averagAge"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.averagAge}}</span>
									</template>
								</el-table-column>
								<el-table-column align="center" label="操作" width="240">
									<template slot-scope="scope">
										<v-tableOperation :scope="scope" :tableData="formatterTableData" v-on:verify="verify"></v-tableOperation>
									</template>
								</el-table-column>
							</el-table>
							<!--<v-tabelAddBtn v-on:addRow="addRow" tableIndex="formatterTableData"></v-tabelAddBtn>-->
              <v-tabelAddBtn :tableData="formatterTableData" :tableData_columns="formatterTableData_columns"></v-tabelAddBtn>
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
		</el-tabs>
	</div>
</template>

<script>
import formAddBtn from "@/components/form/form-add-btn.vue";
import tabelAddBtn from "@/components/table/table-add-btn.vue";
import tableOperation from "@/components/table/table-operation.vue";
export default {
  data() {
    return {
      activeName: "first",
      listLoading: false,
      textarea: "",
      labelPosition: "right",
      formArry: [
        {
          post: "总经理", //职位
          isJoin: 0,
          name: "XXX",
          sex: 0,
          educateLevel: "博士后",
          birth: "1978/02/01", //出生年月
          workYear: 5,
          isMarry: 1,
          taskAttr: "全职",
          workHistory:
            "工作历史工作历史工作历史工作历史工作历史工作历史工作历史工作历史工作历史" //工作经历
        }
      ],
      tableData: [
        {
          department: "法利莱数控光纤激光切割",
          junior: 100,
          middle: 80,
          senior: 50,
          workYear: 8,
          averagAge: 25,
          edit: false
        },
        {
          department: "法利莱数控光纤激光切割",
          junior: 80,
          middle: 50,
          senior: 30,
          workYear: 3,
          averagAge: 21,
          edit: false
        }
      ],
      formatterTableData_columns: {
        department: "",
        junior: null,
        middle: null,
        senior: null,
        subtotal: null,
        workYear: null,
        averagAge: null,
        edit: false
      },
      //规则
      rules: {}
    };
  },
  computed: {
    formatterTableData() {
      this.tableData.map((item, index) => {
        item.subtotal = parseInt(item.junior) + parseInt(item.middle) + parseInt(item.senior) || null;
      });
      return this.tableData;
    }
    // isJoin(){
    // 	return this.formArry.isJoin?"参与":"不参与";
    // },
    // sex(){
    // 	return this.formArry.sex?"男":"女";
    // },
    // isMarry(){
    // 	return this.formArry.isMarry?"已婚":"未婚";
    // },
    // workYear(){
    // 	return this.formArry.workYear+"年";
    // },
    // subtotal(){
    // 	return this.tableData
    // }
  },
  methods: {
    handleClick(tab, event) {
      //   console.log(tab, event);
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
    addForm() {
      let obj = Object.keys(this.formArry[0]).map(item => {
        return {
          [item]: null
        };
      });
      this.formArry.push(obj);
    },
    // addRow(tableIndex) {
	// 	console.log(this[tableIndex]);
	// 	// return;
    //   this[tableIndex].push(this[`${tableIndex}_columns`]);
    // }
  },
  components: {
    "v-formAddBtn": formAddBtn,
    "v-tabelAddBtn": tabelAddBtn,
    "v-tableOperation": tableOperation
  }
};
</script>

<style lang="scss" scoped>
.form-item {
  border-bottom: 1px solid #ebebeb;
  margin-bottom: 20px;
}
</style>

