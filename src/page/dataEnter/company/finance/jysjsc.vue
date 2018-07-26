<template>
	<div>
		<el-tabs v-model="activeName" @tab-click="handleClick">
			
			<el-tab-pane label="电费" name="first">
				<div>
					<el-card class="box-card" shadow='nevner'>
						
						<div slot="header" class="clearfix">
							<div class="card-right-wrap">
								<el-button type="default" size="medium">模板下载</el-button>
								<el-button type="default" size="medium">数据导入</el-button>
								<el-button type="primary" size="medium">保存</el-button>
							</div>
							<div class="card-title">电费统计表</div>
						</div>
						
						<!--表格容器-->
						<div>

						<el-table :data="tableData" style="width: 100%">
							<el-table-column :label="tableData_columns.nf" width="100">
								<template slot-scope="scope">
										<span>{{ scope.row.nf}}</span>
									</template>
							</el-table-column>
							<el-table-column :label="tableData_columns.yy" >
								<template slot-scope="scope">
										<span>{{ scope.row.yy}}</span>
									</template>
							</el-table-column>
							<el-table-column :label="tableData_columns.ey" >
								<template slot-scope="scope">
										<span>{{ scope.row.ey}}</span>
									</template>
							</el-table-column>
							<el-table-column :label="tableData_columns.say" >
								<template slot-scope="scope">
										<span>{{ scope.row.say}}</span>
									</template>
							</el-table-column>
							<el-table-column :label="tableData_columns.siy" >
								<template slot-scope="scope">
										<span>{{ scope.row.siy}}</span>
									</template>
							</el-table-column>
							<el-table-column :label="tableData_columns.wy" >
								<template slot-scope="scope">
										<span>{{ scope.row.wy}}</span>
									</template>
							</el-table-column>
							<el-table-column :label="tableData_columns.ly" >
								<template slot-scope="scope">
										<span>{{ scope.row.ly}}</span>
									</template>
							</el-table-column>
							<el-table-column :label="tableData_columns.qy" >
								<template slot-scope="scope">
										<span>{{ scope.row.qy}}</span>
									</template>
							</el-table-column>
							<el-table-column :label="tableData_columns.by" >
								<template slot-scope="scope">
										<span>{{ scope.row.by}}</span>
									</template>
							</el-table-column>
							<el-table-column :label="tableData_columns.jy" >
							<template slot-scope="scope">
										<span>{{ scope.row.jy}}</span>
									</template></el-table-column>
							<el-table-column :label="tableData_columns.shy" >
								<template slot-scope="scope">
										<span>{{ scope.row.shy}}</span>
									</template>
							</el-table-column>
							<el-table-column :label="tableData_columns.syy" >
							<template slot-scope="scope">
										<span>{{ scope.row.syy}}</span>
									</template></el-table-column>
							<el-table-column :label="tableData_columns.sry" >
								<template slot-scope="scope">
										<span>{{ scope.row.sry}}</span>
									</template>
							</el-table-column>
							<el-table-column :label="tableData_columns.zj" >
								<template slot-scope="scope">
										<span>{{ scope.row.zj}}</span>
									</template>
							</el-table-column>
						</el-table>
						
						</div>
						
					</el-card>
				</div>
			</el-tab-pane>
			
			<el-tab-pane label="销售收入" name="second">
				
				<div>
					<el-card class="box-card" shadow='nevner'>
						
						<div slot="header" class="clearfix">
							<div class="card-right-wrap">
								<el-button type="default" size="medium">模板下载</el-button>
								<el-button type="default" size="medium">数据导入</el-button>
								<el-button type="primary" size="medium">保存</el-button>
							</div>
							<div class="card-title">销售收入</div>
						</div>
						
						<!--表格容器-->
						<div>

						<el-table :data="tableData" style="width: 100%">
							<el-table-column :label="tableData_columns.nf" width="100">
								<template slot-scope="scope">
										<span>{{ scope.row.nf}}</span>
									</template>
							</el-table-column>
							<el-table-column :label="tableData_columns.yy" >
								<template slot-scope="scope">
										<span>{{ scope.row.yy}}</span>
									</template>
							</el-table-column>
							<el-table-column :label="tableData_columns.ey" >
								<template slot-scope="scope">
										<span>{{ scope.row.ey}}</span>
									</template>
							</el-table-column>
							<el-table-column :label="tableData_columns.say" >
								<template slot-scope="scope">
										<span>{{ scope.row.say}}</span>
									</template>
							</el-table-column>
							<el-table-column :label="tableData_columns.siy" >
								<template slot-scope="scope">
										<span>{{ scope.row.siy}}</span>
									</template>
							</el-table-column>
							<el-table-column :label="tableData_columns.wy" >
								<template slot-scope="scope">
										<span>{{ scope.row.wy}}</span>
									</template>
							</el-table-column>
							<el-table-column :label="tableData_columns.ly" >
								<template slot-scope="scope">
										<span>{{ scope.row.ly}}</span>
									</template>
							</el-table-column>
							<el-table-column :label="tableData_columns.qy" >
								<template slot-scope="scope">
										<span>{{ scope.row.qy}}</span>
									</template>
							</el-table-column>
							<el-table-column :label="tableData_columns.by" >
								<template slot-scope="scope">
										<span>{{ scope.row.by}}</span>
									</template>
							</el-table-column>
							<el-table-column :label="tableData_columns.jy" >
							<template slot-scope="scope">
										<span>{{ scope.row.jy}}</span>
									</template></el-table-column>
							<el-table-column :label="tableData_columns.shy" >
								<template slot-scope="scope">
										<span>{{ scope.row.shy}}</span>
									</template>
							</el-table-column>
							<el-table-column :label="tableData_columns.syy" >
							<template slot-scope="scope">
										<span>{{ scope.row.syy}}</span>
									</template></el-table-column>
							<el-table-column :label="tableData_columns.sry" >
								<template slot-scope="scope">
										<span>{{ scope.row.sry}}</span>
									</template>
							</el-table-column>
							<el-table-column :label="tableData_columns.zj" >
								<template slot-scope="scope">
										<span>{{ scope.row.zj}}</span>
									</template>
							</el-table-column>
						</el-table>
						
						</div>
						
					</el-card>
				</div>
				
			</el-tab-pane>
			
			<el-tab-pane label="产值" name="third">
				
				<div>
					<el-card class="box-card" shadow='nevner'>
						
						<div slot="header" class="clearfix">
							<div class="card-right-wrap">
								<el-button type="default" size="medium">模板下载</el-button>
								<el-button type="default" size="medium">数据导入</el-button>
								<el-button type="primary" size="medium">保存</el-button>
							</div>
							<div class="card-title">产值</div>
						</div>
						
						<!--表格容器-->
						<div>

						<el-table :data="tableData" style="width: 100%">
							<el-table-column :label="tableData_columns.nf" width="100">
								<template slot-scope="scope">
										<span>{{ scope.row.nf}}</span>
									</template>
							</el-table-column>
							<el-table-column :label="tableData_columns.yy" >
								<template slot-scope="scope">
										<span>{{ scope.row.yy}}</span>
									</template>
							</el-table-column>
							<el-table-column :label="tableData_columns.ey" >
								<template slot-scope="scope">
										<span>{{ scope.row.ey}}</span>
									</template>
							</el-table-column>
							<el-table-column :label="tableData_columns.say" >
								<template slot-scope="scope">
										<span>{{ scope.row.say}}</span>
									</template>
							</el-table-column>
							<el-table-column :label="tableData_columns.siy" >
								<template slot-scope="scope">
										<span>{{ scope.row.siy}}</span>
									</template>
							</el-table-column>
							<el-table-column :label="tableData_columns.wy" >
								<template slot-scope="scope">
										<span>{{ scope.row.wy}}</span>
									</template>
							</el-table-column>
							<el-table-column :label="tableData_columns.ly" >
								<template slot-scope="scope">
										<span>{{ scope.row.ly}}</span>
									</template>
							</el-table-column>
							<el-table-column :label="tableData_columns.qy" >
								<template slot-scope="scope">
										<span>{{ scope.row.qy}}</span>
									</template>
							</el-table-column>
							<el-table-column :label="tableData_columns.by" >
								<template slot-scope="scope">
										<span>{{ scope.row.by}}</span>
									</template>
							</el-table-column>
							<el-table-column :label="tableData_columns.jy" >
							<template slot-scope="scope">
										<span>{{ scope.row.jy}}</span>
									</template></el-table-column>
							<el-table-column :label="tableData_columns.shy" >
								<template slot-scope="scope">
										<span>{{ scope.row.shy}}</span>
									</template>
							</el-table-column>
							<el-table-column :label="tableData_columns.syy" >
							<template slot-scope="scope">
										<span>{{ scope.row.syy}}</span>
									</template></el-table-column>
							<el-table-column :label="tableData_columns.sry" >
								<template slot-scope="scope">
										<span>{{ scope.row.sry}}</span>
									</template>
							</el-table-column>
							<el-table-column :label="tableData_columns.zj" >
								<template slot-scope="scope">
										<span>{{ scope.row.zj}}</span>
									</template>
							</el-table-column>
						</el-table>
						
						</div>
						
					</el-card>
				</div>
				
			</el-tab-pane>
			
			<el-tab-pane label="工资" name="four">
				
				<div>
					<el-card class="box-card" shadow='nevner'>
						
						<div slot="header" class="clearfix">
							<div class="card-right-wrap">
								<el-button type="default" size="medium">模板下载</el-button>
								<el-button type="default" size="medium">数据导入</el-button>
								<el-button type="primary" size="medium">保存</el-button>
							</div>
							<div class="card-title">工资</div>
						</div>
						
						<!--表格容器-->
						<div>

						<el-table :data="tableData" style="width: 100%">
							<el-table-column :label="tableData_columns.nf" width="100">
								<template slot-scope="scope">
										<span>{{ scope.row.nf}}</span>
									</template>
							</el-table-column>
							<el-table-column :label="tableData_columns.yy" >
								<template slot-scope="scope">
										<span>{{ scope.row.yy}}</span>
									</template>
							</el-table-column>
							<el-table-column :label="tableData_columns.ey" >
								<template slot-scope="scope">
										<span>{{ scope.row.ey}}</span>
									</template>
							</el-table-column>
							<el-table-column :label="tableData_columns.say" >
								<template slot-scope="scope">
										<span>{{ scope.row.say}}</span>
									</template>
							</el-table-column>
							<el-table-column :label="tableData_columns.siy" >
								<template slot-scope="scope">
										<span>{{ scope.row.siy}}</span>
									</template>
							</el-table-column>
							<el-table-column :label="tableData_columns.wy" >
								<template slot-scope="scope">
										<span>{{ scope.row.wy}}</span>
									</template>
							</el-table-column>
							<el-table-column :label="tableData_columns.ly" >
								<template slot-scope="scope">
										<span>{{ scope.row.ly}}</span>
									</template>
							</el-table-column>
							<el-table-column :label="tableData_columns.qy" >
								<template slot-scope="scope">
										<span>{{ scope.row.qy}}</span>
									</template>
							</el-table-column>
							<el-table-column :label="tableData_columns.by" >
								<template slot-scope="scope">
										<span>{{ scope.row.by}}</span>
									</template>
							</el-table-column>
							<el-table-column :label="tableData_columns.jy" >
							<template slot-scope="scope">
										<span>{{ scope.row.jy}}</span>
									</template></el-table-column>
							<el-table-column :label="tableData_columns.shy" >
								<template slot-scope="scope">
										<span>{{ scope.row.shy}}</span>
									</template>
							</el-table-column>
							<el-table-column :label="tableData_columns.syy" >
							<template slot-scope="scope">
										<span>{{ scope.row.syy}}</span>
									</template></el-table-column>
							<el-table-column :label="tableData_columns.sry" >
								<template slot-scope="scope">
										<span>{{ scope.row.sry}}</span>
									</template>
							</el-table-column>
							<el-table-column :label="tableData_columns.zj" >
								<template slot-scope="scope">
										<span>{{ scope.row.zj}}</span>
									</template>
							</el-table-column>
						</el-table>
						
						</div>
						
					</el-card>
				</div>
				
			</el-tab-pane>
			
			<el-tab-pane label="增值税纳税申报额" name="five">
				
				<div>
					<el-card class="box-card" shadow='nevner'>
						
						<div slot="header" class="clearfix">
							<div class="card-right-wrap">
								<el-button type="default" size="medium">模板下载</el-button>
								<el-button type="default" size="medium">数据导入</el-button>
								<el-button type="primary" size="medium">保存</el-button>
							</div>
							<div class="card-title">增值税纳税申报额</div>
						</div>
						
						<!--表格容器-->
						<div>

						<el-table :data="tableData" style="width: 100%">
							<el-table-column :label="tableData_columns.nf" width="100">
								<template slot-scope="scope">
										<span>{{ scope.row.nf}}</span>
									</template>
							</el-table-column>
							<el-table-column :label="tableData_columns.yy" >
								<template slot-scope="scope">
										<span>{{ scope.row.yy}}</span>
									</template>
							</el-table-column>
							<el-table-column :label="tableData_columns.ey" >
								<template slot-scope="scope">
										<span>{{ scope.row.ey}}</span>
									</template>
							</el-table-column>
							<el-table-column :label="tableData_columns.say" >
								<template slot-scope="scope">
										<span>{{ scope.row.say}}</span>
									</template>
							</el-table-column>
							<el-table-column :label="tableData_columns.siy" >
								<template slot-scope="scope">
										<span>{{ scope.row.siy}}</span>
									</template>
							</el-table-column>
							<el-table-column :label="tableData_columns.wy" >
								<template slot-scope="scope">
										<span>{{ scope.row.wy}}</span>
									</template>
							</el-table-column>
							<el-table-column :label="tableData_columns.ly" >
								<template slot-scope="scope">
										<span>{{ scope.row.ly}}</span>
									</template>
							</el-table-column>
							<el-table-column :label="tableData_columns.qy" >
								<template slot-scope="scope">
										<span>{{ scope.row.qy}}</span>
									</template>
							</el-table-column>
							<el-table-column :label="tableData_columns.by" >
								<template slot-scope="scope">
										<span>{{ scope.row.by}}</span>
									</template>
							</el-table-column>
							<el-table-column :label="tableData_columns.jy" >
							<template slot-scope="scope">
										<span>{{ scope.row.jy}}</span>
									</template></el-table-column>
							<el-table-column :label="tableData_columns.shy" >
								<template slot-scope="scope">
										<span>{{ scope.row.shy}}</span>
									</template>
							</el-table-column>
							<el-table-column :label="tableData_columns.syy" >
							<template slot-scope="scope">
										<span>{{ scope.row.syy}}</span>
									</template></el-table-column>
							<el-table-column :label="tableData_columns.sry" >
								<template slot-scope="scope">
										<span>{{ scope.row.sry}}</span>
									</template>
							</el-table-column>
							<el-table-column :label="tableData_columns.zj" >
								<template slot-scope="scope">
										<span>{{ scope.row.zj}}</span>
									</template>
							</el-table-column>
						</el-table>
						
						</div>
						
					</el-card>
				</div>
				
			</el-tab-pane>
			
		</el-tabs>
	</div>
