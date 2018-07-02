<template>
	<div class="gqjgfz">
		<el-tabs v-model="activeName" @tab-click="handleClick">
			<el-tab-pane label="股权结构" name="first">
				<div>
					<el-card class="box-card">
						<div slot="header" class="clearfix">
							<div class="card-right-wrap">
								<el-button class="save" type="primary" size="medium">保存</el-button>
							</div>
							<div class="card-title">股权结构（非上市公司）</div>
						</div>
						<div>
							<el-table :data="tableData" v-loading.body="listLoading" border fit highlight-current-row show-summary :summary-method="getSummaries" style="width: 100%">
								<!-- <el-table-column min-width="200px" :label="tableData_columns.m_beforeThing">
									<template slot-scope="scope">
										<el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_columns)[2]" v-if="scope.row.edit" size="small" v-model="scope.row.m_beforeThing"></el-input>
										<span v-else>{{ scope.row.name}}</span>
									</template>
								</el-table-column> -->

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
							<div class="card-title">股权结构（上市公司）</div>
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
										<v-tableOperation :scope="scope" :tableData="tableData_1" v-on:verify="verify1"></v-tableOperation>
									</template>
								</el-table-column>
							</el-table>
							<v-tabelAddBtn :tableData="tableData_1" :tableData_columns="tableData_1_columns"></v-tabelAddBtn>
						</div>
					</el-card>
				</div>
			</el-tab-pane>
			<el-tab-pane label="企业图谱" name="second">
				<div>
					<el-card class="box-card">
						<div slot="header" class="clearfix">
							<div class="card-right-wrap">
								<el-button class="save" type="primary" size="medium">上传图片</el-button>
								<el-button class="save" type="primary" size="medium">保存</el-button>
							</div>
							<div class="card-title">股权结构（非上市公司）</div>
						</div>
						<!-- 图片容器 -->
						<div class="img-preview">

						</div>
					</el-card>
				</div>
				<div>
					<el-card class="box-card">
						<div slot="header" class="clearfix">
							<div class="card-right-wrap">
								<el-button class="save" type="primary" size="medium">保存</el-button>
							</div>
							<div class="card-title">分支及下属企业情况</div>
						</div>
						<!-- 表格容器 -->
						<div>
							<el-table :data="tableData_2" v-loading.body="listLoading" border fit highlight-current-row style="width: 100%">
								<el-table-column min-width="300px" label="下属公司/分公司名称" prop="name">
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
								<el-table-column min-width="300px" label="所在地" prop="addr">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'addr'+scope.$index" :ref="'form_addr_'+scope.$index" :show-message="false">
												<el-form-item prop="addr" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.addr"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.addr}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="300px" label="注册资本（万元）" prop="regMoney">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'regMoney'+scope.$index" :ref="'form_regMoney_'+scope.$index" :show-message="false">
												<el-form-item prop="regMoney" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.regMoney"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.regMoney}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="300px" label="业务内容" prop="businessScope">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'businessScope'+scope.$index" :ref="'form_businessScope_'+scope.$index" :show-message="false">
												<el-form-item prop="businessScope" class="td-form-item">
													<el-input class="edit-input" size="small" v-model="scope.row.businessScope"></el-input>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.businessScope}}</span>
									</template>
								</el-table-column>
								<el-table-column min-width="100px" label="是否合并报表" prop="isMerge">
									<template slot-scope="scope">
										<template v-if="scope.row.edit">
											<el-form :model="scope.row" :rules="rules" :id="'isMerge'+scope.$index" :ref="'form_isMerge_'+scope.$index" :show-message="false">
												<el-form-item prop="isMerge" class="td-form-item">
													<el-select v-model="isMerge" placeholder="请选择">
														<el-option value="1" label="是"></el-option>
														<el-option value="0" label="否"></el-option>
													</el-select>
												</el-form-item>
											</el-form>
										</template>
										<span v-else>{{ scope.row.isMerge==null?"":(scope.row.isMerge?"是":"否")}}</span>
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
							<div class="card-title">关联企业</div>
						</div>
						<!-- 表格容器 -->
						<div>
							<el-table :data="tableData_3" v-loading.body="listLoading" border fit highlight-current-row show-summary :summary-method="getSummaries" style="width: 100%">
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
										<v-tableOperation :scope="scope" :tableData="tableData_3" v-on:verify="verify3"></v-tableOperation>
									</template>
								</el-table-column>
							</el-table>
							<v-tabelAddBtn :tableData="tableData_3" :tableData_columns="tableData_3_columns"></v-tabelAddBtn>
						</div>
					</el-card>
				</div>
			</el-tab-pane>
			<el-tab-pane label="组织架构" name="third">
				<div>
					<el-card class="box-card">
						<div slot="header" class="clearfix">
							<div class="card-right-wrap">
								<el-button class="save" type="primary" size="medium">上传图片</el-button>
								<el-button class="save" type="primary" size="medium">保存</el-button>
							</div>
							<div class="card-title">股权结构（非上市公司）</div>
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
import tableValidates from "@/utils/validateTable/tableValidates.js";
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
      tableData_2: [
        {
          name: "马冬梅串串",
          addr: "安徽省芜湖市",
          regMoney: 200,
          businessScope: "经营麻辣烫",
          isMerge: 0,
          edit: false
        }
      ],
      tableData_2_columns: {
        name: "",
        addr: "",
        regMoney: null,
        businessScope: "",
        isMerge: null,
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
  computed: {
    isMerge() {
      return this.tableData_2.isMerge ? "是" : "否";
    }
  },
  mounted() {
   
  },
  methods: {
    //点击标签页触发事件
    handleClick(tab, event) {
      //   console.log(tab, event);
    },
    
    //验证单元格数据
    verify(rowObj, rowIndex) {
      console.log(rowObj, rowIndex);
      tableValidates.validateByRow(rowObj, rowIndex, this.rules, this);
    },
    verify1(row, index) {
      row.edit = false;
    },
    verify2(row, index) {
      row.edit = false;
    },
    verify3(row, index) {
      row.edit = false;
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

.img-preview {
  height: 200px;
  margin: 20px;
  border: #ebebeb;
  background-color: #eef9ff;
}
</style>

