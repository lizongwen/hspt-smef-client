<template>
	<div>
		<div>
			<el-card class="box-card">
				<div slot="header" class="clearfix">
					<div class="card-right-wrap">
						<el-button class="save" type="primary" size="medium">保存</el-button>
					</div>
					<div class="card-title">环保信息</div>
				</div>
				<div>
					<el-table :data="tableData" v-loading.body="listLoading" border fit highlight-current-row style="width: 100%">
						<el-table-column min-width="300px" label="进度">
							<template slot-scope="scope">
								<template v-if="scope.row.edit">
									<el-form :model="scope.row" :rules="rules" :id="'progress'+scope.$index" :ref="'form_progress_'+scope.$index" :show-message="false">
										<el-form-item prop="progress" class="td-form-item">
											<el-input class="edit-input" size="small" v-model="scope.row.progress"></el-input>
										</el-form-item>
									</el-form>
								</template>
								<span v-else>{{scope.row.progress}}</span>
							</template>
						</el-table-column>
						<el-table-column min-width="300px" label="批文">
							<template slot-scope="scope">
								<template v-if="scope.row.edit">
									<el-form :model="scope.row" :rules="rules" :id="'approval'+scope.$index" :ref="'form_approval_'+scope.$index" :show-message="false">
										<el-form-item prop="approval" class="td-form-item">
											<el-input class="edit-input" size="small" v-model="scope.row.approval"></el-input>
										</el-form-item>
									</el-form>
								</template>
								<span v-else>{{ scope.row.approval}}</span>
							</template>
						</el-table-column>
						<el-table-column min-width="300px" label="批复机关">
							<template slot-scope="scope">
								<template v-if="scope.row.edit">
									<el-form :model="scope.row" :rules="rules" :id="'dept'+scope.$index" :ref="'form_dept_'+scope.$index" :show-message="false">
										<el-form-item prop="dept" class="td-form-item">
											<el-input class="edit-input" size="small" v-model="scope.row.dept"></el-input>
										</el-form-item>
									</el-form>
								</template>
								<span v-else>{{ scope.row.dept}}</span>
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
          progress: "竣工验收",
          approval: "繁环内检{2017}26号",
          dept: "繁昌县环比局",
          edit: false
        }
      ],
      tableData_columns: {
        progress: "",
        approval: "",
        dept: "",
        edit: false
      }
    };
  },
  methods: {
    verify(row, index) {
      row.edit = false;
    },
    addRow(tableIndex) {
      this[tableIndex].push(this[`${tableIndex}_columns`]);
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