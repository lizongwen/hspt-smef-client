<template>
	<div>
		<div>
			<el-card class="box-card"  shadow='nevner'>
				<div slot="header" class="clearfix">
					<div class="card-right-wrap">
						<el-button class="save" type="primary" size="medium" @click="saveHbxx" :loading="loadingStatus">保存</el-button>
					</div>
					<div class="card-title">环保信息</div>
				</div>
				<div>
					<el-table :data="tableData" v-loading.body="listLoading" border fit highlight-current-row style="width: 100%">
						<el-table-column label="序号" type="index" width="50"></el-table-column>
					<el-table-column min-width="200px" :label="tableData_columns.zt">
						<template slot-scope="scope">
							<el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_columns)[1]" v-if="scope.row.edit" size="small" v-model="scope.row.zt"></el-input>
							<span v-else>{{ scope.row.zt}}</span>
						</template>
					</el-table-column>
					<el-table-column min-width="200px" :label="tableData_columns.pw">
						<template slot-scope="scope">
							<el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_columns)[2]" v-if="scope.row.edit" size="small" v-model="scope.row.pw"></el-input>
							<span v-else>{{ scope.row.pw}}</span>
						</template>
					</el-table-column>
            <el-table-column min-width="200px" :label="tableData_columns.pfjg">
              <template slot-scope="scope">
                <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_columns)[3]" v-if="scope.row.edit" size="small" v-model="scope.row.pfjg"></el-input>
                <span v-else>{{ scope.row.pfjg}}</span>
              </template>
            </el-table-column>
					<el-table-column align="center" label="操作" width="240">
						<template slot-scope="scope">
							<v-tableOperation :scope="scope" :tableData="tableData" v-on:verify="verify" v-on:acceptDelRow='acceptDelRow'></v-tableOperation>
						</template>
					</el-table-column>
					</el-table>
					<v-tabelAddBtn :tableData="tableData" :tableData_columns="tableData_columns"></v-tabelAddBtn>
				</div>
			</el-card>
		</div>
		<div>
			<el-card class="box-card"  shadow='nevner'>
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
import tableValidates from "@/utils/validateTable/tableValidates.js";
import tabelAddBtn from "@/components/table/table-add-btn.vue";
import tableOperation from "@/components/table/table-operation.vue";
import quillEditor from "@/components/form/quillEditor.vue";
export default {
  data: function() {
    return {
      listLoading: false,
      loadingStatus:false,
      tableData: [],
	  delRowData: [],
      addData: [],
      updateData: [],
      tableData_columns: {
        id: null,
        zt: "状态",
        pw: "批文",
        pfjg: "批复机关",
        edit: false
      },
      textEditorContent: "",
	  //规则
      rules: {}
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
        "/hspt-web-api/data_entry/gsjbxx/hbxx/list",
        params
      );
      if (res.data.resultCode == "0") {
        this.$nextTick(() => {
          this.tableData = res.data.resultData;
        });
      }
    },
	//接受删除的数据
    acceptDelRow(val) {
      this.delRowData.push(val);
    },
    //验证数据
    verify(rowObj, rowIndex) {
      var isValid = tableValidates.validateByRow(
        rowObj,
        rowIndex,
        this.rules,
        this
      );
      if (rowObj.id) {
        this.updateData.push(rowObj);
      }
    },
	//保存数据
    saveHbxx: async function() {
      this.loadingStatus=true;
      this.tableData.forEach((item, index) => {
        if (item.id == null) {
          if((item.zt != null && item.zt != "") || (item.pw != null && item.pw != "") || (item.pfjg != null && item.pfjg != "")){
            this.addData.push(item);
          }
        }
      });
      let params = {
        creditCode: sessionStorage.getItem("creditCode"),
        token: sessionStorage.getItem("token"),
        addData: JSON.stringify(this.addData),
        updateData: JSON.stringify(this.updateData),
        delData: JSON.stringify(this.delRowData)
      };
      const res = await this.$http.post(
        "/hspt-web-api/data_entry/gsjbxx/hbxx/save",
        params
      );
      if (res.data.resultCode == "0") {
        this.$message({ message: res.data.resultMsg, type: "success" });
        this.delRowData = [];
        this.updateData = [];
        this.addData = [];
        this.getHbxx();
      }else{
        this.$message({ message: res.data.resultMsg, type: "warning" });
      }
        this.loadingStatus=false;
    },

	////////////////////////////////////////////////////////////小结

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
    saveXj:async function() {
       let params = {
        creditCode: sessionStorage.getItem("creditCode"),
        token: sessionStorage.getItem("token"),
        hbxj: this.textEditorContent
      };
      const res = await this.$http.post(
        "/hspt-web-api/data_entry/gsjbxx/hbxx/hbxxxj/save",
        params
      );
	  if (res.data.resultCode == "0") {
        this.$message({ message: res.data.resultMsg, type: "success" });
      }else{
	   this.$message({ message: res.data.resultMsg, type: "warning" });
	  }
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