</template>

<script>
	export default {
data(){
	return{
		activeName: "first",
		 tableData: [],
      deleteData: [],
      addData: [],
      updateData: [],
      tableData_columns: {
        nf:'年份',
			yy:'1月',
			ey:'2月',
			say:'3月',
			siy:'4月',
			wy:'5月',
			ly:'6月',
			qy:'7月',
			by:'8月',
			jy:'9月',
			shy:'10月',
			syy:'11月',
			sry:'12月',
			zj:'总计'
      }
	}
},
  mounted() {
  this.getDf();
  },
methods: {
	 //点击标签页触发事件
      handleClick(tab, event) {
//           console.log(tab, event);
      },
      
      //得到电费
      getDf:async function() {
      	let params = {
        creditCode: sessionStorage.getItem("creditCode"),
        token: sessionStorage.getItem("token")
      };
      const res = await this.$http.post(
        "/hspt-web-api/data_entry/cwzk/jyxgsjfx/df/list",
        params
      );
      console.log(res.data.resultData)
      if (res.data.resultCode == "0") {
         this.tableData=res.data.resultData.data.rows
      }
      },
      
}

}
</script>

<style lang="scss">
  
  $text-align: center;
  $background: #F4F3F3;
  $color: black;
.el-table th {
   
    text-align: $text-align;
    background: $background;
    color: $color;
}
  $text-align: center;
  $color: black;
.el-table td {
    text-align: $text-align;
    color: $color;
}
</style>