<template>
	<div>

		<el-table :data="list" v-loading.body="listLoading" border fit highlight-current-row style="width: 100%">
			<!-- <el-table-column align="center" label="ID" width="80">
				<template slot-scope="scope">
					<span>{{scope.row.id}}</span>
				</template>
			</el-table-column>

			<el-table-column width="180px" align="center" label="Date">
				<template slot-scope="scope">
					<span>{{scope.row.timestamp}}</span>
				</template>
			</el-table-column>

			<el-table-column width="120px" align="center" label="Author">
				<template slot-scope="scope">
					<span>{{scope.row.author}}---{{scope.column.label}}</span>
				</template>
			</el-table-column>

			<el-table-column width="100px" label="Importance">
				<template slot-scope="scope">
					<svg-icon v-for="n in +scope.row.importance" icon-class="star" class="meta-item__icon" :key="n"></svg-icon>
				</template>
			</el-table-column>

			<el-table-column class-name="status-col" label="Status" width="110">
				<template slot-scope="scope">
					<el-tag :type="scope.row.status">{{scope.row.status}}</el-tag>
				</template>
			</el-table-column> -->
			<el-table-column min-width="300px" label="Title1">
				<template slot-scope="scope">
					<template v-if="scope.row.edit">
						<el-input class="edit-input" size="small" v-model="scope.row.title1"></el-input>
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

			<el-table-column align="center" label="Actions" width="120">
				<template slot-scope="scope">
					<el-button v-if="scope.row.edit" type="success" @click="confirmEdit(scope.row)" size="small" icon="el-icon-circle-check-outline">Ok</el-button>
					<el-button v-else type="primary" @click='edit(scope.row)' size="small" icon="el-icon-edit">Edit</el-button>
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
    }
  }
};
</script>

<style>
</style>
