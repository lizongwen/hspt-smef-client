<template>
	<div>
		<el-table :data="list" v-loading.body="listLoading" border fit highlight-current-row style="width: 100%">
			<el-table-column min-width="300px" label="Title1">
				<template slot-scope="scope">
					<template v-if="scope.row.edit">
						<el-form :model="scope.row" :rules="rules" :id="'Title1'+scope.$index" :ref="'form_Title1_'+scope.$index" :show-message="false">
							 <el-form-item prop="title1" class="td-form-item">
									<el-input class="edit-input" size="small" v-model="scope.row.title1"></el-input>
							 </el-form-item>
						</el-form>
						<!-- <el-button class='cancel-btn' size="small" icon="el-icon-refresh" type="warning" @click="cancelEdit(scope.row)">cancel</el-button> -->
					</template>
					<span v-else>{{ scope.row.title1 }}</span>
				</template>
			</el-table-column>
			<el-table-column min-width="300px" label="Title">
				<template slot-scope="scope">
					<template v-if="scope.row.edit">
						<el-input class="edit-input" size="small" v-model="scope.row.title2"></el-input>
						<!-- <el-button class='cancel-btn' size="small" icon="el-icon-refresh" type="warning" @click="cancelEdit(scope.row)">cancel</el-button> -->
					</template>
					<span v-else>{{ scope.row.title2}}</span>
				</template>
			</el-table-column>
			<el-table-column align="center" label="Actions" width="240">
				<template slot-scope="scope">
					<el-button v-if="scope.row.edit" type="success" @click="saveEdit(scope.row,scope.$index)" size="small" icon="el-icon-circle-check-outline">保存</el-button>
					<el-button v-else type="primary" @click='edit(scope.row)' size="small" icon="el-icon-edit">编辑</el-button>
					<el-button v-if="scope.row.edit" type="success" @click="confirmEdit(scope.row)" size="small" icon="el-icon-circle-check-outline">取消</el-button>
					<el-button v-else type="primary" @click='edit(scope.row)' size="small" icon="el-icon-edit">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
export default {
  name: "inlineEditTable",
  data() {
    return {
      editFlag: false,
      list: null,
      listLoading: false,
      listQuery: {
        page: 1,
        limit: 10
	  },
	  rules:{
		  title1:[{ required: true, message: '请输入名称', trigger: "null" }]
	  }
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    getList() {
      this.list = [
        {
          author: "Helen",
          comment_disabled: true,
          content: "我是测试数据我是测试数据",
          content_short: "我是测试数据",
          display_time: "1971-06-29 03:26:33",
          forecast: 86.35,
          id: 1,
          image_uri:
            "https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3",
          importance: 2,
          pageviews: 3318,
          platforms: ["a-platform"],
          reviewer: "Deborah",
          status: "published",
          timestamp: 1262822538684,
          originalTitle: "Cnwvnc Bce Uco Vlzssflg Gehvw Dcuaatdqw Halydnuqx",
          edit: false,
          title1: "第一条数据title1",
          title2: "Cnwvnc Bce Uco Vlzssflg Gehvw Dcuaatdqw Halydnuqx1",
          //   title1: { value: "title1", edit: false },
          //   title: {
          //     value: "Cnwvnc Bce Uco Vlzssflg Gehvw Dcuaatdqw Halydnuqx1",
          //     edit: false
          //   },
          type: "EU"
        },
        {
          author: "Helen",
          comment_disabled: true,
          content: "我是测试数据我是测试数据",
          content_short: "我是测试数据",
          display_time: "1971-06-29 03:26:33",
          forecast: 86.35,
          id: 2,
          image_uri:
            "https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3",
          importance: 2,
          pageviews: 3318,
          platforms: ["a-platform"],
          reviewer: "Deborah",
          status: "published",
          timestamp: 1262822538684,
          originalTitle: "Cnwvnc Bce Uco Vlzssflg Gehvw Dcuaatdqw Halydnuqx",
          edit: false,
          title1: "第二条数据title1",
          title2: "Cnwvnc Bce Uco Vlzssflg Gehvw Dcuaatdqw Halydnuqx2",
          //   title1: { value: "title2", edit: false },
          //   title: {
          //     value: "Cnwvnc Bce Uco Vlzssflg Gehvw Dcuaatdqw Halydnuqx2",
          //     edit: false
          //   },
          type: "EU"
        }
      ];
    },
    edit(row) {
      // for(let i in row){
      // 	if(row[i].hasOwnProperty("edit")){
      // 		console.log(row[i].edit)
      // 		row[i].edit=true;
      // 	}
      // }
      row.edit = !row.edit;
    },
    // cancelEdit(row,column,index) {
    // 	console.log(index)
    // 	row[i].edit
    //   //row.title = row.originalTitle;
    //  // row[].edit = false;
    //   this.$message({
    //     message: "The title has been restored to the original value",
    //     type: "warning"
    //   });
    // },
    confirmEdit(row) {
      row.edit = false;
      //   row.originalTitle = row.title;
      this.$message({
        message: "The title has been edited",
        type: "success"
      });
	},
	saveEdit(row,index){
		let form="form_Title1_"+index;
		this.$refs[form].validate( (result,object)=>{
			console.log(result,object)
			if(result){
				console.log(1)
			}else{
				this.$message({
					message: object.title1[0].message,
					type: "warning"
				});
			}
		})
	}
  }
};
</script>

<style>
.td-form-item{
	margin:0
}
</style>
