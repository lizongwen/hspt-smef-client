<template>
	<div>
			<el-tabs v-model="activeName" @tab-click="handleClick">
				
				<el-tab-pane label="资产负债表同期数据对比" name="first">
					
					<div>
					<el-card class="box-card" shadow='nevner'>
						<div slot="header" class="clearfix">
							<div class="card-right-wrap">
								<el-button type="default" size="medium">上传数据</el-button>
							</div>
							<div class="card-title">资产负债表</div>
						</div>
						<!--<div slot="header" class="clearfix">
							<div class="card-right-wrap">
								<el-button type="default" size="medium">模板下载</el-button>
								<el-button type="default" size="medium">数据导入</el-button>
								<el-button @click="saveXj" type="primary" size="medium">保存</el-button>
							</div>
							<div class="card-title">选择时间：
							<el-date-picker v-model="value4" type="month" placeholder="选择月"></el-date-picker>
							</div>
						</div>-->
						
				<div>
					<table lay-skin="line">
						<colgroup>
                            <col width="250">
                        </colgroup>
						<tr>
							<th>项目</th>
							<th>2015年</th>
							<th>变化</th>
							<th>2016年</th>
							<th>变化</th>
							<th>2017年</th>
						</tr>
						</table>
						<table lay-skin="line">
						<tr><th colspan='6'>资产总计</th></tr>
						<tr><td style="color:#3DA3FF ;">1、流动资产总计</td></tr>
						<tr><td>货币资金</td></tr>
						<tr><td>应收票据</td></tr>
						<tr><td>应收票据</td></tr>
						<tr><td>应收账款</td></tr>
						<tr><td>预付账款</td></tr>
						<tr><td>其他应收账款</td></tr>
						<tr><td>存货</td></tr>
						<tr><td>其他流动资产</td></tr>
						<tr><td style="color:#3DA3FF ;">2、非流动资产合计</td></tr>
						<tr><td>长期应收款</td></tr>
						<tr><td>长期股权投资</td></tr>
						<tr><td>固定资产</td></tr>
						<tr><td>在建工程</td></tr>
						<tr><td>固定资产清理</td></tr>
						<tr><td>无形资产</td></tr>
						<tr><td>递延所得税资产</td></tr>
						<tr><td>其他非流动资产</td></tr>
						</table>
				<table lay-skin="line" style="margin-top: 20px;">
						<tr><th colspan='6'>负债合计</th></tr>
						<tr><td style="color:#3DA3FF ;">1、流动负债合计</td></tr>
						<tr><td>短期借款</td></tr>
						<tr><td>应付票据</td></tr>
						<tr><td>应收账款</td></tr>
						<tr><td>预售款项</td></tr>
						<tr><td>应付职工薪酬</td></tr>
						<tr><td>应付利息</td></tr>
						<tr><td>其他应付款</td></tr>
						<tr><td>其他流动负债</td></tr>
						<tr><td style="color:#3DA3FF ;">2、非流动负债合计</td></tr>
						<tr><td>长期应付款</td></tr>
						<tr><td>专项应收款</td></tr>
						<tr><td>预计负债</td></tr>
						<tr><td>其他非流动负债</td></tr>
						</table>
						<table lay-skin="line" style="margin-top: 20px;">
							<tr><th colspan='6'>所有者权益（或股东权益）合计</th></tr>
							<tr><td style="color:#3DA3FF ;">1、实缴资本（或股东）</td></tr>
							<tr><td style="color:#3DA3FF ;">2、资本公积</td></tr>
							<tr><td style="color:#3DA3FF ;">3、专项储备</td></tr>
							<tr><td style="color:#3DA3FF ;">4、盈余公积</td></tr>
							<tr><td style="color:#3DA3FF ;">5、未分配利益</td></tr>
					</table>
					
					<div slot="header" class="clearfix">
							<div class="card-right-wrap">
								<!--<el-button type="default" size="medium">上传数据</el-button>-->
								<el-button type="primary" size="medium" >保存</el-button>
							</div>
							<div class="card-title">小结</div>
							
						</div>
						<div class="text-editor">
					<quill-editor :value="textEditorContent" :maxSize="10240"></quill-editor>
				</div>
					
				</div>
						
					</el-card>
				</div>
					
				</el-tab-pane>
				
				<el-tab-pane label="利润表同期数据对比" name="second">
				
				<div>
					<el-card class="box-card" shadow='nevner'>
						<div slot="header" class="clearfix">
							<div class="card-right-wrap">
								<el-button type="default" size="medium">数据导入</el-button>
							</div>
							<div class="card-title">利润表</div>
						</div>
						<!--<div slot="header" class="clearfix">
							<div class="card-right-wrap">
								<el-button type="default" size="medium">模板下载</el-button>
								<el-button type="default" size="medium">数据导入</el-button>
								<el-button @click="saveXj" type="primary" size="medium">保存</el-button>
							</div>
							<div class="card-title">选择时间：
							<el-date-picker v-model="value4" type="month" placeholder="选择月"></el-date-picker>
							</div>
						</div>-->
						
				<div>
					<table lay-skin="line">
						<colgroup>
                            <col width="250">
                        </colgroup>
						<tr>
							<th>项目</th>
							<th>2015年12月</th>
							<th>变化</th>
							<th>2016年12月</th>
							<th>变化</th>
							<th>2017年12月</th>
						</tr>
						<tr><td colspan='6'>资产总计</td></tr>
						<tr><td style="color:#3DA3FF ;" colspan='6'>1、流动资产总计</td></tr>
						<tr><td colspan='6'><h4>减：营业成本</h4></td></tr>
					    <tr><td colspan='6'>货币资金</td></tr>
					    <tr><td colspan='6'>货币资金</td></tr>
					    <tr><td colspan='6'>货币资金</td></tr>
					    <tr><td colspan='6'>货币资金</td></tr>
					    <tr><td colspan='6'><h4>加：投资收益</h4></td></tr>
						<tr><td style="color:#3DA3FF ;" colspan='6'>2、营业利润</td></tr>
						<tr><td colspan='6'><h4>减：营业外支出</h4></td></tr>
						<tr><td colspan='6'><h4>加：营业外收入</h4></td></tr>
						<tr><td style="color:#3DA3FF ;" colspan='6'>3、利润总额</td></tr>
						<tr><td colspan='6'><h4>减：所得税费用</h4></td></tr>
						<tr><td style="color:#3DA3FF ;" colspan='6'>4、净利润</td></tr>
						</table>
				
					
					
					<div slot="header" class="clearfix">
							<div class="card-right-wrap">
								<!--<el-button type="default" size="medium">上传数据</el-button>-->
								<el-button type="primary" size="medium" >保存</el-button>
							</div>
							<div class="card-title">备注</div>
							
						</div>
						<div class="text-editor">
					<quill-editor :value="textEditorContent" :maxSize="10240"></quill-editor>
				</div>
					
				</div>
						
					</el-card>
				</div>
				
			</el-tab-pane>
				
			</el-tabs>
	</div>
</template>

<script>
	import quillEditor from "@/components/form/quillEditor.vue";
export default {
	 data(){
 	return {
 		activeName: "first",
textEditorContent: "",
 	}
 },
 methods: {
      //点击标签页触发事件
      handleClick(tab, event) {
        //   console.log(tab, event);
      }
    },
    components: {
    "quill-editor": quillEditor
},
}
</script>

<style>
table{
	width: 100%;
	background:#F4F3F3;
	border-collapse:collapse;
}
table tr{
	border-bottom:1px solid #D8D8D8;
}
table tr th{
	height: 40px;
	text-align:left;
	padding-left: 20px;
}
table tr td{
	height: 40px;
	text-align:left;
	padding-left: 20px;
	background: white;
	
}
.text-editor .ql-editor {
  height: 300px;
}
</style>
