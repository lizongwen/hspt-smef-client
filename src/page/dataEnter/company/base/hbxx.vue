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
						<el-table-column min-width="110px" :label="tableData_columns.zt">
							<template slot-scope="scope">
								<el-date-picker class="cellItem el-form-item" v-model="scope.row.zt" value-format="yyyy-MM-dd" :class="Object.keys(tableData_columns)[1]" v-if="scope.row.edit" type="date" placeholder="选择日期" style="width: 100%;" :clearable='false'></el-date-picker>
								<span v-else>{{scope.row.zt}}</span>
							</template>
						</el-table-column>
						<el-table-column min-width="110px" :label="tableData_columns.pw">
							<template slot-scope="scope">
								<el-date-picker class="cellItem el-form-item" v-model="scope.row.pw" value-format="yyyy-MM-dd" :class="Object.keys(tableData_columns)[2]" v-if="scope.row.edit" type="date" placeholder="选择日期" style="width: 100%;" :clearable='false'></el-date-picker>
								<span v-else>{{scope.row.pw}}</span>
							</template>
						</el-table-column>
						<el-table-column min-width="110px" :label="tableData_columns.pfjg">
							<template slot-scope="scope">
								<el-date-picker class="cellItem el-form-item" v-model="scope.row.pfjg" value-format="yyyy-MM-dd" :class="Object.keys(tableData_columns)[3]" v-if="scope.row.edit" type="date" placeholder="选择日期" style="width: 100%;" :clearable='false'></el-date-picker>
								<span v-else>{{scope.row.pfjg}}</span>
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
						<el-button @click="saveXj" type="primary" size="medium">保存</el-button>
					</div>
				</div>
				<div class="text-editor">
					<quill-editor :value="textEditorContent" :maxSize="10240" v-on:changeInput="changeInput"></quill-editor>
				</div>
			</el-card>
		</div>
	</div>
</template>

<script>
import tabelAddBtn from "@/components/table/table-add-btn.vue";
import tableOperation from "@/components/table/table-operation.vue";
import quillEditor from "@/components/form/quillEditor.vue";
export default {
  data: function() {
    return {
      listLoading: false,
      tableData: [],
      tableData_columns: {
        id: null,
        zt: "状态",
        pw: "批文",
        pfjg: "批复机关",
        edit: false
      },
      textEditorContent: ""
    };
  },
  mounted() {
    this.getHbxx();
    this.getTextEditorCon();
  },
  methods: {
    getHbxx: async function() {
      let params = {
        creditCode: sessionStorage.getItem("creditCode"),
        token: sessionStorage.getItem("token")
      };
      const res = await this.$http.post(
        "/hspt-web-api/data_entry/gsjbxx/hbxx/hbxx/list",
        params
      );
      if (res.data.resultCode == "0") {
        this.$nextTick(() => {
          this.tableData = res.data.resultData;
        });
      }
    },
    //获取富文本框内容
    getTextEditorCon: async function() {
      let params = {
        creditCode: sessionStorage.getItem("creditCode"),
        token: sessionStorage.getItem("token")
      };
      const res = await this.$http.post(
        "/hspt-web-api/data_entry/gsjbxx/hbxx/hbxxxj/list",
        params
	  );
      if (res.data.resultCode == "0") {
        this.textEditorContent = res.data.resultData;
      }
    },

    //修改富文本框内容
    changeInput(val) {
	  this.textEditorContent=val;
    },
    //保存小结
    saveXj() {
      console.log(this.textEditorContent);
    },
    verify(row, index) {
      row.edit = false;
    }
  },
  components: {
    "v-tabelAddBtn": tabelAddBtn,
    "v-tableOperation": tableOperation,
    "quill-editor": quillEditor
  }
};
</script>

<style lang="scss">
.text-editor .ql-editor {
  height: 300px;
}
</style>
