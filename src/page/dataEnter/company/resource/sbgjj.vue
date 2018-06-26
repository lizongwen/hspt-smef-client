<template>
	<div>
		<div>
			<el-card class="box-card">
				<div slot="header" class="clearfix">
					<div class="card-right-wrap">
						<el-button type="primary" size="medium">保存</el-button>
					</div>
					<div class="card-title">公司社保及公积金缴纳人数</div>
				</div>
				<!-- 表格容器 -->
				<div>
					<el-form class="form clearfix" size="small" :label-position="labelPosition" :model="summaryForm">
						<el-form-item>
							<el-input type="textarea" :rows="5" v-model="summaryForm.content"></el-input>
						</el-form-item>
					</el-form>
				</div>
			</el-card>
		</div>
		<div>
			<el-card class="box-card">
				<div slot="header" class="clearfix">
					<div class="card-right-wrap">
						<el-button type="default" size="medium">获取数据</el-button>
						<el-button type="default" size="medium">模板下载</el-button>
						<el-button type="primary" size="medium">数据导入</el-button>
					</div>
					<div class="card-title">社保缴纳趋势图</div>
				</div>
				<!-- 表格容器 -->
				<div>
					<el-table :data="tableData" v-loading.body="listLoading" border fit highlight-current-row style="width: 100%">
						<el-table-column label="序号" type="index" width="50"></el-table-column>
						<el-table-column min-width="300px" label="日期">
							<template slot-scope="scope">
								<template v-if="scope.row.edit">
									<el-form :model="scope.row" :rules="rules" :id="'date'+scope.$index" :ref="'form_date_'+scope.$index" :show-message="false">
										<el-form-item prop="date" class="td-form-item">
											<el-input class="edit-input" size="small" v-model="scope.row.date"></el-input>
										</el-form-item>
									</el-form>
								</template>
								<span v-else>{{scope.row.date}}</span>
							</template>
						</el-table-column>
						<el-table-column min-width="300px" label="社保缴纳人数">
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
						<el-table-column min-width="300px" label="社保缴纳总额（万元）">
							<template slot-scope="scope">
								<template v-if="scope.row.edit">
									<el-form :model="scope.row" :rules="rules" :id="'totalMoney'+scope.$index" :ref="'form_totalMoney_'+scope.$index" :show-message="false">
										<el-form-item prop="totalMoney" class="td-form-item">
											<el-input class="edit-input" size="small" v-model="scope.row.totalMoney"></el-input>
										</el-form-item>
									</el-form>
								</template>
								<span v-else>{{ scope.row.totalMoney}}</span>
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
	</div>
</template>

<script>
import tabelAddBtn from "@/components/table/table-add-btn.vue";
import tableOperation from "@/components/table/table-operation.vue";
export default {
  data() {
    return {
      labelPosition: "right",
      listLoading: false,
      summaryForm: {
        content: ""
      },
      tableData: [
        {
          date: "2018/01/01",
          num: 100,
          totalMoney: 100,
          edit: false
        },
        {
          date: "2018/01/02",
          num: 200,
          totalMoney: 120,
          edit: false
        }
      ],
      tableData_columns: {
        date: "",
        num: null,
        totalMoney: null,
        edit: false
      },
      //规则
      rules: {
        date: [
          {
            required: true,
            message: "请选择年份",
            trigger: "null"
          }
        ],
        num: [
          {
            required: true,
            message: "请输入荣誉信息",
            trigger: "null"
          }
        ],
        totalMoney: [
          {
            required: true,
            message: "请输入荣誉信息",
            trigger: "null"
          }
        ]
      }
    };
  },
  computed: {},
  mounted() {},
  methods: {
    verify(row, index) {
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
