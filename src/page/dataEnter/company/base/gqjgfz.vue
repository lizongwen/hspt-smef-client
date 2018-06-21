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
							<v-table is-horizontal-resize style="width:100%" :columns="columns" :table-data="tableData" :show-vertical-border="false" row-hover-color="#eee" row-click-color="#edf7ff" @on-custom-comp="customCompFunc" :cell-edit-done="cellEditDone"></v-table>
							<v-tabelAddBtn @addEvent="addData"></v-tabelAddBtn>
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
							<v-table is-horizontal-resize style="width:100%" :columns="columns" :table-data="tableData" :show-vertical-border="false" row-hover-color="#eee" row-click-color="#edf7ff" @on-custom-comp="customCompFunc" :cell-edit-done="cellEditDone"></v-table>
							<v-tabelAddBtn @addEvent="addData"></v-tabelAddBtn>
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
export default {
  data() {
    return {
      activeName: "first",
      tableData: [
        {
          modifiedDate: "2018/06/08",
          modifiedEvent: "经营范围变更",
          beforeModify: "-",
          afterModify: "-"
        },
        {
          modifiedDate: "2018/06/08",
          modifiedEvent: "经营范围变更",
          beforeModify: "-",
          afterModify: "-"
        },
        {
          modifiedDate: "2018/06/08",
          modifiedEvent: "经营范围变更",
          beforeModify: "-",
          afterModify: "-"
        },
        {
          modifiedDate: "2018/06/08",
          modifiedEvent: "经营范围变更",
          beforeModify: "-",
          afterModify: "-"
        },
        {
          modifiedDate: "2018/06/08",
          modifiedEvent: "经营范围变更",
          beforeModify: "-",
          afterModify: "-"
        }
      ],
      columns: [
        {
          field: "custome",
          title: "序号",
          width: 50,
          titleAlign: "center",
          columnAlign: "center",
          formatter: function(rowData, rowIndex, pagingIndex, field) {
            return rowIndex + 1;
          },
          isFrozen: true
        },
        {
          field: "modifiedDate",
          title: "变更日期",
          width: 100,
          isEdit: true,
          titleAlign: "center",
          columnAlign: "center"
        },
        {
          field: "modifiedEvent",
          title: "变更事项",
          width: 100,
          isEdit: true,
          titleAlign: "center",
          columnAlign: "center"
        },
        {
          field: "beforeModify",
          title: "变更前",
          width: 240,
          isEdit: true,
          titleAlign: "center",
          columnAlign: "center"
        },
        {
          field: "afterModify",
          title: "变更后",
          width: 200,
          isEdit: true,
          titleAlign: "center",
          columnAlign: "center",
          isResize: true
        },
        {
          field: "custome-adv",
          title: "操作",
          width: 200,
          titleAlign: "center",
          columnAlign: "center",
          componentName: "v-table-operation",
          isResize: true
        }
      ]
    };
  },
  methods: {
    //点击标签页触发事件
    handleClick(tab, event) {
      console.log(tab, event);
	},
	
	/*
	* 表格相关方法
	*/
    customCompFunc(params) {
      console.log(params);

      if (params.type === "delete") {
        // do delete operation

        this.$delete(this.tableData, params.index);
      } else if (params.type === "edit") {
        // do edit operation

        alert(`行号：${params.index} 姓名：${params.rowData["name"]}`);
      }
    },
    cellEditDone(newValue, oldValue, rowIndex, rowData, field) {
      this.tableData[rowIndex][field] = newValue;
      // 接下来处理你的业务逻辑，数据持久化等...
    },
    addData() {
      this.tableData.push({ name: "", tel: "", hobby: "", address: "" });
    }
  },
  components: {
    "v-tabelAddBtn": tabelAddBtn
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

.img-preview{
	height:200px;
	margin:20px;
	border:#ebebeb;
	background-color: #EEF9FF;
}
</style>

