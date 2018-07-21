<template>
	<div>
		<el-tabs v-model="activeName" @tab-click="handleClick">
			
			<el-tab-pane label="资产负债表同期数据对比" name="first">
				<div>
					<el-card class="box-card" shadow='nevner'>
						
						<div slot="header" class="clearfix">
							<div class="card-right-wrap">
								选择时间：
							<el-date-picker v-model="value4" type="month" placeholder="选择月"></el-date-picker>
							</div>
							<div class="card-title">资产负债表</div>
						</div>
						
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
						<tr><th>资产总计</th></tr>
						<tr><td style="color:#3DA3FF ;" colspan='6'>1、流动资产总计</td></tr>
						<tr><td>货币资金</td><td>{{form.hbzj}}</td><td>{{form.hbzj}}</td><td>{{form.hbzj}}</td><td>{{form.hbzj}}</td><td>{{form.hbzj}}</td></tr>
						<tr><td>应收票据</td><td>{{form.yspj1}}</td><td>{{form.yspj1}}</td><td>{{form.yspj1}}</td><td>{{form.yspj1}}</td><td>{{form.yspj1}}</td></tr>
						<tr><td>应收票据</td><td>{{form.yspj2}}</td><td>{{form.yspj2}}</td><td>{{form.yspj2}}</td><td>{{form.yspj2}}</td><td>{{form.yspj2}}</td></tr>
						<tr><td>应收账款</td><td>{{form.yszk1}}</td><td>{{form.yszk1}}</td><td>{{form.yszk1}}</td><td>{{form.yszk1}}</td><td>{{form.yszk1}}</td></tr>
						<tr><td>预付账款</td><td>{{form.yfzk1}}</td><td>{{form.yfzk1}}</td><td>{{form.yfzk1}}</td><td>{{form.yfzk1}}</td><td>{{form.yfzk1}}</td></tr>
						<tr><td>其他应收账款</td><td>{{form.qtyszk}}</td><td>{{form.qtyszk}}</td><td>{{form.qtyszk}}</td><td>{{form.qtyszk}}</td><td>{{form.qtyszk}}</td></tr>
						<tr><td>存货</td><td>{{form.ch}}</td><td>{{form.ch}}</td><td>{{form.ch}}</td><td>{{form.ch}}</td><td>{{form.ch}}</td></tr>
						<tr><td>其他流动资产</td><td>{{form.qtldzc}}</td><td>{{form.qtldzc}}</td><td>{{form.qtldzc}}</td><td>{{form.qtldzc}}</td><td>{{form.qtldzc}}</td></tr>
						<tr><td style="color:#3DA3FF ;" colspan='6'>2、非流动资产合计</td></tr>
						<tr><td>长期应收款</td><td>{{form.cqysk}}</td><td>{{form.cqysk}}</td><td>{{form.cqysk}}</td><td>{{form.cqysk}}</td><td>{{form.cqysk}}</td></tr>
						<tr><td>长期股权投资</td><td>{{form.cqgqtz}}</td><td>{{form.cqgqtz}}</td><td>{{form.cqgqtz}}</td><td>{{form.cqgqtz}}</td><td>{{form.cqgqtz}}</td></tr>
						<tr><td>固定资产</td><td>{{form.gdzc}}</td><td>{{form.gdzc}}</td><td>{{form.gdzc}}</td><td>{{form.gdzc}}</td><td>{{form.gdzc}}</td></tr>
						<tr><td>在建工程</td><td>{{form.zjgc}}</td><td>{{form.zjgc}}</td><td>{{form.zjgc}}</td><td>{{form.zjgc}}</td><td>{{form.zjgc}}</td></tr>
						<tr><td>固定资产清理</td><td>{{form.gdzcql}}</td><td>{{form.gdzcql}}</td><td>{{form.gdzcql}}</td><td>{{form.gdzcql}}</td><td>{{form.gdzcql}}</td></tr>
						<tr><td>无形资产</td><td>{{form.wxzc}}</td><td>{{form.wxzc}}</td><td>{{form.wxzc}}</td><td>{{form.wxzc}}</td><td>{{form.wxzc}}</td></tr>
						<tr><td>递延所得税资产</td><td>{{form.dysdszc}}</td><td>{{form.dysdszc}}</td><td>{{form.dysdszc}}</td><td>{{form.dysdszc}}</td><td>{{form.dysdszc}}</td></tr>
						<tr><td>其他非流动资产</td><td>{{form.qtfldzc}}</td><td>{{form.qtfldzc}}</td><td>{{form.qtfldzc}}</td><td>{{form.qtfldzc}}</td><td>{{form.qtfldzc}}</td></tr>
						</table>
				<table lay-skin="line" style="margin-top: 20px;">
						<tr><th>负债合计</th></tr>
						<tr><td style="color:#3DA3FF ;" colspan='6'>1、流动负债合计</td></tr>
						<tr><td>短期借款</td><td>{{form.dqjk}}</td><td>{{form.dqjk}}</td><td>{{form.dqjk}}</td><td>{{form.dqjk}}</td><td>{{form.dqjk}}</td></tr>
						<tr><td>应付票据</td><td>{{form.yfpj3}}</td><td>{{form.yfpj3}}</td><td>{{form.yfpj3}}</td><td>{{form.yfpj3}}</td><td>{{form.yfpj3}}</td></tr>
						<tr><td>应收账款</td><td>{{form.yszk2}}</td><td>{{form.yszk2}}</td><td>{{form.yszk2}}</td><td>{{form.yszk2}}</td><td>{{form.yszk2}}</td></tr>
						<tr><td>预售款项</td><td>{{form.yskx}}</td><td>{{form.yskx}}</td><td>{{form.yskx}}</td><td>{{form.yskx}}</td><td>{{form.yskx}}</td></tr>
						<tr><td>应付职工薪酬</td><td>{{form.yfzgxc}}</td><td>{{form.yfzgxc}}</td><td>{{form.yfzgxc}}</td><td>{{form.yfzgxc}}</td><td>{{form.yfzgxc}}</td></tr>
						<tr><td>应付利息</td><td>{{form.yflx}}</td><td>{{form.yflx}}</td><td>{{form.yflx}}</td><td>{{form.yflx}}</td><td>{{form.yflx}}</td></tr>
						<tr><td>其他应付款</td><td>{{form.qtyfk}}</td><td>{{form.qtyfk}}</td><td>{{form.qtyfk}}</td><td>{{form.qtyfk}}</td><td>{{form.qtyfk}}</td></tr>
						<tr><td>其他流动负债</td><td>{{form.qtldfz}}</td><td>{{form.qtldfz}}</td><td>{{form.qtldfz}}</td><td>{{form.qtldfz}}</td><td>{{form.qtldfz}}</td></tr>
						<tr><td style="color:#3DA3FF ;">2、非流动负债合计</td><td>{{form.fldfzhj}}</td><td>{{form.fldfzhj}}</td><td>{{form.fldfzhj}}</td><td>{{form.fldfzhj}}</td><td>{{form.fldfzhj}}</td></tr>
						<tr><td>长期应付款</td><td>{{form.cqyfk}}</td><td>{{form.cqyfk}}</td><td>{{form.cqyfk}}</td><td>{{form.cqyfk}}</td><td>{{form.cqyfk}}</td></tr>
						<tr><td>专项应收款</td><td>{{form.zxysk}}</td><td>{{form.zxysk}}</td><td>{{form.zxysk}}</td><td>{{form.zxysk}}</td><td>{{form.zxysk}}</td></tr>
						<tr><td>预计负债</td><td>{{form.yjfz}}</td><td>{{form.yjfz}}</td><td>{{form.yjfz}}</td><td>{{form.yjfz}}</td><td>{{form.yjfz}}</td></tr>
						<tr><td>其他非流动负债</td><td>{{form.qtfldfz}}</td><td>{{form.qtfldfz}}</td><td>{{form.qtfldfz}}</td><td>{{form.qtfldfz}}</td><td>{{form.qtfldfz}}</td></tr>
						</table>
						<table lay-skin="line" style="margin-top: 20px;">
							<tr><th>所有者权益（或股东权益）合计</th></tr>
							<tr><td style="color:#3DA3FF ;">1、实缴资本（或股东）</td><td>{{form.sjzb}}</td><td>{{form.sjzb}}</td><td>{{form.sjzb}}</td><td>{{form.sjzb}}</td><td>{{form.sjzb}}</td></tr>
							<tr><td style="color:#3DA3FF ;">2、资本公积</td><td>{{form.zbgj}}</td><td>{{form.zbgj}}</td><td>{{form.zbgj}}</td><td>{{form.zbgj}}</td><td>{{form.zbgj}}</td></tr>
							<tr><td style="color:#3DA3FF ;">3、专项储备</td><td>{{form.zxcb}}</td><td>{{form.zxcb}}</td><td>{{form.zxcb}}</td><td>{{form.zxcb}}</td><td>{{form.zxcb}}</td></tr>
							<tr><td style="color:#3DA3FF ;">4、盈余公积</td><td>{{form.yygj}}</td><td>{{form.yygj}}</td><td>{{form.yygj}}</td><td>{{form.yygj}}</td><td>{{form.yygj}}</td></tr>
							<tr><td style="color:#3DA3FF ;">5、未分配利益</td><td>{{form.wfply}}</td><td>{{form.wfply}}</td><td>{{form.wfply}}</td><td>{{form.wfply}}</td><td>{{form.wfply}}</td></tr>
					</table>
					
					<div slot="header" class="clearfix">
							<div class="card-right-wrap">
								<!--<el-button type="default" size="medium">上传数据</el-button>-->
								<el-button type="primary" size="medium">保存</el-button>
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
			
			<el-tab-pane label="利润表同期数据对比" name="second">
				
				<div>
					<el-card class="box-card" shadow='nevner'>
						<div slot="header" class="clearfix">
							<div class="card-right-wrap">
								选择时间：
							<el-date-picker v-model="value4" type="month" placeholder="选择月"></el-date-picker>
							</div>
							<div class="card-title">利润表</div>
						</div>
						
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
						<tr><td style="color:#3DA3FF ;">1、流动资产总计</td><td>{{form_lr.ldzczj}}</td><td>{{form_lr.ldzczj}}</td><td>{{form_lr.ldzczj}}</td><td>{{form_lr.ldzczj}}</td><td>{{form_lr.ldzczj}}</td></tr>
						<tr><td><h4>减：营业成本</h4></td><td>{{form_lr.yycb}}</td><td>{{form_lr.yycb}}</td><td>{{form_lr.yycb}}</td><td>{{form_lr.yycb}}</td><td>{{form_lr.yycb}}</td></tr>
					    <tr><td>营业税金及附加</td><td>{{form_lr.yysjjfj}}</td><td>{{form_lr.yysjjfj}}</td><td>{{form_lr.yysjjfj}}</td><td>{{form_lr.yysjjfj}}</td><td>{{form_lr.yysjjfj}}</td></tr>
					    <tr><td>销售费用</td><td>{{form_lr.xsfy}}</td><td>{{form_lr.xsfy}}</td><td>{{form_lr.xsfy}}</td><td>{{form_lr.xsfy}}</td><td>{{form_lr.xsfy}}</td></tr>
					    <tr><td>管理费用</td><td>{{form_lr.glfy1}}</td><td>{{form_lr.glfy1}}</td><td>{{form_lr.glfy1}}</td><td>{{form_lr.glfy1}}</td><td>{{form_lr.glfy1}}</td></tr>
					    <tr><td>管理费用</td><td>{{form_lr.glfy2}}</td><td>{{form_lr.glfy2}}</td><td>{{form_lr.glfy2}}</td><td>{{form_lr.glfy2}}</td><td>{{form_lr.glfy2}}</td></tr>
					    <tr><td>资产减值损失</td><td>{{form_lr.zcjzss}}</td><td>{{form_lr.zcjzss}}</td><td>{{form_lr.zcjzss}}</td><td>{{form_lr.zcjzss}}</td><td>{{form_lr.zcjzss}}</td></tr>
					    <tr><td><h4>加：投资收益</h4></td><td>{{form_lr.tzsy}}</td><td>{{form_lr.tzsy}}</td><td>{{form_lr.tzsy}}</td><td>{{form_lr.tzsy}}</td><td>{{form_lr.tzsy}}</td></tr>
						<tr><td style="color:#3DA3FF ;">2、营业利润</td><td>{{form_lr.yylr}}</td><td>{{form_lr.yylr}}</td><td>{{form_lr.yylr}}</td><td>{{form_lr.yylr}}</td><td>{{form_lr.yylr}}</td></tr>
						<tr><td><h4>减：营业外支出</h4></td><td>{{form_lr.yywzc}}</td><td>{{form_lr.yywzc}}</td><td>{{form_lr.yywzc}}</td><td>{{form_lr.yywzc}}</td><td>{{form_lr.yywzc}}</td></tr>
						<tr><td><h4>加：营业外收入</h4></td><td>{{form_lr.yywsr}}</td><td>{{form_lr.yywsr}}</td><td>{{form_lr.yywsr}}</td><td>{{form_lr.yywsr}}</td><td>{{form_lr.yywsr}}</td></tr>
						<tr><td style="color:#3DA3FF ;">3、利润总额</td><td>{{form_lr.lrze}}</td><td>{{form_lr.lrze}}</td><td>{{form_lr.lrze}}</td><td>{{form_lr.lrze}}</td><td>{{form_lr.lrze}}</td></tr>
						<tr><td><h4>减：所得税费用</h4></td><td>{{form_lr.sdsfy}}</td><td>{{form_lr.sdsfy}}</td><td>{{form_lr.sdsfy}}</td><td>{{form_lr.sdsfy}}</td><td>{{form_lr.sdsfy}}</td></tr>
						<tr><td style="color:#3DA3FF ;">4、净利润</td><td>{{form_lr.jlr}}</td><td>{{form_lr.jlr}}</td><td>{{form_lr.jlr}}</td><td>{{form_lr.jlr}}</td><td>{{form_lr.jlr}}</td></tr>
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
			
			<el-tab-pane label="现金流量表同期数据对比" name="third">
					<div>
					<el-card class="box-card" shadow='nevner'>
						<div slot="header" class="clearfix">
							<div class="card-right-wrap">
								选择时间：
							<el-date-picker v-model="value4" type="month" placeholder="选择月"></el-date-picker>
							</div>
							<div class="card-title">现金流量表</div>
						</div>
						<!--<div slot="header" class="clearfix">
							<div class="card-right-wrap">
								<el-button type="default" size="medium">模板下载</el-button>
								<el-button type="default" size="medium">数据导入</el-button>
								<el-button @click="saveXj" type="primary" size="medium">保存</el-button>
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
						<tr><td style="color:#3DA3FF ;">1、经营活动产生的现金流量</td><td>{{form_xj.hdxjll}}</td><td></td><td></td><td></td><td></td></tr>
						<tr><td>销售商品、提供劳务收到的现金</td><td>{{form_xj.xssp}}</td><td></td><td></td><td></td><td></td></tr>
					    <tr><td>收到的税费返还</td><td>{{form_xj.sdsf}}</td><td></td><td></td><td></td><td></td></tr>
					    <tr><td>收到其他与经营活动相关的现金</td><td>{{form_xj.jyhdxj}}</td><td></td><td></td><td></td><td></td></tr>
					    <tr><td>经营活动现金入小计</td><td>{{form_xj.hdxjxj1}}</td><td></td><td></td><td></td><td></td></tr>
					    <tr><td>购买商品、接受劳务支付的现金</td><td>{{form_xj.gmzf}}</td><td></td><td></td><td></td><td></td></tr>
					    <tr><td>支付给职工以及职工支付的现金</td><td>{{form_xj.zfzg}}</td><td></td><td></td><td></td><td></td></tr>
					    <tr><td>支付的各项税费</td><td>{{form_xj.zfsf}}</td><td></td><td></td><td></td><td></td></tr>
					    <tr><td>支付其他与经营活动相关的现金</td><td>{{form_xj.zfjy}}</td><td></td><td></td><td></td><td></td></tr> 
					    <tr><td>经营活动现金流出小计</td><td>{{form_xj.hdxjxj2}}</td><td></td><td></td><td></td><td></td></tr>
					    <tr><td>经营活动产生的现金流净额</td><td>{{form_xj.hdxjje}}</td><td></td><td></td><td></td><td></td></tr>
					    
						<tr><td style="color:#3DA3FF ;">2、投资活动产生的现金流量</td><td>{{form_xj.tzhdxj}}</td><td></td><td></td><td></td><td></td></tr>
						<tr><td>收回投资收到的现金</td><td>{{form_xj.shtzxj}}</td><td></td><td></td><td></td><td></td></tr>
						<tr><td>取得投资收益收到的现金</td><td>{{form_xj.qdtzxj}}</td><td></td><td></td><td></td><td></td></tr>
						<tr><td>处置固定资产、无形资产和其他长期资产回收的现金净额</td><td>{{form_xj.czxjje}}</td><td></td><td></td><td></td><td></td></tr>
						<tr><td>处置子公司及其他营业单位收到的现金净额</td><td>{{form_xj.czyeje}}</td><td></td><td></td><td></td><td></td></tr>
						<tr><td>收到其他与投资活动相关的现金</td><td>{{form_xj.sdhdxj}}</td><td></td><td></td><td></td><td></td></tr>
						<tr><td>投资活动现金流出小计</td><td>{{form_xj.tzhdlcxj}}</td><td></td><td></td><td></td><td></td></tr>
						<tr><td>投资活动生产的现金流量净额</td><td>{{form_xj.tzhdxjje}}</td><td></td><td></td><td></td><td></td></tr>
						
						<tr><td style="color:#3DA3FF ;">3、筹资活动产生的现金流量</td><td>{{form_xj.czhdxjll}}</td><td></td><td></td><td></td><td></td></tr>
						<tr><td>吸收投资收到的现金</td><td>{{form_xj.xstzxj}}</td><td></td><td></td><td></td><td></td></tr>
						<tr><td>取得借款收到的现金</td><td>{{form_xj.qdjkxj}}</td><td></td><td></td><td></td><td></td></tr>
						<tr><td>收到其他与筹资活动相关的现金</td><td>{{form_xj.sdqtxj}}</td><td></td><td></td><td></td><td></td></tr>
						<tr><td>筹资活动现金流入小计</td><td>{{form_xj.czhdxj}}</td><td></td><td></td><td></td><td></td></tr>
						<tr><td>偿还债务支付的现金</td><td>{{form_xj.chzwxj}}</td><td></td><td></td><td></td><td></td></tr>
						<tr><td>分配股利、利润或偿付利息支付的现金</td><td>{{form_xj.fpzfxj}}</td><td></td><td></td><td></td><td></td></tr>
						<tr><td>支付其他与筹资活动有关的现金</td><td>{{form_xj.zfczxj}}</td><td></td><td></td><td></td><td></td></tr>
						<tr><td>筹资活动现金流出小计</td><td>{{form_xj.czxjxj}}</td><td></td><td></td><td></td><td></td></tr>
						<tr><td>筹资活动产生的现金流量净额</td><td>{{form_xj.czhdje}}</td><td></td><td></td><td></td><td></td></tr>
						</table>
				
					
					
					<div slot="header" class="clearfix">
							<div class="card-right-wrap">
								<!--<el-button type="default" size="medium">上传数据</el-button>-->
								<el-button type="primary" size="medium">保存</el-button>
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
 		value4: '',
