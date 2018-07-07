<template>
	<div>
		<el-card class="box-card" shadow='nevner'>
			<div slot="header" class="clearfix">
				<div class="card-right-wrap">
					<el-button type="default" size="medium">模板下载</el-button>
					<el-button type="default" size="medium">数据导入</el-button>
					<el-button type="default" size="medium">生成图表</el-button>
					<el-button type="primary" size="medium">保存</el-button>
				</div>
				<div class="card-title">企业工资发放情况</div>
			</div>
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
							<span v-else>{{ scope.row.date }}</span>
						</template>
					</el-table-column>
					<el-table-column min-width="300px" label="发放人数">
						<template slot-scope="scope">
							<template v-if="scope.row.edit">
								<el-form :model="scope.row" :rules="rules" :id="'num'+scope.$index" :ref="'form_num_'+scope.$index" :show-message="false">
									<el-form-item prop="num" class="td-form-item">
										<el-input class="edit-input" size="small" v-model="scope.row.num"></el-input>
									</el-form-item>
								</el-form>
							</template>
							<span v-else>{{scope.row.num}}</span>
						</template>
					</el-table-column>
					<el-table-column min-width="300px" label="发放金额">
						<template slot-scope="scope">
							<template v-if="scope.row.edit">
								<el-form :model="scope.row" :rules="rules" :id="'money'+scope.$index" :ref="'form_money_'+scope.$index" :show-message="false">
									<el-form-item prop="money" class="td-form-item">
										<el-input class="edit-input" size="small" v-model="scope.row.money"></el-input>
									</el-form-item>
								</el-form>
							</template>
							<span v-else>{{scope.row.money}}</span>
						</template>
					</el-table-column>
					<el-table-column align="center" label="Actions" width="240">
						<template slot-scope="scope">
							<v-tableOperation :scope="scope" :tableData="tableData" v-on:verify="verify"></v-tableOperation>
						</template>
					</el-table-column>
				</el-table>
				<v-tabelAddBtn :tableData="tableData" :tableData_columns="tableData_columns"></v-tabelAddBtn>
			</div>
		</el-card>
	</div>
</template>

<script>
import tabelAddBtn from "@/components/table/table-add-btn.vue";
import tableOperation from "@/components/table/table-operation.vue";
export default {
  name: "inlineEditTable",
  data() {
    return {
      listLoading: false,
      tableData: [
        {
          date: "2018/01/02",
          num: 50,
          money: 100,
          edit: false
        }
      ],
      tableData_columns: {
        date: "",
        num: null,
        money: null,
        edit: false
      },
      rules: {}
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    getList() {},
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

<style>
.td-form-item {
  margin: 0;
}
</style>
