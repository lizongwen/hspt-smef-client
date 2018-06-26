<template>
	<div>
		<div>
			<el-card class="box-card">
				<div slot="header" class="clearfix">
					<div class="card-right-wrap">
						<el-button class="save" type="primary" size="medium">保存</el-button>
					</div>
					<div class="card-title">被非银行信贷机构查询信息</div>
				</div>
				<div>
					<el-table :data="tableData" v-loading.body="listLoading" border fit highlight-current-row style="width: 100%">
						<el-table-column min-width="100px" label="机构类型">
							<template slot-scope="scope">
								<template v-if="scope.row.edit">
									<el-form :model="scope.row" :rules="rules" :id="'lable'+scope.$index" :ref="'form_lable_'+scope.$index" :show-message="false">
										<el-form-item prop="lable" class="td-form-item">
											<el-input class="edit-input" size="small" v-model="scope.row.lable"></el-input>
										</el-form-item>
									</el-form>
								</template>
								<span v-else>{{scope.row.lable}}</span>
							</template>
						</el-table-column>
						<el-table-column min-width="200px" label="最近一年被查询次数">
							<template slot-scope="scope">
								<template v-if="scope.row.edit">
									<el-form :model="scope.row" :rules="rules" :id="'timeOne'+scope.$index" :ref="'form_timeOne_'+scope.$index" :show-message="false">
										<el-form-item prop="timeOne" class="td-form-item">
											<el-input class="edit-input" size="small" v-model="scope.row.timeOne"></el-input>
										</el-form-item>
									</el-form>
								</template>
								<span v-else>{{ scope.row.timeOne}}</span>
							</template>
						</el-table-column>
						<el-table-column min-width="200px" label="最近6个月被查询次数">
							<template slot-scope="scope">
								<template v-if="scope.row.edit">
									<el-form :model="scope.row" :rules="rules" :id="'timeTwo'+scope.$index" :ref="'form_timeTwo_'+scope.$index" :show-message="false">
										<el-form-item prop="timeTwo" class="td-form-item">
											<el-input class="edit-input" size="small" v-model="scope.row.timeTwo"></el-input>
										</el-form-item>
									</el-form>
								</template>
								<span v-else>{{ scope.row.timeTwo}}</span>
							</template>
						</el-table-column>
						<el-table-column min-width="200px" label="最近3个月被查询次数">
							<template slot-scope="scope">
								<template v-if="scope.row.edit">
									<el-form :model="scope.row" :rules="rules" :id="'timeThree'+scope.$index" :ref="'form_timeThree_'+scope.$index" :show-message="false">
										<el-form-item prop="timeThree" class="td-form-item">
											<el-input class="edit-input" size="small" v-model="scope.row.timeThree"></el-input>
										</el-form-item>
									</el-form>
								</template>
								<span v-else>{{ scope.row.timeThree}}</span>
							</template>
						</el-table-column>
						<el-table-column min-width="200px" label="最近1个月被查询次数">
							<template slot-scope="scope">
								<template v-if="scope.row.edit">
									<el-form :model="scope.row" :rules="rules" :id="'timeFour'+scope.$index" :ref="'form_timeFour_'+scope.$index" :show-message="false">
										<el-form-item prop="timeFour" class="td-form-item">
											<el-input class="edit-input" size="small" v-model="scope.row.timeFour"></el-input>
										</el-form-item>
									</el-form>
								</template>
								<span v-else>{{ scope.row.timeFour}}</span>
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
			<el-card class="box-card">
				<div slot="header" class="clearfix">
					<div class="card-title">小结</div>
					<div class="card-right-wrap">
						<el-button class="save" type="primary" size="medium">保存</el-button>
					</div>
				</div>
				<div>

				</div>
			</el-card>
		</div>
	</div>
</template>

<script>
import tabelAddBtn from "@/components/table/table-add-btn.vue";
import tableOperation from "@/components/table/table-operation.vue";
export default {
  data: function() {
    return {
      listLoading: false,
      tableData: [
        {
          lable: "银行啥啥啥",
          timeOne: "4",
          timeTwo: "5",
          timeThree:"6",
          timeFour:"7",
          edit: false
        }
      ],
      tableData_columns: {
        lable: "",
        timeOne: "",
        timeTwo: "",
        timeThree:"",
        timeFour:"",
        edit: false
      }
    };
  },
  methods: {
    verify(row, index) {
      row.edit = false;
    },
  },
  components: {
    "v-tabelAddBtn": tabelAddBtn,
    "v-tableOperation": tableOperation
  }
};
</script>

<style lang="scss" scoped>
</style>