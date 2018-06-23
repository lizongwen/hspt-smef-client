<template>
	<div>
		<el-card class="box-card">
			<div slot="header" class="clearfix">
				<div class="card-right-wrap">
					<el-button class="save" type="primary" size="medium">保存</el-button>
				</div>
				<div class="card-title">工商基本信息</div>
			</div>
			<!-- 表格容器 -->
			<div>
				<el-table :data="tableData" v-loading.body="listLoading" border fit highlight-current-row style="width: 100%">
					<el-table-column label="序号" type="index" width="50">
					</el-table-column>
					<el-table-column min-width="300px" label="变更日期">
						<template slot-scope="scope">
							<template v-if="scope.row.edit">
								<el-form :model="scope.row" :rules="rules" :id="'changeDate'+scope.$index" :ref="'form_changeDate_'+scope.$index" :show-message="false">
									<el-form-item prop="changeDate" class="td-form-item">
										<el-input class="edit-input" size="small" v-model="scope.row.changeDate"></el-input>
									</el-form-item>
								</el-form>
							</template>
							<span v-else>{{scope.row.changeDate}}</span>
						</template>
					</el-table-column>
					<el-table-column min-width="300px" label="变更事项">
						<template slot-scope="scope">
							<template v-if="scope.row.edit">
								<el-form :model="scope.row" :rules="rules" :id="'changeThing'+scope.$index" :ref="'form_changeThing_'+scope.$index" :show-message="false">
									<el-form-item prop="changeThing" class="td-form-item">
										<el-input class="edit-input" size="small" v-model="scope.row.changeThing"></el-input>
									</el-form-item>
								</el-form>
							</template>
							<span v-else>{{ scope.row.changeThing}}</span>
						</template>
					</el-table-column>
					<el-table-column min-width="300px" label="变更前">
						<template slot-scope="scope">
							<template v-if="scope.row.edit">
								<el-form :model="scope.row" :rules="rules" :id="'beforeThing'+scope.$index" :ref="'form_beforeThing_'+scope.$index" :show-message="false">
									<el-form-item prop="beforeThing" class="td-form-item">
										<el-input class="edit-input" size="small" v-model="scope.row.beforeThing"></el-input>
									</el-form-item>
								</el-form>
							</template>
							<span v-else>{{ scope.row.beforeThing}}</span>
						</template>
					</el-table-column>
					<el-table-column min-width="300px" label="变更后">
						<template slot-scope="scope">
							<template v-if="scope.row.edit">
								<el-form :model="scope.row" :rules="rules" :id="'afterThing'+scope.$index" :ref="'form_afterThing_'+scope.$index" :show-message="false">
									<el-form-item prop="afterThing" class="td-form-item">
										<el-input class="edit-input" size="small" v-model="scope.row.afterThing"></el-input>
									</el-form-item>
								</el-form>
							</template>
							<span v-else>{{ scope.row.afterThing}}</span>
						</template>
					</el-table-column>
					<el-table-column align="center" label="操作" width="240">
						<template slot-scope="scope">
							<v-tableOperation :scope="scope" :tableData="tableData" v-on:verify="verify"></v-tableOperation>
						</template>
					</el-table-column>
				</el-table>
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
          changeDate: "2018/01/01",
          changeThing: "变更事项1",
          beforeThing: "变更前1",
          afterThing: "变更后1",
          edit: false
        },
        {
          changeDate: "2018/01/02",
          changeThing: "变更事项2",
          beforeThing: "变更前2",
          afterThing: "变更后2",
          edit: false
        }
      ],
      //规则
      rules: {
        changeDate: [
          {
            required: true,
            message: "请选择年份",
            trigger: "null"
          }
        ],
        changeThing: [
          {
            required: true,
            message: "请输入荣誉信息",
            trigger: "null"
          }
        ],
        beforeThing: [
          {
            required: true,
            message: "请输入荣誉信息",
            trigger: "null"
          }
        ],
        afterThing: [
          {
            required: true,
            message: "请输入荣誉信息",
            trigger: "null"
          }
        ]
      }
    };
  },
  mounted() {},
  methods: {
    addData() {
      this.tableData.push({
        changeDate: "",
        changeThing: "",
        beforeThing: "",
        afterThing: "",
        edit: false
      });
    },
    verify(row, index) {
      var a = true,
        b = true,
        c = true,
        d = true;
      this.$refs[`form_changeDate_${index}`].validate((res, obj) => {
        if (res) {
          //验证通过
          a = false;
        } else {
          //验证不通过
          console.log(obj.changeDate[0].message);
        }
      });
      this.$refs[`form_changeThing_${index}`].validate((res, obj) => {
        if (res) {
          //验证通过
          b = false;
        } else {
          //验证不通过
          console.log(obj.changeThing[0].message);
        }
      });
      this.$refs[`form_beforeThing_${index}`].validate((res, obj) => {
        if (res) {
          //验证通过
          c = false;
        } else {
          //验证不通过
          console.log(obj.beforeThing[0].message);
        }
      });
      this.$refs[`form_afterThing_${index}`].validate((res, obj) => {
        if (res) {
          //验证通过
         d = false;
        } else {
          //验证不通过
          console.log(obj.afterThing[0].message);
        }
      });
      if (!a && !b && !c && !d) {
		  console.log(444)
        row.edit = false;
      } else {
        //弹出错误消息汇总
      }
    }
  },
  components: {
    "v-tabelAddBtn": tabelAddBtn,
    "v-tableOperation": tableOperation
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/commonStyle.scss";
.contentWrap {
  margin-top: 4px;
  padding: 43px 20px;
  background: $background-color-inside;
}
</style>
