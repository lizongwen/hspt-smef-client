<template>
	<div class="gqjgfz">
		<el-tabs v-model="activeName" @tab-click="handleClick">
			<el-tab-pane label="股权结构" name="first">
				<div>
					<el-card class="box-card">
						<div slot="header" class="clearfix">
							<div class="card-title">股权结构（非上市公司）</div>
							<div class="card-right-wrap">
								<el-button class="save" type="primary" size="medium">保存</el-button>
							</div>
						</div>
						<div>
							<el-table :data="tableData" v-loading.body="listLoading" border fit highlight-current-row show-summary :summary-method="getSummaries" style="width: 100%">
								<el-table-column min-width="300px" label="股东姓名" prop="name">
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
								<el-table-column min-width="300px" label="出资比例" prop="ratio">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'ratio'+scope.$index" :ref="'form_ratio_'+scope.$index" :show-message="false">
												<el-form-item prop="ratio" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.ratio"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.ratio}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="300px" label="认缴出资（万元）" prop="subscribe">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'subscribe'+scope.$index" :ref="'form_subscribe_'+scope.$index" :show-message="false">
												<el-form-item prop="subscribe" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.subscribe"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.subscribe}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="300px" label="实缴出资（万元）" prop="paidIn">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'paidIn'+scope.$index" :ref="'form_paidIn_'+scope.$index" :show-message="false">
												<el-form-item prop="paidIn" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.paidIn"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.paidIn}}</span>
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
							<div class="card-title">股权结构（上市公司）</div>
							<div class="card-right-wrap">
								<el-button class="save" type="primary" size="medium">保存</el-button>
							</div>
						</div>
						<div>
							<el-table :data="tableData_1" v-loading.body="listLoading" border fit highlight-current-row show-summary :summary-method="getSummaries" style="width: 100%">
								<el-table-column min-width="300px" label="股东姓名" prop="name">
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
								<el-table-column min-width="300px" label="出资比例" prop="ratio">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'ratio'+scope.$index" :ref="'form_ratio_'+scope.$index" :show-message="false">
												<el-form-item prop="ratio" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.ratio"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.ratio}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="300px" label="认缴出资（万元）" prop="subscribe">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'subscribe'+scope.$index" :ref="'form_subscribe_'+scope.$index" :show-message="false">
												<el-form-item prop="subscribe" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.subscribe"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.subscribe}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="300px" label="实缴出资（万元）" prop="paidIn">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'paidIn'+scope.$index" :ref="'form_paidIn_'+scope.$index" :show-message="false">
												<el-form-item prop="paidIn" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.paidIn"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.paidIn}}</span>
									</template>
								</el-table-column>
								<el-table-column align="center" label="操作" width="240">
									<template slot-scope="scope">
										<v-tableOperation :scope="scope" :tableData="tableData_1" v-on:verify="verify"></v-tableOperation>
									</template>
								</el-table-column>
							</el-table>
							<v-tabelAddBtn v-on:addRow="addRow" tableIndex="tableData_1"></v-tabelAddBtn>
						</div>
					</el-card>
				</div>
			</el-tab-pane>
			<el-tab-pane label="企业图谱" name="second">
				<div>
					<el-card class="box-card">
						<div slot="header" class="clearfix">
							<div class="card-title">股权结构（非上市公司）</div>
							<div class="card-right-wrap">
								<el-button class="save" type="primary" size="medium">上传图片</el-button>
								<el-button class="save" type="primary" size="medium">保存</el-button>
							</div>
						</div>
						<!-- 图片容器 -->
						<div class="img-preview">

						</div>
					</el-card>
				</div>
				<div>
					<el-card class="box-card">
						<div slot="header" class="clearfix">
							<div class="card-title">分支及下属企业情况</div>
							<div class="card-right-wrap">
								<el-button class="save" type="primary" size="medium">保存</el-button>
							</div>
						</div>
						<!-- 表格容器 -->
						<div>
							<el-table :data="tableData_2" v-loading.body="listLoading" border fit highlight-current-row show-summary :summary-method="getSummaries" style="width: 100%">
								<el-table-column min-width="300px" label="股东姓名" prop="name">
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
								<el-table-column min-width="300px" label="出资比例" prop="ratio">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'ratio'+scope.$index" :ref="'form_ratio_'+scope.$index" :show-message="false">
												<el-form-item prop="ratio" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.ratio"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.ratio}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="300px" label="认缴出资（万元）" prop="subscribe">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'subscribe'+scope.$index" :ref="'form_subscribe_'+scope.$index" :show-message="false">
												<el-form-item prop="subscribe" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.subscribe"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.subscribe}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="300px" label="实缴出资（万元）" prop="paidIn">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'paidIn'+scope.$index" :ref="'form_paidIn_'+scope.$index" :show-message="false">
												<el-form-item prop="paidIn" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.paidIn"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.paidIn}}</span>
									</template>
								</el-table-column>
								<el-table-column align="center" label="操作" width="240">
									<template slot-scope="scope">
										<v-tableOperation :scope="scope" :tableData="tableData_2" v-on:verify="verify"></v-tableOperation>
									</template>
								</el-table-column>
							</el-table>
							<v-tabelAddBtn v-on:addRow="addRow" tableIndex="tableData_2"></v-tabelAddBtn>
						</div>
					</el-card>
				</div>
				<div>
					<el-card class="box-card">
						<div slot="header" class="clearfix">
							<div class="card-title">关联企业</div>
							<div class="card-right-wrap">
								<el-button class="save" type="primary" size="medium">保存</el-button>
							</div>
						</div>
						<!-- 表格容器 -->
						<div>

						</div>
					</el-card>
				</div>

			</el-tab-pane>
			<el-tab-pane label="组织架构" name="third">
				<div>
					<el-card class="box-card">
						<div slot="header" class="clearfix">
							<div class="card-title">股权结构（非上市公司）</div>
							<div class="card-right-wrap">
								<el-button class="save" type="primary" size="medium">上传图片</el-button>
								<el-button class="save" type="primary" size="medium">保存</el-button>
							</div>
						</div>
						<!-- 图片容器 -->
						<div class="img-preview">

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
      //验证规则
      rules: {
        name: [
          {
            required: true,
            message: "请选择年份",
            trigger: "null"
          }
        ],
        ratio: [
          {
            required: true,
            message: "请输入荣誉信息",
            trigger: "null"
          }
        ],
        subscribe: [
          {
            required: true,
            message: "请输入荣誉信息",
            trigger: "null"
          }
        ],
        paidIn: [
          {
            required: true,
            message: "请输入荣誉信息",
            trigger: "null"
          }
        ]
      },
      tableData: [
        {
          name: "name1",
          ratio: 1,
          subscribe: 5,
          paidIn: 9,
          edit: false
        },
        {
          name: "name2",
          ratio: 2,
          subscribe: 5,
          paidIn: 10,
          edit: false
        }
      ],
      tableData_columns: {
        name: "",
        ratio: null,
        subscribe: null,
        paidIn: null,
        edit: false
      },
      tableData_1: [
        {
          name: "name1",
          ratio: 1,
          subscribe: 5,
          paidIn: 9,
          edit: false
        },
        {
          name: "name2",
          ratio: 2,
          subscribe: 5,
          paidIn: 10,
          edit: false
        }
      ],
      tableData_1_columns: {
        name: "",
        ratio: null,
        subscribe: null,
        paidIn: null,
        edit: false
      },
      tableData_2: [],
      tableData_2_columns: {
        name: "",
        ratio: null,
        subscribe: null,
        paidIn: null,
        edit: false
      },
      tableData_3: [
        {
          name: "name1",
          ratio: 1,
          subscribe: 5,
          paidIn: 9,
          edit: false
        }
      ],
      tableData_3_columns: {
        name: "",
        ratio: null,
        subscribe: null,
        paidIn: null,
        edit: false
      }
    };
  },
  mounted() {
    // var obj = {
    //   a: 1,
    //   b: 2
    // };
    // var rs = Object.keys(obj);
    // var ttt = rs.map(item => {
    //   return {
    //     [item]: ""
    //   };
    // });
    /*{
		 a:"",
		 b:""
	 }*/
  },
  methods: {
    //点击标签页触发事件
    handleClick(tab, event) {
    //   console.log(tab, event);
    },
    //验证单元格数据
    verify(row, index) {
      var a = true,
        b = true,
        c = true,
        d = true;
      this.$refs[`form_name_${index}`].validate((res, obj) => {
        if (res) {
          //验证通过
          a = false;
        } else {
          //验证不通过
          console.log(obj.name[0].message);
        }
      });
      this.$refs[`form_ratio_${index}`].validate((res, obj) => {
        if (res) {
          //验证通过
          b = false;
        } else {
          //验证不通过
          console.log(obj.ratio[0].message);
        }
      });
      this.$refs[`form_subscribe_${index}`].validate((res, obj) => {
        if (res) {
          //验证通过
          c = false;
        } else {
          //验证不通过
          console.log(obj.subscribe[0].message);
        }
      });
      this.$refs[`form_paidIn_${index}`].validate((res, obj) => {
        if (res) {
          //验证通过
          d = false;
        } else {
          //验证不通过
          console.log(obj.paidIn[0].message);
        }
      });
      if (!a && !b && !c && !d) {
        row.edit = false;
      } else {
        //弹出错误消息汇总
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
.gqjgfz {
  background-color: #fff;
}
.card-title {
  float: left;
}
.card-right-wrap {
  float: right;
}

.img-preview {
  height: 200px;
  margin: 20px;
  border: #ebebeb;
  background-color: #eef9ff;
}
</style>

