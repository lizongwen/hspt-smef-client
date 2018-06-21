<template>
	<div>
		 <div>
			<el-card class="box-card">
				<div slot="header" class="clearfix">
					<div class="card-title">环保信息</div>
					<div class="card-right-wrap">
						<el-button class="save" type="primary" size="medium">保存</el-button>
					</div>
				</div>
				<div class="contentWrap">
					<v-table is-horizontal-resize style="width:100%" :columns="columns" :table-data="tableData" :show-vertical-border="false" row-hover-color="#eee" row-click-color="#edf7ff" @on-custom-comp="customCompFunc" :cell-edit-done="cellEditDone"></v-table>
					<v-tabelAddBtn @addEvent="addData"></v-tabelAddBtn>
				</div>
				
			</el-card>
		</div>
        <div>
			<el-card class="box-card">
				<div slot="header" class="clearfix">
					<div class="card-title">小结</div>
					<div class="card-right-wrap">
						<el-button class="save" type="primary" size="medium">保存</el-button>
					</div>
				</div>
				<div class="summary-content">
				</div>
			</el-card>
		</div>
	</div>
</template>

<script>
	import getAndSaveData from '@/components/dataEnter/getAndSaveData.vue';
	import tabelAddBtn from '@/components/table/table-add-btn.vue';
	//  import tableOperation from '@/components/table/table-operation.vue';
	export default {
		components: {
			'v-getAndSaveData': getAndSaveData,
			'v-tabelAddBtn': tabelAddBtn
		},
		data: function() {
			return {
				tableData: [{
						"state": "竣工验收",
						"approval": "繁环内验[2017]26号",
						"office": "繁昌县环境保护局"
					},
					{
						"state": "竣工验收",
						"approval": "繁环内验[2017]26号",
						"office": "繁昌县环境保护局"
					},
					{
						"state": "竣工验收",
						"approval": "繁环内验[2017]26号",
						"office": "繁昌县环境保护局"
					},
					{
						"state": "竣工验收",
						"approval": "繁环内验[2017]26号",
						"office": "繁昌县环境保护局"
					},
					{
						"state": "竣工验收",
						"approval": "繁环内验[2017]26号",
						"office": "繁昌县环境保护局"
					},
					{
						"state": "竣工验收",
						"approval": "繁环内验[2017]26号",
						"office": "繁昌县环境保护局"
					},
					{
						"state": "竣工验收",
						"approval": "繁环内验[2017]26号",
						"office": "繁昌县环境保护局"
					},
					{
						"state": "竣工验收",
						"approval": "繁环内验[2017]26号",
						"office": "繁昌县环境保护局"
					}
				],
				columns: [
					//        {
					//          field: 'custome', title: '序号', width: 50, titleAlign: 'center', columnAlign: 'center',
					//          formatter: function (rowData, rowIndex, pagingIndex, field) {
					//            return (rowIndex + 1)
					//          }, isFrozen: true
					//        },
					{
						field: 'state',
						title: '状态',
						width: 300,
						isEdit: true,
						titleAlign: 'center',
						columnAlign: 'center'
					},
					{
						field: 'approval',
						title: '批文',
						width: 400,
						isEdit: true,
						titleAlign: 'center',
						columnAlign: 'center'
					},
					{
						field: 'office',
						title: '批复机关',
						width: 400,
						isEdit: true,
						titleAlign: 'center',
						columnAlign: 'center'
					},
					{
						field: 'custome-adv',
						title: '操作',
						width: 200,
						titleAlign: 'center',
						columnAlign: 'center',
						componentName: 'v-table-operation',
						isResize: true
					}
				]
			}
		},
		methods: {
			customCompFunc(params) {
				console.log(params);

				if(params.type === 'delete') { // do delete operation

					this.$delete(this.tableData, params.index);

				} else if(params.type === 'edit') { // do edit operation
					//改变该行背景色，且让该行可编辑文本框呈现可编辑状态
					this.clickIndex = params.index;
					console.log('点击编辑:', this.clickIndex)
					//alert(`行号：${params.index} 姓名：${params.rowData['name']}`)
				}
			},
			columnCellClass(rowIndex, columnName, rowData) {
				if(rowIndex == this.clickIndex) {
					return 'column-cell-class-name-test';
				}
			},
			cellEditDone(newValue, oldValue, rowIndex, rowData, field) {
				this.tableData[rowIndex][field] = newValue;
				// 接下来处理你的业务逻辑，数据持久化等...
			},
			addData() {
				this.$store.commit('setHistoryNewFlag', {
					newFlag: true
				});
				this.tableData.push({
					"name": "",
					"tel": "",
					"hobby": "",
					"address": ""
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.gqjgfz {
		background-color: #fff;
	}
	
	.el-tabs__header {
		margin: 0;
		padding: 18px 20px;
	}
	
	.card-title {
		margin-top: 8px;
		float: left;
	}
	
	.card-right-wrap {
		float: right;
	}
	/*.hr {
		margin-top: 38px;
		border: 1px solid #EBEBEB;
	}*/
	.el-card__header{
		border-bottom: none !important;
	}
	.summary-content {
		margin: 0 15px;
		height: 150px;
		border: 1px solid #CCCCCC;
	}
</style>