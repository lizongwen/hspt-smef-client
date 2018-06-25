<template>
	<div>
		<el-card class="box-card">
			<div slot="header" class="clearfix">
				<div class="card-right-wrap">
					<el-button type="default" size="medium">获取数据</el-button>
					<el-button type="primary" size="medium">保存</el-button>
				</div>
				<div class="card-title">招投标信息</div>
			</div>
			<!-- 表格容器 -->
			<div>
				<el-table :data="tableData" v-loading.body="listLoading" border fit highlight-current-row style="width: 100%">
					<el-table-column label="序号" type="index" width="50"></el-table-column>
					<el-table-column min-width="300px" label="项目名称">
						<template slot-scope="scope">
							<template v-if="scope.row.edit">
								<el-form :model="scope.row" :rules="rules" :id="'projName'+scope.$index" :ref="'form_projName_'+scope.$index" :show-message="false">
									<el-form-item prop="projName" class="td-form-item">
										<el-input class="edit-input" size="small" v-model="scope.row.projName"></el-input>
									</el-form-item>
								</el-form>
							</template>
							<span v-else>{{scope.row.projName}}</span>
						</template>
					</el-table-column>
					<el-table-column min-width="300px" label="类型">
						<template slot-scope="scope">
							<template v-if="scope.row.edit">
								<el-form :model="scope.row" :rules="rules" :id="'projType'+scope.$index" :ref="'form_projType_'+scope.$index" :show-message="false">
									<el-form-item prop="projType" class="td-form-item">
										<el-input class="edit-input" size="small" v-model="scope.row.projType"></el-input>
									</el-form-item>
								</el-form>
							</template>
							<span v-else>{{ scope.row.projType}}</span>
						</template>
					</el-table-column>
					<el-table-column min-width="300px" label="发布时间">
						<template slot-scope="scope">
							<template v-if="scope.row.edit">
								<el-form :model="scope.row" :rules="rules" :id="'publicDate'+scope.$index" :ref="'form_publicDate_'+scope.$index" :show-message="false">
									<el-form-item prop="publicDate" class="td-form-item">
										<el-input class="edit-input" size="small" v-model="scope.row.publicDate"></el-input>
									</el-form-item>
								</el-form>
							</template>
							<span v-else>{{ scope.row.publicDate}}</span>
						</template>
					</el-table-column>
					<el-table-column align="center" label="操作" width="240">
						<template slot-scope="scope">
							<v-tableOperation :scope="scope" :tableData="tableData" v-on:verify="verify"></v-tableOperation>
						</template>
					</el-table-column>
				</el-table>
				<!--<v-tabelAddBtn v-on:addRow="addRow" tableIndex="tableData"></v-tabelAddBtn>-->
        <v-tabelAddBtn :tableData="tableData" :tableData_columns="tableData_columns"></v-tabelAddBtn>
			</div>
		</el-card>
	</div>
</template>

<script>
import tabelAddBtn from "@/components/table/table-add-btn.vue";
import tableOperation from "@/components/table/table-operation.vue";
export default {
  data() {
    return {
      listLoading: false,
      tableData: [
        {
          projName: "项目一",
          projType: "变更事项1",
          publicDate: "变更前1",
          afterThing: "变更后1",
          edit: false
        },
        {
          projName: "项目二",
          projType: "变更事项2",
          publicDate: "变更前2",
          afterThing: "变更后2",
          edit: false
        }
      ],
      tableData_columns: {
        projName: "",
        projType: "",
        publicDate: "",
        afterThing: "",
        edit: false
      },
      //规则
      rules: {
        projName: [
          {
            required: true,
            message: "请选择年份",
            trigger: "null"
          }
        ],
        projType: [
          {
            required: true,
            message: "请输入荣誉信息",
            trigger: "null"
          }
        ],
        publicDate: [
          {
            required: true,
            message: "请输入荣誉信息",
            trigger: "null"
          }
        ]
      }
    };
  },
  computed:{},
  mounted() {},
  methods: {
    verify(row, index) {
        row.edit = false;
    }
//    ,
//    addRow(tableIndex) {
//      this[tableIndex].push(this[`${tableIndex}_columns`]);
//    }
  },
  components: {
    "v-tabelAddBtn": tabelAddBtn,
    "v-tableOperation": tableOperation
  }
};
</script>

<style lang="scss" scoped>

</style>