activeName: "first",
textEditorContent: "",
 form: {
 	//资产负债
 	ldzczj:'',
 	hbzj:'',
	yspj1: '',
	yspj2: '',
	yszk1: '',
	yfzk1: '',
	qtyszk:'',
	ch:'',
	qtldzc:'',
			
	fldzchj:'',
	cqysk:'',
	cqgqtz:'',
	gdzc:'',
	zjgc:'',
	gdzcql:'',
	wxzc:'',
	dysdszc:'',
	qtfldzc:'',
			
	ldfzhj:'',
	dqjk:'',
	yfpj3:'',
	yszk2:'',
	yskx:'',
	yfzgxc:'',
	yflx:'',
	qtyfk:'',
	qtldfz:'',
			
	fldfzhj:'',
	cqyfk:'',
	zxysk:'',
	yjfz:'',
	qtfldfz:'',
			
	sjzb:'',
	zbgj:'',
	zxcb:'',
	yygj:'',
	wfply:'',

 },
 form_lr:{
 	//利润
	ldzczj:'',
	yycb:'',
	yysjjfj:'',
	xsfy:'',
	glfy1:'',
	glfy2:'',
	zcjzss:'',
	tzsy:'',
	yylr:'',
	yywzc:'',
	yywsr:'',
	lrze:'',
	sdsfy:'',
	jlr:'',
 },
 form_xj:{
 	//现金流量
 	hdxjll:'',
	xssp:'',
	sdsf:'',
	jyhdxj:'',
	hdxjxj1:'',
	gmzf:'',
	zfzg:'',
	zfsf:'',
	zfjy:'',
	hdxjxj2:'',
	hdxjje:'',
				
	tzhdxj:'',
	shtzxj:'',
	qdtzxj:'',
	czxjje:'',
	czyeje:'',
	sdhdxj:'',
	tzhdlcxj:'',
	tzhdxjje:'',
				
	czhdxjll:'',
	xstzxj:'',
	qdjkxj:'',
	sdqtxj:'',
	czhdxj:'',
	chzwxj:'',
	fpzfxj:'',
	zfczxj:'',
	czxjxj:'',
	czhdje:''
 },

 	}
 },
  mounted() {
     this.getZcfz();
     this.getLr();
this.getXjll();
  },
 methods: {
      //点击标签页触发事件
      handleClick(tab, event) {
        //   console.log(tab, event);
      },
      
  getZcfz:async function() {
  	 let params = {
        creditCode: sessionStorage.getItem("creditCode"),
        token: sessionStorage.getItem("token")
      };
      const res = await this.$http.post(
        "/hspt-web-api/data_entry/gsjbxx/hbxx/hbxx/list",
        params
      );
      this.form.ldzczj = res.data.resultData.data.ldzczj;
      this.form.hbzj = res.data.resultData.data.hbzj
      this.form.yspj1 = res.data.resultData.data.yspj1
      this.form.yspj2 = res.data.resultData.data.yspj2
      this.form.yszk1 = res.data.resultData.data.yszk1
      this.form.yfzk1 = res.data.resultData.data.yfzk1
      this.form.qtyszk = res.data.resultData.data.qtyszk
      this.form.ch = res.data.resultData.data.ch
      this.form.qtldzc = res.data.resultData.data.qtldzc
      this.form.fldzchj = res.data.resultData.data.fldzchj
      this.form.cqysk = res.data.resultData.data.cqysk
      this.form.cqgqtz = res.data.resultData.data.cqgqtz
      this.form.gdzc = res.data.resultData.data.gdzc
      this.form.zjgc = res.data.resultData.data.zjgc
      this.form.gdzcql = res.data.resultData.data.gdzcql
      this.form.wxzc = res.data.resultData.data.wxzc
      this.form.dysdszc = res.data.resultData.data.dysdszc
      this.form.qtfldzc = res.data.resultData.data.qtfldzc
      this.form.ldfzhj = res.data.resultData.data.ldfzhj
      this.form.dqjk = res.data.resultData.data.dqjk
      this.form.yfpj3 = res.data.resultData.data.yfpj3
      this.form.yszk2 = res.data.resultData.data.yszk2
      this.form.yskx = res.data.resultData.data.yskx
     this.form.yfzgxc=res.data.resultData.data.yfzgxc
	this.form.yflx=res.data.resultData.data.yflx
	this.form.qtyfk=res.data.resultData.data.qtyfk
	this.form.qtldfz=res.data.resultData.data.qtldfz
			
	this.form.fldfzhj=res.data.resultData.data.fldfzhj
	this.form.cqyfk=res.data.resultData.data.cqyfk
	this.form.zxysk=res.data.resultData.data.zxysk
	this.form.yjfz=res.data.resultData.data.yjfz
	this.form.qtfldfz=res.data.resultData.data.qtfldfz
			
	this.form.sjzb=res.data.resultData.data.sjzb
	this.form.zbgj=res.data.resultData.data.zbgj
	this.form.zxcb=res.data.resultData.data.zxcb
	this.form.yygj=res.data.resultData.data.yygj
	this.form.wfply=res.data.resultData.data.wfply
      
  },
  
     getLr:async function(){
   	let params = {
        creditCode: sessionStorage.getItem("creditCode"),
        token: sessionStorage.getItem("token")
      };
      const res = await this.$http.post(
        "/hspt-web-api/data_entry/cwzk/zycwsj/lr/list",
        params
      );
       
	this.form_lr.ldzczj=res.data.resultData.data.ldzczj
	this.form_lr.yycb=res.data.resultData.data.yycb
	this.form_lr.yysjjfj=res.data.resultData.data.yysjjfj
	this.form_lr.xsfy=res.data.resultData.data.xsfy
	this.form_lr.glfy1=res.data.resultData.data.glfy1
	this.form_lr.glfy2=res.data.resultData.data.glfy2
	this.form_lr.zcjzss=res.data.resultData.data.zcjzss
	this.form_lr.tzsy=res.data.resultData.data.tzsy
	this.form_lr.yylr=res.data.resultData.data.yylr
	this.form_lr.yywzc=res.data.resultData.data.yywzc
	this.form_lr.yywsr=res.data.resultData.data.yywsr
	this.form_lr.lrze=res.data.resultData.data.lrze
	this.form_lr.sdsfy=res.data.resultData.data.sdsfy
	this.form_lr.jlr=res.data.resultData.data.jlr
   },
            getXjll:async function(){
      	 	let params = {
        creditCode: sessionStorage.getItem("creditCode"),
        token: sessionStorage.getItem("token")
      };
      const res = await this.$http.post(
        "/hspt-web-api/data_entry/cwzk/zycwsj/xjll/list",
        params
      );
       //console.log(res.data.resultData)
    this.form_xj.hdxjll =res.data.resultData.data.hdxjll
	this.form_xj.xssp =res.data.resultData.data.xssp
	this.form_xj.sdsf =res.data.resultData.data.sdsf
	this.form_xj.jyhdxj =res.data.resultData.data.jyhdxj
	this.form_xj.hdxjxj1 =res.data.resultData.data.hdxjxj1
	this.form_xj.gmzf =res.data.resultData.data.gmzf
	this.form_xj.zfzg =res.data.resultData.data.zfzg
	this.form_xj.zfsf =res.data.resultData.data.zfsf
	this.form_xj.zfjy =res.data.resultData.data.zfjy
	this.form_xj.hdxjxj2 =res.data.resultData.data.hdxjxj2
	this.form_xj.hdxjje =res.data.resultData.data.hdxjje
			
	this.form_xj.tzhdxj =res.data.resultData.data.tzhdxj
	this.form_xj.shtzxj =res.data.resultData.data.shtzxj
	this.form_xj.qdtzxj =res.data.resultData.data.qdtzxj
	this.form_xj.czxjje =res.data.resultData.data.czxjje
	this.form_xj.czyeje =res.data.resultData.data.czyeje
	this.form_xj.sdhdxj =res.data.resultData.data.sdhdxj
	this.form_xj.tzhdlcxj =res.data.resultData.data.tzhdlcxj
	this.form_xj.tzhdxjje =res.data.resultData.data.tzhdxjje
				
	this.form_xj.czhdxjll =res.data.resultData.data.czhdxjll
	this.form_xj.xstzxj =res.data.resultData.data.xstzxj
	this.form_xj.qdjkxj =res.data.resultData.data.qdjkxj
	this.form_xj.sdqtxj =res.data.resultData.data.sdqtxj
	this.form_xj.czhdxj =res.data.resultData.data.czhdxj
	this.form_xj.chzwxj =res.data.resultData.data.chzwxj
	this.form_xj.fpzfxj =res.data.resultData.data.fpzfxj
	this.form_xj.zfczxj =res.data.resultData.data.zfczxj
	this.form_xj.czxjxj =res.data.resultData.data.czxjxj
	this.form_xj.czhdje =res.data.resultData.data.czhdje
      },
      
   },

   	 		components: {
    "quill-editor": quillEditor
},	
};
</script>

<style lang="scss">
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
.clearfix{
	margin-top: 30px;;
}
.text-editor {
	margin-top: 15px;
}
.text-editor .ql-editor {
  height: 300px;
}
.card-title{
	font-size: 15px;
}
$width: 55%;
.el-input__inner{
	width: $width;
}
</style>
